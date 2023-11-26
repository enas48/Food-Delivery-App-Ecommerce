import React from "react";
import Header from "../Header/Header";
import Router from "../../routes/Routers";
import Footer from "../Footer/Footer";
const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Router />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
