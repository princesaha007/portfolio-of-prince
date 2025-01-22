import Project from "../Project/Project";
import { useEffect, useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Error fetching projects:", err)); 
    }, []);

    
    const displayedProjects = showAll ? projects : projects.slice(0, 9);

    return (
        <div className="px-5 md:px-20 py-10">
            <h1 className="text-center md:text-3xl font-bold mb-8 text-gray-800">PROJECTS</h1>

            <div className="grid md:grid-cols-3 gap-5 lg:gap-10">
                {displayedProjects.map((p) => (
                    <Project key={p.id} projectt={p}></Project>
                ))}
            </div>

            {projects.length > 8 && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Projects;
