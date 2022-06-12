import React, { useState } from "react";
import { useFetch } from "../../Context/FetchContext";
import { ProductDropdown, ProductDescription, ProductFeature } from "../index";
import "./Product.css";
const Product1 = () => {
  const [compareData, setCompareData] = useState({});
  const [id, setId] = useState("");
  const { featuresList } = useFetch();

  return (
    <div className="">
      <ProductDropdown
        setCompareData={setCompareData}
        setId={setId}
      />
      <div className="grid-row">
        <ProductDescription compareData={compareData} id={id} />
        <ProductFeature
          featuresList={featuresList}
          id={id}
          showFeature={true}
        />
      </div>
    </div>
  );
};

export { Product1 };
