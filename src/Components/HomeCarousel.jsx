"use client";
import React, { useState, useEffect } from "react";

const images = [
    "/assets/images/homeCarousel/1.jpg",
    "/assets/images/homeCarousel/2.jpg",
    "/assets/images/homeCarousel/3.jpg",
    "/assets/images/homeCarousel/4.jpg",

];

export default function HomeCarousel() {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(timer);
    }, [length]);

    return (
        <div className="relative w-full max-w-screen-xl mx-auto h-[400px] overflow-hidden mb-7">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0 absolute inset-0"
                        }`}
                >
                    <img
                        src={img}
                        alt={`Slide ${index}`}
                        className="w-full h-[400px] object-cover"
                    />
                </div>
            ))}


            {/* Arrows */}
            <button
                onClick={() => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1))}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
            >
                ❮
            </button>
            <button
                onClick={() => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1))}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
            >
                ❯
            </button>
        </div >
    );
}
