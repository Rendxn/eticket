"use client"

import { useState } from "react"
import { SEAT_FORM_STATE, SeatFormStateContext } from "./hooks/useSeatForm"

interface TripLayoutProps {
  children: React.ReactNode[]
  params: {
    tripId: string
  }
}

const TripLayout: React.FC<TripLayoutProps> = ({
  children
}) => {
  const [form, setForm] = useState(SEAT_FORM_STATE)
  return (
    <SeatFormStateContext.Provider value={{ form, setForm }}>
      {children}
    </SeatFormStateContext.Provider>
  )
}

export default TripLayout
