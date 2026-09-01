# Portfolio Update Instructions

Give this whole file to your VS Code AI agent (Copilot/Cursor/Cline) as the task brief. It covers every file that needs to change, with exact content to use. Work top to bottom — later steps (nav, page assembly) depend on the new section files existing.

Two images are still pending from Nakul (final profile photo + project screenshots). Everywhere an image is needed, the instructions below tell you which existing file in `public/` to wire up as a placeholder so nothing is visually broken in the meantime.

---

## 1. Fix broken `Image`/`img` src attributes (do this first — currently broken)

`next/image`'s `<Image>` component throws at build time if `src=""`. Two files currently have this bug:

- `components/sections/Hero.tsx` — the profile `<Image>` has `src=""`
- `components/sections/Contact.tsx` — the small profile `<Image>` has `src=""`

**Fix:** set both to `src="/profile.jpg"` (file already exists in `public/`). When Nakul sends the real photo, only that one string needs to change later — nothing else does.

Also in `components/sections/ProjectsMarquee3D.tsx`, the `<img>` inside `ProjectCard` renders even when `img=""`, producing a broken-image icon. Update `ProjectCard` to render a gradient placeholder instead when `img` is falsy:

```tsx
{img ? (
  <img className="w-full h-52 object-cover rounded-t-3xl" src={img} alt={title} />
) : (
  <div className="w-full h-52 rounded-t-3xl bg-gradient-to-br from-[#23213a] to-[#2a2d3e] flex items-center justify-center">
    <span className="text-[#43e7ad] font-semibold text-sm">{title}</span>
  </div>
)}
```

All 6 projects below use `img: ""` for now — this placeholder keeps the marquee looking clean until screenshots are added.

---

## 2. `components/sections/Hero.tsx` — update text content

Replace these specific pieces (keep everything else, including layout/animations, unchanged):

- **Resume link** (the `<a href="https://drive.google.com/...">` wrapping `InteractiveHoverButton`): change href to
  `https://drive.google.com/file/d/1KQ6QSiVoPWZOI0aHXzSFff58VDoWNeoH/view?usp=sharing`

- **Subtitle** (`<h2>`): change to
  `AI/Backend Software Engineer @ FindMyLawyer · Final-year B.Tech Student`

- **Location line**: change `New Delhi, India` to `New Delhi · Bangalore, India`

- **Achievement badges array** — replace:
```tsx
{[
  { text: "8 CGPA @ GGSIPU", color: "from-[#23213a] to-[#2a2d3e]" },
  { text: "500+ DSA Problems", color: "from-[#23213a] to-[#2a2d3e]" },
].map((item) => (
```
with:
```tsx
{[
  { text: "8.31 CGPA @ GGSIPU", color: "from-[#23213a] to-[#2a2d3e]" },
  { text: "600+ DSA Problems Solved", color: "from-[#23213a] to-[#2a2d3e]" },
  { text: "LeetCode Knight · 1850 Peak", color: "from-[#23213a] to-[#2a2d3e]" },
].map((item) => (
```

- **Profile image**: `src=""` → `src="/profile.jpg"` (see section 1).

Leave the GitHub/LinkedIn/email/LeetCode social icon links as-is — they're already correct.

---

## 3. New file: `components/sections/About.tsx`

Create this file. It's a short personal-note style section using Nakul's own bio text.

```tsx
export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 w-full flex flex-col items-center justify-center min-h-[60vh]"
    >
      <h2 className="text-6xl font-extrabold text-white mb-12 text-center tracking-tight drop-shadow-xl">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto bg-[#181726] rounded-2xl p-10 border border-white/10 shadow-lg text-[#ededed] text-lg leading-relaxed space-y-4">
        <p>Hi, I&rsquo;m Nakul,</p>
        <p>
          A backend-focused engineer with experience building production
          systems across backend, AI/LLM, and AWS.
        </p>
        <p>
          Previously, I built and deployed a scalable media upload platform
          on AWS, and currently work as an AI/Backend Engineer where I&rsquo;ve
          built a production Legal RAG pipeline processing 10,000+ regulatory
          PDFs using hybrid search and reranking.
        </p>
        <p>I&rsquo;ve attached my resume below for your reference.</p>
        <p>
          Best,
          <br />
          Nakul Kumar Singh
        </p>
        <div className="pt-4">
          <a
            href="https://drive.google.com/file/d/1KQ6QSiVoPWZOI0aHXzSFff58VDoWNeoH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#a259ff] to-[#43e7ad] text-white font-semibold hover:shadow-[0_0_20px_5px_#43e7ad55] transition"
          >
            View Resume
          </a>
          <p className="text-sm text-[#bdbdbd] mt-2">
            Please copy and open in a new tab — LinkedIn&rsquo;s link redirection
            doesn&rsquo;t work for this.
          </p>
        </div>
      </div>
    </section>
  );
}
```

---

## 4. New file: `components/sections/Education.tsx`

```tsx
export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 w-full flex flex-col items-center justify-center min-h-[50vh]"
    >
      <h2 className="text-6xl font-extrabold text-white mb-12 text-center tracking-tight drop-shadow-xl">
        Education
      </h2>
      <div className="max-w-2xl mx-auto bg-[#181726] rounded-2xl p-8 border border-white/10 shadow-lg">
        <h3 className="text-2xl font-bold text-white mb-1">
          Bachelor of Technology (ECE)
        </h3>
        <p className="text-[#43e7ad] font-medium mb-1">
          Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi
        </p>
        <p className="text-[#bdbdbd] text-sm mb-2">Aug 2022 – June 2026</p>
        <p className="text-[#ededed] font-semibold">CGPA: 8.31</p>
      </div>
    </section>
  );
}
```

---

## 5. `components/sections/Experience.tsx` — replace the `experiences` array

Replace the whole `experiences` const with (most recent first — current role at top):

```tsx
const experiences = [
  {
    company: "FindMyLawyer",
    role: "Software Engineer Full Time - AI/Backend",
    date: "March 2026 – Present",
    location: "India",
    highlights: [
      "Architected and deployed a production-grade Legal RAG pipeline ingesting and indexing 10,000+ regulatory PDFs from 14+ Indian government portals, automating the complete pipeline from web crawling to semantic indexing for AI-powered legal search.",
      "Engineered an asynchronous distributed ingestion pipeline using Crawl4ai, AsyncIO, headless Chromium, httpx, and LlamaParse, with fault-tolerant processing and legal format aware document chunking.",
      "Designed a hybrid retrieval architecture combining LanceDB ANN vector search with CrossEncoder (ms-marco-MiniLM-L-6-v2) reranking, embedding legal metadata (ACT, SECTION) to improve retrieval relevance.",
      "Built a LangGraph-based support chatbot integrated with the RAG pipeline via a custom Model Context Protocol (MCP) server, enabling the agent to autonomously search legal documents mid-conversation.",
      "Instrumented full-stack observability across retrieval and chat pipelines, tracking time-to-first-token, tool-call latency, and database query metrics.",
      "Containerized and deployed the platform as a three-service Docker architecture (Scraper, Embedding Processor, FastAPI Server) on AWS S3 and EC2 with restart policies.",
    ],
  },
  {
    company: "Chromospec Solutions",
    role: "Software Engineer Intern - Backend",
    date: "August 2025 – February 2026",
    location: "Bangalore",
    highlights: [
      "Designed and built a scalable media upload and analytics platform using Node.js, TypeScript, AWS S3, and REST APIs, supporting high-traffic ingestion with multi-part upload handling.",
      "Reduced API response latency by 67% (450ms → 150ms) and overall API load by 30% by implementing Redis caching and request rate limiting.",
      "Implemented JWT-based authentication with role-based access control (RBAC), securing all API endpoints.",
      "Optimised PostgreSQL performance via composite indexing and SQL query restructuring, reducing read latency by 40%.",
    ],
  },
];
```

No other changes needed in this file — the timeline SVG animation logic already works off `experiences.length`.

---

## 6. `components/sections/ProjectsMarquee3D.tsx` — replace the `projects` array

Replace the whole `projects` const with:

```tsx
const projects = [
  {
    title: "AI Legal RAG Pipeline",
    tech: ["Python", "LangChain", "LangGraph", "AWS (S3, SQS, Lambda)", "LanceDB", "OpenAI API", "Crawl4ai", "MCP"],
    description:
      "Production-grade Legal RAG pipeline at FindMyLawyer, ingesting and indexing 10,000+ regulatory PDFs from 14+ Indian government portals. Async distributed crawling via Crawl4ai and LlamaParse, hybrid retrieval combining LanceDB ANN search with CrossEncoder reranking, and a three-service Dockerized AWS deployment.",
    img: "",
    github: "https://github.com/Nakul443/AI-Legal-Rag-Pipeline",
  },
  {
    title: "LangGraph Chatbot Backend",
    tech: ["Python", "LangGraph", "FastAPI", "PostgreSQL", "MCP", "JWT"],
    description:
      "Production-style chatbot backend built on LangGraph and FastAPI, with JWT auth, SSE-based token streaming, custom MCP tools, and a PostgreSQL checkpointer for durable conversation state.",
    img: "",
    github: "https://github.com/Nakul443/chatbot-langGraph",
  },
  {
    title: "Finance Transaction Extractor",
    tech: ["TypeScript", "Hono", "Next.js", "PostgreSQL", "PrismaORM", "Auth.js", "TailwindCSS", "Zod"],
    description:
      "A secure finance app that extracts transaction data from bank statements. Features user authentication, data isolation, and modern full-stack architecture.",
    img: "",
    github: "https://github.com/Nakul443/finance-transaction-extractor",
  },
  {
    title: "Multi-Tenant AI Assistant",
    tech: ["Next.js", "Express", "MongoDB", "Google Gemini", "TanStack Query"],
    description:
      "Multi-tenant AI assistant monorepo where each project is a tenant identified by a URL slug. Config-driven admin dashboard backed by MongoDB, with a service-layer backend (Zod validation, Mongoose models) and a Gemini-powered chat experience per tenant.",
    img: "",
    github: "https://github.com/Nakul443/Multi-tenant-AI-assistant",
  },
  {
    title: "Credit Approval System",
    tech: ["Python", "Django REST Framework", "PostgreSQL", "Celery", "Redis", "Docker"],
    description:
      "High-concurrency credit evaluation system automating loan eligibility assessments and customer registration. Uses an asynchronous task architecture with Celery and Redis for background data ingestion and credit score calculations.",
    img: "",
    github: "https://github.com/Nakul443/credit-approval-system",
  },
  {
    title: "Real Estate CRM Module",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    description:
      "A system managing the full lifecycle of real estate transactions — from capturing new leads to closing deals and tracking commissions.",
    img: "",
    github: "https://github.com/Nakul443/Real-Estate-CRM-Module",
  },
];
```

(Also apply the `ProjectCard` placeholder fix from section 1 while you're in this file.)

---

## 7. `components/sections/Skills.tsx` — add missing skills

Add these entries to the `skills` array (keep the existing ones, just append — pick reasonable existing icons or reuse ones already imported):

```tsx
{ name: "Django", icon: Server },
{ name: "LangGraph", icon: Brain },
{ name: "FAISS", icon: Search },
{ name: "Ollama", icon: Cpu },
{ name: "Prompt Engineering", icon: Sparkles }, // add `Sparkles` to the lucide-react import list
{ name: "RBAC", icon: ListChecks },
```

Everything else in this file (the confidence slider, layout) stays the same.

---

## 8. `components/DockBar.tsx` — add nav links for the new sections

Add two new `DockIcon` entries: **About** (right after Home) and **Education** (right after About, before Skills). Use `User` and `GraduationCap` from `lucide-react` (add them to the existing import).

```tsx
<DockIcon>
  <Link href="#about" className="relative group flex flex-col items-center">
    <User className="h-6 w-6" />
    <span className="absolute bottom-[-1.5rem] text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
      About
    </span>
  </Link>
</DockIcon>

<DockIcon>
  <Link href="#education" className="relative group flex flex-col items-center">
    <GraduationCap className="h-6 w-6" />
    <span className="absolute bottom-[-1.5rem] text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
      Education
    </span>
  </Link>
</DockIcon>
```

Final icon order: Home, About, Education, Skills, Experience, Projects, Contact.

---

## 9. `app/page.tsx` — wire the new sections into the page

```tsx
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Education from "../components/sections/Education";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import { ProjectsMarquee3D } from "../components/sections/ProjectsMarquee3D";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <ProjectsMarquee3D />
      <Contact />
    </>
  );
}
```

---

## 10. `components/sections/Contact.tsx` — small fixes

- Profile `<Image>`: `src=""` → `src="/profile.jpg"` (see section 1).
- Everything else (email, phone, LinkedIn, form) is already correct — no changes needed.

---

## 11. `app/layout.tsx` — update metadata (optional but recommended)

```tsx
export const metadata: Metadata = {
  title: "Nakul Kumar Singh",
  description: "Portfolio of Nakul Kumar Singh — AI/Backend Software Engineer at FindMyLawyer, final-year B.Tech student.",
};
```

---

## 12. When the real photos arrive

- Profile photo: replace `public/profile.jpg` with the new file (same filename), or update the two `src="/profile.jpg"` references if the filename changes.
- Project screenshots: drop them into `public/images/` and set the matching project's `img` field in `components/sections/ProjectsMarquee3D.tsx` to that path (e.g. `img: "/images/legal-rag.png"`). The gradient placeholder from section 1 will stop showing automatically once `img` is non-empty.

---

## Summary of files touched

| File | Change |
|---|---|
| `components/sections/Hero.tsx` | Fix image src, update resume link/subtitle/location/badges |
| `components/sections/Contact.tsx` | Fix image src |
| `components/sections/About.tsx` | **New file** |
| `components/sections/Education.tsx` | **New file** |
| `components/sections/Experience.tsx` | Replace `experiences` array (both jobs) |
| `components/sections/ProjectsMarquee3D.tsx` | Replace `projects` array (6 projects) + placeholder fix |
| `components/sections/Skills.tsx` | Append missing skills |
| `components/DockBar.tsx` | Add About + Education nav icons |
| `app/page.tsx` | Import/render About + Education |
| `app/layout.tsx` | Update metadata description |