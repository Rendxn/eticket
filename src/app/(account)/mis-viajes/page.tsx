"use client"

import TripCard from "@/app/(trips)/components/TripCard/TripCard"
import { SeatFormStateContext } from "@/app/(trips)/hooks/useSeatForm"
import { Trip } from "@/app/(trips)/interfaces/Trip"
import { useContext } from "react"

interface MyTripsPageProps {}

const dummyTrip: { trip: Trip | null; seats: string[]; payment: string } = {
  trip: {
    id: 1,
    operator: "Rápido Ochoa",
    duration: { value: 8, unit: "horas" },
    origin: { date: 1690401700682, location: "Medellín" },
    price: { value: 50000, currency: "COP" },
    destination: { date: 1690430500682, location: "Cali" },
    amenities: ["WiFi", "WiFi", "WiFi", "WiFi", "WiFi", "WiFi"],
  },
  seats: ["1A", "1B", "2A"],
  payment: "",
}

const MyTripsPage: React.FC<MyTripsPageProps> = () => {
  const { form, setForm } = useContext(SeatFormStateContext)

  const details = form.trip ? form : dummyTrip

  if (!details.trip) return null

  return (
    <>
      <div>
        <TripCard trip={details.trip}></TripCard>
        <div className="p-4">
          {details.seats.map((seat, index) => (
            <span key={seat}>
              {seat}
              {index < details.seats.length - 1 ? ", " : null}
            </span>
          ))}
        </div>
        <div className="flex justify-center p-4">
          <div className="my-16 h-60 w-60 bg-neutral-700"></div>
        </div>
      </div>
    </>
  )
}

export default MyTripsPage
