import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="h-screen w-full bg-off-black">
            <div className="z-0 h-screen relative w-full flex justify-start items-end">
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
                <h1 className="absolute inset-0 flex items-end z-0 text-8xl px-5 py-14 lg:text-9xl 2xl:text-12xl bg-black h-screen select-none w-full text-white cursor-default font-noto-sans-jp font-semibold mix-blend-screen">
                    <span className="block md:hidden">
                        Luke
                        <br />
                        Teo
                    </span>
                    <span className="hidden md:block">Luke&nbsp;Teo</span>
                </h1>
            </div>
        </section>
    );
};

export default Hero;
