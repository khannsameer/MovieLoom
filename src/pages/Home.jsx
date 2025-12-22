import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../hooks/UseFetch";

const Home = () => {
  const trandingData = useSelector((state) => state.movieData.bannerData);
  // const [nowPlayingData, setNowPlayingData] = useState([]);
  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: popularData } = useFetch("/movie/popular");
  const { data: topRatedData } = useFetch("/movie/top_rated");
  const { data: upComingData } = useFetch("/movie/upcoming");
  const { data: popularTvShow } = useFetch("/tv/popular");
  const { data: onTheAirShowData } = useFetch("/tv/on_the_air");

  // const fetchNowPlayingData = async () => {
  //   try {
  //     const response = await axios.get();
  //     // console.log(response.data.results);
  //     setNowPlayingData(response.data.results);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   fetchNowPlayingData();
  // }, []);

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={trandingData}
        heading={"Trending"}
        trending={true}
      />
      <HorizontalScrollCard
        data={nowPlayingData}
        heading={"Now Playing"}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={popularData}
        heading={"Popular"}
        media_type={"tv"}
      />
      <HorizontalScrollCard
        data={topRatedData}
        heading={"Top Rated Movies"}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={upComingData}
        heading={"Up Coming"}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={popularTvShow}
        heading={"Tv Show"}
        media_type={"tv"}
      />
      <HorizontalScrollCard
        data={onTheAirShowData}
        heading={"On The Air"}
        media_type={"tv"}
      />
    </div>
  );
};

export default Home;
