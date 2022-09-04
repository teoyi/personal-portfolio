import type { NextPage } from "next";
import Layout from "../common/layouts/standard";

const Home: NextPage = () => {
    return (
        <section className="h-screen w-full bg-off-black">
            <Layout>
                <div className="h-fscreen w-full flex justify-center items-center">
                    <h1 className="text-8xl md:text-12xl xl:text-16xl text-white font-zallord">
                        LukeTeo
                    </h1>
                </div>
            </Layout>
        </section>
    );
};

export default Home;
