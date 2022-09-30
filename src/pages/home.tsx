import type { NextPage } from "next";
import Layout from "../common/layouts/standard";
import { About, Hero } from "../components";
const Home2: NextPage = () => {
    return (
        <Layout>
            <Hero />
            <About />
        </Layout>
    );
};

// Video by Luis Quintero: https://www.pexels.com/video/abstract-video-4990251/
export default Home2;
