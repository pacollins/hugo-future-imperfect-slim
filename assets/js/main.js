var initPhotoSwipeFromDOM = function(gallerySelector) {
  var images = document.querySelectorAll('.content-body .gallery a');
  for (i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = images[i].getAttribute('href');
    images[i].setAttribute("data-size", img.width+'x'+img.height);
  }
  // parse slide data (url, title, size ...) from DOM elements
  // (children of gallerySelector)
  var parseThumbnailElements = function(el) {
    var thumbElements = el.querySelectorAll('.gallery'),
        numNodes = thumbElements.length,
        items = [],
        figureEl,
        linkEl,
        size,
        item;

    for(var i = 0; i < numNodes; i++) {

      figureEl = thumbElements[i]; // <figure> element
      // include only element nodes
      if(figureEl.nodeType !== 1) {
        continue;
      }

      linkEl = figureEl.children[0]; // <a> element

      size = linkEl.getAttribute('data-size').split('x');

      // create slide object
      item = {
        src: linkEl.getAttribute('href'),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10)
      };



      if(figureEl.children.length > 1) {
        // <figcaption> content
        item.title = figureEl.children[1].innerHTML;
      }

      if(linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute('src');
      }

      item.el = figureEl; // save link to element for getThumbBoundsFn
      items.push(item);
    }

    return items;
  };

  // find nearest parent element
  var closest = function closest(el, fn) {
    return el && ( fn(el) ? el : closest(el.parentNode, fn) );
  };

  // triggers when user clicks on thumbnail
  var onThumbnailsClick = function(e) {
    e = e || window.event;

    var eTarget = e.target || e.srcElement;

    // find root element of slide
    var clickedListItem = closest(eTarget, function(el) {
      return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
    });

    if(!clickedListItem) {
      return;
    }

    // find index of clicked item by looping through all child nodes
    // alternatively, you may define index via data- attribute
    var clickedGallery = clickedListItem.parentNode,
        childNodes = clickedListItem.parentNode.querySelectorAll('figure'),
        numChildNodes = childNodes.length,
        nodeIndex = 0,
        index;

    for (var i = 0; i < numChildNodes; i++) {
      if(childNodes[i].nodeType !== 1) {
        continue;
      }

      if(childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }



    if(index >= 0) {
      // open PhotoSwipe if valid index found
      openPhotoSwipe( index, clickedGallery );
    }
    return false;
  };

  // parse picture index and gallery index from URL (#&pid=1&gid=2)
  var photoswipeParseHash = function() {
    var hash = window.location.hash.substring(1),
    params = {};

    if(hash.length < 5) {
      return params;
    }

    var vars = hash.split('&');
    for (var i = 0; i < vars.length; i++) {
      if(!vars[i]) {
        continue;
      }
      var pair = vars[i].split('=');
      if(pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }

    if(params.gid) {
      params.gid = parseInt(params.gid, 10);
    }

    return params;
  };

  var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
    var pswpElement = document.querySelectorAll('.pswp')[0],
        gallery,
        options,
        items;

    items = parseThumbnailElements(galleryElement);

    // define options (if needed)
    options = {

      // define gallery index (for URL)
      galleryUID: galleryElement.getAttribute('data-pswp-uid'),

      getThumbBoundsFn: function(index) {
        // See Options -> getThumbBoundsFn section of documentation for more info
        var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
            rect = thumbnail.getBoundingClientRect();

        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
      }
    };

    // PhotoSwipe opened from URL
    if(fromURL) {
      if(options.galleryPIDs) {
        // parse real index when custom PIDs are used
        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
        for(var j = 0; j < items.length; j++) {
          if(items[j].pid == index) {
              options.index = j;
              break;
            }
        }
      } else {
        // in URL indexes start from 1
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    }

    // exit if index not found
    if( isNaN(options.index) ) {
      return;
    }

    if(disableAnimation) {
      options.showAnimationDuration = 0;
    }

    // Pass data to PhotoSwipe and initialize it
    gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

  // loop through all gallery elements and bind events
  var galleryElements = document.querySelectorAll( gallerySelector );

  for(var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute('data-pswp-uid', i+1);
    galleryElements[i].onclick = onThumbnailsClick;
  }

  // Parse URL and open gallery if it contains #&pid=3&gid=1
  var hashData = photoswipeParseHash();
  if(hashData.pid && hashData.gid) {
    openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
  }
};

// execute above function
initPhotoSwipeFromDOM('.content-body');

const menus = [
  { button: "search-button", menu: "search" },
  { button: "lang-button", menu: "lang-menu" },
  { button: "share-button", menu: "share-menu"},
  { button: "nav-button", menu: "site-nav"}
];

function closeMenus(openMenu) {
  for (const {button, menu} of menus) {
    if (menu != openMenu) {
      document.getElementById(menu).classList.remove('active');
    }
  }
}

for (const {button, menu} of menus) {
  var buttons = document.getElementsByClassName(button);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
      var toggles = document.querySelectorAll('.toggle:not(.nav-button)');
      var menuClasses = document.getElementById(menu).classList;
      var wrapperClasses = document.getElementById("wrapper").classList;
      if (menuClasses.contains('active')) {
        menuClasses.remove('active');
        wrapperClasses.remove('overlay');
        for (let t = 0; t < toggles.length; t++) {
          toggles[t].classList.remove('active');
          toggles[t].classList.remove('inactive');
        }
      } else {
        menuClasses.add('active');
        wrapperClasses.add('overlay');
        for (let t = 0; t < toggles.length; t++) {
          if (toggles[t].classList.contains(button)) {
            toggles[t].classList.remove('inactive');
            toggles[t].classList.add('active');
          } else {
            toggles[t].classList.remove('active');
            toggles[t].classList.add('inactive');
          }
        }
        if (menu == "search") {
          document.getElementById("search-input").focus();
        }
      }
      closeMenus(menu);
    };
  }
}


document.onclick = function(e){
  var path = e.composedPath().includes(document.getElementById('site-header'));
  if (!path) {
    document.getElementById("wrapper").classList.remove('overlay');
    closeMenus();
  }
};

document.addEventListener("keydown", (e) => {
  var wrapper = document.getElementById("wrapper").classList;
  if (e.key === "Escape" && wrapper.contains("overlay")) {
    wrapper.remove('overlay');
    closeMenus();
  }
});

var backToTop = document.getElementById("back-to-top");

window.onscroll = function () {
  if (window.scrollY == 0) {
    backToTop.classList.remove('active');
  } else {
    backToTop.classList.add('active');
  }
};

backToTop.onclick = function(){
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
};

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
  var pathArgs = ["{{ replaceRE "/$" "" .Site.BaseURL }}", "index.json"];
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
        this.field('timestamp');
        this.field('author');
        this.field('readtime');
        this.field('date');
        this.field('description');
        this.field('body');

        // Loop through all the items in the JSON file and add them to the index
        // so they can be searched.
        documents.forEach(function(doc) {
            this.add(doc);
            resultDetails[doc.ref] = {
              'title': doc.title,
              'timestamp': doc.timestamp,
              'author': doc.author,
              'readtime': doc.readtime,
              'date': doc.date,
              'description': doc.description,
            };
        }, this);
      });
    } else {
      $searchResults.innerHTML = '<article class="content post"><div class="content-body"><p>Error loading search results...</p></div></article>';
    }
  };

  request.onerror = function() {
    $searchResults.innerHTML = '<article class="content post"><div class="content-body"><p>Error loading search results...</p></div></article>';
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
  };
}

function renderSearchResults(results) {
  // Create a list of results
  var container = document.createElement('div');
  if (results.length > 0) {
    results.forEach(function(result) {
      // Create result item
      container.innerHTML += '<article class="content post"><a href="' + result.ref + '"><header class="content-header"><div class="content-summary"><h1 class="content-title">' + resultDetails[result.ref].title + '</h1><p class="content-description">' + resultDetails[result.ref].description + '</p></div><div class="content-meta"><time class="content-date" datetime="' + resultDetails[result.ref].timestamp + '">' + resultDetails[result.ref].date + '</time><p class="post-author">' + resultDetails[result.ref].author + '</p><p class="post-time">' + resultDetails[result.ref].readtime + '</p></div></header></a></article>';
    });

    // Remove any existing content so results aren't continually added as the user types
    while ($searchResults.hasChildNodes()) {
      $searchResults.removeChild(
        $searchResults.lastChild
      );
    }
  } else {
    $searchResults.innerHTML = '<article class="content post"><div class="content-body"><p>Results Not Found...</p></div></article>';
  }

  // Render the list
  $searchResults.innerHTML = container.innerHTML;
}

function search(query) {
  return idx.search(query);
}
