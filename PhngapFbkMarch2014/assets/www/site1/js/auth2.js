
var user = [];
var friend_list=new Array(25);
var photo_list=new Array(25);

//Detect when Facebook tells us that the user's session has been returned
function authUser() {
	FB.Event.subscribe('auth.statusChange', handleStatusChange);
  
}

function handleStatusChange(session)  {
    
    	//alert("SPECS:"+session.status);
		if(session.status=="connected")
		{
			//alert("SPECS:User logged in with facebook");
		}
		if (session.authResponse) 
	    {
	    	
	        //Fetch user's id, name, and picture
	    	FB.api('/me', { fields: 'id,name, picture,email' },
	        		
			     function(response) {
			          if (!response.error) 
			         	{
			            user = response;
			            
			            create_friendlist(user.id);
			            create_album(user.id);
			            
			            show_resturant();
			            
			      		$('#uname').html(user.name);
			      		$('#uemail').html(user.email);
			      			if (document.getElementById('user-picture')) 
			      				{
						              $('#user-picture').show();
						              if (user.picture.data) {
						            	  
						                  document.getElementById('user-picture').src = user.picture.data.url;
						              } else {
						                  document.getElementById('user-picture').src = user.picture;
						              }
						         }
						     
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
}

	
function logout() {
  FB.logout(function(response) {
	FB.Auth.setAuthResponse(null, 'unknown');
    alert("Logging out ...")
    window.location.href="login.html";
    
  });
}

//creating friendlist

 function create_friendlist(user_id)
 {
	 var FQL_QUERY="SELECT uid,name,pic_square FROM user WHERE uid in (SELECT uid2 FROM friend where uid1 = '" + user_id + "')";
	 //var FQL_QUERY="SELECT uid,pic_square FROM user";
     
     FB.api('/fql', {q: FQL_QUERY }, function(response){
     	  
     	  if (!response.error) {
     		  alert("friends :"+ response.data.length );
     		  
     		  friend_list=new Array(response.data.length);
     		  if(response.data[0]==null) return;
     		  
     		  var flist="";
     		  
     		 for (var i = 0; i < response.data.length; i++) 
     		 	{ 
  			     friend_list[i]=new Array(2);
  			     friend_list[i][0]=response.data[i].uid;
  			     friend_list[i][1]=response.data[i].pic_square;
  			     console.log(" "+ i +") friend uid="+ friend_list[i][0] + " pic =" + friend_list[i][1] );
  			     flist=flist+ "<br>" + response.data[i].name + "Image :<img src='"+ response.data[i].pic_square +"'>";
     		 	}
     		 	
     		 	console.log(flist);
     		   $('#ufriends').html(flist);
     		   
     		   
     		alert(""+ friend_list.length + " nos Friends "+ user_id);
     	 }
     	  
     	});
	 
	 
 }
 
 
 
 //creating friendlist

 function create_album(user_id)
 {
	 
	 //var FQL_QUERY="SELECT uid,name,pic_square FROM user WHERE uid in (SELECT uid2 FROM friend where uid1 = '" + user_id + "')";
	 
	 //var FQL_QUERY="SELECT pid, src, src_big, caption, created, like_info FROM photo WHERE object_id IN (SELECT object_id FROM photo_tag WHERE subject=me())";
     
     var FQL_QUERY="SELECT pid,object_id, created, src FROM photo WHERE owner = me()";
   
   
     FB.api('/fql', {q: FQL_QUERY }, function(response){
     	  
     	  if (!response.error) {
     		  alert("photos :"+ response.data.length );
     		  
     		  photo_list=new Array(response.data.length);
     		  if(response.data[0]==null) return;
     		  
     		  var plist="";
     		  
     		 for (var i = 0; i < response.data.length; i++) 
     		 	{ 
  			     photo_list[i]=new Array(2);
  			     photo_list[i][0]=response.data[i].pid;  // aid- album id
  			     photo_list[i][1]=response.data[i].src;
  			     console.log(" "+ i +") photo id id ="+ photo_list[i][0] + " photo pic =" + photo_list[i][1] );
  			     plist=plist+ " " + response.data[i].pid + "Image :<img src='"+ response.data[i].src +"'>";
     		 	}
     		 	
     		 	console.log("$$ >"+plist);
     		   $('#ualbum').html(plist);
     		   
     		   
     		alert(""+ friend_list.length + " nos Friends "+ user_id);
     	 }
     	 else
     	 {
     	 	alert("No response for photos");
     	 }
     	  
     	});
	 
	 
 }
 
 // getting resturant
 
 function show_resturant()
 {
   
 	FB.api(
    "/search", 
    {q: 'restaurant' , type: 'place' },
    function (response) {
				      if (response && !response.error) {
				        /* handle the result */
				        
				        console.log("Resturant"+ JSON.stringify(response));
				        alert("Resturant"+ JSON.stringify(response));
				      }
   		 }
	);
	
	
 }