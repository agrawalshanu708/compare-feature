import React, { createContext, useState } from "react";
import { useFetch } from "../Context/FetchContext";

const ProductDropdown = ({ setCompareData, setId, showOption }) => {
  const { compareSummary } = useFetch();

  const compareValues = Object.values(compareSummary);
  const [images, titles, productPricingSummary] = compareValues;
  const TVHandler = (id) => {
    console.log(id)
    setId(id);
    const imgLink = images[id];
    const priceDetails = productPricingSummary[id];
    const desc = titles[id];
    setCompareData((prev) => ({ ...prev, imgLink, priceDetails, desc }));
  };

  return (
    <>
      <label for="cars">Choose a TV: </label>

      <select name="tv" id="tv" onChange={(e) => TVHandler(e.target.value)}>
        <option value="TVSE8FMZ9AQMEGC6" >TV1</option>
        <option value="TVSF2WYUE4PWNJKM" selected>TV2</option>
        <option value="TVSF2WYXTKAR7RAF">TV3</option>
        <option value="TVSF3J7HUJF5XUBT">TV4</option>
        {showOption && <option value="nodata">None</option>}
      </select>
    </>
  );
};

export { ProductDropdown };
