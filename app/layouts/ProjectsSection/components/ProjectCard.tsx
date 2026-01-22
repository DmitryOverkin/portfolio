import {Iprojects} from "@/app/data";

type ProjectCardProps = {
  project: Iprojects;
};

function ProjectCard({project}: ProjectCardProps) {
  return (
    <li
      className="
              group relative
              h-[320px]
              md:h-[360px]
              lg:h-[420px]
              overflow-hidden rounded-xl
              cursor-pointer
            "
    >
      {/* Background image */}
      <div
        className="
                absolute inset-0
                bg-cover bg-center
                transition-transform duration-500
                group-hover:scale-105
              "
        style={{backgroundImage: `url(${project.bgImageSrc})`}}
      />

      <div
        className="
                absolute inset-0
                bg-black/40
                transition-colors duration-300
                group-hover:bg-black/65
              "
      />

      <a
        className="
                relative z-10
                flex h-full w-full flex-col justify-end
                p-6
                text-white
                opacity-0
                group-hover:opacity-100
                transition
                ease-in-out
                duration-300
              "
        href={project.href}
      >
        <h3
          className="
                  text-xl font-semibold
                  leading-tight
                  break-words
                  mb-2
                "
        >
          {project.title}
        </h3>

        <p
          className="
                  text-sm text-gray-200
                  leading-snug
                  break-words
                "
        >
          {project.technologies.join(" · ")}
        </p>
      </a>
    </li>
  );
}

export default ProjectCard;
