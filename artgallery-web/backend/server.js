import express from 'express';
import cors from 'cors';
import multer from 'multer';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Set up Multer for handling file uploads in memory
const upload = multer({ storage: multer.memoryStorage() });

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});
console.log("Real Gmail transporter configured. Waiting for orders...");

// Order submission endpoint
app.post('/api/order', upload.single('referenceImage'), async (req, res) => {
  try {
    const { name, email, artType, budget, description } = req.body;
    
    // Construct email content
    let mailOptions = {
      from: `"ArtGallery Website" <no-reply@artgallery.com>`,
      to: 'lakruwankavinda689@gmail.com', 
      subject: `New Artwork Order from ${name}`,
      text: `You have received a new artwork commission/order!\n\nName: ${name}\nEmail: ${email}\nArt Type: ${artType}\nBudget: $${budget || 'N/A'}\n\nProject Description / Details:\n${description}`,
      html: `
        <h2>New Artwork Order / Commission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Art Type:</strong> ${artType}</p>
        <p><strong>Budget:</strong> $${budget || 'N/A'}</p>
        <hr />
        <h3>Project Description / Details:</h3>
        <p style="white-space: pre-wrap;">${description}</p>
      `
    };

    // Attach file if present
    if (req.file) {
      mailOptions.attachments = [
        {
          filename: req.file.originalname,
          content: req.file.buffer
        }
      ];
    }

    // Send Mail
    if (process.env.GMAIL_PASS === "replace_this_with_your_gmail_app_password" || !process.env.GMAIL_PASS) {
      console.log("Blocking email send: Gmail App Password is not configured in .env");
      return res.status(401).json({ success: false, message: 'Server Configuration Error: Please add your 16-character Gmail App Password to backend/.env and restart the backend server!' });
    }

    const info = await transporter.sendMail(mailOptions);
    console.log("Message physically delivered to Gmail inbox: %s", info.messageId);

    res.json({ 
      success: true, 
      message: 'Order delivered to your REAL Gmail inbox successfully!' 
    });

  } catch (error) {
    console.error("Error sending order email via Gmail:", error);
    res.status(500).json({ success: false, message: 'Failed to deliver email. Check your Gmail App Password and try again.' });
  }
});

// Contact submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    let mailOptions = {
      from: `"ArtGallery Website" <no-reply@artgallery.com>`,
      to: 'lakruwankavinda689@gmail.com', 
      subject: `New Contact Message from ${name}`,
      text: `You have received a new message from the contact form!\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `
    };

    if (process.env.GMAIL_PASS === "replace_this_with_your_gmail_app_password" || !process.env.GMAIL_PASS) {
      console.log("Blocking email send: Gmail App Password is not configured in .env");
      return res.status(401).json({ success: false, message: 'Server Configuration Error: Please add your 16-character Gmail App Password to backend/.env and restart the backend server!' });
    }

    const info = await transporter.sendMail(mailOptions);
    console.log("Contact message physically delivered to Gmail inbox: %s", info.messageId);

    res.json({ 
      success: true, 
      message: 'Message delivered to lakruwankavinda689@gmail.com successfully!' 
    });

  } catch (error) {
    console.error("Error sending contact email via Gmail:", error);
    res.status(500).json({ success: false, message: 'Failed to deliver message. Check your Gmail App Password and try again.' });
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
