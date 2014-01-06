$(document).ready(function(){

//101522050
$("#fontSizeSmall").click(function() {

	fontStyle = 1;
});

$("#fontSizeLarge").click(function() {

	fontStyle = 1.5;
});


//102525012 
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
		/*
	if ((fontSize/10) > 1.6) {
		fontStyle = 1.6;
	} else {
		fontStyle = (fontSize/10);
	}
	*/
    });
	
//102525012 
$("#11").click(function() {
	 $("#testword").css("color","black");
	 
	 colorStyle = "#000000";
	 
	 })
$("#12").click(function() {
	 $("#testword").css("color","#39DF3B");//green
	 
	 colorStyle = "#39DF3B";
	 })
$("#13").click(function() {
	 $("#testword").css("color","#1989FF");//blue
	 
	 colorStyle = "#1989FF";
	 })
	 /*
$("#14").click(function() {
	 $("#testword").css("color","white");
	 
	 colorStyle = "#white";
	 })
	 */
	 
	 
//102525012 
$("#21").click(function() {                     //Lien
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
	 
	 
//102525012 	 
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

//102525012 
$(read_window).scroll(function () {
     var scrollVal = $(this).scrollTop();
     $("span.scrollnum").text(scrollVal);
    });

	})