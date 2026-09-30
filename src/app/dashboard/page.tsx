"use client";

export default function DashboardPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "75vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Label NEXT.JS */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
        <span style={{ fontSize: "16px", fontWeight: "900", letterSpacing: "-0.5px", color: "#0f172a" }}>
          NEXT<sup style={{ fontSize: "10px" }}>JS</sup>
        </span>
      </div>

      {/* Judul Utama */}
      <h1 style={{ fontSize: "42px", fontWeight: "800", color: "#0f172a", lineHeight: "1.2", marginBottom: "16px", maxWidth: "700px" }}>
        Saya Gabriel Dari Kelas XI C PPLG
      </h1>

      {/* Deskripsi */}
      <p style={{ fontSize: "16px", color: "#64748b", marginBottom: "32px" }}>
        lagi belajar next.js, dengan bikin projek Sistem Manajemen Siswa.
      </p>

      {/* Tombol Aksi */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <button
          style={{
            backgroundColor: "#0f172a",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 20px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>▲</span> Deploy Now
        </button>

        <a
          href="#"
          style={{
            color: "#0f172a",
            fontSize: "14px",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Documentation
        </a>
      </div>
    </div>
  );
}