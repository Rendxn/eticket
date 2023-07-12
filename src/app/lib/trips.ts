import { Trip } from "../(trips)/interfaces/Trip"

const now = Date.now()

const trips: Trip[] = [
  {
    id: 1,
    operator: "Rápido Ochoa",
    duration: {
      value: 8,
      unit: "horas",
    },
    origin: {
      date: now - 1 * 60 * 60 * 1000,
      location: "Medellín",
    },
    price: {
      value: 50000,
      currency: "COP",
    },
    destination: {
      date: now + 7 * 60 * 60 * 1000,
      location: "Cali",
    },
    amenities: ["WiFi", "WiFi", "WiFi", "WiFi", "WiFi", "WiFi"],
  },
  {
    id: 2,
    operator: "Rápido Ochoa",
    duration: {
      value: 8,
      unit: "horas",
    },
    origin: {
      date: now,
      location: "Medellín",
    },
    price: {
      value: 50000,
      currency: "COP",
    },
    destination: {
      date: now + 8 * 60 * 60 * 1000,
      location: "Cali",
    },
    amenities: ["WiFi", "WiFi", "WiFi", "WiFi", "WiFi", "WiFi"],
  },
  {
    id: 3,
    operator: "Rápido Ochoa",
    duration: {
      value: 8,
      unit: "horas",
    },
    origin: {
      date: now + 1 * 60 * 60 * 1000,
      location: "Medellín",
    },
    price: {
      value: 50000,
      currency: "COP",
    },
    destination: {
      date: now + 9 * 60 * 60 * 1000,
      location: "Cali",
    },
    amenities: ["WiFi", "WiFi", "WiFi", "WiFi", "WiFi", "WiFi"],
  },
]

export const getTrips = (): Trip[] => {
  return trips
}

export const getTripById = (id: number): Trip | undefined => {
  return trips.find((trip) => trip.id === id)
}
