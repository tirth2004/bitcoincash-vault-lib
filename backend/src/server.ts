import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Vault API Server is running' });
});

// API routes will be added here
app.get('/api', (req, res) => {
  res.json({ message: 'Bitcoin Cash Vault API' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Network: ${process.env.BCH_NETWORK || 'chipnet'}`);
});

