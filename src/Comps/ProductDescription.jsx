import React from "react";

const ProductDescription = ({ compareData,id }) => {
  const { imgLink, priceDetails, desc } = compareData;

  return (
    <div className="gap-s flex-center">
      <div className="img_box">
       { id &&  <img src={imgLink} />}
      </div>

      <div className="flex-center flex-col">
        <p>{desc ? desc.subtitle : ""}</p>
        <p>{desc ? desc.title : ""}</p>
      </div>

      <div className="flex-row gap-r-s">
        <p className="bold">
          {priceDetails ? priceDetails.finalPrice : ""}
        </p>
        <p className="line-through">
          {priceDetails ? priceDetails.price : ""}
        </p>
        <p className="red">
          {priceDetails ? `${priceDetails.totalDiscount}%OFF` : ""}
        </p>
      </div>
    </div>
  );
};

export { ProductDescription };
