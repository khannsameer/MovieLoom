const CardSkeleton = () => {
  return (
    <div className="w-[230px] h-80 rounded-xl bg-neutral-800 animate-pulse overflow-hidden">
      <div className="h-full w-full bg-neutral-700" />
    </div>
  );
};

export default CardSkeleton;
