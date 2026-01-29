import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-6"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
              Hi, I'm <span className="gradient-text">Pranshu Sati</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-6 animate-fade-in-delay-1">
              Full Stack Developer / Software Engineer
            </p>

            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-delay-2">
              I'm a passionate developer who loves building beautiful,
              functional web applications. With expertise in modern technologies
              like React, Next.js, and Node.js, I craft seamless digital
              experiences that make an impact. Always learning, always building.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-delay-3">
              <Button
                asChild
                className="gradient-primary hover:opacity-90 transition-opacity text-primary-foreground px-6"
              >
                <a
                  href="https://github.com/Pranshu1sati"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-border hover:bg-secondary transition-colors px-6"
              >
                <a
                  href="https://www.linkedin.com/in/pranshu-1-sati/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>

              <Button
                onClick={scrollToContact}
                variant="ghost"
                className="text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors px-6"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </div>
          </div>

          {/* Avatar */}
          <div className="animate-fade-in-delay-2">
            <div className="relative">
              {/* Gradient glow behind avatar */}
              <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-30 scale-110" />
              <Avatar className="h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 border-2 border-border relative glow">
                <AvatarImage
                  src={`${import.meta.env.BASE_URL}favicon.svg`}
                  alt="Pranshu Sati"
                />
                <AvatarFallback className="bg-secondary text-4xl font-bold gradient-text">
                  PS
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
