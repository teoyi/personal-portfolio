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
            className={`fixed top-0 w-full flex text-white flex-row justify-between items-center px-10 z-50 h-nav ${
                scroll ? "bg-off-black" : "bg-transparent"
            }`}
        >
            <Link href="/">
                <a className="font-bold text-2xl">LT</a>
            </Link>
            <ul className="hidden md:flex flex-row items-center gap-10">
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
            <div className="block -mr-[12px] z-50 md:hidden">
                <Hamburger toggled={showMenu} toggle={setShowMenu} size={25} />
            </div>
            <div
                className={`md:hidden absolute h-screen w-full top-0 left-0 bg-black flex flex-col justify-center items-center text-4xl gap-10 ease-in-out duration-300 transition-all ${
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
