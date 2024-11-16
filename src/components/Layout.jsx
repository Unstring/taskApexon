import React from 'react';
import Header from './Header';
// import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
// import RightSidebar from './RightSidebar';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      <div className="main-container">
        <LeftSidebar />
        <main className="p-10 lg:ml-20">{children}</main>        {/* <RightSidebar /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
