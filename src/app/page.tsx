import { Button } from "@/components/ui/button";
import Image from "next/image";
import profile from "@/assets/profile.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, CheckCircle, Wrench } from "lucide-react";

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
            <section className="bg-gray-100 py-16 px-6 text-center">
                <h2 className="text-3xl font-bold">Skills Overview</h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                    I have more than 8 years`&apos;` experience building rich web applications for clients worldwide.
                    Below is a quick overview of my main technical skill sets and tools.
                    <br />
                    <a href="#" className="text-blue-500 hover:underline">
                        Check out my online resume.
                    </a>
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {/* Frontend Card */}
                    <Card className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex justify-center -mt-12">
                            <div className="bg-blue-500 p-4 rounded-full text-white">
                                <Code className="h-10 w-10" />
                            </div>
                        </div>
                        <CardContent>
                            <h3 className="text-xl font-bold mt-4">Frontend</h3>
                            <ul className="mt-4 text-gray-600 space-y-2 text-left">
                                {[
                                    "React / Redux / Angular",
                                    "JavaScript",
                                    "Node.js",
                                    "Webpack / Gulp / Grunt",
                                    "HTML / CSS / SASS / LESS",
                                ].map((skill) => (
                                    <li key={skill} className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-blue-500" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Backend Card */}
                    <Card className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex justify-center -mt-12">
                            <div className="bg-blue-500 p-4 rounded-full text-white">
                                <Database className="h-10 w-10" />
                            </div>
                        </div>
                        <CardContent>
                            <h3 className="text-xl font-bold mt-4">Backend</h3>
                            <ul className="mt-4 text-gray-600 space-y-2 text-left">
                                {["Python / Django", "Ruby / Rails", "PHP", "PostgreSQL / MySQL", "MongoDB"].map(
                                    (skill) => (
                                        <li key={skill} className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-blue-500" />
                                            {skill}
                                        </li>
                                    )
                                )}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Others Card */}
                    <Card className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex justify-center -mt-12">
                            <div className="bg-blue-500 p-4 rounded-full text-white">
                                <Wrench className="h-10 w-10" />
                            </div>
                        </div>
                        <CardContent>
                            <h3 className="text-xl font-bold mt-4">Others</h3>
                            <ul className="mt-4 text-gray-600 space-y-2 text-left">
                                {[
                                    "DevOps",
                                    "Unit Testing",
                                    "UX / Wireframing",
                                    "Sketch / Balsamiq",
                                    "WordPress / Shopify",
                                ].map((skill) => (
                                    <li key={skill} className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-blue-500" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
