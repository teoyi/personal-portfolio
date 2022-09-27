import type { NextPage } from "next";
import Layout from "../common/layouts/standard";
const Home2: NextPage = () => {
    return (
        <section className="h-screen w-full bg-off-black">
            <Layout>
                <div className="z-0 h-screen relative w-full flex justify-start items-end">
                    <video
                        className="h-screen w-full object-cover"
                        autoPlay
                        muted
                        loop
                    >
                        <source
                            src={`./videos/abstract-colors.mp4`}
                            type="video/mp4"
                        />
                    </video>
                    <h1 className="absolute inset-0 flex items-end z-0 text-8xl px-5 py-10 bg-black h-screen select-none w-full text-white cursor-default font-noto-sans-jp font-semibold mix-blend-screen">
                        Luke
                        <br />
                        Teo
                    </h1>
                </div>
                <div className="h-screen w-full bg-red-500"></div>
            </Layout>
        </section>
    );
};

// Video by Luis Quintero: https://www.pexels.com/video/abstract-video-4990251/
export default Home2;
