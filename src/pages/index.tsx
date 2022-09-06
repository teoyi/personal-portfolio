import type { NextPage } from "next";
import Image from "next/image";
import LandingImage from "../../public/images/dark50-landing.png";
import Layout from "../common/layouts/standard";

const Home: NextPage = () => {
    return (
        <section className="h-screen w-full relative">
            <Image
                src={LandingImage}
                alt="landing page image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="z-0"
            />
            <Layout>
                <div className="z-0 h-fscreen w-full flex justify-center items-center">
                    <h1 className="z-0 text-8xl md:text-12xl xl:text-16xl text-white font-zallord cursor-default">
                        LukeTeo
                    </h1>
                </div>
            </Layout>
        </section>
    );
};

export default Home;
