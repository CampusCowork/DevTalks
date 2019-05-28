package com.campus_cowork.campusdevtalks;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.campus_cowork.campusdevtalks.dummy.SpeakerDummyContent.SpeakerItem;

import java.util.List;

/**
 * {@link RecyclerView.Adapter} that can display a {@link SpeakerItem} and makes a call to the
 * specified {@link SpeakerFragment.OnSpeakerFragmentInteractionListener}.
 */
public class SpeakerRecyclerViewAdapter extends RecyclerView.Adapter<SpeakerRecyclerViewAdapter.ViewHolder> {

    private final List<SpeakerItem> mValues;
    private final SpeakerFragment.OnSpeakerFragmentInteractionListener mListener;

    SpeakerRecyclerViewAdapter(List<SpeakerItem> items, SpeakerFragment.OnSpeakerFragmentInteractionListener listener) {
        mValues = items;
        mListener = listener;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.fragment_speaker, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull final ViewHolder holder, int position) {
        holder.mItem = mValues.get(position);
        holder.mTitleView.setText(mValues.get(position).title);
        holder.mContentView.setText(mValues.get(position).details);

        Glide.with(holder.mAvatar)
                .load(mValues.get(position).imageLink)
                .circleCrop()
                .into(holder.mAvatar);

        holder.mView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (null != mListener) {
                    // Notify the active callbacks interface (the activity, if the
                    // fragment is attached to one) that an item has been selected.
                    mListener.onListFragmentInteraction(holder.mItem);
                }
            }
        });
    }

    @Override
    public int getItemCount() {
        return mValues.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        final View mView;
        final TextView mTitleView;
        final TextView mContentView;
        final ImageView mAvatar;
        SpeakerItem mItem;

        ViewHolder(View view) {
            super(view);
            mView = view;
            mTitleView = view.findViewById(R.id.title);
            mContentView = view.findViewById(R.id.content);
            mAvatar = view.findViewById(R.id.avatar);
        }

        @NonNull
        @Override
        public String toString() {
            return super.toString() + " '" + mContentView.getText() + "'";
        }
    }
}
