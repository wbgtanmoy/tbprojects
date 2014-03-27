
var user = [];

//Detect when Facebook tells us that the user's session has been returned
function authUser() {
	FB.Event.subscribe('auth.statusChange', handleStatusChange);
  
}

function handleStatusChange(session)  {
    
    	alert("FB Session Status:"+session.status);
		if(session.status=="connected")
		{
			alert("LOGIN: User logged in with facebook");
			
		}
		

	    if (session.authResponse) 
	    {
	    	
	        //Fetch user's id, name, and picture
	    	FB.api('/me', { fields: 'id,name, picture,email' },
	        		
			     function(response) {
			          if (!response.error) 
			         	{
			            user = response;
			            alert("Facebook User:  Name:"+user.name+"email:"+user.email);
			            localStorage.isUserFBLoggedIn='y';
			      		localStorage.user_name=user.name;
			      		
			      		window.location.href="specs.html";
			            }
			          else
			        	{
			        	  alert("Fetch data error");
			        	}
	                   
	            });//response
	    } 
	    else 
	    {
	    	alert("Facebook : FB user not logged in");
	    	localStorage.isUserLoggedIn=null;
	    }
    
    
}//handlestatuschange

//Prompt the user to login and ask for the 'email' permission
function promptLogin() {
  FB.login(null, {scope: 'email,user_photos,friends_photos,publish_stream,publish_actions,user_likes'} );
 
}

//This will prompt the user to grant you acess to their Facebook Likes

function promptExtendedPermissions() {
  FB.login(function() {
      }, {scope: 'read_stream,publish_stream,publish_actions,user_likes,friends_likes,offline_access'});
}



function logout() {
  FB.logout(function(response) {
	FB.Auth.setAuthResponse(null, 'unknown');
    alert("Logging out ...")
    window.location.reload();
    updateAuthElements();
    
  });
}