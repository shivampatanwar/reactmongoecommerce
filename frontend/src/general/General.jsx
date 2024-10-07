import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const General = () => {
  return (
    <div className="general">
      <Header />

      <div className="general-content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default General;
