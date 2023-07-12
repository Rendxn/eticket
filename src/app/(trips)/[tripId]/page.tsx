"use client"

import { getTripById } from "@/app/lib/trips"
import { useContext, useEffect } from "react"
import TripCard from "../components/TripCard/TripCard"
import TripSeatPicker from "../components/TripSeatPicker/TripSeatPicker"
import { SeatFormStateContext } from "../hooks/useSeatForm"

interface TripPageProps {
  params: {
    tripId: string
  }
}

const TripPage: React.FC<TripPageProps> = ({ params: { tripId } }) => {
  const trip = getTripById(Number(tripId))
  const { form, setForm } = useContext(SeatFormStateContext)

  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      trip: trip ?? null,
    }))
  }, [setForm, trip])

  if (!trip) return <div>No encontramos esta ruta</div>

  return (
    <>
      <TripCard trip={trip} />
      <TripSeatPicker />
    </>
  )
}

export default TripPage
