const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between mt-10">
            <div>
                <div className="max-w-[570px]">
                    <h1 className="text-4xl md:text-6xl font-extrabold">One Step Closer To Your <span className="text-[#9873FF]">Dream Job</span></h1>
                    <p className="lg:text-xl mt-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <button className="bg-[#9873FF] px-7 py-4 text-white font-extrabold rounded-lg mt-8">Get Started</button>
                </div>
            </div>
            <div>
                <img src="/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;