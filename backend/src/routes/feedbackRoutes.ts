import express from 'express';
import { getAllFeedback, submitFeedback } from '../controllers/feedbackController';

const router = express.Router();

router.get('/', getAllFeedback);
router.post('/', submitFeedback);

export default router;
