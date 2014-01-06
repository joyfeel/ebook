<<<<<<< HEAD


=======
function listContents(storagename) {
		$('#results').html("");
        //Clear up the list first
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
		
		//alert (path);
	});
	
	$("#file2").click(function(){
		//TODO
		alert (globalPathName[1]);
	
	});

	
});
>>>>>>> origin/Setting_lien
