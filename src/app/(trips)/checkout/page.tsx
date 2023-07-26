"use client"

import * as RadioGroup from "@radix-ui/react-radio-group"
import Link from "next/link"
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
        <RadioGroup.Root className="flex flex-col gap-8">
          <RadioGroup.Item
            value="PSE"
            className="block rounded-md border border-neutral-300 radix-state-checked:border radix-state-checked:border-violet-500 radix-state-checked:bg-violet-50"
          >
            <RadioGroup.Indicator />
            <div className="w-full p-10 text-left">PSE</div>
          </RadioGroup.Item>
          <RadioGroup.Item
            value="TC"
            className="block rounded-md border border-neutral-300 radix-state-checked:border radix-state-checked:border-violet-500 radix-state-checked:bg-violet-50"
          >
            <RadioGroup.Indicator />
            <div className="w-full p-10 text-left">Tarjeta de crédito</div>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>
      <div className="fixed bottom-0 left-0 z-10 w-full border-t bg-white p-4 text-center">
        <Link
          href="mis-viajes"
          className="block w-full bg-violet-500 p-4 text-white disabled:bg-violet-200"
        >
          Pagar
        </Link>
      </div>
    </div>
  )
}

export default CheckoutPage
