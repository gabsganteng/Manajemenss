'use client';

import { 
  Users, 
  GraduationCap, 
  TrendingUp, 
  AlertTriangle, 
  BarChart3, 
  PieChart as PieIcon, 
  Activity, 
  Target 
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  AreaChart, 
  Area 
} from "recharts";

// Data Grafik Siswa per Kelas
const classData = [
  { className: "XI RPL 1", LakiLaki: 2, Perempuan: 1 },
  { className: "XI RPL 2", LakiLaki: 2, Perempuan: 1 },
  { className: "XII RPL 1", LakiLaki: 2, Perempuan: 1 },
];

// Data Grafik Rasio Jenis Kelamin
const genderData = [
  { name: "Laki-laki", value: 60, color: "#2563eb" },
  { name: "Perempuan", value: 40, color: "#ec4899" },
];

// Data Grafik Tren Pelanggaran 6 Bulan Terakhir
const trendData = [
  { month: "2025-06", Pelanggaran: 4, Diselesaikan: 0 },
  { month: "2025-07", Pelanggaran: 4, Diselesaikan: 0 },
  { month: "2025-08", Pelanggaran: 4, Diselesaikan: 0 },
  { month: "2025-09", Pelanggaran: 4, Diselesaikan: 0 },
  { month: "2025-10", Pelanggaran: 7, Diselesaikan: 0 },
  { month: "2025-11", Pelanggaran: 0, Diselesaikan: 0 },
];

// Data Top 5 Jenis Pelanggaran
const jenisPelanggaranData = [
  { name: "Terlambat masuk kelas", count: 12, color: "bg-red-500" },
  { name: "Tidak masuk tanpa keterangan", count: 4, color: "bg-orange-500" },
  { name: "Tidak memakai sepatu hitam", count: 3, color: "bg-amber-500" },
  { name: "Tidak mengerjakan tugas", count: 3, color: "bg-yellow-500" },
  { name: "Tidur saat pelajaran", count: 3, color: "bg-lime-500" },
];

export default function DashboardPage() {
  return (
    <div className="flex-1 p-8 flex flex-col gap-8 max-w-7xl mx-auto w-full animate-in fade-in duration-500 bg-slate-50/50 min-h-screen">
      {/* Header Judul */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard Siswa</h1>
        <span className="text-sm font-medium text-slate-500">SMK Telekomunikasi Tunas Harapan</span>
      </div>

      {/* Grid 4 Kartu Statistik */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <Card className="rounded-[28px] shadow-xl shadow-blue-500/5 bg-white border border-slate-100/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <p className="text-sm font-medium text-slate-400">Siswa</p>
              <Badge variant="secondary" className="mt-1 text-[10px] font-semibold border-0 bg-slate-100 text-slate-600">Aktif</Badge>
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-[20px] text-white shadow-md shadow-blue-100 flex items-center justify-center transition-transform hover:scale-110">
              <Users className="h-6 w-6" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-slate-900">10</div>
            <p className="text-xs text-slate-400 mt-1">Siswa aktif</p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="rounded-[28px] shadow-xl shadow-blue-500/5 bg-white border border-slate-100/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <p className="text-sm font-medium text-slate-400">Kelas</p>
            <div className="w-12 h-12 bg-emerald-500 rounded-[20px] text-white shadow-md shadow-emerald-100 flex items-center justify-center transition-transform hover:scale-110">
              <GraduationCap className="h-6 w-6" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-slate-900">4</div>
            <p className="text-xs text-slate-400 mt-1">Kelas aktif</p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="rounded-[28px] shadow-xl shadow-blue-500/5 bg-white border border-slate-100/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <p className="text-sm font-medium text-slate-400">Rata-rata/Kelas</p>
            <div className="w-12 h-12 bg-amber-500 rounded-[20px] text-white shadow-md shadow-amber-100 flex items-center justify-center transition-transform hover:scale-110">
              <TrendingUp className="h-6 w-6" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-slate-900">3</div>
            <p className="text-xs text-slate-400 mt-1">Siswa per kelas</p>
          </CardContent>
        </Card>

        {/* Card 4 */}
        <Card className="rounded-[28px] shadow-xl shadow-blue-500/5 bg-white border border-slate-100/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <p className="text-sm font-medium text-slate-400">Pelanggaran</p>
            <div className="w-12 h-12 bg-red-500 rounded-[20px] text-white shadow-md shadow-red-100 flex items-center justify-center transition-transform hover:scale-110">
              <AlertTriangle className="h-6 w-6" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-slate-900">69</div>
            <p className="text-xs text-slate-400 mt-1">Total pelanggaran</p>
          </CardContent>
        </Card>
      </div>

      {/* SEKSI GRAFIK UTAMA */}
      <div className="flex flex-col gap-6">
        
        {/* 1. SISWA PER KELAS */}
        <Card className="rounded-[32px] shadow-xl shadow-blue-500/5 bg-white border border-slate-100/80 p-2 transition-all hover:shadow-blue-500/10">
          <CardHeader className="flex flex-row items-center justify-between pb-4 mb-2 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 rounded-2xl text-blue-600">
                <BarChart3 className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-bold text-slate-900">Siswa per Kelas</CardTitle>
            </div>
            <Badge variant="outline" className="px-3 py-1 font-semibold text-slate-600 border-slate-200 rounded-xl">Gender Distribution</Badge>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="w-full h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={classData}>
                  <XAxis dataKey="className" stroke="#94a3b8" fontSize={12} tickLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)" }} />
                  <Bar 
                    dataKey="LakiLaki" 
                    fill="#2563eb" 
                    radius={[8, 8, 0, 0]} 
                    isAnimationActive={true} 
                    animationDuration={1500}
                    animationBegin={200}
                    animationEasing="ease-out"
                  />
                  <Bar 
                    dataKey="Perempuan" 
                    fill="#ec4899" 
                    radius={[8, 8, 0, 0]} 
                    isAnimationActive={true} 
                    animationDuration={1800}
                    animationBegin={400}
                    animationEasing="ease-out"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* 2. JENIS KELAMIN */}
        <Card className="rounded-[32px] shadow-xl shadow-blue-500/5 bg-white border border-slate-100/80 p-2 transition-all hover:shadow-blue-500/10">
          <CardHeader className="flex flex-row items-center justify-between pb-4 mb-2 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 rounded-2xl text-blue-600">
                <PieIcon className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-bold text-slate-900">Jenis Kelamin</CardTitle>
            </div>
            <Badge variant="outline" className="px-3 py-1 font-semibold text-slate-600 border-slate-200 rounded-xl">Total Ratio</Badge>
          </CardHeader>
          <CardContent className="pt-2 flex flex-col items-center justify-center">
            <div className="w-full h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie 
                    data={genderData} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={60} 
                    outerRadius={80} 
                    paddingAngle={6}
                    isAnimationActive={true}
                    animationDuration={1500}
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: "16px", border: "1px solid #e2e8f0" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center gap-6 mt-2 pb-2">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600"><span className="w-3 h-3 bg-blue-600 rounded-md"></span>Laki-laki (60%)</div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600"><span className="w-3 h-3 bg-pink-500 rounded-md"></span>Perempuan (40%)</div>
            </div>
          </CardContent>
        </Card>

        {/* 3. TREN PELANGGARAN */}
        <Card className="rounded-[32px] shadow-xl shadow-blue-500/5 bg-white border border-slate-100/80 p-2 transition-all hover:shadow-blue-500/10">
          <CardHeader className="flex flex-row items-center justify-between pb-4 mb-2 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-red-50 rounded-2xl text-red-600">
                <Activity className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-bold text-slate-900">Tren Pelanggaran</CardTitle>
            </div>
            <Badge className="bg-red-600 text-white font-semibold rounded-xl px-3 py-1 border-0">6 Bulan Terakhir</Badge>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="w-full h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="colorPelanggaran" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.35}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0.0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)" }} />
                  <Area 
                    type="monotone" 
                    dataKey="Pelanggaran" 
                    stroke="#ef4444" 
                    strokeWidth={2.5} 
                    fillOpacity={1} 
                    fill="url(#colorPelanggaran)" 
                    isAnimationActive={true}
                    animationDuration={1500}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="Diselesaikan" 
                    stroke="#10b981" 
                    strokeWidth={2.5} 
                    fill="transparent" 
                    isAnimationActive={true}
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* 4. JENIS PELANGGARAN (TOP 5) */}
        <Card className="rounded-[32px] shadow-xl shadow-blue-500/5 bg-white border border-slate-100/80 p-2 transition-all hover:shadow-blue-500/10">
          <CardHeader className="flex flex-row items-center justify-between pb-4 mb-2 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-orange-50 rounded-2xl text-orange-600">
                <Target className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-bold text-slate-900">Jenis Pelanggaran</CardTitle>
            </div>
            <Badge variant="secondary" className="font-semibold bg-slate-100 text-slate-600 rounded-xl px-3 py-1 border-0">Top 5</Badge>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 py-4">
            {jenisPelanggaranData.map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className={`w-3 h-3 rounded-full shrink-0 ${item.color} transition-transform group-hover:scale-125`}></span>
                  <span className="text-sm font-semibold text-slate-800 truncate group-hover:text-blue-600 transition-colors">{item.name}</span>
                </div>
                <div className="flex items-center gap-4 w-48 shrink-0 justify-end">
                  <div className="w-28 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-slate-300 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${(item.count / 15) * 100}%` }} 
                    />
                  </div>
                  <span className="text-sm font-bold text-slate-800 w-6 text-right">{item.count}</span>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-100">
              <span className="text-xs font-medium text-slate-400">Total pelanggaran</span>
              <span className="text-sm font-bold text-slate-800">69</span>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}