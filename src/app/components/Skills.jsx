import React from 'react'

const skills = [
    { id: 1, name: "HTML", imageUrl: "/images/html5.png", style: "shadow-orange-500" },
    { id: 2, name: "CSS", imageUrl: "/images/css3.png", style: "shadow-blue-500" },
    { id: 3, name: "JavaScript", imageUrl: "/images/javascript.png", style: "shadow-yellow-500" },
    { id: 4, name: "React", imageUrl: "/images/react.png", style: "shadow-blue-600" },
    { id: 5, name: "Typescript", imageUrl: "/images/Typescript.png", style: "shadow-blue-600" },
    { id: 6, name: "Nextjs", imageUrl: "/images/nextjs.png", style: "shadow-white" },
    { id: 7, name: "Tailwind CSS", imageUrl: "/images/tailwind.png", style: "shadow-sky-400" },
    { id: 8, name: "Nodejs", imageUrl: "/images/node-js.png", style: "shadow-green-400" },
    { id: 9, name: "MongoDB", imageUrl: "/images/mongodb.png", style: "shadow-green-400" },
    { id: 10, name: "GitHub", imageUrl: "/images/github.png", style: "shadow-gray-400" },
  ];

const Skills = () => {
  return (
    <section id="skills" className="py-10 relative">
    <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
            My Skills
        </h3>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 py-8 text-center">
            {skills.map((item, i) => (
                <div
                    key={item.id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${item.style}`}
                >
                    <img src={item.imageUrl} alt="skill_image" className="w-20 mx-auto" />
                    <p className="mt-4">{item.name}</p>
                </div>
            ))}
        </div>
    </div>
</section>
  )
}

export default Skills