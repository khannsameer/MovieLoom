import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { FaSearch } from "react-icons/fa";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const query = location?.search?.slice(3);

  const fetchData = async () => {
    try {
      const res = await axios.get(`/search/multi`, {
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
    if (query) {
      setPage(1);
      setData([]);
      fetchData();
    }
  }, [location?.search]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetWidth) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-16">
      <div className="lg:hidden px-3 sticky top-[70px] z-30">
        <div className="relative flex items-center bg-neutral-900/90 backdrop-blur-md rounded-full border border-neutral-700 focus-within:border-red-600 focus-within:shadow-[0_0_20px_rgba(220,38,38,0.4)]  transition-all duration-300">
          {/* Search Icon */}
          <FaSearch className="ml-4 text-neutral-400 text-sm" />
          {/* Input */}
          <input
            type="text"
            placeholder="Search movies, shows..."
            onChange={(e) => navigate(`/search?q=${e.target.value}`)}
            value={query}
            className="w-full bg-transparent py-2.5 px-3 pr-4 text-white placeholder:text-neutral-500  outline-none text-sm"
          />
        </div>
      </div>
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3 px-3">
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
