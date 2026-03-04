import { SelfStorageListing } from "./SelfStorageListing/SelfStorageListing";
import { selfStorageListings } from "./SelfStorageListing/SelfStorageListingModel";

export const SelfStorageListings: React.FC = async () => {
  return (
    <div className="flex flex-col items-center py-10 relative" id={"units"}>
      <div className="bg-custom-gradiant h-full bg-custom-radial w-full min-h-60 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
      <h2 className="font-bold text-3xl">Available units</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 w-full justify-center gap-10 pt-10">
        {selfStorageListings.map((unit, i) => {
          return <SelfStorageListing unit={unit} key={i} />;
        })}
      </div>
    </div>
  );
};
