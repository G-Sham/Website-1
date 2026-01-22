"use client";

import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { BentoCard } from "@/components/ui/BentoCard";
import { Clock } from "lucide-react";

export default function OrdersPage() {
    return (
        <main className="min-h-screen bg-[#f8fafc] pl-32 pt-32 pr-6 pb-6">
            <Sidebar />
            <Navbar />

            <h1 className="text-4xl font-bold text-slate-800 mb-8">Order History</h1>

            <BentoCard className="flex flex-col items-center justify-center min-h-[400px] text-center gap-4">
                <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center">
                    <Clock size={32} />
                </div>
                <h2 className="text-xl font-bold text-slate-700">No orders yet.</h2>
                <p className="text-slate-500 max-w-xs">Once you make a purchase, it will appear here in the void.</p>
            </BentoCard>
        </main>
    );
}
