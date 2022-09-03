import React from "react";
import Footer from "../../footer";
import Header from "../../header";

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <main>{children}</main>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
