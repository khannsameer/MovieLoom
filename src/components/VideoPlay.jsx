import React from "react";
import { IoClose } from "react-icons/io5";
import useFetchDetails from "../hooks/UseFetchDetails";

const VideoPlay = ({ data, close, media_type }) => {
  const { data: videoData } = useFetchDetails(
    `/${media_type}/${data.id}/videos`
  );

  console.log("VideoPlay", videoData);

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Video container */}
      <div className="relative w-full max-h-[80vh] lg:max-w-5xl aspect-video bg-neutral-900 rounded-lg overflow-hidden">
        {/* Close button */}
        <button
          onClick={close}
          className="fixed top-6 right-6 text-white text-4xl z-50 bg-black/70 rounded-full p-1 hover:scale-110 transition"
          aria-label="Close video"
        >
          <IoClose />
        </button>

        <iframe
          src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default VideoPlay;
