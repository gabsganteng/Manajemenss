'use client';

import { useState } from "react";
import { Users, GraduationCap, TrendingUp, AlertTriangle, BarChart3, PieChart, Activity } from "lucide-react";

export default function DashboardPage() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <div className="flex-1 p-8 flex flex-col gap-8 max-w-7xl mx-auto w-full">
      {/* Header Judul */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard Siswa</h1>
        <span className="text-sm font-medium text-slate-500">SMK Telekomunikasi Tunas Harapan</span>
      </div>

      {/* Grid 4 Kartu Statistik */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1: Siswa Aktif */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              <span className="text-sm text-slate-400 font-medium">Siswa</span>
              <span className="text-[11px] font-semibold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md w-fit mt-1">Aktif</span>
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-[20px] text-white shadow-md shadow-blue-100 flex items-center justify-center">
              <Users className="h-6 w-6" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900">10</div>
            <p className="text-xs text-slate-400 mt-1">Siswa aktif</p>
          </div>
        </div>

        {/* Card 2: Kelas */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-slate-400 font-medium">Kelas</span>
            <div className="w-12 h-12 bg-emerald-500 rounded-[20px] text-white shadow-md shadow-emerald-100 flex items-center justify-center">
              <GraduationCap className="h-6 w-6" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900">4</div>
            <p className="text-xs text-slate-400 mt-1">Kelas aktif</p>
          </div>
        </div>

        {/* Card 3: Rata-rata/Kelas */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-slate-400 font-medium">Rata-rata/Kelas</span>
            <div className="w-12 h-12 bg-amber-500 rounded-[20px] text-white shadow-md shadow-amber-100 flex items-center justify-center">
              <TrendingUp className="h-6 w-6" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900">3</div>
            <p className="text-xs text-slate-400 mt-1">Siswa per kelas</p>
          </div>
        </div>

        {/* Card 4: Pelanggaran */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-slate-400 font-medium">Pelanggaran</span>
            <div className="w-12 h-12 bg-red-500 rounded-[20px] text-white shadow-md shadow-red-100 flex items-center justify-center">
              <AlertTriangle className="h-6 w-6" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900">69</div>
            <p className="text-xs text-slate-400 mt-1">Total pelanggaran</p>
          </div>
        </div>
      </div>

      {/* URUTAN ATAS KE BAWAH */}
      <div className="flex flex-col gap-6">
        
        {/* 1. CHART SISWA PER KELAS */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 rounded-2xl text-blue-600">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Siswa per Kelas</h2>
            </div>
            <span className="text-xs font-semibold px-4 py-2 rounded-xl text-slate-600 bg-slate-50 border border-slate-100 shadow-sm">
              Gender Distribution
            </span>
          </div>

          <div className="pt-4 pb-2 relative">
            <div className="relative h-60 flex items-end pl-12 pr-6 border-l border-b border-slate-200 ml-4 mb-8">
              {activeTooltip && (
                <div className="absolute top-4 right-1/3 bg-white border border-slate-200 shadow-xl rounded-2xl p-4 z-20 w-44 animate-in fade-in zoom-in-95 duration-150">
                  <p className="text-sm font-bold text-slate-800 mb-2">{activeTooltip}</p>
                  <div className="space-y-1 text-xs font-medium">
                    <div className="flex justify-between items-center text-blue-600">
                      <span>Laki-Laki :</span>
                      <span className="font-bold">2</span>
                    </div>
                    <div className="flex justify-between items-center text-pink-600">
                      <span>Perempuan :</span>
                      <span className="font-bold">1</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="absolute left-[-40px] top-0 h-full flex flex-col justify-between text-xs font-medium text-slate-400 py-1">
                <span>3</span>
                <span>2.25</span>
                <span>1.5</span>
                <span>0.75</span>
                <span>0</span>
              </div>

              <div className="flex items-end justify-around h-full w-full pt-4">
                <div 
                  className="relative flex flex-col items-center h-full cursor-pointer group"
                  onMouseEnter={() => setActiveTooltip("XI RPL 1")}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="flex items-end gap-3 h-full">
                    <div className="w-14 bg-blue-500 hover:bg-blue-600 transition-colors rounded-t-xl h-48 shadow-sm"></div>
                    <div className="w-14 bg-pink-500 hover:bg-pink-600 transition-colors rounded-t-xl h-32 shadow-sm"></div>
                  </div>
                  <span className="absolute -bottom-8 text-xs font-semibold text-slate-600 group-hover:text-blue-600">XI RPL 1</span>
                </div>

                <div 
                  className="relative flex flex-col items-center h-full cursor-pointer group"
                  onMouseEnter={() => setActiveTooltip("XI RPL 2")}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="flex items-end gap-3 h-full">
                    <div className="w-14 bg-blue-500 hover:bg-blue-600 transition-colors rounded-t-xl h-32 shadow-sm"></div>
                    <div className="w-14 bg-pink-500 hover:bg-pink-600 transition-colors rounded-t-xl h-20 shadow-sm"></div>
                  </div>
                  <span className="absolute -bottom-8 text-xs font-semibold text-slate-600 group-hover:text-blue-600">XI RPL 2</span>
                </div>

                <div 
                  className="relative flex flex-col items-center h-full cursor-pointer group"
                  onMouseEnter={() => setActiveTooltip("XII RPL 1")}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="flex items-end gap-3 h-full">
                    <div className="w-14 bg-blue-500 hover:bg-blue-600 transition-colors rounded-t-xl h-20 shadow-sm"></div>
                    <div className="w-14 bg-pink-500 hover:bg-pink-600 transition-colors rounded-t-xl h-20 shadow-sm"></div>
                  </div>
                  <span className="absolute -bottom-8 text-xs font-semibold text-slate-600 group-hover:text-blue-600">XII RPL 1</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-md"></span>
                <span className="text-xs font-medium text-slate-600">Laki-Laki</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-pink-500 rounded-md"></span>
                <span className="text-xs font-medium text-slate-600">Perempuan</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. CHART JENIS KELAMIN */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 rounded-2xl text-blue-600">
                <PieChart className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Jenis Kelamin</h2>
            </div>
            <span className="text-xs font-semibold px-4 py-2 rounded-xl text-slate-600 bg-slate-50 border border-slate-100 shadow-sm">
              Total Ratio
            </span>
          </div>

          <div className="py-6 flex flex-col items-center justify-center relative">
            <p className="text-sm font-semibold text-slate-600 mb-4">Laki-laki (60.0%)</p>
            <div 
              className="w-48 h-48 rounded-full relative shadow-inner"
              style={{
                background: "conic-gradient(#2563eb 0% 60%, #ec4899 60% 100%)"
              }}
            >
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-slate-400">Ratio</span>
              </div>
            </div>
            <p className="text-sm font-semibold text-pink-500 mt-4">Perempuan (40.0%)</p>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-600 rounded-md"></span>
              <span className="text-xs font-medium text-slate-600">Laki-laki</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-pink-500 rounded-md"></span>
              <span className="text-xs font-medium text-slate-600">Perempuan</span>
            </div>
          </div>
        </div>

        {/* 3. CHART TREN PELANGGARAN (PERSIS GAMBAR REFERENSI BARU) */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-red-50 rounded-2xl text-red-600">
                <Activity className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Tren Pelanggaran</h2>
            </div>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full text-white bg-red-600 shadow-sm">
              6 Bulan Terakhir
            </span>
          </div>

          <div className="pt-4 pb-2">
            <div className="relative h-64 flex items-end pl-12 pr-6 border-l border-b border-slate-200 ml-4 mb-6">
              {/* Sumbu Y */}
              <div className="absolute left-[-35px] top-0 h-full flex flex-col justify-between text-xs font-medium text-slate-400 py-1">
                <span>8</span>
                <span>6</span>
                <span>4</span>
                <span>2</span>
                <span>0</span>
              </div>

              {/* Kurva Grafik SVG Flat-to-Curve Presisi */}
              <div className="w-full h-full relative flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 600 200" preserveAspectRatio="none">
                  {/* Isian Warna Merah Muda Solid Transparan */}
                  <path
                    d="M 0,100 L 360,100 C 420,100 440,25 480,25 C 520,25 570,120 600,200 L 0,200 Z"
                    fill="rgba(248, 113, 113, 0.22)"
                  />

                  {/* Garis Kurva Merah Halus */}
                  <path
                    d="M 0,100 L 360,100 C 420,100 440,25 480,25 C 520,25 570,120 600,200"
                    fill="none"
                    stroke="#d97706" // border garis kurva merah/kecokelatan tipis
                    strokeWidth="1.8"
                    className="stroke-red-600"
                  />

                  {/* Garis Hijau di Dasar Sumbu X (Diselesaikan) */}
                  <line x1="0" y1="200" x2="600" y2="200" stroke="#34d399" strokeWidth="2.5" />
                </svg>
              </div>
            </div>

            {/* Sumbu X (Bulan) */}
            <div className="flex justify-between pl-16 pr-6 text-xs font-semibold text-slate-500 mb-6">
              <span>2025-06</span>
              <span>2025-07</span>
              <span>2025-08</span>
              <span>2025-09</span>
              <span>2025-10</span>
              <span>2025-11</span>
            </div>

            {/* Legenda Bawah dengan Titik Lingkaran Bertali */}
            <div className="flex items-center justify-center gap-8 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-emerald-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                </div>
                <span className="text-xs font-medium text-slate-600">Diselesaikan</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-red-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                </div>
                <span className="text-xs font-medium text-slate-600">Pelanggaran</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}