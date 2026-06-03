import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { message, rating } = await req.json();

    if (!message || !rating) {
      return NextResponse.json({ error: 'Message and rating are required.' }, { status: 400 });
    }

    // Configure the email transport using Gmail
    // The user MUST provide their email password or an App Password in their environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'edsonedwin01@gmail.com',
        pass: process.env.EMAIL_PASSWORD || '', // User needs to set this in .env
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'edsonedwin01@gmail.com',
      to: 'edsonedwin01@gmail.com',
      subject: 'New Portfolio Feedback & Rating! ⭐',
      text: `You have received a new message from your portfolio!\n\nRating: ${rating} / 5 Stars\n\nMessage:\n${message}`,
    };

    // If no password is set, simulate a successful delay so the UI still works during development
    if (!process.env.EMAIL_PASSWORD) {
      console.warn("EMAIL_PASSWORD not set in .env. Simulating email send for development.");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return NextResponse.json({ success: true, simulated: true });
    }

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
