import express, { Request, Response } from 'express';
import { config } from './config';
import { sendWelcomeEmail } from './email';

const app = express();
app.use(express.json());

app.post('/send-welcome-email', async (req: Request, res: Response) => {
  const { email, firstName, lastName } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  console.log(`Received request to send welcome email to: ${email}`);

  try {
    sendWelcomeEmail({ email, firstName, lastName }).catch(err => {
        console.error("Background email sending failed:", err);
    });
    
    res.status(202).json({ message: 'Email sending request accepted' });

  } catch (error) {
    console.error('Failed to process email request:', error);
    res.status(500).json({ error: 'Internal server error while processing email request' });
  }
});

app.listen(config.port, () => {
  console.log(`Email service listening on port ${config.port}`);
});