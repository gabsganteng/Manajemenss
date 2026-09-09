"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    router.push("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8fafc",
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "380px",
          backgroundColor: "#ffffff",
          borderRadius: "28px",
          padding: "36px 32px",
          boxShadow: isHovered
            ? "0 20px 35px -10px rgba(15, 23, 42, 0.08), 0 8px 16px -6px rgba(15, 23, 42, 0.04)"
            : "0 12px 28px -8px rgba(15, 23, 42, 0.05), 0 4px 12px -4px rgba(15, 23, 42, 0.03)",
          border: "1px solid #e2e8f0",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: isHovered ? "translateY(-3px)" : "translateY(0)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#0f172a",
              margin: "0 0 6px 0",
              letterSpacing: "-0.5px",
            }}
          >
            Selamat Datang
          </h1>
          <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>
            Masukkan akun kamu untuk melanjutkan
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "12px", fontWeight: "600", color: "#334155", marginLeft: "4px" }}>
              Email
            </label>
            <input
              type="email"
              placeholder="nama@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                height: "44px",
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                backgroundColor: "#f8fafc",
                padding: "0 16px",
                fontSize: "14px",
                outline: "none",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#0f172a";
                e.target.style.backgroundColor = "#ffffff";
                e.target.style.boxShadow = "0 0 0 4px rgba(15, 23, 42, 0.06)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.backgroundColor = "#f8fafc";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "12px", fontWeight: "600", color: "#334155", marginLeft: "4px" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                height: "44px",
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                backgroundColor: "#f8fafc",
                padding: "0 16px",
                fontSize: "14px",
                outline: "none",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#0f172a";
                e.target.style.backgroundColor = "#ffffff";
                e.target.style.boxShadow = "0 0 0 4px rgba(15, 23, 42, 0.06)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.backgroundColor = "#f8fafc";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              height: "44px",
              marginTop: "8px",
              borderRadius: "14px",
              backgroundColor: "#0f172a",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: "0 4px 14px rgba(15, 23, 42, 0.12)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1e293b";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(15, 23, 42, 0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0f172a";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(15, 23, 42, 0.12)";
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p style={{ marginTop: "24px", textAlign: "center", fontSize: "13px", color: "#64748b" }}>
          Belum punya akun?{" "}
          <Link
            href="/auth/register"
            style={{ color: "#2563eb", fontWeight: "600", textDecoration: "none" }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}