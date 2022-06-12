import React from "react";
import { Product1, Product2 } from "../Comps/index";
import "./UI.css";
const UI = () => {
  return (
    <>
      <div className=" grid-col container">
        <Product1 />
        <Product2 />
      </div>
    </>
  );
};

export { UI };
