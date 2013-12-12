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
});