import { assets, products as assetProducts } from "@assets/assets";

export interface Product {
    id: string;
    name: string;
    price: number;
    image: any;
    images?: any[]; // For variants
    description: string;
    category: string;
}

export const products: Product[] = [
    {
        id: "aaaaa",
        name: "Nebula Round Neck Top",
        price: 100,
        image: (assetProducts[0] as any).image[0],
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves.",
        category: "Women"
    },
    {
        id: "aaaab", // Product 2
        name: "Aero-Core T-shirt",
        price: 200,
        image: (assetProducts[1] as any).image[0], // Main image
        images: (assetProducts[1] as any).image, // All 4 variants mentioned in assets.js
        description: "Premium pure cotton T-shirt with breathable fabric and weightless feel.",
        category: "Men"
    },
    {
        id: "aaaac",
        name: "Girls Cotton Top",
        price: 220,
        image: (assetProducts[2] as any).image[0],
        description: "Soft and comfortable cotton top for kids, designed for all-day play.",
        category: "Kids"
    },
    {
        id: "aaaad",
        name: "Quantum Men T-shirt",
        price: 110,
        image: (assetProducts[3] as any).image[0],
        description: "Classic round neck t-shirt with a modern, slim-fit silhouette.",
        category: "Men"
    },
    {
        id: "aaaae",
        name: "Vapor Women Top",
        price: 130,
        image: (assetProducts[4] as any).image[0],
        description: "Elegant round neck cotton top for casual and semi-formal wear.",
        category: "Women"
    },
    {
        id: "aaaaf",
        name: "Kids Void Top",
        price: 140,
        image: (assetProducts[5] as any).image[0],
        description: "Durable and stylish cotton top for active kids.",
        category: "Kids"
    }
];
