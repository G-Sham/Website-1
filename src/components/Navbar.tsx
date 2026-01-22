"use client";

import { ShoppingCart, Search, User, Sun, Moon } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/products";

export const Navbar = () => {
    const { totalItems } = useCart();
    const { theme, toggleTheme } = useTheme();
    const [search, setSearch] = useState("");

    const filteredProducts = search
        ? products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
        : [];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-6 left-32 right-6 h-20 glass rounded-[30px] flex items-center justify-between px-8 z-40 border-indigo-500/20 shadow-indigo"
        >
            <div className="relative">
                <div className="flex items-center gap-4 bg-white/40 dark:bg-slate-800/40 p-2 rounded-2xl w-96 border border-white/40 dark:border-white/10 focus-within:bg-white dark:focus-within:bg-slate-800 focus-within:ring-2 ring-indigo-500/30 transition-all">
                    <Search size={20} className="text-slate-400 ml-2" />
                    <input
                        type="text"
                        placeholder="Search for something weightless..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-transparent border-none outline-none text-sm w-full text-slate-700 dark:text-slate-200"
                    />
                </div>

                {search && (
                    <div className="absolute top-full left-0 right-0 mt-4 glass rounded-3xl p-4 shadow-2xl overflow-hidden max-h-96 overflow-y-auto z-50">
                        {filteredProducts.length > 0 ? (
                            <div className="space-y-2">
                                {filteredProducts.map(p => (
                                    <Link
                                        key={p.id}
                                        href={`/product/${p.id}`}
                                        onClick={() => setSearch("")}
                                        className="flex items-center gap-4 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        <img src={p.image} className="w-10 h-10 rounded-lg object-cover" />
                                        <div>
                                            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{p.name}</p>
                                            <p className="text-xs text-indigo-500">${p.price}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-slate-500 p-2 text-center">No items found in the void.</p>
                        )}
                    </div>
                )}
            </div>

            <div className="flex items-center gap-6">
                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer border border-white/50 dark:border-white/10 text-slate-700 dark:text-slate-200"
                >
                    <AnimatePresence mode="wait">
                        {theme === "light" ? (
                            <motion.div
                                key="sun"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                            >
                                <Sun size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="moon"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                            >
                                <Moon size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>

                <div className="flex flex-col items-end hidden md:flex">
                    <span className="text-xs text-slate-400 font-medium">Hello, Guest</span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Account & Lists</span>
                </div>

                <Link href="/cart" className="relative p-3 bg-white/50 dark:bg-slate-800/50 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer border border-white/50 dark:border-white/10 group">
                    <ShoppingCart size={24} className="text-slate-700 dark:text-slate-200 group-hover:text-indigo-500 transition-colors" />
                    {totalItems > 0 && (
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-1 -right-1 w-6 h-6 bg-pink-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-lg shadow-pink-500/30"
                        >
                            {totalItems}
                        </motion.span>
                    )}
                </Link>

                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500 rounded-2xl flex items-center justify-center p-[2px] shadow-lg">
                    <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center overflow-hidden border border-white/50 dark:border-white/10">
                        <User size={24} className="text-indigo-500" />
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};
