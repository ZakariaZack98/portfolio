import React from 'react';
import Link from 'next/link';
import GradientButton from '@/components/common/GradientButton';

const Contact = () => {
  return (
    <div className='bg-black pb-20'>
      <div className="lg:h-screen h-fit container mx-auto pt-20">
        <h1 className="text-5xl font-bold text-center mb-10">Get in Touch</h1>
        <div className="flex flex-col gap-y-10">
          <form
            className="flex flex-col gap-y-5 w-9/10 mx-auto"
            action="https://formspree.io/your-email@example.com" //!replace
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="py-3 pl-10 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="_replyto"
              placeholder="Your Email"
              className="py-3 pl-10 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="py-3 pl-10 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <GradientButton type="submit" label="Send Message" />
          </form>
          <p className="text-lg text-center">
            Or, you can also reach me on{' '}
            <Link href="https://www.linkedin.com/in/sadeemdzakaria/" target="_blank" rel="noopener noreferrer">
                LinkedIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;