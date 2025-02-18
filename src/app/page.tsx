"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import profile from "@/assets/profile.jpg";

export default function Home() {
    return (
        <div className="text-white" style={{ background: "#41A4F5" }}>
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 py-16">
                <Image src={profile} alt="Profile Image" width={200} height={200} />

                <div className="ml-8">
                    <p className="text-lg">Hello, my name is</p>
                    <h1 className="text-4xl md:text-5xl font-bold">Luv Wadhwani</h1>
                    <p className="text-lg max-w-lg mt-2">
                        Accomplished Engineering Manager offering a wealth of experience in the IT industry,
                        specializing in project delivery and team management with nearly 10 years of experience
                        targeting to leverage the same for a Dynamic Organization.
                    </p>
                    <Button className="mt-6 text-white" style={{ background: "#0a71c6" }}>
                        Hire Me
                    </Button>
                </div>
            </section>
        </div>
    );
}
