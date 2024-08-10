const About = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0E1630] text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center text-[#01D293]">About CSS Playground</h1>
                <p className="text-lg leading-relaxed mb-6">
                    Welcome to <span className="text-[#01D293] font-semibold">CSS Playground</span>, your ultimate destination for experimenting with and mastering the art of CSS! Whether you&apos;re a beginner looking to learn the basics or an experienced developer aiming to perfect your skills, CSS Playground offers a hands-on approach to styling the web.
                </p>
                <h2 className="text-2xl font-semibold mb-4 text-[#01D293]">Our Mission</h2>
                <p className="text-lg leading-relaxed mb-6">
                    Our mission is to empower web developers of all levels by providing an interactive and user-friendly platform where they can explore, create, and refine their CSS skills. We believe that learning should be as engaging and accessible as possible, and that&apos;s why we&apos;ve designed CSS Playground to be an open and welcoming environment for everyone.
                </p>
                <h2 className="text-2xl font-semibold mb-4 text-[#01D293]">What You Can Do Here</h2>
                <p className="text-lg leading-relaxed">
                    - <span className="font-semibold">Experiment Freely:</span> Test out different CSS properties and see the results in real-time. With our live editor, you can make adjustments on the fly and immediately see how your changes impact your design.
                </p>
            </div>
            <footer className="mt-12 text-center">
                <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} CSS Playground. Developed by IFRAT.</p>
            </footer>
        </div>
    );
};

export default About;
