// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

(function() {
  var tableRows = document.querySelectorAll('tr');
  for (let i = 0; i < tableRows.length; i++) {
    tableRows[i].onclick = function() {
      var c = 0;
      while (c < tableRows.length) {
        if (this == tableRows[c]) {
          tableRows[c++].classList.toggle('active');
        } else {
          tableRows[c++].classList.remove('active');
        }
      }
    };
  }
}());

// Place any jQuery/helper plugins in here.

(function($) {

  var tables = document.getElementsByTagName('table');
  for (i = 0; i < tables.length; i++) {
    var headers = tables[i].getElementsByTagName('th'),
      rows = tables[i].getElementsByTagName('tr'),
      header = [];
    for (h = 0; h < headers.length; h++) {
      header.push(headers[h].textContent);
    }
    for (r = 0; r < rows.length; r++) {
      var cells = rows[r].getElementsByTagName('td');
      for (c = 0; c < cells.length; c++) {
        if (cells[c].getAttribute('data-header') == undefined && header[c] !== undefined) {
          cells[c].setAttribute('data-header', header[c]);
        }
        if (cells[c].innerHTML.trim() == 'Yes') {
          cells[c].innerHTML = '<i class="fa fa-check" aria-hidden="true" style="color:green"></i>';
        }
        if (cells[c].innerHTML.trim() == 'Free') {
          cells[c].innerHTML = '<i class="fa fa-check" aria-hidden="true" style="color:green"></i>';
        }
        if (cells[c].innerHTML.trim() == 'No') {
          cells[c].innerHTML = '<i class="fa fa-times" aria-hidden="true" style="color:red"></i>';
        }
      }
    }
  }

})(jQuery);
