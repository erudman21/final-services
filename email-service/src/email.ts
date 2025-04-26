import nodemailer from 'nodemailer';
import { config } from './config';

const transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: config.smtp.secure,
  auth: config.smtp.auth.user ? config.smtp.auth : undefined,
  tls: {
    rejectUnauthorized: false
  }
});

interface UserDetails {
    email: string;
    firstName?: string;
    lastName?: string;
}

export async function sendWelcomeEmail(userDetails: UserDetails): Promise<void> {
  const { email, firstName = 'User' } = userDetails;

  console.log(`sending email to ${email}`);

  try {
    const info = await transporter.sendMail({
      from: `<${config.emailFrom}>`,
      to: email,
      subject: 'yo',
      text: `yo ${firstName}\n`,
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}