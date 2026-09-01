"use client";
import {
  Code,
  Database,
  Cpu,
  GitBranch,
  TerminalSquare,
  Brain,
  BookOpen,
  Cloud,
  Globe,
  Shell,
  Layers,
  FileCode,
  Search,
  ListChecks,
  BarChart,
  Zap,
  Server,
  Award,
  Github,
  Sparkles,
} from "lucide-react";


const skills = [
  { name: "C++", icon: Code },
  { name: "Machine Learning", icon: Brain },
  { name: "NLP", icon: BookOpen },
  { name: "Information Retrieval", icon: Search },
  { name: "Unix Scripting", icon: Shell },
  { name: "System Design", icon: Layers },
  { name: "Data Structures", icon: ListChecks },
  { name: "Algorithms", icon: BarChart },
  { name: "Python", icon: FileCode },
  { name: "JavaScript", icon: Code },
  { name: "SQL", icon: Database },
  { name: "Java", icon: Cpu },
  { name: "React.js", icon: Code },
  { name: "Next.js", icon: TerminalSquare },
  { name: "Node.js", icon: Cpu },
  { name: "Redis", icon: Zap },
  { name: "Prisma", icon: Layers },
  { name: "PostgreSQL", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Firebase", icon: Cloud },
  { name: "AWS", icon: Cloud },
  { name: "Power BI", icon: BarChart },
  { name: "Neo4j", icon: Globe },
  { name: "Git", icon: GitBranch },
  { name: "Docker", icon: Server },
  { name: "Jira", icon: Award },
  { name: "Github", icon: Github },
  { name: "Django", icon: Server },
  { name: "LangGraph", icon: Brain },
  { name: "FAISS", icon: Search },
  { name: "Ollama", icon: Cpu },
  { name: "Prompt Engineering", icon: Sparkles },
  { name: "RBAC", icon: ListChecks },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 w-full flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-6xl md:text-6xl font-extrabold text-white mb-10 text-center tracking-tight drop-shadow-xl">
        Skills
      </h2>
      {/* Animation keyframes moved to globals.css */}
      <div className="mt-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start justify-center">
        {/* Left: Circles */}
        <div className="flex-1 flex flex-wrap justify-center items-center gap-6">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="relative flex flex-col items-center justify-center group"
              style={{ flex: '0 1 auto' }}
            >
              <div
                className={`relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#23213a] to-[#2a2d3e] shadow-lg border border-white/10 animate-rotateCard transition-transform duration-300 hover:scale-125`}
                style={{ animationDelay: `${(idx % 8) * 0.2}s` }}
              >
                <skill.icon className="w-7 h-7 text-[#43e7ad]" />
              </div>
              <span
                className="absolute mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#23213a] text-white text-xs font-semibold px-2 py-1 rounded shadow-lg whitespace-nowrap z-20"
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        {/* Right: Interactive slider */}
        <div className="flex-1 bg-[#23213a] rounded-2xl p-8 shadow-lg border border-white/10 min-w-[320px]">
          <h3 className="text-xl font-bold text-white mb-4">How confident am I in these skills?</h3>
          <SkillConfidenceActivity />
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";

type SkillOption = { name: string; value: number };
const skillOptions: SkillOption[] = [
  { name: "C++", value: 8 },
  { name: "DSA", value: 8 },
  { name: "Next.js", value: 5 },
  { name: "MySQL", value: 7 },
  { name: "AWS", value: 6 },
  { name: "Git", value: 8 },
];

function SkillConfidenceActivity() {
  const [selectedSkill, setSelectedSkill] = useState<SkillOption>(skillOptions[0]);
  const [sliderValue, setSliderValue] = useState<number>(skillOptions[0].value);

  // Update slider when skill changes
  const handleSkillChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const skill = skillOptions.find(s => s.name === e.target.value) || skillOptions[0];
    setSelectedSkill(skill);
    setSliderValue(skill.value);
  };

  // Feedback logic
  let feedback = "";
  const diff = sliderValue - selectedSkill.value;
  if (Math.abs(diff) <= 1) {
    feedback = `Pretty accurate! I am this much confident in ${selectedSkill.name}.`;
  } else if (Math.abs(diff) === 2 || Math.abs(diff) === 3) {
    feedback = diff > 0
      ? `I have a little less experience in ${selectedSkill.name} than you guessed.`
      : `I have a little more experience in ${selectedSkill.name} than you guessed.`;
  } else if (diff > 3) {
    feedback = `Well, you must have way too much confidence in me for ${selectedSkill.name}!`;
  } else if (diff < -3) {
    feedback = `Give me a chance to prove my skills in ${selectedSkill.name}!`;
  }

  return (
    <div className="flex flex-col gap-6">
      <label className="text-white font-semibold mb-2">Choose a skill:</label>
      <select
        className="bg-[#181726] text-white rounded-lg px-4 py-2 mb-2 border border-white/10"
        value={selectedSkill.name}
        onChange={handleSkillChange}
      >
        {skillOptions.map(skill => (
          <option key={skill.name} value={skill.name}>{skill.name}</option>
        ))}
      </select>
      <label className="text-white font-semibold mb-2">How confident do you think I am? <span className="text-[#43e7ad]">{sliderValue}</span></label>
      <input
        type="range"
        min={1}
        max={10}
        value={sliderValue}
        onChange={e => setSliderValue(Number(e.target.value))}
        className="w-full accent-[#43e7ad]"
      />
      <div className="mt-4 text-white text-base font-medium bg-[#181726] rounded-xl p-4 border border-white/10 shadow">
        {feedback}
      </div>
    </div>
  );
}
