import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const FetchContext = createContext();

const FetchProvider = ({ children }) => {
  const [compareSummary, setCompareSummary] = useState({});
  const [featuresList, setFeaturesList] = useState([]);
  const [id, setId] = useState("");
  const [id2, setId2] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://www.mocky.io/v2/5e9ebdaa2d00007800cb7697"
        );
        setCompareSummary(response.data.products.compareSummary);
        setFeaturesList(response.data.products.featuresList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <FetchContext.Provider
      value={{ compareSummary, featuresList, id, setId, id2, setId2 }}
    >
      {children}
    </FetchContext.Provider>
  );
};

const useFetch = () => useContext(FetchContext);
export { useFetch, FetchProvider };
