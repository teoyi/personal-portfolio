import type { NextPage } from "next";
import Layout from "../common/layouts/standard";
import { About, Hero, Menu } from "../components";
const Home2: NextPage = () => {
    return (
        <Layout>
            <Hero />
            <Menu />
            <About />
        </Layout>
    );
};

// Video by Luis Quintero: https://www.pexels.com/video/abstract-video-4990251/
export default Home2;
