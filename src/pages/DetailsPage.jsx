import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import useFetchDetails from "../hooks/UseFetchDetails";
import useFetch from "../hooks/UseFetch";
import HorizontalScrollCard from "../components/HorizontalScrollCard";

const DetailsPage = () => {
  const { explore, id } = useParams();
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const { data } = useFetchDetails(`/${explore}/${id}`);
  const { data: castData } = useFetchDetails(`/${explore}/${id}/credits`);
  const { data: similarData } = useFetch(`/${explore}/${id}/similar`);
  const { data: recommendationsData } = useFetch(
    `/${explore}/${id}/recommendations`
  );

  console.log("data", data);
  console.log("castData", castData);
  console.log("Similar", similarData);
  console.log("recommendations", recommendationsData);

  const importantCrew = castData?.crew?.filter(
    (person) =>
      person.department === "Production" ||
      person.department === "Acting" ||
      person.department === "Writing" ||
      person.department === "Production" ||
      person.department === "Directing" ||
      person.department === "Sound" ||
      person.department === "Art" ||
      person.department === "Lighting"
  );

  if (!data) return null;
  return (
    <section className="relative min-h-screen text-white pt-15 lg:pt-24">
      {/* Backdrop */}
      <div className="absolute inset-0">
        <img
          src={imageURL + data?.backdrop_path}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-10">
        {/* Poster */}
        <div className="mx-auto w-fit">
          <img
            src={imageURL + data.poster_path}
            alt={data.title}
            className=" w-64 sm:w-72 lg:w-80 rounded-xl shadow-xl"
          />
        </div>

        {/* Details */}
        <div className="flex-1">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">
            {data.title || data.name}
          </h1>

          <p className="italic text-neutral-400 mb-4">{data.tagline}</p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
            <span className="bg-red-600 px-3 py-1 rounded-full font-semibold">
              ⭐ {data.vote_average.toFixed(1)}
            </span>
            <span className="px-3 py-1 rounded-full font-semibold">
              View : {Number(data.vote_count)}
            </span>
            <span>
              Release : {moment(data.release_date).format("MMM Do YYYY")}
            </span>
            <span>Duration : {data.runtime} min</span>
            <span className="capitalize">status : {data.status}</span>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-2 mb-6">
            {data.genres?.map((genre) => (
              <span
                key={genre.id}
                className="px-3 py-1 text-xs rounded-full bg-neutral-800"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Spoken Languages */}
          {data.spoken_languages?.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-neutral-400 mb-2">
                Spoken Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.spoken_languages.map((lang) => (
                  <span
                    key={lang.iso_639_1}
                    className="px-3 py-1 text-xs rounded-full bg-neutral-800 text-white"
                  >
                    {lang.english_name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Overview */}
          <h3 className="text-lg font-semibold mt-2 pt-2">Overview</h3>
          <p className="text-neutral-300 leading-relaxed max-w-3xl">
            {data.overview}
          </p>

          {/* Extra Info */}
          <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
            <p>
              <span className="text-neutral-400">Budget:</span> $
              {data.budget?.toLocaleString()}
            </p>
            <p>
              <span className="text-neutral-400">Revenue:</span> $
              {data.revenue?.toLocaleString()}
            </p>
            <p>
              <span className="text-neutral-400">Language:</span>{" "}
              {data.original_language?.toUpperCase()}
            </p>
            <p>
              <span className="text-neutral-400">Popularity:</span>{" "}
              {Math.round(data.popularity)}
            </p>
          </div>
        </div>
      </div>

      {/* Cast Section */}
      {castData?.cast?.length > 0 && (
        <div className="relative container mx-auto px-4 pb-20">
          <h2 className="text-xl font-semibold mb-4 lg:text-3xl">Cast</h2>

          <div className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth">
            {castData?.cast
              ?.filter((el) => el?.profile_path)
              .map((cast) => (
                <div key={cast.id} className="w-32 shrink-0 text-center">
                  <img
                    src={
                      cast.profile_path
                        ? imageURL + cast.profile_path
                        : "/avatar.png"
                    }
                    alt={cast.name}
                    className="w-full h-40 object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm font-medium">{cast.name}</p>
                  <p className="text-xs text-neutral-400">{cast.character}</p>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Crew Section */}
      {importantCrew?.length > 0 && (
        <div className="relative container mx-auto px-4 pb-10">
          <h2 className="text-xl font-semibold mb-4 lg:text-3xl">Crew</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {importantCrew
              ?.filter((el) => el?.profile_path)
              .map((crew) => (
                <div
                  key={crew.id}
                  className="flex items-center gap-4 bg-neutral-900/70 p-4 rounded-xl"
                >
                  <img
                    src={
                      crew.profile_path
                        ? imageURL + crew.profile_path
                        : "/avatar.png"
                    }
                    alt={crew.name}
                    className="w-18 h-18 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{crew.name}</p>
                    <p className="text-xs text-neutral-400">{crew.job}</p>
                    <p className="text-xs text-neutral-400">
                      {crew.department}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Similar & Recommendations Section */}
      <div className="relative z-20 bg-black pt-16 pb-32">
        <div className="container mx-auto px-4 space-y-16">
          <HorizontalScrollCard
            data={similarData}
            heading={`Similar ${explore}`}
            media_type={explore}
          />

          <HorizontalScrollCard
            data={recommendationsData}
            heading={`Recommended ${explore}`}
            media_type={explore}
          />
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
