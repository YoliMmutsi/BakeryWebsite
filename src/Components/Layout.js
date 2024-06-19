//imports
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; 

//component-wrapping components within layout
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
