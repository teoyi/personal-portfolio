import React from "react";
import Header from "../../header";

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
