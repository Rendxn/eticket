import { getTrips } from "@/app/lib/trips"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import TripList from "./components/TripList/TripList"

export default function Home() {
  const trips = getTrips()

  return (
    <main className="min-h-screen w-full">
      <div className="my-8 text-center">
        <div className="inline-flex items-center rounded-md bg-violet-500 px-4">
          <span className="p-2 text-sm text-neutral-50" title="Origen">
            Medellín
          </span>
          <ChevronRightIcon className="h-4 w-4 text-neutral-50" aria-hidden />
          <span className="p-2 text-sm text-neutral-50" title="Destino">
            Bogotá
          </span>
        </div>
      </div>
      <TripList trips={trips} />
    </main>
  )
}
