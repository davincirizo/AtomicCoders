import { NewDiaryEntry, Visibility, Weather } from '../types'

const isStrig = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}
const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const parseDate = (dateFromRequest: any): string => {
  if (!isStrig(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or messing date')
  }
  return dateFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isStrig(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('!Incorrectlt message of visibility')
  }
  return visibilityFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isStrig(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('!Incorrectlt message of weather')
  }
  return weatherFromRequest
}

const parseComment = (commentFromRequest: any): string => {
  if (!isStrig(commentFromRequest)) {
    throw new Error('Incorrect or messing comment')
  }
  return commentFromRequest
}

const toNewDiaryRequest = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.date),
    visibility: parseVisibility(object.date)

  }
  return newEntry
}

export default toNewDiaryRequest
