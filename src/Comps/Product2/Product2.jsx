import React, { useState } from "react";
import { useFetch } from "../../Context/FetchContext";
import { ProductDropdown, ProductDescription, ProductFeature } from "../index";

const Product2 = ({placeHolder,setPlaceholder}) => {
  const [compareData, setCompareData] = useState({});
  const [id, setId] = useState("");
  const { featuresList } = useFetch();

  return (
    <>
      <div className="cursor">
        <ProductDropdown
          setCompareData={setCompareData}
          setId={setId}
        />
        <div className="grid-row">
          <ProductDescription compareData={compareData} id = {id}  />
          <ProductFeature
            featuresList={featuresList}
            id={id}
            showFeature={false}
          />
        </div>
      </div>
    </>
  );
};

export { Product2 };
