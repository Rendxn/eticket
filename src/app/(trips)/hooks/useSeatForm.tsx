import { createContext } from "react"
import { Trip } from "../interfaces/Trip"

interface FormState {
  trip: Trip | null
  seats: string[]
  payment: string
}

export const SEAT_FORM_STATE: FormState = {
  trip: null,
  seats: [],
  payment: "",
}

export const SeatFormStateContext = createContext({
  form: SEAT_FORM_STATE,
  setForm: (
    form:
      | typeof SEAT_FORM_STATE
      | ((form: typeof SEAT_FORM_STATE) => typeof SEAT_FORM_STATE),
  ) => {},
})
