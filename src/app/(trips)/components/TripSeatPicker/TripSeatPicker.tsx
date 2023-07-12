"use client"

import * as ToggleGroup from "@radix-ui/react-toggle-group"
import { useRouter } from "next/navigation"
import { useContext, useState } from "react"
import { SeatFormStateContext } from "../../hooks/useSeatForm"
import TripSeatRow from "../TripSeatRow/TripSeatRow"

interface TripSeatPickerProps {}

const TripSeatPicker: React.FC<TripSeatPickerProps> = () => {
  const rows = Array.from({ length: 6 }, (_, i) => i + 1)
  const [seats, setSeats] = useState<string[]>([])
  const { form, setForm } = useContext(SeatFormStateContext)
  const router = useRouter()

  const handleValueChange = (seats: string[]) => {
    setSeats(seats)
    setForm(() => ({
      ...form,
      seats: seats,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push("checkout")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-6 rounded-md border border-violet-300 bg-neutral-50">
        <div className="text-center text-sm uppercase">Frente</div>
        <ToggleGroup.Root
          type="multiple"
          value={seats}
          onValueChange={handleValueChange}
        >
          <div className="grid grid-cols-5 justify-evenly gap-x-4 gap-y-10 p-4">
            {rows.map((row) => (
              <TripSeatRow key={row} row={row} />
            ))}
          </div>
        </ToggleGroup.Root>
      </div>
      <div className="fixed bottom-0 left-0 z-10 w-full border-t bg-white p-4 text-center">
        <button
          className="w-full bg-violet-500 p-4 text-white disabled:bg-violet-200"
          disabled={seats.length <= 0}
        >
          Proceder al pago
        </button>
      </div>
    </form>
  )
}

export default TripSeatPicker
