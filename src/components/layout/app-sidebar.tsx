"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: "🏠" },
    { name: "Siswa", href: "/siswa", icon: "👥" },
    { name: "Kelas", href: "/kelas", icon: "📊" },
    { name: "Pelanggaran", href: "/pelanggaran", icon: "⚠️" },
  ];

  const handleLogout = () => {
    router.push("/auth/login");
  };

  return (
    <aside
      style={{
        width: "260px",
        height: "100vh",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #e2e8f0",
        display: "flex",
        flexDirection: "column",
        padding: "24px 16px",
        boxSizing: "border-box",
        fontFamily: "system-ui, -apple-system, sans-serif",
        justifyContent: "space-between",
      }}
    >
      <div>
        {/* Logo / Judul */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "0 12px", marginBottom: "32px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            S
          </div>
          <span style={{ fontSize: "15px", fontWeight: "bold", color: "#0f172a" }}>SMK Tunas Harapan</span>
        </div>

        {/* Menu Navigasi */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  color: isActive ? "#ffffff" : "#64748b",
                  backgroundColor: isActive ? "#2563eb" : "transparent",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: isActive ? "600" : "500",
                }}
              >
                <span style={{ fontSize: "16px" }}>{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bagian Bawah: Profil & Tombol Logout */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px 12px",
            backgroundColor: "#f8fafc",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "#0f172a",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "600",
              fontSize: "13px",
            }}
          >
            N
          </div>
          <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", color: "#0f172a" }}>Admin</span>
            <span style={{ fontSize: "10px", color: "#64748b", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
              admin@tunasiharapan.sch.id
            </span>
          </div>
        </div>

        {/* Tombol Logout */}
        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#fee2e2",
            color: "#dc2626",
            border: "none",
            borderRadius: "10px",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          🚪 Keluar / Logout
        </button>
      </div>
    </aside>
  );
}