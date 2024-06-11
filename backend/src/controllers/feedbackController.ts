import { Request, Response } from "express";

interface Feedback {
  name: string;
  feedback: string;
}

const feedbackEntries: Feedback[] = [];

export const getAllFeedback = (req: Request, res: Response) => {
  res.json(feedbackEntries);
};

export const submitFeedback = (req: Request, res: Response) => {
  const { name, feedback } = req.body;
  if (!name || !feedback) {
    return res.status(400).json({ error: "Name and feedback are required" });
  }
  feedbackEntries.push({ name, feedback });
  res.status(201).json({ message: "Feedback submitted" });
};
