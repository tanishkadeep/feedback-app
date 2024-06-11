import { useDispatch } from "react-redux";
import axios from "axios";
import { addFeedback } from "../redux/feedbackSlice";
import { AppDispatch } from "../redux/store";
import { useState } from "react";

export const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async () => {
    await axios.post("http://localhost:3000/api/feedback", { name, feedback });
    dispatch(addFeedback({ name, feedback }));
    setName("");
    setFeedback("");
  };

  const isSubmitDisabled = name.trim() === "" || feedback.trim() === "";

  return (
    <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <div>
        <div className="pl-2 text-gray-700 text-sm font-bold mb-2">
          Name<span className="text-red-500">*</span>
        </div>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          className="border rounded w-full py-2 px-3 text-gray-700"
          required
        />
      </div>
      <div>
        <div className="pl-2 text-gray-700 text-sm font-bold mb-2">
          Feedback<span className="text-red-500">*</span>
        </div>
        <textarea
          placeholder="Enter your feedback"
          onChange={(e) => setFeedback(e.target.value)}
          className="border rounded w-full py-2 px-3 text-gray-700"
          required
        />
      </div>
      <button
        onClick={handleSubmit}
        className={`bg-gray-700 hover:bg-gray-900 text-sm text-white font-bold py-2 px-3 rounded-md ${
          isSubmitDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isSubmitDisabled}
      >
        Submit
      </button>
    </div>
  );
};
