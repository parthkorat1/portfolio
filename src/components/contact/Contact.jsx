import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { Resend } from 'resend';



const resend = new Resend(import.meta.env.VITE_RESEND_KEY);

const Contact = () => {
  // State to store form data
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Form submission handler
  const handle = async (e) => {
    e.preventDefault();

    // Optional: Add validation for the form fields
    if (!email || !name || !message) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      // Use Resend API to send the form data
      const response = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',  // Use your sender email
        to: ['blueskyparth@gmail.com'],
        subject: `Contact Request from ${name}`,
        html: `<p>${message}</p>`,
      });

      //console.log("Email sent successfully:", response);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send the message.");
    }
  };

  return (
    <div id="contact" className="container m-auto mt-16">
      {/* Heading */}
      <div className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">Contact</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* Card */}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end flex-col sm:w-3/4">
            <div>
              <h1 className="text-5xl font-bold sm:text-3xl">You Need</h1>
              <h3 className="text-xl sm:text-lg">
                Beautiful design for your website leave a request
              </h3>
            </div>
          </div>
          <div className="flex p-5 items-center justify-center">
            <button className="text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)]">
              <BsArrowRight className="md:rotate-90" />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="right flex-1">
          <form
            onSubmit={handle}
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
          >
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g. example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="e.g. John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="bg-yellow-500 w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
