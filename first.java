package rkapoors.cgpacalculator;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.app.Activity;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import java.math.BigDecimal;

public class first extends Activity {
    Button b;
    private String[] arrText =
            new String[]{"IMHVB","Electrical Science","Computer Progm.","Physics"
                    ,"Biology","Engg. Graphics","Computer Progm. Lab","Electrical Sci. Lab","Physics Lab"};
    private int[] regc=new int[]{3,2,2,4,3,3,1,1,1};
    private int[] record=new int[]{9,8,7,6,5,4,3,2,1};
    private String[] arrTemp;
    private String val="";
    double obtc=0;
    double totalc=20;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_first);

        arrTemp = new String[arrText.length];

        MyListAdapter myListAdapter = new MyListAdapter();
        ListView listView = (ListView) findViewById(R.id.listViewMain);
        listView.setAdapter(myListAdapter);

        b=(Button) findViewById(R.id.b1);

        b.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View arg0) {
                val="";
                obtc=0;
                for(int i=0;i<arrText.length;i++)
                {
                    val+=arrTemp[i].toUpperCase();
                }
for(int i=0;i<val.length();i++)
{
if(val.charAt(i)=='S') obtc+=regc[i]*10;
    else obtc+=regc[i]*record[(int)val.charAt(i)-65];
}
                double ans=obtc/totalc;

                BigDecimal b = new BigDecimal(ans).setScale(2,BigDecimal.ROUND_HALF_UP);
                ans=b.doubleValue();

                String anss=Double.toString(ans);

                Toast.makeText(first.this,"Your SGPA is : "+anss+"\nYour CGPA is : "+anss,Toast.LENGTH_LONG).show();
            }

        });
    }

    private class MyListAdapter extends BaseAdapter{

        @Override
        public int getCount() {
            // TODO Auto-generated method stub
            if(arrText != null && arrText.length != 0){
                return arrText.length;
            }
            return 0;
        }

        @Override
        public Object getItem(int position) {
            // TODO Auto-generated method stub
            return arrText[position];
        }

        @Override
        public long getItemId(int position) {
            // TODO Auto-generated method stub
            return position;
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {

            //ViewHolder holder = null;
            final ViewHolder holder;
            if (convertView == null) {

                holder = new ViewHolder();
                LayoutInflater inflater = first.this.getLayoutInflater();
                convertView = inflater.inflate(R.layout.listitems, null);
                holder.textView1 = (TextView) convertView.findViewById(R.id.textView1);
                holder.editText1 = (EditText) convertView.findViewById(R.id.editText1);

                convertView.setTag(holder);

            } else {

                holder = (ViewHolder) convertView.getTag();
            }

            holder.ref = position;

            holder.textView1.setText(arrText[position]);
            holder.editText1.setText(arrTemp[position]);
            holder.editText1.addTextChangedListener(new TextWatcher() {

                @Override
                public void onTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) {
                    // TODO Auto-generated method stub

                }

                @Override
                public void beforeTextChanged(CharSequence arg0, int arg1, int arg2,
                                              int arg3) {
                    // TODO Auto-generated method stub

                }

                @Override
                public void afterTextChanged(Editable arg0) {
                    // TODO Auto-generated method stub
                    arrTemp[holder.ref] = arg0.toString();
                }
            });

            //Toast.makeText(getApplicationContext(),arrTemp[2],Toast.LENGTH_LONG).show();
            return convertView;
        }

        private class ViewHolder {
            TextView textView1;
            EditText editText1;
            int ref;
        }

    }


}
