
var apologies = new Array();

$(document).bind("pageinit", function () {
		$.mobile.ajaxEnabled=false;
		$.mobile.pushStateEnabled=false;
		$.mobile.hashListeningEnabled = false;
		// Wait for Cordova to load
		document.addEventListener("deviceready", onDeviceReady, false);
		
	});
	
	// Cordova is ready
	function onDeviceReady() {
		
		//alert("device is ready");
		document.addEventListener("backbutton", backKeyDown, true);
		
			//-------------------------------facebook login------------------
		try {
    		  
    		
    		
    	    $.mobile.showPageLoadingMsg("a","Verifying Facebook Login");
       	    setTimeout(function(){ $.mobile.hidePageLoadingMsg(); },3000);
    		    
        	  FB.init({
	              	appId: '510175179092350',
	              	nativeInterface: CDV.FB,
	              	status: true,
	              	cookie: true,
	              	useCachedDialogs: true
          		});
      
                   
          	  
              authUser();
             
              
			} 
		  catch (e) 
    	  { 
    		  alert(e); 
    	  }
		
	}//deviceready
	
	
	
	// Handling backbutton
	function backKeyDown() 
	{   
        if($.mobile.activePage.attr('id') == 'login')
        { 
        		alert("Press Home key to exit");
              	return false;
        } 
    }
	
	