import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const Card = ({ data, trending, index }) => {
  const imageURL = useSelector((state) => state.movieData.imageURL);
  return (
    <div className="w-full max-w-[230px] h-80 overflow-hidden rounded relative">
      <img src={imageURL + data.poster_path} alt="" />
      <div className="absolute top-0">
        {trending && (
          <div className="py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/50 overflow-hidden">
            #{index} Trending
          </div>
        )}
      </div>
      <div className="absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/40 p-2">
        <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold">
          {data.title || data.name}
        </h2>
        <div className="text-sm text-neutral-400 flex justify-between items-center">
          <p>
            {moment(data.release_date || data.first_air_date).format(
              "MMM Do YYY"
            )}
          </p>
          <p className="bg-black px-1 rounded text-xs text-white/65">
            Rating : {Number(data.vote_average).toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
