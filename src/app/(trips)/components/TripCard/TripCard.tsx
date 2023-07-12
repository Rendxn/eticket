import { Trip } from "../../interfaces/Trip"

interface TripCardProps {
  trip: Trip
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  const formatter = new Intl.DateTimeFormat("es-CO", { timeStyle: "short" })

  return (
    <div className="flex w-full flex-col gap-6 px-4 py-6">
      <span className="text-xs" title="Operador">
        {trip.operator}
      </span>
      <div className="flex justify-between gap-x-2 ">
        <span title="Hora de salida">{formatter.format(trip.origin.date)}</span>
        <div className="relative z-10 block flex-1 bg-inherit text-center before:absolute before:left-0 before:top-1/2 before:-z-10 before:block before:h-0.5 before:w-full before:border-b before:border-dashed before:border-violet-500">
          <span className="bg-white px-1 font-semibold" title="Duración">
            {trip.duration.value} {trip.duration.unit}
          </span>
        </div>
        <span title="Hora de llegada">
          {formatter.format(trip.destination.date)}
        </span>
      </div>
    </div>
  )
}

export default TripCard
