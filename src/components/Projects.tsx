import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Aesthetic E-commerce Store",
    description:
      "A fully functional e-commerce platform focused on beautiful aesthetics and user experience. Built with modern web technologies and Sanity CMS for content management.",
    technologies: ["Next.js", "React", "Sanity CMS", "Tailwind CSS", "Stripe"],
    link: "https://ecommerce-with-sanity-dowyh7ai0-pranshu1sati.vercel.app/",
  },
  {
    title: "Squgo - Product Showcase Platform",
    description:
      "Freelance project delivering a mobile-responsive product showcase website tailored to client's aesthetic preferences and business needs. Focus on elegant design and seamless UX.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Mobile-First"],
    link: "https://www.squgo.com/",
  },
  {
    title: "Scribble Board - Multiplayer Drawing",
    description:
      "A real-time collaborative digital whiteboard where friends can play Scribble together. Features live drawing synchronization, chat functionality, and multiplayer game rooms.",
    technologies: ["React", "WebSockets", "Canvas API", "Real-time"],
    link: "https://657751a6a10485287e2cd9a1--scintillating-puppy-be2782.netlify.app/",
  },
  {
    title: "AI Digit Recognition App",
    description:
      "Machine learning application that recognizes handwritten digits in real-time. Features a custom-trained model running on the server for fast and private predictions.",
    technologies: ["Python", "TensorFlow", "Flask", "Canvas API", "ML"],
    link: "https://pranshudegitrecog.onrender.com/",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <article className="h-full p-6 rounded-xl border border-border bg-card gradient-card hover-lift transition-all duration-300 hover:border-primary/50 hover:glow-sm">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
            {project.title}
          </h3>
          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-secondary/80 text-muted-foreground hover:bg-secondary text-xs font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </article>
    </a>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've built, from e-commerce platforms to real-time
            collaborative apps and machine learning applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
