import { ProjectCard } from "./components/project-card";
import { HeaderButtons } from "./components/navigation-buttons";
import projects from "./assets/projects.json";
import { Footer } from "./Footer";

export function Projects() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <HeaderButtons />
      <div className="animate-fade-in flex flex-col gap-3 text-center justify-center max-w-lg">
        {projects.reverse().map((project) => (
          <ProjectCard key={project.title} title={project.title} description={project.description} skills={project.skills} />
        ))}
      </div>
      <Footer />
    </div>
    );
}