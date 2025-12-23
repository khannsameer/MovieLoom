import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const res = await axios.get(`/search/collection`, {
        params: {
          query: location?.search?.slice(3),
          page: page,
        },
      });
      setData((prev) => {
        return [...prev, ...res.data.results];
      });

      // setTotalPageNo(res.data.total_pages);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    setPage(1);
    setData([]);
    fetchData();
  }, [location?.search]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetWidth) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Search Results
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-7 justify-center lg:justify-start">
          {data.map((searcheData, index) => {
            return (
              <Card
                data={searcheData}
                key={searcheData.id + "search"}
                media_type={searcheData.media_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
