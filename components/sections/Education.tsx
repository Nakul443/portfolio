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
