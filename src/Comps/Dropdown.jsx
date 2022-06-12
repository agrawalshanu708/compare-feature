import React, { createContext, useEffect, useState } from "react";
import { useFetch } from "../context/FetchContext";

const ProductDropdown = ({ setCompareData, setId }) => {
  const { compareSummary } = useFetch();

  const compareValues = Object.values(compareSummary);
  const [images, titles, productPricingSummary] = compareValues;

  const TVHandler = (id) => {
    id === "none" ? setId("") : setId(id);
    const imgLink = images[id];
    const priceDetails = productPricingSummary[id];
    const desc = titles[id];
    setCompareData((prev) => ({ ...prev, imgLink, priceDetails, desc }));
  };

  return (
    <>
      <label for="cars">Choose a TV: </label>
      <select name="tv" id="tv" onChange={(e) => TVHandler(e.target.value)}>
        <option value="TVSE8FMZ9AQMEGC6">TV1</option>
        <option value="TVSF2WYUE4PWNJKM">TV2</option>
        <option value="TVSF2WYXTKAR7RAF">TV3</option>
        <option value="TVSF3J7HUJF5XUBT">TV4</option>
        <option value="none" selected>
          None
        </option>
      </select>
    <p>Select Tv to compare</p>
    </>
  );
};

export { ProductDropdown };
