"use client";
import React, { useState, useEffect } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [successMessage, errorMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone.trim())) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      return;
    } else {
      setPhoneError("");
    }

    const serviceId = "service_8ts5pwr";
    const templateId = "template_taha2d8";
    const publicKey = "vyCfaFYbcUWRoJ_la";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_subject: subject,
      to_name: "sujit mishra",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setSuccessMessage("Your message has been sent successfully!");
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(
          "Your message could not be sent. Please try again later."
        );
        setSuccessMessage("");
      });
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative scroll-mt-2"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-99">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/sujit995">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/sujitmishra007">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
             <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="enter your name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            {errorMessage && (
                  <div className="text-red-500 mb-4 text-[1rem] transition-opacity duration-500 opacity-100">
                    {errorMessage}
                  </div>
                )}
                {successMessage && (
                  <div className="text-green-500 mb-4 transition-opacity duration-500 opacity-100">
                    {successMessage}
                  </div>
                )}
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
      </div>
    </section>
  );
};

export default EmailSection;
