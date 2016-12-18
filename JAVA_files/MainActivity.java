package rkapoors.cgpacalculator;

import android.app.ListActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

public class MainActivity extends ListActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //setContentView(R.layout.activity_main);
        String[] sem = getResources().getStringArray(R.array.sem);

        // Binding resources Array to ListAdapter
        setListAdapter(new ArrayAdapter<String>(this, R.layout.activity_main,R.id.label,sem));
        Toast.makeText(MainActivity.this, "Tap the semester to check SGPA/CGPA", Toast.LENGTH_LONG).show();
    }

    @Override
    protected void onListItemClick(ListView l, View v, int position, long id) {
        super.onListItemClick(l,v,position,id);
        // selected item
        // String product = ((TextView) view).getText().toString();

        // Launching new Activity on selecting single List Item
        switch( position )
        {
            case 0:  Intent i0 = new Intent(getApplicationContext(), first.class);
                startActivity(i0);
                break;
            case 1:  Intent i1 = new Intent(getApplicationContext(), second.class);
                startActivity(i1);
                break;
            case 2:  Intent i2 = new Intent(getApplicationContext(), third.class);
                startActivity(i2);
                break;
            case 3:  Intent i3 = new Intent(getApplicationContext(), fourth.class);
                startActivity(i3);
                break;
            case 4:  Intent i4 = new Intent(getApplicationContext(), fifth.class);
                startActivity(i4);
                break;
            case 5:  Intent i5 = new Intent(getApplicationContext(), sixth.class);
                startActivity(i5);
                break;
            case 6:  Intent i6 = new Intent(getApplicationContext(), seventh.class);
                startActivity(i6);
                break;
            case 7:  Intent i7 = new Intent(getApplicationContext(), eighth.class);
                startActivity(i7);
                break;
        }

        // sending data to new activity
        //i.putExtra("product", product);
        //startActivity(i);

    }

}
