import { StarIcon, WifiIcon } from "@heroicons/react/24/solid"

interface TripDetailsProps {
  amenities?: string[]
}

const TripDetails: React.FC<TripDetailsProps> = ({ amenities }) => {
  return (
    <div className="px-4">
      <div>
        <span className="text-xs">Conductor</span>
        <div className="py-1 text-sm">
          <span className="mr-1">José Mourinho</span>
          <div className="inline-flex">
            <span className="leading-none">5</span>
            <StarIcon className="inline h-4 w-4 text-violet-400" />
          </div>
        </div>
      </div>
      <div className="mt-4 py-1">
        <p className="text-xs">Comodidades</p>
        <div className="grid grid-cols-3 gap-2 px-4 py-2 text-sm">
          {amenities?.map((amenity, index) => (
            <div className="flex justify-center p-1" key={`amenity-${index}`}>
              <WifiIcon className="inline h-4 w-4 text-violet-500" />
              <span className="ml-1 leading-none">{amenity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TripDetails
