import { useRef } from "react";
import Card from "../components/Card";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const HorizontalScrollCard = ({ data = [], heading, trending, media_type }) => {
  const containerRef = useRef();

  const handleNext = () => {
    containerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    containerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-3xl font-bold mb-4 text-white capitalize">
        {heading}
      </h2>

      <div className="relative">
        <div
          ref={containerRef}
          className="grid grid-flow-col auto-cols-[230px] gap-6 overflow-x-auto scrollbar-hide relative z-10 scroll-smooth transition-all scrollbar-none"
        >
          {data.map((data, index) => (
            <Card
              key={data.id + "heading" + index}
              data={data}
              index={index + 1}
              trending={trending}
              media_type={media_type}
            />
          ))}
        </div>

        <div className="absolute top-0 hidden lg:flex justify-between w-full h-full items-center">
          <button
            onClick={handlePrev}
            className="bg-white p-1 text-black rounded-full cursor-pointer -ml-2 z-10"
          >
            <FaAngleLeft />
          </button>

          <button
            onClick={handleNext}
            className="bg-white p-1 text-black rounded-full cursor-pointer -mr-2 z-10"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
