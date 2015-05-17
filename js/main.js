/*
//Animate down
$('#up, #down').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'up' ? $('#down') : $('#up');
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 1000);
});

//Change background color
var randomColor = function () {
	var colors = ['#A000FF', '#00B7FF', '#FF00F9', '#FF9D00', '#00CC9B'];
	$('body').each(function() {
    	$(this).css('background-color', colors[Math.floor(Math.random() * colors.length)]);
	});	
}
randomColor();
*/

	
