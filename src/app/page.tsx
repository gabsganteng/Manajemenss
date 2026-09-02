"use client";

import { useState } from "react";

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#e5e7eb] text-slate-900 font-sans relative overflow-x-hidden">
      
      {/* 2. KONTEN UTAMA HALAMAN */}
      <main
        className={`flex-1 min-h-screen relative flex flex-col justify-center px-6 sm:px-12 md:px-20 py-12 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "md:ml-64 ml-0" : "ml-0"
        }`}
      >
        

        {/* Hero Section Responsif */}
        <div className="max-w-3xl mt-10 sm:mt-0">
          {/* Logo NEXT.js */}
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-black">
            NEXT<span className="text-xs sm:text-sm align-super ml-0.5">JS</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-5">
            Saya Gabriel Dari Kelas XI PPLG
          </h1>

          {/* Subheading / Deskripsi */}
          <p className="text-slate-600 mb-8 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
            lagi belajar next.js, dengan bikin projek Sistem Manajemen Siswa.
          </p>

          {/* Tombol Action */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2.5 bg-black hover:bg-slate-800 text-white px-6 py-3 rounded-md text-base font-semibold shadow-sm transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L2 19h20L12 2z" />
              </svg>
              Deploy Now
            </button>

            <button className="text-base text-slate-700 hover:text-black font-semibold px-4 py-3 transition-colors">
              Documentation
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}