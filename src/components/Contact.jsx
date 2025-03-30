import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import socialLinks from '../data/socialLinks'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_USER_ID'
    ).then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FiMail className="text-2xl" />
              <p>your.email@example.com</p>
            </div>
            <div className="flex gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  {link.icon === 'linkedin' && <FiLinkedin />}
                  {link.icon === 'github' && <FiGithub />}
                  {link.icon === 'twitter' && <FiTwitter />}
                </a>
              ))}
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="w-full p-3 rounded-lg border border-gray-200"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="w-full p-3 rounded-lg border border-gray-200"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="w-full p-3 rounded-lg border border-gray-200"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;