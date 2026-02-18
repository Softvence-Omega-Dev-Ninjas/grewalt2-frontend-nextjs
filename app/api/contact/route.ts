import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { company, name, email, role, service, timeline, description } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // HTML Email Template for a professional look
    const htmlTemplate = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background: linear-gradient(90deg, #2F8BDD 0%, #6FDEF7 100%); padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Business Enquiry</h1>
          <p style="color: rgba(255,255,255,0.9); margin-top: 5px;">A potential client wants to talk to you!</p>
        </div>
        
        <div style="padding: 30px; background-color: #ffffff;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; width: 150px;"><strong>Client Name</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Company</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${company || "Not Provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Work Email</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #2F8BDD; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Role/Title</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${role || "Not Provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Service</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;"><span style="background-color: #E0F7FC; color: #2F8BDD; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: bold;">${service}</span></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Timeline</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${timeline || "Not Provided"}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px;">
            <p style="color: #64748b; margin-bottom: 10px;"><strong>Project Description:</strong></p>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; color: #334155; line-height: 1.6; border-left: 4px solid #2F8BDD;">
              ${description}
            </div>
          </div>
        </div>
        
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px;">
          Sent from your website contact form.
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Aventra3 Contact Form" <${process.env.EMAIL_USER}>`,
      to: "hello@aventura3.com",
      replyTo: email, 
      subject: `🚀 New Enquiry: ${name} from ${company}`,
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
