import React from "react";

const ProductDescription = ({ compareData }) => {
  const { imgLink, priceDetails, desc } = compareData;

  return (
    <div className="gap-s flex-center">
      <div className="img_box">
        <img src={imgLink} />
      </div>

      <div className="flex-center flex-col">
        <p>{desc ? desc.subtitle : "loading data"}</p>
        <p>{desc ? desc.title : "loading data"}</p>
      </div>

      <div className="flex-row gap-r-s">
        <p className="bold">
          {priceDetails ? priceDetails.finalPrice : "loading data"}
        </p>
        <p className="line-through">
          {priceDetails ? priceDetails.price : "Loading data"}
        </p>
        <p className="red">
          {priceDetails ? `${priceDetails.totalDiscount}%OFF` : "Loading data"}
        </p>
      </div>
    </div>
  );
};

export { ProductDescription };
