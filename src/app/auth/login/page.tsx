"use client";

import { ArrowLeft, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Form submitted", formData);
        router.push("/dashboard");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* KOTAK LOGIN MENGAMBANG DENGAN GARIS TIPIS ELEGAN */}
                <div className="bg-white/90 backdrop-blur-md rounded-[36px] shadow-2xl shadow-blue-500/10 border border-blue-100/80 p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-blue-500/15 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    
                    {/* Layer Soft Gradient Inside */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/10 rounded-[36px] pointer-events-none" />
                    
                    <div className="relative z-10">
                        {/* Header Profile Icon & Title */}
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30 transition-transform duration-300 hover:scale-105">
                                <User className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-1">Welcome Back</h1>
                            <p className="text-sm font-medium text-slate-500">Sign in to your account</p>
                        </div>

                        {/* Form Inputs */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Email */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-600 ml-1" htmlFor="email">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        type="email"
                                        className="w-full pl-11 pr-4 py-3 border border-slate-200/80 rounded-2xl bg-white/80 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 shadow-sm"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-600 ml-1" htmlFor="password">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        type={showPassword ? "text" : "password"}
                                        className="w-full pl-11 pr-12 py-3 border border-slate-200/80 rounded-2xl bg-white/80 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 shadow-sm"
                                        placeholder="Enter your password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3.5 rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-500/25 active:scale-[0.98]"
                            >
                                Login
                            </button>

                            {/* Register Link */}
                            <div className="text-center pt-2">
                                <p className="text-sm font-medium text-slate-500">
                                    Don't have an account?{" "}
                                    <a href="/auth/register" className="text-blue-600 font-semibold hover:underline">
                                        Register
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}