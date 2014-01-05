$(document).ready(function(){

$("span").click(function() {
     var cssFontSize = $("#testword").css("font-size");
     var fontSize = parseFloat(cssFontSize);
     var unit = cssFontSize.slice(-2);
     var className = $(this).attr("class");
     if ("zoomIn" == className) {
      if (fontSize <= 30) {
       fontSize += 6;
      }
     } else if ("zoomOut" == className) {
      if (fontSize >= 18) {
       fontSize -= 6;
      }
     }
     $("#testword").css("font-size", fontSize + unit); 
    });
$("#11").click(function() {
	 $("#testword").css("color","black");
	 })
$("#12").click(function() {
	 $("#testword").css("color","green");
	 })
$("#13").click(function() {
	 $("#testword").css("color","blue");
	 })
$("#14").click(function() {
	 $("#testword").css("color","white");
	 })
$("#21").click(function() {
	 $("#testword").css("background-color","black");
	 })
$("#22").click(function() {
	 $("#testword").css("background-color","green");
	 })	
$("#23").click(function() {
	 $("#testword").css("background-color","blue");
	 })
$("#24").click(function() {
	 $("#testword").css("background-color","white");
	 })	 
	 
$(read_window).scroll(function () {
     var scrollVal = $(this).scrollTop();
     $("span.scrollnum").text(scrollVal);
    });

	
	
	
	})