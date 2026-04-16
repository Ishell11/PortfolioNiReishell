import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
              <span>RG</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">Reishell Portfolio</h1>
              <p className="text-sm text-muted-foreground">Creative Dreamer</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#works" className="text-foreground hover:text-primary transition-colors">Works</a>
            <a href="#awards" className="text-foreground hover:text-primary transition-colors">Awards</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
