import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({children}) {
  return (
    <>
    <Navbar/>
    <div style={{textAlign:'center',margin:'30px'}}>
    {children}
    </div>
    <Footer/>
    </>
  );
}

export default Layout;

