function listContents(storagename) {
 
        //Clear up the list first
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
   
   
}
$(document).ready(function(){
 
$("#browseSDCard").click(function(){
listContents('sdcard');
});
$("#browseVideos").click(function(){
listContents('videos');
});
$("#browseMusic").click(function(){
listContents('music');
});
$("#browsePictures").click(function(){
listContents('pictures');
});
 
});
