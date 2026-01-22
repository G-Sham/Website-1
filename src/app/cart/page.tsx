"use client";

import { useCart } from "@/context/CartContext";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { BentoCard } from "@/components/ui/BentoCard";
import { Trash2, Plus, Minus, CreditCard, ArrowRight, RotateCcw, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
    const { cart, removeFromCart, totalPrice, totalItems, clearCart } = useCart();
    const [isPaying, setIsPaying] = useState(false);
    const [paid, setPaid] = useState(false);

    const handlePayment = () => {
        setIsPaying(true);
        setTimeout(() => {
            setIsPaying(false);
            setPaid(true);
            clearCart();
        }, 2000);
    };

    if (paid) {
        return (
            <main className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
                <BentoCard className="max-w-md w-full text-center py-12 px-8 flex flex-col items-center gap-6">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                        <CreditCard size={40} />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-800">Payment Successful!</h1>
                    <p className="text-slate-500 text-center">Your weightless package is being prepared for flight. You will receive an email shortly.</p>
                    <Link href="/" className="w-full bg-indigo-500 text-white py-4 rounded-2xl font-bold">
                        Back to Home
                    </Link>
                </BentoCard>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#f8fafc] pl-32 pt-32 pr-6 pb-6">
            <Sidebar />
            <Navbar />

            <h1 className="text-4xl font-bold text-slate-800 mb-8">Your Bag</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-4">
                    <AnimatePresence>
                        {cart.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="glass p-10 rounded-[30px] text-center"
                            >
                                <p className="text-slate-500 mb-6">Your bag is currently weightless (empty).</p>
                                <Link href="/shop" className="text-indigo-600 font-bold">Start Shopping <ArrowRight className="inline" size={16} /></Link>
                            </motion.div>
                        ) : (
                            cart.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="glass p-6 rounded-[30px] flex gap-6 items-center"
                                >
                                    <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                                        <img src={(item.image as any).src || item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-800">{item.name}</h3>
                                        <p className="text-slate-400 text-sm">{item.category}</p>
                                        <p className="text-indigo-600 font-bold mt-2">${item.price}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center bg-white/50 rounded-2xl p-1 border border-white/50">
                                            <button className="p-2 hover:text-indigo-500"><Minus size={16} /></button>
                                            <span className="w-8 text-center font-bold text-slate-700">{item.quantity}</span>
                                            <button className="p-2 hover:text-indigo-500"><Plus size={16} /></button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="p-3 bg-red-50 text-red-500 rounded-2xl hover:bg-red-100 transition-colors"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </AnimatePresence>
                </div>

                <div className="space-y-6">
                    <BentoCard className="p-8 space-y-6" animate={false}>
                        <h3 className="text-2xl font-bold text-slate-800">Order Summary</h3>

                        <div className="space-y-4">
                            <div className="flex justify-between text-slate-500">
                                <span>Items ({totalItems})</span>
                                <span>${totalPrice}</span>
                            </div>
                            <div className="flex justify-between text-slate-500">
                                <span>Shipping</span>
                                <span className="text-emerald-500 font-bold">FREE</span>
                            </div>
                            <div className="h-px bg-slate-200" />
                            <div className="flex justify-between text-xl font-bold text-slate-800">
                                <span>Total</span>
                                <span>${totalPrice}</span>
                            </div>
                        </div>

                        <button
                            onClick={handlePayment}
                            disabled={cart.length === 0 || isPaying}
                            className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                            {isPaying ? (
                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                                    <RotateCcw size={20} />
                                </motion.div>
                            ) : (
                                <>
                                    <CreditCard size={20} />
                                    Complete Purchase
                                </>
                            )}
                        </button>
                    </BentoCard>

                    <div className="glass p-6 rounded-[30px] flex items-center gap-4 border-emerald-100 bg-emerald-50/30">
                        <ShieldCheck className="text-emerald-600" size={32} />
                        <div className="text-xs">
                            <p className="font-bold text-emerald-800 uppercase tracking-wider">Secure Payment</p>
                            <p className="text-emerald-600">Your transaction is protected with 256-bit encryption.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
