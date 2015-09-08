

$('#circle').on('click', function(){
	$('#circle').hide();
	$('#img').fadeIn(2000).slideDown(2000).fadeOut(2000);
	$('#img2').delay(4000).fadeIn('slow').animate({
		marginTop : "100%"
		}, 2000, function(){
			$(this).fadeOut(2000);
		});
	$('#img3').delay(6000).fadeIn(2000).animate({
		marginLeft: "+=100%"
		}, 2000, function(){
			$(this).fadeOut(2000);
		});
	$('#img4').delay(10000).fadeIn(2000).animate({
		marginRight: "100%"
		}, 2000, function(){
			$(this).fadeOut(2000);
		});
	$('#img5').delay(12000).fadeIn(2000).animate({
		marginLeft: "+=100%"
		}, 2000, function(){
			$(this).fadeOut(2000);
		});
	$('#circle').delay(18000).fadeIn(200);
});
