

$(document).bind("pageinit", function () {
		$.mobile.ajaxEnabled=false;
		$.mobile.pushStateEnabled=false;
		$.mobile.hashListeningEnabled = false;
		// Wait for Cordova to load
		document.addEventListener("deviceready", onDeviceReady, false);
		
	});
	
	// Cordova is ready
	function onDeviceReady() {
		
		
		
		
	}//deviceready
	
	// Handling backbutton
	function backKeyDown() 
	{   
        if($.mobile.activePage.attr('id') == 'index')
        { 
        	    alert("Press Home Key to exit");
              	return false;
        } 
    }
	
	
	
