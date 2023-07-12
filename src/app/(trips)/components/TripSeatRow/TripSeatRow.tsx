"use client"

import * as ToggleGroup from "@radix-ui/react-toggle-group"

interface TripSeatRowProps {
  row: number
}

const TripSeatRow: React.FC<TripSeatRowProps> = ({ row }) => {
  return (
    <>
      <ToggleGroup.Item
        value={`${row}A`}
        className="block h-12 rounded-sm ring-violet-300 radix-state-off:bg-teal-700 radix-state-on:bg-violet-500 radix-state-on:ring-4"
      >
        <span className="text-neutral-100">{row}A</span>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value={`${row}B`}
        className="block h-12 rounded-sm ring-violet-300 radix-state-off:bg-teal-700 radix-state-on:bg-violet-500 radix-state-on:ring-4"
      >
        <span className="text-neutral-100">{row}B</span>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value={`${row}C`}
        className="col-start-4 h-12 rounded-sm ring-violet-300 radix-state-off:bg-teal-700 radix-state-on:bg-violet-500 radix-state-on:ring-4"
      >
        <span className="text-neutral-100">{row}C</span>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value={`${row}D`}
        className="block h-12 rounded-sm ring-violet-300 radix-state-off:bg-teal-700 radix-state-on:bg-violet-500 radix-state-on:ring-4"
      >
        <span className="text-neutral-100">{row}D</span>
      </ToggleGroup.Item>
    </>
  )
}

export default TripSeatRow
