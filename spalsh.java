package rkapoors.cgpacalculator;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
/**
 * Created by KAPOOR's on 31-05-2016.
 */

//reference from coderefer.com

public class spalsh extends Activity{
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_spalsh);
        Thread time=new Thread()
        {
            public void run()
            {
                try{
                    sleep(3500);
                }
                catch(InterruptedException e)
                {
                    e.printStackTrace();
                }
                finally{
                    Intent intent=new Intent(spalsh.this,MainActivity.class);
                    startActivity(intent);
                }
            }
        };
        time.start();
    }
    @Override
    protected void onPause()
    {
        super.onPause();
        finish();
    }

}