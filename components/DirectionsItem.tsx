import DirectionCard from "@/components/DirectionCard";

const DirectionsItem = () => {
  return (
    <div className="flex flex-col gap-3">
      <DirectionCard />
      <DirectionCard />
    </div>
  );
};

export default DirectionsItem;