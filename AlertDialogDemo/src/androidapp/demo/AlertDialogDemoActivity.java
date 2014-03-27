package androidapp.demo;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.content.DialogInterface;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;

public class AlertDialogDemoActivity extends Activity {
	CharSequence[] items = { "RED", "GREEN", "BLUE" };
	boolean[] itemsChecked = new boolean [items.length];
	EditText txt;
	LinearLayout mylayout;
	int r=0,g=0,b=0;
	
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        mylayout = (LinearLayout) findViewById(R.id.mylayout);
        txt = (EditText) findViewById(R.id.txt);
        
        Button btn1 = (Button) findViewById(R.id.button1);
        btn1.setOnClickListener(new View.OnClickListener() {
        	public void onClick(View v) {
        		showDialog(0);
        		txt.setText("Hello Tanmoy!");
        	}
        });
        
        Button btn2 = (Button) findViewById(R.id.button2);
        btn2.setOnClickListener(new View.OnClickListener() {
        	public void onClick(View v) {
        		showDialog(1);
        	}
        });
    }
    
    protected Dialog onCreateDialog(int id) {
    	AlertDialog.Builder builder = new AlertDialog.Builder(this);
        switch(id) {
        case 0:
        	// do the work to define a simple Dialog
        	builder.setMessage("Are you sure you want to Exit?")
        			.setIcon(R.drawable.ic_launcher)
        			.setTitle("Exit Dialog")
        			.setCancelable(false)
        			.setPositiveButton("Yes", new DialogInterface.OnClickListener() {
        	           public void onClick(DialogInterface dialog, int id) {
        	                finish();
        	           }
        	       })
        	       .setNegativeButton("No", new DialogInterface.OnClickListener() {
        	           public void onClick(DialogInterface dialog, int id) {
        	                dialog.cancel();
        	           }
        	       });
        	return (AlertDialog) builder.create();

        case 1:
            // do the work to define a Multi-Select Dialog
        	r=g=b=0;
        	builder.setTitle("Pick a color");
        	builder.setMultiChoiceItems(items, itemsChecked, new DialogInterface.OnMultiChoiceClickListener() {
        		public void onClick(DialogInterface dialog, int which, boolean isChecked) {
        			itemsChecked[which] = isChecked;
        			//Toast.makeText(getBaseContext(), items[which] + (itemsChecked[which] ? " checked!" : " unchecked!"), Toast.LENGTH_SHORT).show();
        		}
        	});
        	builder.setNeutralButton("Ok", new DialogInterface.OnClickListener() {
 	           public void onClick(DialogInterface dialog, int id) {
 	        	  if(itemsChecked[0]) r=255; else r=0;
 	        	  if(itemsChecked[1]) g=255; else g=0;
 	        	  if(itemsChecked[2]) b=255; else b=0;
 	        	  
 	        	  mylayout.setBackgroundColor(Color.argb(255, r, g, b));
	           }
        	});
        	return (AlertDialog) builder.create();

        default:
            return null;
        }
    }
}