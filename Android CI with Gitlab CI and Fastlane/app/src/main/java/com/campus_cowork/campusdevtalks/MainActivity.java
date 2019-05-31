package com.campus_cowork.campusdevtalks;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import com.campus_cowork.campusdevtalks.dummy.SpeakerDummyContent;

public class MainActivity extends AppCompatActivity implements SpeakerFragment.OnSpeakerFragmentInteractionListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    @Override
    public void onListFragmentInteraction(SpeakerDummyContent.SpeakerItem item) {
        // nop for now TODO implement
    }
}
