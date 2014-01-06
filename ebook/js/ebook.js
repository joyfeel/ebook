//under her is indexedDB.js
// variable which will hold the database connection
var db;

function initializeDB() {
	if (window.indexedDB) {
	  console.log("IndexedDB support is there");
	}
	else {
	   alert("Indexed DB is not supported. Where are you trying to run this ? ");
	}
 
	// open the database
	// 1st parameter : Database name. We are using the name 'notesdb'
	// 2nd parameter is the version of the database.
	var request = indexedDB.open('notesdb', 1);
	
	request.onsuccess = function (e) {
	  // e.target.result has the connection to the database
	  db = e.target.result;
	  //Alternately, if you want - you can retrieve all the items
	}
	 
	request.onerror = function (e) {
	   console.log(e);
	};
	 
	// this will fire when the version of the database changes
	// We can only create Object stores in a versionchange transaction.
	request.onupgradeneeded = function (e) {
	   // e.target.result holds the connection to database
	   db = e.target.result;
	   
	   if (db.objectStoreNames.contains("notes")) {
	     db.deleteObjectStore("notes");
	   }
		
	   // create a store named 'notes'
	   // 1st parameter is the store name
	   // 2nd parameter is the key field that we can specify here. Here we have opted for autoIncrement but it could be your
	   // own provided value also.
	   var objectStore = db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
	   
	   console.log("Object Store has been created");
	};
}	

function listContents(storagename) {
        //Clear up the list first
        var storage = navigator.getDeviceStorage(storagename);
		
		if (!storage) {
			return false;
		}

		var request = storage.enumerate();
		request.onsuccess = function() {
			
			var file = this.result;
			
			if (file != null) {
				var url = URL.createObjectURL(file);

				globalFileName.push (file.name);
				globalPathName.push (url);

				this.done = false;
			}
			else {
			    this.done = true;
			}
 
			if (!this.done) {
		        this.continue();
			}
		};
		
		
	Monocle.Events.listen(window, 'click', function () {
		if (boolArray[0] == true)
			path = globalPathName[0];
		else if (boolArray[1] == true) 
			path = globalPathName[1];
		else if (boolArray[2] == true) 
			path = globalPathName[2];
	 
		var obj = null;

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

				for (var i = 0 , len = unzipper.entries.length; i < len ; i++) {
					content.push(decodeURIComponent(escape(unzipper.entries[i].content())));
				}
            }
        }catch( err ){
           // alert( 'File not exist');
        }
	
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
	   
	   Monocle.Reader('scrubberThird', bookData, readerOptions, function (rdr) {
            window.reader1 = rdr;
            var scrubber = new Monocle.Controls.Scrubber(rdr);
            rdr.addControl(scrubber);
       });	   
	});
}

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
			content[4],
		  'component2.xhtml':
			content[5],
		  'component3.xhtml':
			content[6],
		  'component4.xhtml':
			content[7]
		}[componentId];
	  },
	  getMetaData: function(key) {
		return {
		  title: "A book",
		  creator: "Inventive Labs"
		}[key];
	  }
}
var path;
var globalFileName=[];
var globalPathName=[];
var content = [];
var boolArray=[];

$(function() {
	//Initialize the Database first
    initializeDB();
	
	$("#clearAllRecordBtn").click(function(){
		   
	   var transaction = db.transaction([ 'notes' ], 'readwrite');
	   var store = transaction.objectStore('notes');
	   
	   //Delete all the notes
	   //Alternately if you know the ID, you can use store.delete(ID) for individual item deletion
	   var request = store.clear();
	   request.onsuccess = function () {
		   $("#record-list").html("");
		   alert("All Notes have got cleared");
	   }
	   request.onerror = function (e) {
		   alert("Error while deleting notes : " + e.value);
	   };
	});

	$("#record").click(function(){
	  //Change to the tab record
	  
	  //Empty the list first
	  $("#record-list").html("");
	  //Read the notes
	  var transaction = db.transaction([ 'notes' ]);
	  var store = transaction.objectStore('notes');
	
	  // open a cursor to retrieve all items from the 'notes' store
	  store.openCursor().onsuccess = function (e) {
		  var cursor = e.target.result;
		  if (cursor) {
			var value = cursor.value;
			var noteElement = $("<div data-role='collapsible' data-mini='true'/>");
			var h3NoteTitle = $("<h3/>").text(value.title);
			
			noteElement.append(h3NoteTitle);	
			$("#record-list").append(noteElement);		 
			// move to the next item in the cursor
			cursor.continue();
		  }
		  $('div[data-role=collapsible]').collapsible({refresh:true});
		};
	});

	//$('.readerInfo:visible').hide();
	
    $('ul#tabs li a').click(function() {
		var index = $('ul#tabs li a').index(this);
		$('.readerInfo:visible').hide();
		
		$('.reader').hide();
		//$('.readerInfo:visible').hide();
		
		$(".readerInfo:eq("+index+")").show();
		
		//$(".readerInfo").show();
		
		$("#file1").show();
		$("#file2").show();
		$("#file3").show();
		
		//return false; 
	});

	 
	$('#file1').click (function () {
		$('#file1').hide();    
		$('#file2').hide();
		$('#file3').hide();
		
		$("#scrubberFirst").show();    boolArray[0] = true;
		$("#scrubberSecond").hide();   boolArray[1] = false; 
		$("#scrubberThird").hide();	   boolArray[2] = false; 
		listContents('sdcard');
		//write record for file1
		recordFile = globalFileName[0];

		var transaction = db.transaction([ 'notes' ], 'readwrite');
		var value = {};
		value.title = recordFile;
		var store = transaction.objectStore('notes');
		var request = store.add(value);
		request.onsuccess = function (e) {
		    //alert("Your note has been saved");
		};
		request.onerror = function (e) {
		  //alert("Error in saving the note. Reason : " + e.value);
		}
    });
	
	 $('#file2').click (function () {
		boolArray[0] = false;
		boolArray[1] = true; 
		boolArray[2] = false; 
		$('#file1').hide();
		$('#file2').hide();
		$('#file3').hide();
		
		$("#scrubberFirst").hide();	  
		$("#scrubberSecond").show();   
		$("#scrubberThird").hide();	  
		
		//write record for file2
		recordFile = globalFileName[1];

		var transaction = db.transaction([ 'notes' ], 'readwrite');
		var value = {};
		value.title = recordFile;
		var store = transaction.objectStore('notes');
		var request = store.add(value);
		request.onsuccess = function (e) {
		    //alert("Your note has been saved");
		};
		request.onerror = function (e) {
		  //alert("Error in saving the note. Reason : " + e.value);
		}
	 });	

	 $('#file3').click (function () {
	 	boolArray[0] = false;
		boolArray[1] = false; 
		boolArray[2] = true;
		
		$('#file1').hide();
		$('#file2').hide();
		$('#file3').hide();

		$("#scrubberFirst").hide();	  
		$("#scrubberSecond").hide();  
		$("#scrubberThird").show();	  

		//write record for file3
		recordFile = globalFileName[2];

		var transaction = db.transaction([ 'notes' ], 'readwrite');
		var value = {};
		value.title = recordFile;
		var store = transaction.objectStore('notes');
		var request = store.add(value);
		request.onsuccess = function (e) {
		    //alert("Your note has been saved");
		};
		request.onerror = function (e) {
		  //alert("Error in saving the note. Reason : " + e.value);
		}
	 });
	 
	 listContents('sdcard');
	$("#browseSDCard").click(function(){
		listContents('sdcard');
		
		$('#file1').text (globalFileName[0]);
		$('#file2').text (globalFileName[1]);
		$('#file3').text (globalFileName[2]);
	});
	
});
