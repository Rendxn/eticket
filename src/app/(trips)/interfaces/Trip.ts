export interface Trip {
  id: number
  operator: string
  duration: Duration
  origin: Destination
  price: Price
  destination: Destination
  amenities?: string[]
}

export interface Duration {
  value: number
  unit: string
}

export interface Destination {
  date: number
  location: string
}

export interface Price {
  value: number
  currency: string
}
