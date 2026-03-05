import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {

  const body = await req.json();
  console.log("Form Data:", body);
console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Pass:", process.env.EMAIL_PASS);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New message from Royal website",
      html: `
        <h2>New Message From Royal website</h2>

        <p><b>Name:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Phone:</b> ${body.Phone}</p>
        <p><b>Condition:</b> ${body.condition}</p>
        <p><b>Container Size:</b> ${body.containerSize}</p>
        <p><b>Purchase Time:</b> ${body.purchaseTime}</p>
      `
    });

    return Response.json({ success: true });

  } catch (error) {

    return Response.json({ success: false });

  }
}