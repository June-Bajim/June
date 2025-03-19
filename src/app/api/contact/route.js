// import { PrismaClient } from '@prisma/client';
// import nodemailer from 'nodemailer';

// const prisma = new PrismaClient();

// export async function POST(req) {
//   try {
//     const { name, email, message } = await req.json();

//     // ✅ Store message in database
//     const newMessage = await prisma.contactMessage.create({
//       data: { name, email, message },
//     });

//     console.log('Message saved to database:', newMessage);

//     // ✅ Create email transporter
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },      
//       tls: {
//         rejectUnauthorized: false, // Ignore self-signed certificate issues
//       },
//       logger: true, // Enable logging
//       debug: true, // Enable debugging
//     });
    

//     // ✅ Email content
//     const mailOptions = {
//       from: process.env.EMAIL_USER, // Your email
//       to: 'junekrotich@gmail.com', // Your personal email
//       subject: `New Contact Form Submission from ${name}`,
//       text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     // ✅ Send email
//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully');

//     return new Response(
//       JSON.stringify({ success: true, message: 'Message stored & email sent!' }),
//       { status: 200, headers: { 'Content-Type': 'application/json' } }
//     );
//   } catch (error) {
//     console.error('Error:', error);
//     return new Response(
//       JSON.stringify({ success: false, message: 'Internal Server Error' }),
//       { status: 500, headers: { 'Content-Type': 'application/json' } }
//     );
//   }
// }
