import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const Card = ({ data, trending, index, media_type }) => {
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const mediaType = data.media_type ?? media_type;

  const date =
    data.release_date || data.first_air_date
      ? moment(data.release_date || data.first_air_date).format("MMM Do YYYY")
      : "Coming Soon";

  const rating = data.vote_average
    ? Number(data.vote_average).toFixed(1)
    : "N/A";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Link
        to={`/${mediaType}/${data.id}`}
        aria-label={`View details for ${data.title || data.name}`}
        className="group w-full max-w-[230px] h-80 relative block rounded-xl overflow-hidden transition-all duration-300 ease-out will-change-transform hover:scale-[1.06] hover:shadow-2xl hover:z-10"
      >
        {/* Poster */}
        {data.poster_path ? (
          <img
            src={imageURL + data.poster_path}
            alt={data.title || data.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="bg-neutral-800 h-full w-full flex items-center justify-center text-neutral-400 text-sm">
            No Poster
          </div>
        )}

        {/* Play Button */}
        <div
          className="
  absolute inset-0 flex items-center justify-center
  opacity-0 group-hover:opacity-100
  transition duration-300 z-20
"
        >
          <div
            className="
    bg-white/90 text-black p-4 rounded-full
    scale-75 group-hover:scale-100
    transition-transform duration-300
  "
          >
            <FaPlay />
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Trending */}
        {trending && (
          <div className="absolute top-2 left-0 z-10">
            <div className="py-1 px-4 backdrop-blur-md rounded-r-full bg-black/60 text-sm font-medium">
              #{index} Trending
            </div>
          </div>
        )}

        {/* Info */}
        <div className="absolute bottom-0 w-full p-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h2 className="text-lg font-semibold line-clamp-1">
            {data.title || data.name}
          </h2>

          <div className="text-sm text-neutral-300 flex justify-between items-center mt-1">
            <p>{date}</p>
            <p className="bg-black/70 px-2 py-0.5 rounded text-xs">
              ⭐ {rating}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
