"use client";

interface TopbarProps {
  onToggleSidebar: () => void;
}

export default function Topbar({ onToggleSidebar }: TopbarProps) {
  return (
    <header
      style={{
        height: "70px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e2e8f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        position: "sticky",
        top: 0,
        zIndex: 40,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* Tombol garis tiga yang rapi dan berfungsi */}
        <button
          onClick={onToggleSidebar}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#334155",
            borderRadius: "6px",
          }}
          title="Toggle Sidebar"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <span style={{ fontSize: "15px", fontWeight: "600", color: "#0f172a" }}>
          SMK Telekomunikasi Tunas Harapan
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "14px", color: "#64748b", fontWeight: "500" }}>Dashboard</span>
      </div>
    </header>
  );
}