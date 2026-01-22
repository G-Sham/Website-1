"use client";

import { BentoCard } from "@/components/ui/BentoCard";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { Plus, Info } from "lucide-react";
import Link from "next/link";

export default function ShopPage() {
    const { addToCart } = useCart();

    return (
        <main className="min-h-screen bg-[#f8fafc] pl-32 pt-32 pr-6 pb-6">
            <Sidebar />
            <Navbar />

            <div className="mb-10">
                <h1 className="text-4xl font-bold text-slate-800">The Collection</h1>
                <p className="text-slate-500">Curated weightless technology for the modern era.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <BentoCard key={product.id} className="group p-0 h-[450px]" animate={false}>
                        <div className="h-64 w-full overflow-hidden relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
                                {product.category}
                            </div>
                        </div>

                        <div className="p-6 flex flex-col justify-between h-[186px]">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800">{product.name}</h3>
                                <p className="text-slate-500 text-sm line-clamp-2 mt-1">{product.description}</p>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <span className="text-2xl font-bold text-slate-900">${product.price}</span>
                                <div className="flex gap-2">
                                    <Link
                                        href={`/product/${product.id}`}
                                        className="p-3 rounded-2xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                                    >
                                        <Info size={20} />
                                    </Link>
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="flex items-center gap-2 bg-indigo-500 text-white px-5 py-3 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
                                    >
                                        <Plus size={20} />
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </BentoCard>
                ))}
            </div>
        </main>
    );
}
