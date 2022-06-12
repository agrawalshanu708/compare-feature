import React from "react";
import { Product1, Product2 } from "../Comps/index";
import "./Compare.css";
const Compare = () => {
  return (
    <>
      <div className="grid-col container">
        <Product1 />
        <Product2 />
      </div>
    </>
  );
};

export { Compare };
