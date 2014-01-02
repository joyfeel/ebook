$(function() {
    $('ul#tabs li a').click(function() {
		var index = $('ul#tabs li a').index(this);
		$('.tab:visible').hide();
		$(".tab:eq("+index+")").show();
		return false; 
	});
	
	$('#id1').click (function () {
		var path = "epub/test.epub";

		var ajReq = new XMLHttpRequest();
		 try{
            ajReq.open( 'GET' , path , false );
            ajReq.overrideMimeType( 'text/plain; charset=x-user-defined' );
            ajReq.send(null);
            ajReq.overrideMimeType( 'text/plain; charset=UTF-8' );
 
            var out = ajReq.responseText || '' ;
            var out_array = [];
            for( var i=0, len=out.length, scc=String.fromCharCode ; i<len ; ++i )
                out_array[i] = scc( out.charCodeAt(i) & 0xff );
            var out_binary = out_array.join( '' );
 
            if( out_binary !== '' )
            {
                var unzipper;

				unzipper = null;
				unzipper = Zip;
				unzipper.Archive( out_binary );
				for (var i = 0 , len = unzipper.entries.length; i < len ; i++)
					unzipper.entries[i].content();
				$(this).text (unzipper.entries[3].content());
				$("#id2").text (unzipper.entries[4].content());
				$("#id3").text (unzipper.entries[5].content());
            }            
        }catch( err ){
 
            alert( 'File not exist');
 
        }
		
    });
	
	$("span").click(function() {
     var cssFontSize = $("#testword").css("font-size"); //獲取字體大小
     var fontSize = parseFloat(cssFontSize); //獲取字體大小的值
     var unit = cssFontSize.slice(-2); //獲取字體大小的單位
     var className = $(this).attr("class");
     if ("zoomIn" == className) { //放大字體
      if (fontSize <= 30) {
       fontSize += 6;
      }
     } else if ("zoomOut" == className) { //縮小字體
      if (fontSize >= 18) {
       fontSize -= 6;
      }
     }
     $("#testword").css("font-size", fontSize + unit); 
    });
	
});