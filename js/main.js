function main() {
  
  $('.roles').hide();
  
  $('.roles').on('click', function() {
		$(this).next().slideToggle(400);
    $(this).toggleClass('active');
	});
}

$(document).ready(main);