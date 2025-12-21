import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieData.bannerData);
  const imageURL = useSelector((state) => state.movieData.imageURL);

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // handles looping automatically
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => {
          // console.log("data", data);

          return (
            <div
              key={data.id + "bannerHome" + index}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-transform duration-1000 ease-[cubic-bezier(0.45,0,0.55,1)] will-change-transform hover:scale-[1.01]"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <div className="w-full h-full">
                <img
                  src={imageURL + data.backdrop_path}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              {/* next and previous button */}

              <div className="absolute top-0 w-full h-full hidden items-center justify-between px-4 group-hover:lg:flex">
                <button
                  onClick={handlePrevious}
                  className="bg-white p-1 rounded-full text-3xl z-10 text-neutral-600"
                >
                  <FaAngleLeft />
                </button>

                <button
                  onClick={handleNext}
                  className="bg-white p-1 rounded-full text-3xl z-10 text-neutral-600"
                >
                  <FaAngleRight />
                </button>
              </div>

              <div className="absolute top-0 w-full h-full bg-linear-to-t from-neutral-900 to-transparent"></div>

              <div className="container mx-auto">
                <div className=" w-full absolute bottom-0 max-w-md px-3">
                  <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-3xl">
                    {data.title || data.name}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {data.overview}
                  </p>
                  <div className="flex items-center gap-3">
                    <p>Rating : {Number(data.vote_average).toFixed(1)}+</p>
                    <span>|</span>
                    <p>View : {Number(data.popularity).toFixed(0)}</p>
                  </div>
                  <button className="inline-flex items-center mt-3 gap-2 px-5 py-2 font-semibold text-white rounded-2xl bg-linear-to-r from-red-600 to-orange-500 transform-gpu will-change-transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-0.5 hover:shadow-2xl active:scale-95 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 motion-reduce:transition-none">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
