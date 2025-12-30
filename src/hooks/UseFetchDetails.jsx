import axios from "axios";
import { useEffect, useState } from "react";

const useFetchDetails = (endPoint) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(endPoint);
      setLoading(false);
      // console.log(response.data.results);
      setData(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endPoint]);

  return { data, loading };
};

export default useFetchDetails;
