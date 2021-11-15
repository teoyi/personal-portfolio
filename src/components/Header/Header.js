import React from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Header = () => {
    return (
        <nav>
            <Link href="#about"><a>About</a></Link>
            <Link href="#timeline"><a>Timeline</a></Link>
            <Link href="#projects"><a>Projects</a></Link>
            <Link href="#contact"><a>Contact</a></Link>
            <div>
                <a href="#"><AiFillGithub size="3rem" /></a>
                <a href='#'><AiFillLinkedin size="3rem" /></a>
            </div>
        </nav>
    );
}
 
export default Header
