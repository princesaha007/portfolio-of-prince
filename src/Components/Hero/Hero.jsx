import profile from "../Images/profile.jpg";

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row justify-evenly items-center md:px-28 px-4">
            
            <div className="text-center md:text-left">
                <h1 className="leading-none md:text-5xl lg:text-6xl xl:text-7xl font-extrabold pt-7 md:pt-10 lg:pt-24">
                    Hi, I'm Prince
                </h1>
                <p className="font-semibold pt-3 md:pt-10 text-xs md:text-xl xl:text-xl max-w-lg">
                    I'm a CSE graduate from Brac University. I have experience working on multiple frontend projects.
                    Reach out if you'd like to learn more!
                </p>
                <div className="mt-6">
                <a
    className="bg-black text-white md:text-xl font-bold px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
    href="https://mail.google.com/mail/?view=cm&fs=1&to=princesaha124@gmail.com&su=Hello&body=I'd%20like%20to%20contact%20you"
    target="_blank"
    rel="noopener noreferrer">
    Contact Me
</a>

                </div>
            </div>

            
            <div className="mt-10 md:mt-0">
                <img
                    className="w-44 lg:h-80 lg:w-auto rounded-full"
                    src={profile}
                    alt="Prince Saha - Profile"
                />
            </div>
        </div>
    );
};

export default Hero;
