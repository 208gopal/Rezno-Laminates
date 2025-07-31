import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendWhatsApp = () => {
    const name = form.current.user_name.value;
    const phone = form.current.user_phone.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    const fullMessage = `Hello, this is ${name}.\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/919911580106?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        const name = form.current.user_name.value;
        const phone = form.current.user_phone.value;
        const email = form.current.user_email.value;
        const message = form.current.message.value;

        alert("Message sent successfully!");
        console.log(result.text);

        form.current.reset(); // clear the form after capturing values

        const fullMessage = `Hello, this is ${name}.\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
        const whatsappURL = `https://wa.me/919911580106?text=${encodeURIComponent(fullMessage)}`;
        window.open(whatsappURL, "_blank");
      }
    );
  };

  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row justify-between items-stretch gap-10'>
      {/* content */}
      <div className="flex flex-col justify-center w-full md:w-1/2 h-full">
        <h2 className="text-sm text-left md:text-base lg:text-lg font-light mb-3 md:mb-6 tracking-wider">CONTACT</h2>
        <h3 className="text-4xl text-left md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">Let's start new project.</h3>
        <p className='text-md text-left text-gray-500 tracking-wide pb-10'>
          Now, as you were able to get a picture of who we are, it is up to you to contact us and lay the foundation for a new and successful business relationship. Our team consists
        </p>
        <div className="support flex flex-col sm:flex-row justify-between gap-8">
          <div className="phone">
            <p className='pb-5'>________</p>
            <h4 className='text-md font-semibold pb-5'>PHONE</h4>
            <p className='text-gray-400 pb-1 text-sm'>+91 99115 80106</p>
          </div>
          <div className="email">
            <p className='pb-5'>________</p>
            <h4 className='text-md font-semibold pb-5'>EMAIL</h4>
            <p className='text-gray-400 pb-1 text-sm'>rohit@reznoclad.com</p>
          </div>
          <div className="skype">
            <p className='pb-5'>________</p>
            <h4 className='text-md font-semibold pb-5'>LINKEDIN</h4>
            <p className='text-gray-400 pb-1 text-sm'>Rezno Laminates India Pvt Ltd</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-2 sm:px-4 md:px-10">
        <form ref={form} onSubmit={sendEmail} className="w-full">
          {/* Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="bg-gray-100 text-sm p-4 w-full outline-none"
            />
            <input
              type="text"
              name="user_phone"
              placeholder="Phone"
              required
              className="bg-gray-100 text-sm p-4 w-full outline-none"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              name="user_email"
              placeholder="example@mail.com"
              required
              className="bg-gray-100 text-sm p-4 w-full outline-none"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              className="bg-gray-100 text-sm p-4 w-full outline-none resize-none"
            />
          </div>

          {/* Send Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="text-sm font-semibold text-black flex items-center gap-2 hover:underline"
            >
              SEND
              <span className="inline-block transform translate-x-1">→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;