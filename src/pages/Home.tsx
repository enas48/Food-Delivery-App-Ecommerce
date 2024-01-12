import React from "react";
import Helmet from "../components/Helmet/Helmet";
import Banner from "../components/Banner/Banner";
import Category from "../components/ui/ui-category/Category";
import Features from "../components/Features/Features";
import ProductsList from "../components/productsList/ProductsList";
import WhyChooseus from "../components/WhyChooseus/WhyChooseus";
import Testimonial from "../components/Testimonial/Testimonial";
const Home = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12 ">
      <Helmet title="Home">
        <div>
          <div className="mb-20">
            <Banner />
          </div>
          <div className="mb-20">
            <Category />
          </div>
          <div className="mb-20">
            <Features />
          </div>
          <div className="mb-20">
            <ProductsList />
          </div>
          <div className="mb-20">
            <WhyChooseus />
          </div>
          <div className="mb-20">
            <ProductsList type="Pizza" />
          </div>
          <div className="mb-20">
            <Testimonial />
          </div>
        </div>
      </Helmet>
    </div>
  );
};

export default Home;
