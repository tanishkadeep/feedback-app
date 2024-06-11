import React from "react";
import { Feedback } from "../types";

interface FeedbackItemProps {
  feedback: Feedback;
}

export const FeedbackItem: React.FC<FeedbackItemProps> = ({ feedback }) => {
  return (
    <li className="border rounded p-4 bg-white shadow-md">
      <p className="text-gray-700">
        <b>{feedback.name}</b>: {feedback.feedback}
      </p>
    </li>
  );
};
