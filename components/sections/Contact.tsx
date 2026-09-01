"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  // Set redirect URL on client-side only
  useEffect(() => {
    setRedirectUrl(window.location.href);
  }, []);
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState({
      ...formState,
      [id]: value,
    });
  };
  
  // Reset the form
  const resetForm = () => {
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="relative py-24 w-full flex flex-col items-center justify-center min-h-[80vh] bg-transparent">
      <h2 className="text-6xl font-extrabold text-white mb-16 text-center tracking-tight drop-shadow-xl">Get In Touch</h2>
      
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mx-auto items-stretch justify-center">
        {/* Contact Card */}
        <div className="flex-1 p-8 transition-all duration-500 flex flex-col">
          <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="rounded-full w-[95%] h-[95%] bg-gradient-to-br from-[#a259ff99] to-[#7f37ff66] shadow-[0_0_16px_4px_#a259ffcc]" />
              </div>
              <Image
                src="/profile.jpg"
                alt="Nakul Kumar Singh"
                width={120}
                height={120}
                className="rounded-full border-4 border-primary bg-background object-cover w-[120px] h-[120px] relative z-20"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Nakul Kumar Singh</h3>
              <p className="text-[#43e7ad] font-medium">Software Developer | AI Engineer</p>
              <p className="text-[#ededed] mt-2">Final-year B.tech Student</p>
            </div>
          </div>
          
          <div className="space-y-4 flex-grow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#23213a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#43e7ad" strokeWidth="2" viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 6-8.5 7a2 2 0 0 1-2.5 0L2 6"/>
                </svg>
              </div>
              <div>
                <p className="text-[#bdbdbd] text-sm">Email</p>
                <a href="mailto:nakul.kumar627@gmail.com" className="text-white hover:text-[#43e7ad] transition-colors">
                  nakul.kumar627@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#23213a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#43e7ad" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div>
                <p className="text-[#bdbdbd] text-sm">LinkedIn</p>
                <a href="www.linkedin.com/in/nakul-singh7" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#43e7ad] transition-colors">
                  https://www.linkedin.com/in/nakul-singh7/
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#23213a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#43e7ad" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </div>
            </div>
            {/* ✅ Phone Number */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#23213a]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#43e7ad" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M22 16.92V21a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.57 19.57 0 0 1-6-6A19.86 19.86 0 0 1 1 4.18 2 2 0 0 1 3 2h4.09a2 2 0 0 1 2 1.72c.12.81.43 1.6.91 2.28L11.7 8.6a2 2 0 0 1-.45 2.65l-1.27 1a16 16 0 0 0 6 6l1-1.27a2 2 0 0 1 2.65-.45l2.61 1.7a2 2 0 0 1 .71 2.24z" />
          </svg>
        </div>
        <div>
          <p className="text-[#bdbdbd] text-sm">Phone</p>
          <a href="tel:+917042320624" className="text-white hover:text-[#43e7ad] transition-colors">
            +91 7042320624
          </a>
        </div>
      </div>
          </div>
          
          <div className="mt-8 pt-6">
            <p className="text-[#ededed] text-center">Let&rsquo;s build something amazing together!</p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="flex-1 bg-[#181726] rounded-2xl p-8 shadow-none border border-white/10 z-10">

          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#23213a] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#43e7ad" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-[#bdbdbd] max-w-md">Thank you for reaching out. I&rsquo;ll get back to you as soon as possible.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 px-6 py-2 rounded-full bg-[#23213a] text-white hover:bg-[#43e7ad]/20 hover:text-[#43e7ad] transition-colors border border-[#43e7ad]/30"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form 
              action="https://formsubmit.co/nakul.kumar627@gmail.com" 
              method="POST"
              onSubmit={() => {
                setIsSubmitting(true);
                // FormSubmit will handle the redirect, but we'll show our success UI after a short delay
                setTimeout(() => {
                  setIsSubmitting(false);
                  setIsSubmitted(true);
                  resetForm();
                }, 2000);
              }}
              className="space-y-6"
            >
              {/* FormSubmit configuration */}
              <input type="hidden" name="_subject" value={`Portfolio Contact: ${formState.subject || 'New message'}`} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              {redirectUrl && <input type="hidden" name="_next" value={redirectUrl} />}
              
              <div>
                <label htmlFor="name" className="block text-[#ededed] mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-1.5 rounded-lg bg-[#23213a] border border-white/10 text-white focus:border-[#43e7ad] focus:ring-1 focus:ring-[#43e7ad] outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[#ededed] mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-1.5 rounded-lg bg-[#23213a] border border-white/10 text-white focus:border-[#43e7ad] focus:ring-1 focus:ring-[#43e7ad] outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-[#ededed] mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-1.5 rounded-lg bg-[#23213a] border border-white/10 text-white focus:border-[#43e7ad] focus:ring-1 focus:ring-[#43e7ad] outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#ededed] mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-1.5 rounded-lg bg-[#23213a] border border-white/10 text-white focus:border-[#43e7ad] focus:ring-1 focus:ring-[#43e7ad] outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-1.5 rounded-lg font-medium transition-all duration-300",
                  isSubmitting
                    ? "bg-[#23213a] text-white/50 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#a259ff] to-[#43e7ad] text-white hover:shadow-[0_0_20px_5px_#43e7ad55] hover:scale-[1.02]"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
