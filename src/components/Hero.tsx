import heroimg from "../assets/banner-stack.png";

function Hero() {
    return (
        <section className="container mx-auto flex flex-col items-center gap-10 px-2 py-6 lg:flex-row lg:py-6">


            <div className="flex flex-1 items-center">
                <div className="space-y-6 text-center lg:text-left">
                    <h1 className="text-4xl font-extrabold text-[#0f172a] md:text-5xl lg:text-[60px]">
                        Build Your Ideal <br />
                        <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="max-w-xl  text-[#475569]">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits
                        your next project.
                    </p>
                    <div className="mt-8 flex flex-row gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        <button className="rounded bg-linear-to-r from-orange-500 to-pink-500 px-3 py-3 font-semibold text-white">
                            Explore Technologies
                        </button>

                        <button className="rounded border border-gray-300 px-12 py-3 font-semibold text-[#334155]">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div><img src={heroimg} alt="" className="w-full max-w-md lg:max-w-xl" /></div>
        </section>
    );
}

export default Hero