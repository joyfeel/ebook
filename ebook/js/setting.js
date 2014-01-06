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
	 $("#testword").css("color","#39DF3B");//green
	 })
$("#13").click(function() {
	 $("#testword").css("color","#1989FF");//blue
	 })
$("#14").click(function() {
	 $("#testword").css("color","white");
	 })
$("#21").click(function() {
	 $("#testword").css("background","#332B33");//black
	 })
$("#22").click(function() {
	 $("#testword").css("background","#00A002");//green
	 })	
$("#23").click(function() {
	 $("#testword").css("background","#004EA0");//blue
	 })
$("#24").click(function() {
	 $("#testword").css("background","#F1F1F1");//white
	 })	 
$("#makesure").click(function() {
     var cssFontSize = $("#testword").css("font-size");
     var fontSize = parseFloat(cssFontSize);
	 var unit = cssFontSize.slice(-2);
	 $(".tab").css("font-size", fontSize + unit);
	 var color = $("#testword").css("color");
	 $(".tab").css("color",color);
	 var bcolor = $("#testword").css("background-color");
     $(".tab").css("background",bcolor);
	 })
	 
$(read_window).scroll(function () {
     var scrollVal = $(this).scrollTop();
     $("span.scrollnum").text(scrollVal);
    });

	
	
	
	})