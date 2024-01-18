import React from "react";
import Header from "../Header/Header";
import Router from "../../routes/Routers";
import Footer from "../Footer/Footer";
import Carts from "../ui/cart/Carts";
const Layout = () => {
  return (
    <div>
      <Header />
      <Carts/>
      <div className="md:text-base">
        <Router />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
