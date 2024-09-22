import nodemailer from "nodemailer";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplates.js";

// Function to send verification email
export const sendMail = async (email, verificationCode) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // or any other email service
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: email, // Receiver address
    subject: "Verify Your Email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationCode
    ),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully");
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error(
      "Could not send verification email. Please try again later."
    );
  }
};

//function to send welcome email
export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // or any other email service
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: email, // Receiver address
    subject: "Verify Your Email",
    html: WELCOME_EMAIL.replace("{email}", email).replace("{name}", name),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully");
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error(
      "Could not send verification email. Please try again later."
    );
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // or true if using a secure connection
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: email, // Receiver address
    subject: "Reset Your Password!",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Password reset link sent to your email!");
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error(
      "Could not send verification email. Please try again later."
    );
  }
};

export const sendResetSuccessEmail = async (email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // or true if using a secure connection
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password reset successfuly!",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    category: "Password Reset",
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Password reset successfully!");
  } catch (error) {
    console.error("Error sending password reset success email:", error);
    throw new Error(
      "Could not send password success email. Please try again later."
    );
  }
};
