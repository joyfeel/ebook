function listContents(storagename) {
		$('#results').html("");
        //Clear up the list first
<<<<<<< HEAD
        var storage = navigator.getDeviceStorage(storagename);
		
		if (!storage) {
			alert("No storage available!");
			return false;
		}

		var request = storage.enumerate();
		request.onsuccess = function() {
			
			var file = this.result;
			
			if (file != null) {
				var url = URL.createObjectURL(file);

				globalFileName.push (file.name);
				globalPathName.push (url);
				globalPathContent.push (file);

				this.done = false;
			}
			else {
			    this.done = true;
			}
 
			if (!this.done) {
		        this.continue();
			}
		};
=======
        $('#results').html("");
        var files = navigator.getDeviceStorage(storagename);
 
        var cursor = files.enumerate();
		
		//alert (files[0]);
		var arr=[];
        cursor.onsuccess = function () {
                //alert("Got something");
                var file = this.result;
 
                if (file != null) {
                    //var imageElement = $('<img height="50" width="50">');
                    //imageElement.attr('src', window.URL.createObjectURL(file));
                    $("<p>" + file.name + file.type + "</p>").appendTo('#results');
                    //imageElement.appendTo("#results");
					//alert (file.name);
					//var path = "C:////+" + file.name;
					
					arr.push (file.name);
					
                    this.done = false;
                }
        else {
			this.done = true;
        }
 
        if (!this.done) {
                this.continue();
        }
		
		$('#id2').text (arr[0]);
		$('#id3').text (arr[1]);
		$('#id4').text (arr[2]);
		$('#id5').text (arr[3]);
		
		//$('#id3').text (arr[1]);
   }
   
   
>>>>>>> 0dcd0d62ee3d53666e3a4b45299c481bd0a07078
}

var globalFileName=[];
var globalPathName=[];
var globalPathContent=[];

$(document).ready(function(){
	$("#browseSDCard").click(function(){
		listContents('sdcard');
		$('#file1').text (globalFileName[0]);
		$('#file2').text (globalFileName[1]);
	});
	
	$("#file1").click(function(e){
		var flre = new FileReader();
		var test = flre.readAsText(globalPathContent[0]);
		
		flre.addEventListener("load",function(e) {
			$('#file1').text (e.target.result);
		});
		
		alert (globalPathName[0]);
	});
	
	$("#file2").click(function(){
		//TODO
		//alert (globalPathName[1]);
		
		//write record for file2
		recordFile = globalFileName[1];
		
		//alert(recordFile);
		
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

	$("#file3").click(function(){
		//TODO
		//alert (globalPathName[2]);
		
		//write record for file3
		recordFile = globalFileName[2];
		
		//alert(recordFile);
		
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
	
	});

    $("#file4").click(function(){
		//TODO
		//alert (globalPathName[3]);
		
		//write record for file4
		recordFile = globalFileName[3];
		
		//alert(recordFile);
		
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
	
	});

    $("#file5").click(function(){
		//TODO
		//alert (globalPathName[4]);
		
		//write record for file5
		recordFile = globalFileName[4];
		
		//alert(recordFile);
		
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
	
	});

     $("#file6").click(function(){
		//TODO
		//alert (globalPathName[5]);
		
		//write record for file6
		recordFile = globalFileName[5];
		
		//alert(recordFile);
		
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
	
	});
	
	$("#file7").click(function(){
		//TODO
		//alert (globalPathName[6]);
		
		//write record for file7
		recordFile = globalFileName[6];
		
		//alert(recordFile);
		
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
	
	});
	
	$("#file8").click(function(){
		//TODO
		//alert (globalPathName[7]);
		
		//write record for file8
		recordFile = globalFileName[7];
		
		//alert(recordFile);
		
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
	
	});
	
	$("#file9").click(function(){
		//TODO
		//alert (globalPathName[8]);
		
		//write record for file9
		recordFile = globalFileName[8];
		
		//alert(recordFile);
		
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
	
	});
    
});


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
 
<<<<<<< HEAD
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

$(document).ready(function(){

		//Initialize the Database first
       initializeDB();

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
	    
	    //clear all record list
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
		
});	
=======
});
>>>>>>> 0dcd0d62ee3d53666e3a4b45299c481bd0a07078
