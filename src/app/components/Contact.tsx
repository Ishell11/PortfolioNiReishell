import { Mail, Phone, Linkedin, Github, FileText, Download } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss how we can work together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
            <div className="space-y-4">
              <a href="mailto:hello@janeportfolio.com" className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <div className="text-muted-foreground">reishellgarilao28@gmail.com</div>
                </div>
              </a>

              <a href="tel:+1234567890" className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Phone</div>
                  <div className="text-muted-foreground">+63 915 974 0399</div>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Professional Links</h3>
            <div className="space-y-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-foreground">LinkedIn</div>
                  <div className="text-muted-foreground">Connect on LinkedIn</div>
                </div>
              </a>

              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-foreground">GitHub</div>
                  <div className="text-muted-foreground">View my repositories</div>
                </div>
              </a>

              <button className="w-full flex items-center gap-4 p-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors group">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Download className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Download Resume</div>
                  <div className="text-primary-foreground/80 text-sm">Get my full CV (PDF)</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
