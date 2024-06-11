import React from "react";
import { Feedback } from "../types";

interface FeedbackItemProps {
  feedback: Feedback;
}

export const FeedbackItem: React.FC<FeedbackItemProps> = ({ feedback }) => {
  return (
    <div className="border rounded p-4 bg-white shadow-md mt-4">
      <div className="text-gray-700 overflow-auto">
        <b>{feedback.name}</b>: {feedback.feedback}
      </div>
    </div>
  );
};
