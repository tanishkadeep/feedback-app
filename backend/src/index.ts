import express from 'express';
import bodyParser from 'body-parser';
import feedbackRoutes from './routes/feedbackRoutes';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/feedback', feedbackRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
