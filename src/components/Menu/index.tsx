import Link from "next/link";
import Marquee from "react-fast-marquee";

const Menu = () => {
    return (
        <div className="relative flex h-screen w-full items-center justify-center bg-black py-20 font-noto-sans-jp text-white">
            <div className="pointer-events-none absolute bottom-0 flex items-center justify-center">
                <Marquee gradient={false} speed={100}>
                    <h1 className="pointer-events-none bottom-0 left-0 text-16xl font-extrabold opacity-10">
                        Menu
                    </h1>
                </Marquee>
            </div>
            <ul className="flex flex-col gap-10 text-5xl font-bold md:text-7xl lg:text-7xl">
                <span className="tracking-widest opacity-30">&lt;ul&gt;</span>
                <li className="ml-12 lg:ml-36">
                    <Link href="#">About</Link>
                </li>
                <li className="ml-24 lg:ml-72">
                    <Link href="#">Projects</Link>
                </li>
                <li className="ml-36 lg:ml-[27rem]">
                    <Link href="#">Contact</Link>
                </li>
                <span className="tracking-widest opacity-30">&lt;/ul&gt;</span>
            </ul>
        </div>
    );
};

export default Menu;
