import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="py-5" style={{background:"#f9f9f9"}}>
            {children}
            
            </div>
            <Footer />
        </>
    )
}

export default Layout