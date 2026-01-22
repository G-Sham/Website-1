"use client";

import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { BentoCard } from "@/components/ui/BentoCard";
import { User, Bell, Shield, Palette, Globe, HardDrive } from "lucide-react";
import { motion } from "framer-motion";

const settingsGroups = [
    {
        title: "Personal",
        items: [
            { icon: User, label: "Profile Information", desc: "Update your name, email and avatar." },
            { icon: Bell, label: "Notifications", desc: "Configure how you receive alerts." },
        ]
    },
    {
        title: "Security",
        items: [
            { icon: Shield, label: "Privacy & Security", desc: "Manage password and 2FA settings." },
            { icon: HardDrive, label: "Data & Storage", desc: "Control your cloud footprint." },
        ]
    },
    {
        title: "Preference",
        items: [
            { icon: Palette, label: "Appearance", desc: "Customize theme and animations." },
            { icon: Globe, label: "Language", desc: "Select your preferred display language." },
        ]
    }
];

export default function SettingsPage() {
    return (
        <main className="min-h-screen relative overflow-hidden flex flex-col pl-32 pt-32 pr-6 pb-6">
            <div className="bg-mesh bg-animate"></div>
            <Sidebar />
            <Navbar />

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="max-w-4xl"
            >
                <h1 className="text-4xl font-black text-slate-800 mb-2">Settings</h1>
                <p className="text-slate-500 font-medium mb-10">Configure your weightless experience.</p>

                <div className="space-y-12">
                    {settingsGroups.map((group, idx) => (
                        <div key={idx} className="space-y-4">
                            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">{group.title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {group.items.map((item, i) => (
                                    <BentoCard key={i} className="group hover:bg-white/60 cursor-pointer flex items-center gap-6 p-6 bg-white/40 border-white/40" animate={false}>
                                        <div className="w-14 h-14 bg-indigo-500/10 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800">{item.label}</h3>
                                            <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                                        </div>
                                    </BentoCard>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </main>
    );
}
