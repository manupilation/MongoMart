import HttpStatus from "../../enum/HTTPStatus";
import ErrorHandler from "../ErrorHandler"

export default function typeofVerifier(thing: any, typeToBe: string,) {
  const variable = Object.keys(thing)[0]

  if(typeof thing[variable] !== typeToBe) {
    throw new ErrorHandler(`Your value of ${variable} must be a/an ${typeToBe}`, HttpStatus.BadRequest);
  }

  return true
}