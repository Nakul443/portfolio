'use client';

import Image from "next/image";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[90vh] w-full py-16"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 w-full max-w-5xl mx-auto">
        {/* Left column with profile and button */}
        <div
          className="relative flex items-center justify-center"
          style={{ width: 440, height: 440 }}
        >
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            {/* Animated, smaller, purplish neon glow */}
            <div className="rounded-full w-[78%] h-[78%] animate-glow-pulse bg-gradient-to-br from-[#a259ff99] to-[#7f37ff66] shadow-[0_0_32px_8px_#a259ffcc,0_0_64px_16px_#7f37ff99]" />
          </div>

          <div className="relative z-20 flex items-center justify-center">
            <Image
              src="/portfolio.jpg"
              alt="Nakul Kumar Singh profile"
              width={440}
              height={440}
              className="rounded-full border-8 border-primary bg-background object-cover w-[440px] h-[440px] mx-auto animate-glow shadow-3xl"
              priority
              style={{ objectFit: 'cover' }}
            />

            {/* Slanted Hover Button */}
            <a
              href="https://drive.google.com/file/d/1KQ6QSiVoPWZOI0aHXzSFff58VDoWNeoH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -top--5 -right-20 z-10"
            >
              <InteractiveHoverButton className="bg-yellow-500 text-white hover:bg-red-700">
                View Resume
              </InteractiveHoverButton>
            </a>
          </div>
        </div> {/* ✅ Closing div added here */}

        {/* Right column with text & social */}
        <div className="flex flex-col items-center md:items-start gap-4 w-full max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight text-center md:text-left">
            Hi, I&rsquo;m Nakul
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left drop-shadow-[0_1px_8px_#a259ff55] animate-gradient-text bg-gradient-to-r from-[#a259ff] via-[#43e7ad] to-[#7f37ff] bg-[length:200%_200%] bg-clip-text text-transparent">
            AI/Backend Software Engineer @ FindMyLawyer · Final-year B.Tech Student
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-lg text-[#ededed]">
            <span className="text-[#7f37ff] font-medium">New Delhi · Bangalore, India</span>
            <span className="hidden md:inline text-[#a259ff]">·</span>
            <a
              href="mailto:nakul.kumar627@gmail.com"
              className="underline underline-offset-4 text-[#43e7ad] hover:text-[#a259ff] transition font-medium"
            >
              nakul.kumar627@gmail.com
            </a>
          </div>

          {/* Achievement cards */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-base">
            {[
              { text: "8.31 CGPA @ GGSIPU", color: "from-[#23213a] to-[#2a2d3e]" },
              { text: "600+ DSA Problems Solved", color: "from-[#23213a] to-[#2a2d3e]" },
              { text: "LeetCode Knight · 1850 Peak", color: "from-[#23213a] to-[#2a2d3e]" },
            ].map((item) => (
              <span
                key={item.text}
                className={`relative px-5 py-2 rounded-xl font-semibold text-white shadow-lg backdrop-blur-md bg-gradient-to-br ${item.color} transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_4px_#a259ff33] cursor-pointer border border-white/10`}
                style={{ zIndex: 1, overflow: "hidden" }}
              >
                <span
                  className="absolute inset-0 rounded-xl opacity-0 hover:opacity-10 transition bg-white"
                  style={{ pointerEvents: "none" }}
                />
                <span className="relative z-10">{item.text}</span>
              </span>
            ))}
          </div>

          {/* Social media icons */}
          <div className="flex justify-center gap-6 mt-8">
            {[
              {
                href: "https://github.com/Nakul443",
                icon: (
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                ),
              },
              {
                href: "https://www.linkedin.com/in/nakul-singh7/",
                icon: (
                  <>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </>
                ),
              },
              {
                href: "mailto:nakul.kumar627@gmail.com",
                icon: (
                  <>
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 6-8.5 7a2 2 0 0 1-2.5 0L2 6" />
                  </>
                ),
              },
              {
                href: "https://leetcode.com/u/orptis/", // Replace with your actual LeetCode profile URL
                icon: (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M12 13H19.5" />
                    <path d="M9.424 7.268l4.999 -4.999" />
                    <path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" />
                  </svg>
                ),
              },

            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white/30 hover:border-[#43e7ad] transition bg-background/60 hover:bg-background/80 shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#ededed" strokeWidth="2" viewBox="0 0 24 24">
                  {link.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Optional background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Add background effect or glow here */}
      </div>
    </section>
  );
}
