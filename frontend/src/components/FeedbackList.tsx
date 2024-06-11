import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RootState, AppDispatch } from "../redux/store";
import { setFeedbackList } from "../redux/feedbackSlice";
import { FeedbackItem } from "./FeedbackItem";
import { Feedback } from "../types";

export const FeedbackList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const feedbackList = useSelector(
    (state: RootState) => state.feedback.feedbackList
  );

  const fetchFeedback = async () => {
    const response = await axios.get("http://localhost:3000/api/feedback");
    dispatch(setFeedbackList(response.data));
  };

  useEffect(() => {
    fetchFeedback();
  }, [dispatch]);

  return (
    <div className="mt-6">
      <h2 className="text-xl mb-4 font-semibold text-gray-800">
        Feedback List
      </h2>
      <ul className="space-y-4">
        {feedbackList.map((feedback: Feedback) => (
          <FeedbackItem feedback={feedback} />
        ))}
      </ul>
    </div>
  );
};
