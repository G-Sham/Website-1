"use client";

import Link from "next/link";
import { LayoutDashboard, ShoppingBag, Settings, History, LogIn } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
    { icon: LayoutDashboard, label: "Home", href: "/" },
    { icon: ShoppingBag, label: "Shop", href: "/shop" },
    { icon: History, label: "Orders", href: "/orders" },
    { icon: Settings, label: "Settings", href: "/settings" },
];

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="fixed left-6 top-1/2 -translate-y-1/2 w-20 glass rounded-[30px] flex flex-col items-center py-8 gap-8 z-50 group transition-all duration-300 hover:w-64"
        >
            <div className="w-10 h-10 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <span className="text-white font-bold text-xl">A</span>
            </div>

            <nav className="flex flex-col gap-4 w-full px-4">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "p-3 rounded-2xl flex items-center gap-4 transition-all duration-200 group/link overflow-hidden",
                                isActive
                                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                                    : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-500"
                            )}
                        >
                            <item.icon size={24} className="shrink-0" />
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium text-sm">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto px-4 w-full">
                <Link
                    href="/login"
                    className="p-3 rounded-2xl flex items-center gap-4 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-500 transition-all w-full overflow-hidden"
                >
                    <LogIn size={24} className="shrink-0" />
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium text-sm">
                        Login
                    </span>
                </Link>
            </div>
        </motion.aside>
    );
};
