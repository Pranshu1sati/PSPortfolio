import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        {/* Decorative gradient line */}
        <div className="w-24 h-1 gradient-primary mx-auto mb-12 rounded-full" />

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Let's build something{" "}
          <span className="gradient-text">amazing together</span>
        </h2>

        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities 
          to be part of your vision. Whether it's freelance, full-time, or collaboration 
          – let's connect!
        </p>

        {/* Email CTA */}
        <div className="mb-12">
          <Button
            asChild
            size="lg"
            className="gradient-primary hover:opacity-90 transition-opacity text-primary-foreground px-8 py-6 text-lg group"
          >
            <a href="mailto:pranshusati1@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <Button
            asChild
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full border-border hover:bg-secondary hover:border-primary/50 transition-all"
          >
            <a
              href="https://github.com/Pranshu1sati"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full border-border hover:bg-secondary hover:border-primary/50 transition-all"
          >
            <a
              href="https://www.linkedin.com/in/pranshu-1-sati/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full border-border hover:bg-secondary hover:border-primary/50 transition-all"
          >
            <a href="mailto:pranshusati1@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
