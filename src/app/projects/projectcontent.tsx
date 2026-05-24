import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/data/project";

const BLUR_FADE_DELAY = 0.04;

const ProjectContent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-200 mx-auto auto-rows-fr">
        {PROJECTS.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            className="h-full"
          >
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default ProjectContent;
