import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5etb2b9',
       'template_68zr4qt',
      form.current,
      '0BLUSkNq3AjjCA5TT'
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
              Send Mail
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;