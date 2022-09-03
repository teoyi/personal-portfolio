const Header = () => {
    return (
        <nav className="w-full flex flex-row justify-between items-center px-10 h-nav">
            <div>Logo Goes Here</div>
            <ul className="flex flex-row items-center gap-10">
                <li>Projects</li>
                <li>About</li>
                <li>Resume</li>
            </ul>
        </nav>
    );
};

export default Header;
