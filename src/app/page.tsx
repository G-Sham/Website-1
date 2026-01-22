"use client";

import { BentoCard } from "@/components/ui/BentoCard";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { ArrowRight, Star, Zap, Shield, TrendingUp } from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";

export default function Home() {
  const { addToCart } = useCart();
  const featured = products[0];

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col pl-32 pt-32 pr-6 pb-6 lg:h-screen">
      <div className="bg-mesh bg-animate"></div>
      <Sidebar />
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 flex-1">
        {/* Hero Section (Large) - Now a Carousel */}
        <BentoCard className="md:col-span-2 md:row-span-2 p-0 overflow-hidden border-none shadow-indigo group min-h-[300px]">
          <HeroCarousel />
        </BentoCard>

        {/* Featured Product (Small) */}
        <BentoCard className="md:col-span-1 md:row-span-2 flex flex-col items-center justify-center gap-6 group bg-white/40">
          <div className="relative w-full aspect-square max-w-[200px]">
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform"></div>
            <img
              src={(featured.image as any).src || featured.image}
              alt={featured.name}
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl ring-1 ring-white/20 floating"
            />
          </div>
          <div className="text-center">
            <h3 className="font-black text-xl text-slate-800 tracking-tight">{featured.name}</h3>
            <p className="text-indigo-600 font-black text-2xl mt-1">${featured.price}</p>
          </div>
          <button
            onClick={() => addToCart(featured)}
            className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-pink-500 transition-colors shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            Add to Bag
          </button>
        </BentoCard>

        {/* Stats Card */}
        <BentoCard className="md:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center gap-2 bg-gradient-to-br from-pink-500/10 to-violet-500/10 border-pink-500/20">
          <TrendingUp className="text-pink-500" size={32} />
          <div className="text-4xl font-black text-slate-800">4.9/5</div>
          <div className="text-[10px] text-slate-500 font-black tracking-[0.2em] uppercase">User Rating</div>
        </BentoCard>

        {/* Next Drop Timer */}
        <BentoCard className="md:col-span-1 md:row-span-1 flex flex-col items-center justify-center gap-2 bg-slate-900 text-white border-none">
          <div className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em]">Next Drop</div>
          <div className="text-3xl font-black tracking-tighter">12:45:00</div>
        </BentoCard>

        {/* Categories/Highlights */}
        <BentoCard className="md:col-span-2 md:row-span-1 flex items-center justify-around bg-white/40">
          {[
            { icon: Star, color: "bg-amber-100 text-amber-600", label: "Featured" },
            { icon: Zap, color: "bg-blue-100 text-blue-600", label: "New Tech" },
            { icon: Shield, color: "bg-emerald-100 text-emerald-600", label: "Verified" }
          ].map((item, id) => (
            <div key={id} className="flex flex-col items-center gap-3">
              <div className={`p-4 ${item.color} rounded-2xl shadow-inner`}><item.icon size={24} /></div>
              <span className="text-xs font-black text-slate-600 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </BentoCard>

        {/* Newsletter */}
        <BentoCard className="md:col-span-1 md:row-span-2 bg-white/60 border-indigo-500/10 flex flex-col justify-between p-8">
          <div className="space-y-2">
            <span className="text-indigo-600 text-[10px] font-black tracking-[0.3em] uppercase">The Void Club</span>
            <h4 className="text-3xl font-black text-slate-800 leading-none">Join the <br />Elite.</h4>
            <p className="text-slate-500 text-sm font-medium">Get early access to drops.</p>
          </div>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="email@void.com"
              className="w-full bg-slate-200/50 border-none rounded-2xl p-4 text-sm focus:ring-2 ring-indigo-500 outline-none font-bold"
            />
            <button className="w-full bg-indigo-600 text-white p-4 rounded-2xl font-black hover:bg-black transition-all shadow-lg shadow-indigo-600/20">
              Subscribe
            </button>
          </div>
        </BentoCard>

        {/* Wide Banner */}
        <BentoCard className="md:col-span-1 md:row-span-1 flex items-center justify-between px-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-none overflow-hidden group">
          <div className="space-y-1 relative z-10">
            <h3 className="text-xl font-black italic">AI SCAN</h3>
            <p className="text-indigo-100 text-[10px] font-bold uppercase tracking-widest">Personalized Shop</p>
          </div>
          <div className="relative h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur group-hover:scale-110 transition-transform">
            <Zap size={24} />
          </div>
        </BentoCard>
      </div>
    </main>
  );
}
