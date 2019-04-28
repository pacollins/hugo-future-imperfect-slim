(function($) {

	$('table tr td:first-child').on('click touch', function() {
	  $(this).parent().toggleClass('active');
	  $(this).parent().siblings().removeClass('active');
	})

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
