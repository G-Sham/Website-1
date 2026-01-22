"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    animate?: boolean;
}

export const BentoCard = ({ children, className, animate = true }: BentoCardProps) => {
    return (
        <motion.div
            whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)"
            }}
            initial={animate ? { y: 0 } : false}
            animate={animate ? {
                y: [0, -5, 0],
                transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            } : {}}
            className={cn(
                "glass rounded-3xl p-6 relative overflow-hidden transition-all duration-300",
                className
            )}
        >
            {children}
        </motion.div>
    );
};
