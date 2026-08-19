"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const queryClean = searchQuery.trim().toLowerCase();

  // Data untuk Fitur Pencarian
  const sections = [
    {
      id: "achievements",
      category: "ESPORTS",
      title: "Prestasi Mobile Legends",
      content:
        "Di ranah esports, saya aktif berkompetisi dalam turnamen Mobile Legends: Bang Bang dan berhasil meraih 3 kali podium, yaitu Juara 2 Tingkat Kabupaten serta dua kali Juara 3 Tingkat Kota melalui komunikasi tim dan eksekusi strategi yang matang.",
    },
    {
      id: "skills",
      category: "KREATIF & AI",
      title: "Visual & Prompt Engineering",
      content:
        "Di bidang teknologi dan media, saya menguasai alur produksi visual mulai dari fotografi, videografi, hingga proses editing, serta memiliki keahlian meracik prompt AI—termasuk mengeksplorasi gaya humor (jokes) dalam perintah AI—untuk menghasilkan konten yang interaktif dan menarik.",
    },
    {
      id: "organization",
      category: "ORGANISASI",
      title: "Pengalaman OSIS",
      content:
        "Berperan aktif sebagai pengurus OSIS selama 2 tahun berturut-turut yang mengasah jiwa kepemimpinan, tanggung jawab, manajemen acara, serta kerja sama tim dalam berbagai kegiatan sekolah.",
    },
  ];

  // Filter Section berdasarkan pencarian
  const filteredSections = queryClean
    ? sections.filter(
        (sec) =>
          sec.title.toLowerCase().includes(queryClean) ||
          sec.category.toLowerCase().includes(queryClean) ||
          sec.content.toLowerCase().includes(queryClean)
      )
    : sections;

  // Handler saat ditekan Enter di Search Bar
  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (queryClean !== "" && filteredSections.length > 0) {
      const targetId = filteredSections[0].id;
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex bg-[var(--background)] text-[var(--foreground)]">
      {/* 1. SIDEBAR (Dapat Buka / Tutup di Desktop & Mobile) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-[var(--border)] bg-[var(--background)] p-6 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-semibold tracking-wide">
            EL<span className="text-[var(--gold)]">.</span>
          </span>
          <button
            onClick={() => setIsSidebarOpen(false)}
            title="Tutup Sidebar"
            className="rounded-lg p-1 text-[var(--muted)] hover:bg-[var(--border)]/30 hover:text-[var(--foreground)] transition-colors"
          >
            ✕
          </button>
        </div>

        {/* SEARCH BAR */}
        <form onSubmit={handleSearchSubmit} className="relative mt-6">
          <input
            type="text"
            placeholder="Cari..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2 pl-9 text-sm text-[var(--foreground)] placeholder-[var(--muted)] outline-none transition-all focus:border-[var(--gold)]"
          />
          <button
            type="submit"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
          >
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>

        <nav className="mt-8">
          <ul className="flex flex-col gap-3 text-sm font-medium text-[var(--muted)]">
            <li>
              <a
                href="#about"
                className="block rounded-lg px-3 py-2 hover:bg-[var(--border)]/30 hover:text-[var(--foreground)]"
              >
                Tentang
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className="block rounded-lg px-3 py-2 hover:bg-[var(--border)]/30 hover:text-[var(--foreground)]"
              >
                Prestasi MLBB
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block rounded-lg px-3 py-2 hover:bg-[var(--border)]/30 hover:text-[var(--foreground)]"
              >
                Keahlian & AI
              </a>
            </li>
            <li>
              <a
                href="#organization"
                className="block rounded-lg px-3 py-2 hover:bg-[var(--border)]/30 hover:text-[var(--foreground)]"
              >
                Organisasi
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block rounded-lg px-3 py-2 hover:bg-[var(--border)]/30 hover:text-[var(--foreground)]"
              >
                Kontak
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Overlay Gelap Saat Sidebar Terbuka di Layar Kecil/Mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      {/* 2. AREA UTAMA KONTEN */}
      <div
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${
          isSidebarOpen ? "md:ml-64" : "ml-0"
        }`}
      >
        {/* Header dengan Tombol Buka Sidebar */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[var(--border)] bg-[var(--background)]/80 px-6 py-4 backdrop-blur-md">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm font-medium text-[var(--foreground)] hover:border-[var(--gold)] transition-colors"
          >
            ☰ {isSidebarOpen ? "Tutup Menu" : "Buka Menu"}
          </button>
          
          <span className="font-display text-xl font-semibold tracking-wide">
            EL<span className="text-[var(--gold)]">.</span>
          </span>
        </header>

        <main className="mx-auto max-w-4xl px-6 flex-1 w-full">
          {/* Hero Section */}
          <section className="bg-grid relative flex min-h-[80vh] flex-col justify-center overflow-hidden">
            <div className="glow-pulse pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold)] opacity-40 blur-[110px]" />
            <p className="animate-fade-up font-display text-sm tracking-[0.3em] text-[var(--gold)]">
              SISWA · ORGANISATORIS · CREATIVE
            </p>
            <h1
              className="animate-fade-up font-display text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
              style={{ animationDelay: "0.1s" }}
            >
              El
            </h1>
            <p
              className="animate-fade-up mt-5 max-w-lg text-lg leading-relaxed text-[var(--muted)]"
              style={{ animationDelay: "0.2s" }}
            >
              Siswa yang aktif dalam organisasi sekolah serta berpengalaman meraih podium di tingkat kota dan kabupaten.
            </p>
            <div
              className="animate-fade-up mt-8 flex gap-4"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#achievements"
                className="rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[#12100a] transition-transform duration-300 hover:scale-105"
              >
                Lihat Prestasi
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors duration-300 hover:border-[var(--gold)]"
              >
                Hubungi Saya
              </a>
            </div>
          </section>

          {/* Section Tentang */}
          <section id="about" className="animate-fade-up border-t border-[var(--border)] py-16">
            <p className="font-display text-sm tracking-[0.3em] text-[var(--gold)]">
              TENTANG
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold">
              Dedikasi Organisasi & Kreativitas
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">
              Saya El. Berfokus pada pengembangan karya visual, pemanfaatan AI, serta aktif berkontribusi dalam berbagai agenda sekolah dan kegiatan esports secara terstruktur.
            </p>
          </section>

          {/* Section Dinamis Berdasarkan Pencarian */}
          {filteredSections.length > 0 ? (
            filteredSections.map((sec) => (
              <section
                key={sec.id}
                id={sec.id}
                className="animate-fade-up border-t border-[var(--border)] py-16"
              >
                <p className="font-display text-sm tracking-[0.3em] text-[var(--gold)]">
                  {sec.category}
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold">
                  {sec.title}
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">
                  {sec.content}
                </p>
              </section>
            ))
          ) : (
            <div className="border-t border-[var(--border)] py-16 text-center text-[var(--muted)] italic">
              Informasi tidak ditemukan untuk kata kunci "{searchQuery}"...
            </div>
          )}

          {/* Section Kontak */}
          <section id="contact" className="animate-fade-up border-t border-[var(--border)] py-16">
            <p className="font-display text-sm tracking-[0.3em] text-[var(--gold)]">
              KONTAK
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold">
              Mari Terhubung
            </h2>
            <div className="mt-4 text-sm leading-relaxed text-[var(--foreground)]">
              <p className="mb-2 text-[var(--muted)]">Berikut kontak saya:</p>
              <p>Email: gabrieljavas27@gmail.com</p>
              <p>Instagram: @javshcee</p>
            </div>
          </section>
        </main>

        <footer className="border-t border-[var(--border)] py-8 text-center text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} El. Semua hak dilindungi.
        </footer>
      </div>
    </div>
  );
}