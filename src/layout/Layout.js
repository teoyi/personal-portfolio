import React from 'react'
import HeaderMain from '../components/Header/HeaderMain'
import HeaderSecondary from '../components/Header/HeaderSecondary'
import Footer from '../components/Footer/Footer'
import classes from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return ( 
        <div>
            <HeaderMain />
            <HeaderSecondary />
            <main className={classes.contentWrapper}>{children}</main>
            <Footer />
        </div>
     );
}
 
export default Layout;