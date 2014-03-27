
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
		
			
			//-------------------------------facebook login------------------
		try {
    		  
    	    $.mobile.showPageLoadingMsg("a","Loading Facebook Data");
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
    	  
    	  
    	  

	$('#logout').on('click',function(e){

		
			navigator.notification.confirm(
					'Sure to Logout ?',  	// message
					doLogout,         		// callback
					'Logout',        		// title
					'Yes,No'  				// buttonName
			);
		


	});// end click

	function doLogout(button) 
	{
        
		if(button=="1")
		{
		   logout();
		 }
	}
	
		
	}//deviceready
	
	
	
	