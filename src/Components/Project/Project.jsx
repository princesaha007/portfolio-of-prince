const Project = ({ projectt }) => {
    const { title, image, description, demo, source } = projectt;

    return (
        <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img src={image} alt={title} className="lg:w-full md:h-48 object-cover" />
            <div className="p-2 lg:p-6">
                <h2 className="text-xs lg:text-lg font-bold text-white mb-2">{title}</h2>
                <p className="text-gray-200 text-xs lg:text-sm mb-4">{description}</p>
                <div className="flex justify-between items-center">
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-blue-700 font-semibold bg-gray-400 p-1 lg:p-2 rounded-lg text-xs"
                    >
                        Live Demo
                    </a>
                    <a
                        href={source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-300 font-semibold bg-gray-600 p-1 lg:p-2 rounded-lg text-xs"
                    >
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
