import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

const Projects = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const content = {
    en: {
      title: "Projects",
      links: ["View Site", "Github"],
      projects: [
        {
          title: "Workintech",
          description:
            "A simple, customizable, minimum setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "vercel"],
          image: "pro.png",
        },
        {
          title: "Journey",
          description:
            "A simple, customizable, minimum setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "vercel"],
          image: "pro2.png",
        },
      ],
    },
    tr: {
      title: "Projeler",
      links: ["Siteyi Görüntüle", "Github"],
      projects: [
        {
          title: "Workintech",
          description: "Workintech projesinin kısa açıklaması...",
          tags: ["React", "Node.js", "MongoDB"],
          image: "pro.png",
        },
        {
          title: "Journey",
          description: "Journey projesinin kısa açıklaması...",
          tags: ["Vue.js", "Express", "PostgreSQL"],
          image: "pro2.png",
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <section
      className={`projects py-16 ${
        theme === "dark" ? "bg-lime-800" : "bg-lime-300"
      }`}
    >
      <div className="container mx-auto max-w-[960px] px-4">
        <h2
          className={`text-4xl md:text-5xl font-bold ${
            theme === "dark" ? "text-lime-300" : "text-indigo-700"
          } tracking-wide mb-8`}
        >
          {currentContent.title}
        </h2>
        {currentContent.projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } shadow-lg rounded-xl overflow-hidden mb-8`}
          >
            <img
              src={`/src/assets/pictures/${project.image}`}
              alt={project.title}
              className="w-full md:w-[360px] h-[360px] object-cover"
            />
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3
                  className={`text-3xl md:text-4xl font-semibold mb-4 ${
                    theme === "dark" ? "text-indigo-400" : "text-indigo-700"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  } text-base mb-6`}
                >
                  {project.description}
                </p>
                <div className="mb-6 flex flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`${
                        theme === "dark"
                          ? "bg-indigo-600 text-white"
                          : "bg-indigo-700 text-zinc-50"
                      } text-sm rounded-full px-3 py-1 mr-2 mb-2`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={`${
                  theme === "dark" ? "text-indigo-300" : "text-black"
                }`}
              >
                {currentContent.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className={`text-base mr-6 underline underline-offset-4 hover:${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-700"
                    }`}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
