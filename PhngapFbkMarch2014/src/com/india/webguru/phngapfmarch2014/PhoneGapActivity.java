package com.india.webguru.phngapfmarch2014;

import android.os.Bundle;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;

import org.apache.cordova.*;





public class PhoneGapActivity extends DroidGap {
	
	private static AlertDialog.Builder alertDialogBuilder_new;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //setContentView(R.layout.phone_gap_layout);
        super.loadUrl("file:///android_asset/www/site1/index.html");
    }

    /*
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
       
    	MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.menu, menu);
        return true;
    }
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if(item.getTitle().toString().equals("Exit")) 
        {
            goExit();
        }
        return true;
    }
    
    public void goExit()
    {
    	//--------------------confirmation--------------------------------
    			alertDialogBuilder_new = new AlertDialog.Builder(this);
    			alertDialogBuilder_new.setTitle("Confirmation");
    			alertDialogBuilder_new.setMessage("R you sure");
    			alertDialogBuilder_new.setCancelable(false);
    		 
    				alertDialogBuilder_new.setPositiveButton("Ok",new DialogInterface.OnClickListener() {
    					public void onClick(DialogInterface dialog,int id) 
    					{						 
    						finish();
    					}
    				  });
    				
    				alertDialogBuilder_new.setNegativeButton("Cancel",new DialogInterface.OnClickListener() {
    					public void onClick(DialogInterface dialog,int id) {
    					
    						dialog.cancel();
    						
    						
    					}
    				}); 
    				 			 
    		
    				alertDialogBuilder_new.show();

    			 
		
    }
    */
}
