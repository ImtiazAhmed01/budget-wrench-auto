import Image from "next/image";
import React from "react";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-10 space-y-10">
            <h1 className="text-4xl font-bold text-center">About Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <Image
                    src="/assets/images/about_us/person.jpg"
                    width={500}
                    height={400}
                    alt="Person"
                    className="rounded-lg shadow-lg"
                />
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
                    <p>
                        We are a dedicated team of professionals committed to providing top-notch services. Our goal is to ensure customer satisfaction through quality and innovation.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">What We Use</h2>
                    <p>
                        Our services rely on high-quality parts and tools to deliver durable and efficient solutions. Trust in our expertise and equipment for the best results.
                    </p>
                </div>
                <Image
                    src="/assets/images/about_us/parts.jpg"
                    width={500}
                    height={400}
                    alt="Parts"
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}
