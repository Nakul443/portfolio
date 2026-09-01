/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";

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

const firstRow = projects.slice(0, projects.length);
const secondRow = [...projects].reverse();

const ProjectCard = ({
  title,
  description,
  img,
  tech,
  github,
  large,
}: {
  title: string;
  description: string;
  img: string;
  tech: string[];
  github: string;
  large?: boolean;
}) => (
  <a
    href={github}
    target="_blank"
    rel="noopener noreferrer"
    className="block transition-transform duration-300 hover:scale-105"
  >
    <figure
      className={cn(
        large
          ? "relative h-[380px] w-fit sm:w-[28rem] cursor-pointer overflow-hidden rounded-3xl border-2"
          : "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "flex flex-col"
      )}
    >
      {/* Image with ONLY top rounded corners */}
      {img ? (
        <img className="w-full h-52 object-cover rounded-t-3xl" src={img} alt={title} />
      ) : (
        <div className="w-full h-52 rounded-t-3xl bg-gradient-to-br from-[#23213a] to-[#2a2d3e] flex items-center justify-center">
          <span className="text-[#43e7ad] font-semibold text-sm">{title}</span>
        </div>
      )}

      {/* Text content */}
      <figcaption className="font-bold text-lg dark:text-white mb-1 mt-3 px-4 whitespace-normal break-words">
        {title}
      </figcaption>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-2 mb-2 px-4">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-base rounded bg-[#23213a] text-[#43e7ad] font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Description */}
      <blockquote className="text-sm text-[#bdbdbd] px-4 overflow-y-auto">
        {description}
      </blockquote>
    </figure>
  </a>
);
	


export function ProjectsMarquee3D() {
	return (
		<section id="projects" className="w-full flex flex-col items-center justify-center py-24">
			<h2 className="text-6xl font-extrabold text-white mb-6 text-center tracking-tight drop-shadow-xl">
				Projects
			</h2>
			<div className="relative flex flex-col min-h-[100vh] w-full max-w-none items-center justify-center gap-4 overflow-visible [perspective:1600px]">
				<Marquee pauseOnHover className="[--duration:80s] w-full">
					{firstRow.map((project, idx) => (
						<ProjectCard key={project.title + idx} {...project} large />
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className="[--duration:50s] w-full">
					{secondRow.map((project, idx) => (
						<ProjectCard key={project.title + idx + 'r'} {...project} large />
					))}
				</Marquee>

				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
			</div>
		</section>
	);
}

export default ProjectsMarquee3D;
