
        var bookData = {
          getComponents: function () {
            return [
              'component1.xhtml',
              'component2.xhtml',
              'component3.xhtml',
              'component4.xhtml'
            ];
          },
          getContents: function () {
            return [
              {
                title: "Chapter 1",
                src: "component1.xhtml"
              },
              {
                title: "Chapter 2",
                src: "component3.xhtml#chapter-2"
              }
            ]
          },
          getComponent: function (componentId) {
            return {
              'component1.xhtml':
                test,
              'component2.xhtml':
                '<p>Chapter 1 continued.</p>',
              'component3.xhtml':
                '<p>Chapter 1 continued again.</p>' +
                '<h1 id="chapter-2">Chapter 2</h1>' +
                '<p>Hello from the second chapter.</p>',
              'component4.xhtml':
                '<p>THE END.</p>'
            }[componentId];
          },
          getMetaData: function(key) {
            return {
              title: "A book",
              creator: "Inventive Labs"
            }[key];
          }
        }

        // Initialize the reader element.
		/*
        Monocle.Reader('reader', bookData, {}, function (reader) {
          reader.moveTo({ page: 1 });
        });
		*/

var test;

$(function() {
	//$('.readerInfo:visible').hide();
	
    $('ul#tabs li a').click(function() {
<<<<<<< HEAD
		var index = $('ul#tabs li a').index(this);
		$('.readerInfo:visible').hide();
		
		$('.reader').hide();
		//$('.readerInfo:visible').hide();
		
		$(".readerInfo:eq("+index+")").show();
		
		//$(".readerInfo").show();
		
		$("#file1").show();
		$("#file2").show();
		
		//return false; 
	});
	
	//Monocle.Events.listen(window, 'load', initFn);
	
	Monocle.Events.listen(window, 'load', function () {
		var path = "epub/10F1.epub";
	
		var parser = new DOMParser();
		var xmlDoc = null ; 
		var obj = null;

		//Monocle.Events.listen(window, 'load', initFn2);
		var ajReq = new XMLHttpRequest();
		 try{
=======
                var index = $('ul#tabs li a').index(this);
                $('.tab:visible').hide();
                $(".tab:eq("+index+")").show();
                return false;
        });
        
        $('#id1').click (function () {
                var path = "epub/test.epub";

                var ajReq = new XMLHttpRequest();
                 try{
>>>>>>> origin/fileList
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

<<<<<<< HEAD
				unzipper = null;
				unzipper = Zip;
				unzipper.Archive( out_binary );
				
				var content = [];
				//var content[unzipper.entries.length];
				for (var i = 0 , len = unzipper.entries.length; i < len ; i++) {
					content.push(decodeURIComponent(escape(unzipper.entries[i].content())));
				}
					

				test = content[4];
=======
                                unzipper = null;
                                unzipper = Zip;
                                unzipper.Archive( out_binary );
                                for (var i = 0 , len = unzipper.entries.length; i < len ; i++)
                                        unzipper.entries[i].content();
                                $(this).text (unzipper.entries[3].content());
                                $("#id2").text (unzipper.entries[4].content());
                                $("#id3").text (unzipper.entries[5].content());
>>>>>>> origin/fileList
            }
        }catch( err ){
            alert( 'File not exist');
        }
<<<<<<< HEAD
	
		var readerOptions = {
			panels: Monocle.Panels.Magic
		};
		
		Monocle.Reader('scrubberFirst', bookData, readerOptions, function (rdr) {
            window.reader1 = rdr;
            var scrubber = new Monocle.Controls.Scrubber(rdr);
            rdr.addControl(scrubber);
       });
	   
	   Monocle.Reader('scrubberSecond', bookData, readerOptions, function (rdr) {
            window.reader1 = rdr;
            var scrubber = new Monocle.Controls.Scrubber(rdr);
            rdr.addControl(scrubber);
       });
	   
	});
	 
	$('#file1').click (function () {
		$('#file1').hide();
		$('#file2').hide();
		
		$("#scrubberFirst").show();
		$("#scrubberSecond").hide();
    });
	
	 $('#file2').click (function () {
		$('#file1').hide();
		$('#file2').hide();
		
		$("#scrubberSecond").show();
		$("#scrubberFirst").hide();		
	 });	
	
});
=======
                
    });
});
>>>>>>> origin/fileList
