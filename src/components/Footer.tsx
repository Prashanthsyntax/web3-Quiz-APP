import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#1B004D] to-[#2E0A6F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        <div className="text-2xl mb-7 font-extrabold tracking-wide bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
          🧠 AlgoQuiz
        </div>
        <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
          Empowering creators worldwide with the most advanced AI content
          creation tools. Transform your ideas into reality.
        </p>
      </div>
      <div className="flex justify-center space-x-6 md:mt-0 mb-4">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition-colors"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

      <div className="border-t border-[#3B1A7A]">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
          <a href="https://prebuiltui.com">AlgoQuiz</a> ©2025. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
