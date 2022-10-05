import Link from "next/link";

const Menu = () => {
    return (
        <div className="relative font-noto-sans-jp bg-black h-screen text-white flex justify-center items-center overflow-hidden">
            <h1 className="absolute font-extrabold text-9xl mt-20 lg:text-16xl top-0 left-0 text-white opacity-5 lg:hidden pointer-events-none">
                Menu
            </h1>
            <h1 className="hidden absolute font-extrabold leading-[300px] text-30xl bottom-0 left-0 text-white opacity-5 lg:block pointer-events-none">
                Menu
            </h1>

            <ul className="text-7xl gap-10 flex flex-col lg:text-9xl">
                <span className="tracking-widest opacity-30">&lt;ul&gt;</span>
                <li className="ml-4 lg:ml-36">
                    <Link href="#">About</Link>
                </li>
                <li className="ml-8 lg:ml-72">
                    <Link href="#">Projects</Link>
                </li>
                <li className="ml-12 lg:ml-96">
                    <Link href="#">Contact</Link>
                </li>
                <span className="tracking-widest opacity-30">&lt;/ul&gt;</span>
            </ul>
        </div>
    );
};

export default Menu;
