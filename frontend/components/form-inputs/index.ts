export {Email} from "./email"
export {FullName} from "./fullname"
export {Select} from "./select"
export {CivilStatus} from "./civil-status"
export {Age} from "./age"
export {WorkStatus} from "./work-status"
export const maxLengthError = (
    maxLength: number,
    fieldName: string,
    maleGender = true
  ) => {
    return `Verifica que ${
      maleGender ? "el" : "la"
    } ${fieldName.toLowerCase()} tenga máximo ${maxLength} caracteres.`
  }
export const minLengthError = (
    minLength: number,
    fieldName: string,
    maleGender = true
  ) => {
    return `Verifica que ${
      maleGender ? "el" : "la"
    } ${fieldName.toLowerCase()} tenga al menos ${minLength} caracteres.`
  }
export const requiredError = (fieldName: string, maleGender = true) => {
    return `Se requiere ${maleGender ? "el" : "la"} ${fieldName.toLowerCase()}.`
  }
export const invalidError = (fieldName: string, maleGender = true) => {
    return `${maleGender ? "El" : "La"} ${fieldName.toLowerCase()} no es válid${
      maleGender ? "o" : "a"
    }.`
  }