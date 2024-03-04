"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Netflix clone",
    description: "Features such as SignIn, SignUp, browsing movies and TV shows, searching for content, creating and managing watchlists",
    image: "/images/projects/netflix.PNG",
    tag: ["All", "WebApp"],
    gitUrl: "https://github.com/sujit995/netflix-clone2.0",
    previewUrl: "https://netflix-clone2-0-five.vercel.app/homepage",
  },
  {
    id: 2,
    title: "Twitter clone",
    description: "Features such as SignIn, SignUp, Profile Creation, Post the Tweet, Like the Post and Comment on the Post",
    image: "/images/projects/twitter1.png",
    tag: ["All", "WebApp"],
    gitUrl: "https://github.com/sujit995/twitter-clone-v2",
    previewUrl: "https://twitter-clone-v2-five.vercel.app/",
  },
  {
    id: 3,
    title: "Codepen",
    description: "This is a real-time editor where the user can write the code using HTML, CSS, and JS and can see the output below.",
    image: "/images/projects/codepen.png",
    tag: ["All", "WebApp"],
    gitUrl: "https://github.com/sujit995/codepenEditor-clone",
    previewUrl: "https://sujit-codepen-editor.netlify.app/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Features such as SignIn, SignUp, Order food, payment integration",
    image: "/images/projects/foodorder.png",
    tag: ["All", "WebApp"],
    gitUrl: "https://github.com/sujit995/food-order-app",
    previewUrl: "https://sujit995-onlinefood-delivery.netlify.app/",
  },
  {
    id: 5,
    title: "Petshop-website",
    description: "This is Petshop web site design",
    image: "/images/projects/website.png",
    tag: ["All", "Website Design"],
    gitUrl: "https://github.com/sujit995/pet-shop-UI-design",
    previewUrl: "https://sujit995-petshop.netlify.app",
  },
  {
    id: 6,
    title: "Homepage Design",
    description: "This is just an homepage design",
    image: "/images/projects/impact_homepage.png",
    tag: ["All", "Website Design"],
    gitUrl: "https://github.com/sujit995/impact-homepage",
    previewUrl: "https://sujit-impact-homepage.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="scroll-mt-2">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="WebApp"
          isSelected={tag === "WebApp"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Website Design"
          isSelected={tag === "Website Design"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
