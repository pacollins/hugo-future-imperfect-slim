// Flyout Menu Functions
var toggles = {
  ".search-toggle": "#search-input",
  ".lang-toggle": "#lang-menu",
  ".share-toggle": "#share-menu",
  ".nav-toggle": "#site-nav-menu"
};

$.each(toggles, function(toggle, menu) {
  $(toggle).on("click", function() {
    if ($(menu).hasClass("active")) {
      $(".menu").removeClass("active");
      $("#wrapper").removeClass("overlay");
    } else {
      $("#wrapper").addClass("overlay");
      $(".menu").not($(menu + ".menu")).removeClass("active");
      $(menu).addClass("active");
      if (menu == "#search-input") {$("#search-results").toggleClass("active");}
    }
  });
});

// Click anywhere outside a flyout to close
$(document).on("click", function(e) {
  if ($(e.target).is(".lang-toggle, .lang-toggle span, #lang-menu, .share-toggle, .share-toggle i, #share-menu, .search-toggle, .search-toggle i, #search-input, #search-results .mini-post, .nav-toggle, .nav-toggle i, #site-nav") === false) {
    $(".menu").removeClass("active");
    $("#wrapper").removeClass('overlay');
  }
});

// Check to see if the window is top if not then display button
$(window).scroll(function() {
  if ($(this).scrollTop()) {
    $('#back-to-top').fadeIn();
  } else {
    $('#back-to-top').fadeOut();
  }
});

// Click event to scroll to top
$('#back-to-top').click(function() {
  $('html, body').animate({scrollTop: 0}, 1000);
  return false;
});

// Search
var idx = null;         // Lunr index
var resultDetails = []; // Will hold the data for the search results (titles and summaries)
var $searchResults;     // The element on the page holding search results
var $searchInput;       // The search box element

window.onload = function () {
  // Set up for an Ajax call to request the JSON data file that is created by
  // Hugo's build process, with the template we added above
  var request = new XMLHttpRequest();
  var query = '';

  // Get dom objects for the elements we'll be interacting with
  $searchResults = document.getElementById('search-results');
  $searchInput   = document.getElementById('search-input');

  var lang = document.documentElement.lang;
  var pathArgs = ["{{ .Site.BaseURL }}", "index.json"];
  if (lang != "{{ .Site.Language }}") {
    pathArgs.splice(1, 0, lang);
  }
  path = pathArgs.join("/");
  request.open("GET", path, true); // Request the JSON file created during build
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success response received in requesting the index.json file
      var documents = JSON.parse(request.responseText);

      // Build the index so Lunr can search it.  The `ref` field will hold the URL
      // to the page/post.  title, excerpt, and body will be fields searched.
      idx = lunr(function () {
        this.ref('ref');
        this.field('title');
        this.field('data');
        this.field('description');
        this.field('body');

        // Loop through all the items in the JSON file and add them to the index
        // so they can be searched.
        documents.forEach(function(doc) {
            this.add(doc);
            resultDetails[doc.ref] = {
              'title': doc.title,
              'date': doc.date,
              'description': doc.description,
            };
        }, this);
      });
    } else {
      $searchResults.innerHTML = '<article class="mini-post"><main><p>Error loading search results...</p></main></a></article>';
    }
  };

  request.onerror = function() {
    $searchResults.innerHTML = '<article class="mini-post"><main><p>Error loading search results...</p></main></a></article>';
  };

  // Send the request to load the JSON
  request.send();

  // Register handler for the search input field
  registerSearchHandler();
};

function registerSearchHandler() {
  $searchInput.oninput = function(event) {
    var query = event.target.value;
    var results = search(query);  // Perform the search

    // Render search results
    renderSearchResults(results);

    // Remove search results if the user empties the search phrase input field
    if ($searchInput.value == '') {
      $searchResults.innerHTML = '';
    }
  }
}

function renderSearchResults(results) {
  // Create a list of results
  var container = document.createElement('div');
  if (results.length > 0) {
    results.forEach(function(result) {
      // Create result item
      container.innerHTML += '<article class="mini-post"><a href="' + result.ref + '"><header><h2>' + resultDetails[result.ref].title + '</h2><time class="published" datetime="">' + resultDetails[result.ref].date + '</time></header><main><p>' + resultDetails[result.ref].description + '</p></main></a></article>';
    });

    // Remove any existing content so results aren't continually added as the user types
    while ($searchResults.hasChildNodes()) {
      $searchResults.removeChild(
        $searchResults.lastChild
      );
    }
  } else {
    $searchResults.innerHTML = '<article class="mini-post"><main><p>No Results Found...</p></main></a></article>';
  }

  // Render the list
  $searchResults.innerHTML = container.innerHTML;
}

function search(query) {
  return idx.search(query);
}
