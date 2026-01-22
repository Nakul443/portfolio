"use client";
import { useRef, useEffect, useState } from "react";

const experiences = [
  {
    company: "Chromospec Solutions",
    role: "Software Development Intern",
    date: "December 2024 – March 2025",
    location: "Remote",
    highlights: [
      "Developed a media upload platform using Node.js and AWS S3 for video storage and engagement tracking.",
      "Implemented Redis caching and rate limiting.",
      "Implemented JWT-based authentication system with role-based access control (RBAC).",
      "Implemented data ingestion pipelines from Google Sheets to AWS Redshift."
    ],
  },
];

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Scroll logic: highlight timeline as you scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const items = Array.from(timelineRef.current.querySelectorAll(".exp-card"));
      let found = 0;
      for (let i = 0; i < items.length; i++) {
        const rect = (items[i] as HTMLElement).getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) found = i;
      }
      setActiveIdx(found);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="relative py-24 w-full flex flex-col items-center justify-center min-h-[80vh] bg-transparent">
      <h2 className="text-6xl font-extrabold text-white mb-16 text-center tracking-tight drop-shadow-xl">Experience</h2>
      <div className="flex flex-row gap-12 w-full max-w-5xl mx-auto items-start justify-center">
        {/* Timeline column */}
        <div className="relative flex flex-col items-center w-24" style={{ minWidth: 64 }}>
          {/* SVG Thin Straight Timeline */}
          <svg width="6" height="600" viewBox="0 0 6 600" className="absolute left-1/2 -translate-x-1/2 top-0 z-0" style={{ pointerEvents: 'none' }}>
            <line
              x1="3" y1="0" x2="3" y2="600"
              stroke="#23213a"
              strokeWidth="1.2"
            />
            <line
              x1="3" y1="0" x2="3" y2="600"
              stroke="url(#glow)"
              strokeWidth="2"
              style={{
                strokeDasharray: 600,
                strokeDashoffset: 600 - ((activeIdx + 1) / experiences.length) * 600,
                transition: 'stroke-dashoffset 0.5s',
                filter: 'drop-shadow(0 0 8px #43e7ad)',
              }}
            />
            <defs>
              <linearGradient id="glow" x1="0" y1="0" x2="0" y2="600" gradientUnits="userSpaceOnUse">
                <stop stopColor="#43e7ad" />
                <stop offset="0.7" stopColor="#a259ff" />
                <stop offset="1" stopColor="#23213a" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* Experience cards column */}
        <div className="flex-1 flex flex-col gap-12" ref={timelineRef}>
          {experiences.map((exp, idx) => (
            <div key={exp.company + idx} className={`exp-card bg-[#181726] rounded-2xl p-8 shadow-lg border border-white/10 transition-all duration-500 ${idx <= activeIdx ? "opacity-100 scale-100" : "opacity-60 scale-95"}`} style={{ boxShadow: idx === activeIdx ? "0 0 32px 4px #43e7ad55" : undefined }}>
              <h3 className="text-2xl font-bold text-white mb-2">{exp.company} <span className="font-semibold text-[#43e7ad]">- {exp.role}</span></h3>
              <div className="text-sm font-semibold text-[#ededed] mb-2">{exp.date}{exp.location ? ` • ${exp.location}` : ""}</div>
              <ul className="list-disc ml-6 text-[#bdbdbd] text-base font-normal">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
