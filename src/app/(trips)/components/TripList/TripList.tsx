"use client"

import * as Accordion from "@radix-ui/react-accordion"
import Link from "next/link"
import { Trip } from "../../interfaces/Trip"
import TripCard from "../TripCard/TripCard"
import TripDetails from "../TripDetails/TripDetails"

interface TripListProps {
  trips: Trip[]
}

const TripList: React.FC<TripListProps> = ({ trips }) => {
  return (
    <Accordion.Root type="single" collapsible className="divide-y">
      {trips.map((trip) => (
        <div key={trip.id}>
          <Link href={`/${trip.id}`} className="block">
            <TripCard trip={trip}></TripCard>
          </Link>
          <Accordion.Item value={String(trip.id)}>
            <Accordion.Header className="text-xs">
              <Accordion.Trigger className="w-full py-2 underline">
                Más detalles
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <TripDetails amenities={trip.amenities} />
            </Accordion.Content>
          </Accordion.Item>
        </div>
      ))}
    </Accordion.Root>
  )
}

export default TripList
