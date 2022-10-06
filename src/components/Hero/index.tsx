import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="h-screen w-full font-noto-sans-jp">
            <div className="relative z-0 flex h-screen w-full items-end justify-start">
                <video
                    className="h-screen w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source
                        src={`./videos/abstract-colors.mp4`}
                        type="video/mp4"
                    />
                </video>
                <h1 className="absolute inset-0 z-0 flex h-screen w-full cursor-default select-none items-end bg-black px-5 py-14 font-noto-sans-jp text-8xl font-semibold text-white mix-blend-screen lg:text-9xl 2xl:text-12xl">
                    <span className="block md:hidden">
                        Luke
                        <br />
                        Teo.
                    </span>
                    <span className="hidden md:block">Luke&nbsp;Teo.</span>
                </h1>
            </div>
        </section>
    );
};

export default Hero;
