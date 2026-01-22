"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { assets, products as assetProducts } from "@assets/assets";

const carouselImages = [
    assets.hero_img,
    (assetProducts[0] as any).image[0],
    (assetProducts[1] as any).image[0],
    (assetProducts[2] as any).image[0],
];

export const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);

    // If we only have one image, no need for controls
    if (carouselImages.length <= 1) {
        return (
            <div className="relative w-full h-full overflow-hidden rounded-3xl">
                <img
                    src={(carouselImages[0] as any).src || carouselImages[0]}
                    alt="Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-12">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl md:text-7xl font-black text-white leading-tight"
                    >
                        Defy Gravity <br />
                        with Style.
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-indigo-100 text-xl max-w-lg mt-4 font-medium"
                    >
                        Curated premium tech items designed to feel weightless.
                    </motion.p>
                </div>
            </div>
        );
    }

    const next = () => setCurrent((prev) => (prev + 1) % carouselImages.length);
    const prev = () => setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

    return (
        <div className="relative w-full h-full overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
                <motion.img
                    key={current}
                    src={(carouselImages[current] as any).src || carouselImages[current]}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                            {current === 0 ? "Defy Gravity" : "Elevate Life"} <br />
                            {current === 0 ? "with Style." : "in the Void."}
                        </h1>
                        <p className="text-indigo-100 text-xl max-w-lg mt-4 font-medium">
                            {current === 0
                                ? "Curated premium tech items designed to feel weightless."
                                : "Explore the next generation of aero-core technology."}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="absolute bottom-12 right-12 flex gap-4">
                <button onClick={prev} className="p-4 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-2xl text-white transition-all">
                    <ArrowLeft size={24} />
                </button>
                <button onClick={next} className="p-4 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-2xl text-white transition-all">
                    <ArrowRight size={24} />
                </button>
            </div>
        </div>
    );
};
