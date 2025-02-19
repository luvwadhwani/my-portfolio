import { Button } from "@/components/ui/button";
import Image from "next/image";
import profile from "@/assets/square_IMG_0333.jpeg";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, CheckCircle, Wrench } from "lucide-react";

export default function Home() {
    return (
        <div style={{ background: "#41A4F5" }}>
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 py-16 text-white">
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
                    I have more than 8 years&apos; experience building rich web applications for clients worldwide.
                    Below is a quick overview of my main technical skill sets and tools.
                    <br />
                    <a href="#" className="text-blue-500 hover:underline">
                        Check out my online resume.
                    </a>
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
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

            {/* Featured Projects Section */}
            <section className="py-16 px-6 text-center bg-white">
                <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
                    {/* Project 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="relative">
                            <Image
                                src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
                                alt="Google Project"
                                className="w-full h-48 object-cover"
                                width={500}
                                height={300}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-bold">Google</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <h4 className="text-xl font-semibold">SaaS Product</h4>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                                    Angular
                                </span>
                                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Django</span>
                                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                                    MongoDB
                                </span>
                                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                                    HTML/CSS
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="relative">
                            <Image
                                src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
                                alt="Basecamp Project"
                                className="w-full h-48 object-cover"
                                width={500}
                                height={300}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-bold">Basecamp</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <h4 className="text-xl font-semibold">Webapp Development</h4>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Rails</span>
                                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">jQuery</span>
                                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                                    PostgreSQL
                                </span>
                                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                                    HTML/SASS
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="relative">
                            <Image
                                src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
                                alt="Airbnb Project"
                                className="w-full h-48 object-cover"
                                width={500}
                                height={300}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-bold">Airbnb</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <h4 className="text-xl font-semibold">Mobile App Development</h4>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">React</span>
                                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">Python</span>
                                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">MySQL</span>
                                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                                    Webpack
                                </span>
                                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">HTML</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* View All Projects Button */}
                <div className="mt-8">
                    <Button className="mt-6 text-white" style={{ background: "#0a71c6" }}>
                        View all projects
                    </Button>
                </div>
            </section>

            <section className="flex justify-center items-center text-white mt-8 mb-8">
                <div className="text-center max-w-4xl">
                    <Image
                        className="rounded-full mx-auto mb-4"
                        src={profile}
                        alt="Profile Picture"
                        width={100}
                        height={100}
                    />
                    <h1 className="text-2xl font-bold">Interested in hiring me for your project?</h1>
                    <p className="mt-2">
                        Looking for an experienced full-stack developer to build your web app or ship your software
                        product? To start an initial chat, just drop me an email at{" "}
                        <a href="mailto:luv.wadhwani@icloud.com" className="underline">
                            luv.wadhwani@icloud.com
                        </a>{" "}
                        or use the form on the contact page.
                    </p>
                    <Button className="mt-6 text-white" style={{ background: "#0a71c6" }}>
                        Lets Talk
                    </Button>
                </div>
            </section>
            <footer className="bg-gray-600 text-white text-center py-4 bottom-0 w-full">
                Template Copyright © 3rd Wave Media
            </footer>
        </div>
    );
}
