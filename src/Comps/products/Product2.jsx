import React, { useState } from "react";
import { useFetch } from "../../context/FetchContext";
import { ProductDropdown, ProductDescription, ProductFeature } from "../index";

const Product2 = () => {
  const [compareData, setCompareData] = useState({});
  const { featuresList, id2, setId2 } = useFetch();

  return (
    <>
      <div className="cursor">
        <ProductDropdown setCompareData={setCompareData} setId={setId2} />
        <div className="grid-row">
          <ProductDescription compareData={compareData} id={id2} />
          <ProductFeature
            featuresList={featuresList}
            id={id2}
            showFeature={false}
          />
        </div>
      </div>
    </>
  );
};

export { Product2 };
