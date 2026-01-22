"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { BentoCard } from "@/components/ui/BentoCard";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowLeft, ShieldCheck, Truck, RotateCcw, Star, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProductDetailPage() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [selectedImg, setSelectedImg] = useState(0);

    const product = products.find(p => p.id === id);

    if (!product) return (
        <main className="min-h-screen flex items-center justify-center">
            <h1 className="text-4xl font-black">Product Not Found in the Void</h1>
        </main>
    );

    const galleryImages = product.images ? product.images : [product.image];
    // Ensure images are in correct format (string)
    const formattedImages = galleryImages.map(img => (img as any).src || img);

    return (
        <main className="min-h-screen relative overflow-hidden flex flex-col pl-32 pt-32 pr-6 pb-6">
            <div className="bg-mesh bg-animate"></div>
            <Sidebar />
            <Navbar />

            <Link href="/shop" className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 mb-8 transition-colors group font-black uppercase text-[10px] tracking-widest">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Shop
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl">
                {/* Left Side: Images */}
                <div className="space-y-6">
                    <motion.div
                        key={selectedImg}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass rounded-[40px] overflow-hidden aspect-square relative shadow-2xl border-white/40"
                    >
                        <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full scale-75"></div>
                        <img src={formattedImages[selectedImg]} alt={product.name} className="relative w-full h-full object-cover p-8 floating" />
                    </motion.div>

                    <div className="grid grid-cols-4 gap-4">
                        {formattedImages.map((img: string, i: number) => (
                            <button
                                key={i}
                                onClick={() => setSelectedImg(i)}
                                className={`glass aspect-square rounded-3xl overflow-hidden border-2 transition-all ${selectedImg === i ? 'border-indigo-500 scale-105 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'}`}
                            >
                                <img src={img} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Side: Details */}
                <div className="space-y-8">
                    <div className="space-y-2">
                        <div className="flex items-center gap-4">
                            <span className="bg-indigo-500 text-white font-black tracking-widest uppercase text-[10px] px-3 py-1 rounded-full">{product.category}</span>
                            <div className="flex items-center gap-1 text-amber-500">
                                <Star size={16} fill="currentColor" />
                                <span className="text-sm font-black">4.9</span>
                            </div>
                        </div>
                        <h1 className="text-6xl font-black text-slate-800 tracking-tighter leading-tight">{product.name}</h1>
                        <p className="text-4xl font-black text-indigo-600 mt-4">${product.price}</p>
                    </div>

                    <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
                        {product.description} Experience the next generation of weightless interaction. Meticulously crafted for those who demand performance without the bulk.
                    </p>

                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { icon: Truck, label: "Express" },
                            { icon: ShieldCheck, label: "Lifetime" },
                            { icon: RotateCcw, label: "30D Returns" }
                        ].map((feature, i) => (
                            <div key={i} className="glass p-6 rounded-3xl flex flex-col items-center gap-3 text-center bg-white/40 border-white/40 group hover:bg-white transition-colors">
                                <feature.icon className="text-indigo-500 group-hover:scale-110 transition-transform" size={24} />
                                <span className="text-[10px] font-black uppercase tracking-wider text-slate-600">{feature.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => addToCart(product)}
                            className="flex-1 bg-indigo-600 text-white py-6 rounded-[30px] font-black text-xl flex items-center justify-center gap-4 hover:bg-black transition-all shadow-xl shadow-indigo-600/20 active:scale-[0.98]"
                        >
                            <ShoppingCart size={24} />
                            Add to Bag
                        </button>
                        <button className="px-8 bg-white border border-slate-200 rounded-[30px] font-black text-slate-800 hover:bg-slate-50">
                            <Zap size={24} fill="currentColor" className="text-amber-500" />
                        </button>
                    </div>

                    <BentoCard className="bg-slate-900 border-none text-white p-10 relative overflow-hidden group" animate={false}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl group-hover:bg-indigo-500/40 transition-all"></div>
                        <h4 className="font-black text-2xl mb-4 text-indigo-400">The Void Engineering.</h4>
                        <p className="text-slate-400 font-medium leading-relaxed">
                            Every curve of the {product.name} is optimized for zero-resistance. We use a proprietary carbon-lattice structure that provides unmatched strength at a fraction of the weight.
                        </p>
                    </BentoCard>
                </div>
            </div>
        </main>
    );
}
