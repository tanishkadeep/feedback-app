import { useState } from "react";
import axios from "axios";

export const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async () => {
    await axios.post("http://localhost:3000/api/feedback", {
      name,
      feedback,
    });
    setName("");
    setFeedback("");
  };

  return (
    <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <div>
        <div className="pl-2 text-gray-700 text-sm font-bold mb-2">Name</div>
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
          Feedback
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
        className="bg-gray-700 hover:bg-gray-900 text-sm text-white font-bold py-2 px-3 rounded-md"
      >
        Submit
      </button>
    </div>
  );
};
