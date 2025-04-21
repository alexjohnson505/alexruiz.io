
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="w-full p-4 flex justify-end">
        <a
          href="https://www.linkedin.com/in/alexruiz-io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
        >
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
      </nav>
      
      <div className="flex-1 flex items-center justify-center animate-background-shine p-4">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Alex Ruiz
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300">
            Head of Product
          </p>
          <Button
            variant="outline"
            asChild
            className="border-2 hover:bg-white/10"
          >
            <a
              href="https://www.linkedin.com/in/alexruiz-io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
