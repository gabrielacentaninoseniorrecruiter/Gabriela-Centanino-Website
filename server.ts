import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { sendContactEmail } from './src/server/contactHandler.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API route for Contact Form with SMTP (supports Netlify function endpoint and /api/contact)
const handleEmailRequest = async (req: express.Request, res: express.Response) => {
  try {
    const result = await sendContactEmail(req.body);
    res.status(result.success ? 200 : 500).json(result);
  } catch (err: any) {
    res.status(400).json({ success: false, error: err?.message || 'Server error' });
  }
};

app.post('/api/contact', handleEmailRequest);
app.post('/.netlify/functions/send-email', handleEmailRequest);

// Serve production static assets
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
