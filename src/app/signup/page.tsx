"use client";

import { BentoCard } from "@/components/ui/BentoCard";
import { Sidebar } from "@/components/Sidebar";
import { UserPlus, Mail, Lock, User, ArrowRight, Github, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 2000);
    };

    return (
        <main className="min-h-screen relative overflow-hidden flex items-center justify-center p-6">
            {/* Improved Motion Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-indigo-500/20 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-pink-500/20 blur-[120px] rounded-full"
                />
            </div>

            <Sidebar />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full max-w-lg relative z-10"
            >
                <BentoCard className="p-10 bg-white/60 dark:bg-slate-900/60 border-white/40 dark:border-white/10 shadow-2xl backdrop-blur-xl" animate={false}>
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                            >
                                <div className="flex flex-col items-center gap-2 mb-10 text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-4 rotate-3">
                                        <UserPlus className="text-white" size={32} />
                                    </div>
                                    <h1 className="text-4xl font-black text-slate-800 dark:text-white tracking-tight">Enter the Void</h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium">Create your weightless account today.</p>
                                </div>

                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">First Name</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="John"
                                                className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-white/10 rounded-[20px] py-4 px-6 text-sm focus:ring-2 ring-indigo-500 outline-none transition-all focus:bg-white dark:focus:bg-slate-800 dark:text-white"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Last Name</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Doe"
                                                className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-white/10 rounded-[20px] py-4 px-6 text-sm focus:ring-2 ring-indigo-500 outline-none transition-all focus:bg-white dark:focus:bg-slate-800 dark:text-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                            <input
                                                required
                                                type="email"
                                                placeholder="name@void.com"
                                                className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-white/10 rounded-[20px] py-4 pl-14 pr-6 text-sm focus:ring-2 ring-indigo-500 outline-none transition-all focus:bg-white dark:focus:bg-slate-800 dark:text-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Password</label>
                                        <div className="relative">
                                            <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                            <input
                                                required
                                                type="password"
                                                placeholder="••••••••"
                                                className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-white/10 rounded-[20px] py-4 pl-14 pr-6 text-sm focus:ring-2 ring-indigo-500 outline-none transition-all focus:bg-white dark:focus:bg-slate-800 dark:text-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 px-4 py-2">
                                        <input required type="checkbox" id="terms" className="rounded-md border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                                        <label htmlFor="terms" className="text-xs text-slate-500 dark:text-slate-400 font-medium cursor-pointer">
                                            I agree to the <span className="text-indigo-600 font-bold">Terms of the Void</span>
                                        </label>
                                    </div>

                                    <button
                                        disabled={isLoading}
                                        className="w-full bg-slate-900 dark:bg-indigo-600 text-white py-5 rounded-[22px] font-black shadow-xl hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 group mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? "Entering the Void..." : "Create Account"}
                                        {!isLoading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                                    </button>

                                    <div className="relative h-px bg-slate-200 dark:bg-slate-700 my-8">
                                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 px-4 text-[10px] font-black text-slate-400 uppercase tracking-[4px]">or</span>
                                    </div>

                                    <button type="button" className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white py-4 rounded-[20px] font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-3">
                                        <Github size={20} />
                                        Sign up with Github
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center text-center py-10"
                            >
                                <div className="w-24 h-24 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h2 className="text-3xl font-black text-slate-800 dark:text-white mb-2">Welcome to the Void!</h2>
                                <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">Your account has been successfully created.</p>
                                <Link href="/login" className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 transition-all">
                                    Proceed to Login
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <p className="mt-8 text-center text-sm text-slate-500 font-medium">
                        Already a member? <Link href="/login" className="text-indigo-600 font-black hover:underline">Log in</Link>
                    </p>
                </BentoCard>
            </motion.div>
        </main>
    );
}
