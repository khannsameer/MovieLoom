import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const Card = ({ data, trending, index, media_type }) => {
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const mediaType = data.media_type ?? media_type;

  return (
    <Link
      to={`/${mediaType}/${data.id}`}
      className="
        group w-full max-w-[230px] h-80 relative block rounded-xl overflow-hidden transition-all duration-300 ease-out will-change-transform hover:scale-[1.06] hover:shadow-2xl hover:z-10"
    >
      {/* Poster */}
      <img
        src={imageURL + data.poster_path}
        alt={data.title || data.name}
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Trending badge */}
      {trending && (
        <div className="absolute top-2 left-0 z-10">
          <div className="py-1 px-4 backdrop-blur-md rounded-r-full bg-black/60 text-sm font-medium">
            #{index} Trending
          </div>
        </div>
      )}

      {/* Bottom info */}
      <div className="absolute bottom-0 w-full p-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h2 className="text-lg font-semibold line-clamp-1">
          {data.title || data.name}
        </h2>

        <div className="text-sm text-neutral-300 flex justify-between items-center mt-1">
          <p>
            {moment(data.release_date || data.first_air_date).format(
              "MMM Do YYYY"
            )}
          </p>
          <p className="bg-black/70 px-2 py-0.5 rounded text-xs">
            ⭐ {Number(data.vote_average).toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
