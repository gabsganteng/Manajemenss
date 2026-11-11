"use client";

import { ArrowLeft, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountTerms, setAccountTerms] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!accountTerms) {
            alert("You must accept the terms and conditions to register.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        console.log("Form submitted", formData);
        router.push("/auth/login");
    };

    const getPasswordStrength = (password: string) => {
        if (password.length > 12) return { text: "Strong", color: "text-green-600" };
        if (password.length > 8) return { text: "Medium", color: "text-yellow-600" };
        if (password.length < 6) return { text: "Weak", color: "text-red-600" };
        return { text: "", color: "" };
    };

    const passwordStrength = getPasswordStrength(formData.password);
    const isFormValid = accountTerms && formData.password && formData.password === formData.confirmPassword;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* KOTAK REGISTER MENGAMBANG (FLOATING CARD) DENGAN SUDUT MELENGKUNG HALUS DAN GARIS TIPIS */}
                <div className="bg-white/90 backdrop-blur-md rounded-[36px] shadow-2xl shadow-blue-500/10 border border-blue-100/80 p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-blue-500/15 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    
                    {/* Layer Soft Gradient Inside */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/10 rounded-[36px] pointer-events-none" />
                    
                    <div className="relative z-10">
                        {/* Header Profile Icon & Title */}
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30 transition-transform duration-300 hover:scale-105">
                                <User className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-1">Create Account</h1>
                            <p className="text-sm font-medium text-slate-500">Join us today! It takes only a few steps.</p>
                        </div>

                        {/* Form Inputs */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-600 ml-1" htmlFor="username">
                                    Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        name="username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="w-full pl-11 pr-4 py-3 border border-slate-200/80 rounded-2xl bg-white/80 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 shadow-sm"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-600 ml-1" htmlFor="email">
                                    Email
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
                                {formData.password && (
                                    <div className={`text-xs font-semibold mt-1 ml-1 ${passwordStrength.color}`}>
                                        {passwordStrength.text}
                                    </div>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-600 ml-1" htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        type={showConfirmPassword ? "text" : "password"}
                                        className="w-full pl-11 pr-12 py-3 border border-slate-200/80 rounded-2xl bg-white/80 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 shadow-sm"
                                        placeholder="Enter your confirm password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                                {formData.confirmPassword &&
                                    (formData.password !== formData.confirmPassword ? (
                                        <div className="text-xs font-semibold mt-1 ml-1 text-red-500">
                                            Confirm Password does not match
                                        </div>
                                    ) : (
                                        <div className="text-xs font-semibold mt-1 ml-1 text-green-600">
                                            Confirm Password matches
                                        </div>
                                    ))}
                            </div>

                            {/* Terms and Conditions */}
                            <div className="flex items-center gap-2 pt-1">
                                <input
                                    type="checkbox"
                                    checked={accountTerms}
                                    onChange={e => setAccountTerms(e.target.checked)}
                                    name="terms"
                                    id="terms"
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="terms" className="text-sm text-slate-600">
                                    I agree to the{" "}
                                    <a href="#" className="text-blue-600 font-semibold hover:underline">
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={!isFormValid}
                                className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3.5 rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-500/25 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                Register
                            </button>

                            {/* Login Link */}
                            <div className="text-center pt-2">
                                <p className="text-sm font-medium text-slate-500">
                                    Already have an account?{" "}
                                    <a href="/auth/login" className="text-blue-600 font-semibold hover:underline">
                                        Login
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