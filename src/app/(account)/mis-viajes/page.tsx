"use client"

import TripCard from "@/app/(trips)/components/TripCard/TripCard"
import { SeatFormStateContext } from "@/app/(trips)/hooks/useSeatForm"
import { useContext } from "react"

interface MyTripsPageProps {}

const MyTripsPage: React.FC<MyTripsPageProps> = () => {
  const { form, setForm } = useContext(SeatFormStateContext)

  if (!form.trip) return null

  return (
    <>
      <div>
        <TripCard trip={form.trip}></TripCard>
        <div className="p-4">
          {form.seats.map((seat, index) => (
            <span key={seat}>
              {seat}
              {index < form.seats.length - 1 ? ", " : null}
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
