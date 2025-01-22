import github from '../Images/github.png';

const Navbar = () => {
    return (
        <div className="bg-slate-900 flex flex-wrap items-center justify-between px-4 py-5 lg:px-28">
            
            <a className="text-white font-bold lg:text-2xl" href="/">
                PORTFOLIO
            </a>

            {/* Links Section */}
            <div className="flex items-center gap-2 md:gap-3">
                {/* GitHub Button */}
                <a
                    href="https://github.com/princesaha007?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-slate-500 transition duration-300 rounded-md  px-2 md:px-4 py-1 w-16 md:w-20 lg:w-24 "
                >
                    <img
                        src={github}
                        alt="GitHub"
                        className=" rounded-lg"
                    />
                </a>

                <a
                    className="text-black text-center text-xs font-extrabold bg-white hover:bg-gray-300 transition duration-300 px-2 md:px-4 py-1  rounded-md w-24 md:w-28 lg:w-32 h-6 lg:h-8"
                    href="https://drive.google.com/file/d/1NlZtUM64GXS22EdzzTgAxJdLBjwn81rC/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                FIND MY CV</a>
            </div>
        </div>
    );
};

export default Navbar;
