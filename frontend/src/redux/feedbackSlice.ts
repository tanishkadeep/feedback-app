import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Feedback } from '../types';

interface FeedbackState {
  feedbackList: Feedback[];
}

const initialState: FeedbackState = {
  feedbackList: [],
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    setFeedbackList: (state, action: PayloadAction<Feedback[]>) => {
      state.feedbackList = action.payload;
    },
    addFeedback: (state, action: PayloadAction<Feedback>) => {
      state.feedbackList.push(action.payload);
    },
  },
});

export const { setFeedbackList, addFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
