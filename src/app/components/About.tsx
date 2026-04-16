import { Briefcase, GraduationCap, Target } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating meaningful work that makes a difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-secondary/50 p-8 rounded-xl border border-border">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Experience</h3>
            <p className="text-muted-foreground">
              Just Studying, smoothly and Dedicated to Graduate in College.
            </p>
          </div>

          <div className="bg-secondary/50 p-8 rounded-xl border border-border">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Education</h3>
            <p className="text-muted-foreground">
              Graduate at Doroteo S. Mendoza Sr. Memorial National High School
            </p>
          </div>

          <div className="bg-secondary/50 p-8 rounded-xl border border-border">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Mission</h3>
            <p className="text-muted-foreground">
              Dedicated to travel in Japan Someday.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
