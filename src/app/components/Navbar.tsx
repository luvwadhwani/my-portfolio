import { Github, Globe, Instagram, Linkedin } from "lucide-react";
const Navbar = () => {
    return (
        <div className="text-white" style={{ background: "#41A4F5" }}>
            <nav className="py-4 px-6 flex justify-between items-center" style={{ background: "#0a71c6" }}>
                <div className="flex items-center gap-4">
                    <a href="#" className="hover:text-gray-300">
                        <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <Github className="h-6 w-6" />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <Globe className="h-6 w-6" />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <Instagram className="h-6 w-6" />
                    </a>
                </div>
                <ul className="flex gap-6 font-semibold text-sm">
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            PROJECTS
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            RESUME
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
