"use client"

import { useContext } from "react"
import { SeatFormStateContext } from "../hooks/useSeatForm"

interface CheckoutPageProps {}

const CheckoutPage: React.FC<CheckoutPageProps> = () => {
  const { form, setForm } = useContext(SeatFormStateContext)

  return (
    <div className="p-4">
      <div className="flex flex-col gap-8">
        <span className="text-right font-bold">
          {form.seats.length} sillas&times;{Number(form.trip?.price.value)}
        </span>
        <div className="flex justify-between">
          <span>Total</span>
          <span className="font-bold">
            {form.seats.length * Number(form.trip?.price.value)}
          </span>
        </div>
        <div className="w-full rounded-sm border border-solid p-10">PSE</div>
        <div className="w-full rounded-sm border border-solid p-10 ">
          Tarjeta de crédito
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
