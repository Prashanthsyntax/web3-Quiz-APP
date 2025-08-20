import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Section */}
        <p className="text-sm">
          © {new Date().getFullYear()} AlgoQuiz. All rights reserved.
        </p>

        {/* Right Section - Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
