import type { NextPage } from "next";
import Layout from "../common/layouts/standard";
import { Hero } from "../components";
const Home2: NextPage = () => {
    return (
        <Layout>
            <Hero />
            <div className="h-screen w-full bg-red-500"></div>
        </Layout>
    );
};

// Video by Luis Quintero: https://www.pexels.com/video/abstract-video-4990251/
export default Home2;
