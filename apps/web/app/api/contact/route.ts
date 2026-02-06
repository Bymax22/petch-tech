import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using environment variables.
    // If SMTP_HOST is provided we'll use explicit SMTP options, otherwise fall back to service (e.g., outlook)
    const transporter = process.env.SMTP_HOST
      ? nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        })
      : nodemailer.createTransport({
          service: process.env.SMTP_SERVICE || 'outlook',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

    // Email to DN Multi Services (info email)
    const infoMailOptions = {
      from: `"DN Multi Services" <${process.env.EMAIL_USER}>`,
      to: process.env.INFO_EMAIL || 'info@dnmultiservices.com',
      subject: `New Inquiry: ${service} - From ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1185AE 0%, #BD2227 100%); padding: 20px; color: white; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Service Inquiry</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 20px; border: 1px solid #ddd;">
            <h2 style="color: #1185AE; margin-top: 0;">Contact Information</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Service Interested In:</strong> ${service}</p>
            
            <h2 style="color: #1185AE;">Project Details</h2>
            <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #BD2227;">
${message}
            </p>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 12px; color: #666;">
              This message was sent from the DN Multi Services website inquiry form.
              <br>
              Received on: ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Lusaka' })}
            </p>
          </div>
        </div>
      `,
    };

    // Confirmation email to customer
    const customerMailOptions = {
      from: `"DN Multi Services" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'We Received Your Inquiry - DN Multi Services',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1185AE 0%, #BD2227 100%); padding: 20px; color: white; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Thank You for Your Inquiry</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 20px; border: 1px solid #ddd;">
            <p>Dear ${name},</p>
            
            <p>Thank you for reaching out to DN Multi Services Supply Ltd. We have received your inquiry and appreciate your interest in our services.</p>
            
            <h3 style="color: #1185AE;">Inquiry Summary</h3>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Reference ID:</strong> ${Date.now()}</p>
            
            <p>Our team will review your request and get back to you within <strong>24 hours</strong> with more information and a customized quote if applicable.</p>
            
            <h3 style="color: #1185AE;">Get In Touch</h3>
            <p>
              <strong>Phone:</strong> +260 770 970 511<br>
              <strong>Email:</strong> dnmultiservicesupply@outlook.com<br>
              <strong>Hours:</strong> Monday - Friday: 8:00 AM - 5:00 PM (Zambia Time)
            </p>
            
            <p>Best regards,<br><strong>DN Multi Services Supply Ltd</strong></p>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 12px; color: #666; text-align: center;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(infoMailOptions),
      transporter.sendMail(customerMailOptions),
    ]);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your inquiry has been sent successfully. You will receive a confirmation email shortly.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
