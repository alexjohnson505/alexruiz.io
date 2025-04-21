
import { Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center animate-background-shine p-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Alex Ruiz
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300">
          Head of Product
        </p>
        <a
          href="https://www.linkedin.com/in/alexruiz-io/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Linkedin className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Index;
