import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpeg"
          className="card-img"
          alt="img-bg"
          height="500px"
        />
        <div className="card-img-overlay">
          <div className="container">
            <h5 className="card-title display-3 fw-border mb-0 flex-cloumn justify-content-center">
              New Season Arrivals
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default Home;
