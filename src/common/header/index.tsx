import { Spin as Hamburger } from "hamburger-react";
import Link from "next/link";
import React from "react";

const Header = () => {
    const [scroll, setScroll] = React.useState<boolean>(false);
    const [showMenu, setShowMenu] = React.useState<boolean>(false);
    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 0);
        });
    }, []);
    console.log(showMenu);
    // const navHeight =
    return (
        <nav
            className={`fixed top-0 z-50 flex h-nav w-full flex-row items-center justify-between px-10 text-white ${
                scroll ? "bg-black" : "bg-transparent"
            }`}
        >
            <Link href="/">
                <a className="text-2xl font-bold">LT</a>
            </Link>
            <ul className="hidden flex-row items-center gap-10 md:flex">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/">
                    <a>About</a>
                </Link>
                <Link href="/">
                    <a>Projects</a>
                </Link>
            </ul>
            <div className="z-50 -mr-[12px] block md:hidden">
                <Hamburger toggled={showMenu} toggle={setShowMenu} size={25} />
            </div>
            <div
                className={`absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-10 bg-black text-4xl transition-all duration-300 ease-in-out md:hidden ${
                    showMenu ? "" : "translate-x-full"
                }`}
            >
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/">
                    <a>About</a>
                </Link>
                <Link href="/">
                    <a>Projects</a>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
