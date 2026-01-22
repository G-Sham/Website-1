"use client";

import { BentoCard } from "@/components/ui/BentoCard";
import { Sidebar } from "@/components/Sidebar";
import { LogIn, Mail, Lock, ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

            <Sidebar />

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full max-w-lg relative z-10"
            >
                <BentoCard className="p-10 bg-white/80 border-white/40 shadow-2xl" animate={false}>
                    <div className="flex flex-col items-center gap-2 mb-10 text-center">
                        <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-4">
                            <LogIn className="text-white" size={32} />
                        </div>
                        <h1 className="text-3xl font-bold text-slate-800">Welcome Back</h1>
                        <p className="text-slate-500">Log in to your weightless dashboard.</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="email"
                                    placeholder="name@void.com"
                                    className="w-full bg-slate-100/50 border border-slate-200/50 rounded-[20px] py-4 pl-14 pr-6 text-sm focus:ring-2 ring-indigo-500 outline-none transition-all focus:bg-white"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-slate-100/50 border border-slate-200/50 rounded-[20px] py-4 pl-14 pr-6 text-sm focus:ring-2 ring-indigo-500 outline-none transition-all focus:bg-white"
                                />
                            </div>
                            <div className="flex justify-end p-2">
                                <Link href="#" className="text-xs text-indigo-500 font-bold hover:underline">Forgot password?</Link>
                            </div>
                        </div>

                        <button className="w-full bg-indigo-600 text-white py-4 rounded-[20px] font-bold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group">
                            Continue
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <div className="relative h-px bg-slate-200 my-8">
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[4px]">or</span>
                        </div>

                        <button className="w-full bg-slate-900 text-white py-4 rounded-[20px] font-bold shadow-lg hover:bg-black transition-all flex items-center justify-center gap-3">
                            <Github size={20} />
                            Sign in with Github
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-slate-500 font-medium">
                        New to the void? <Link href="#" className="text-indigo-600 font-bold hover:underline">Create an account</Link>
                    </p>
                </BentoCard>
            </motion.div>
        </main>
    );
}
