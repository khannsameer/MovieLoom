import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  console.log("params", params.explore);

  const fetchData = async () => {
    try {
      const res = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });
      setData((prev) => {
        return [...prev, ...res.data.results];
      });

      setTotalPageNo(res.data.total_pages);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetWidth) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-16">
      <h3 className="capitalize ">Popular {params.explore} show</h3>
    </div>
  );
};

export default ExplorePage;
