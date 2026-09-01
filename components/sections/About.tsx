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
