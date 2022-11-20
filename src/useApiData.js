import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.headers = {
  'Cache-Control': 'no-cache',
  'Pragma': 'no-cache',
  'Expires': '0',
};

export const useApiData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");

        const { rates, date } = response.data;

        setRatesData({
          state: "succes",
          rates,
          date,
        });

      } catch (error) {
        setRatesData({
          state: "error",
        });

      }
    };

    setTimeout(getData, 1000);
  }, []);

  return ratesData;
};