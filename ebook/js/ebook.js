$(document).ready(function() {
    $('ul#tabs li a').click(function() {
		var index = $('ul#tabs li a').index(this);
		$('.tab:visible').hide();
		$(".tab:eq("+index+")").show();
		return false; 
	});
});