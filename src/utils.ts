import CONSTANTS from './constants'

export const convertMinsToTime = (mins: number | null) => {
  if (mins) {
    const hours = Math.floor(mins / 60)
    const minutes = mins % 60
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes
    return `${hours ? `${hours}h` : ''}${minutesStr}m`
  }
}

export const arrToStringFormated = (arr: { name: string }[]) => {
  if (!arr) return ''

  return arr.map((value, index, arr) => `${value.name}${index === arr.length - 1 ? '.' : ', '}`)
}

export const getImagePath = (
  path: string,
  size: 'w500' | 'w780' | 'w1280' | 'original' = 'w500'
) => {
  return `${CONSTANTS.api_image_url}/${size}${path}`
}

export const shuffleArray = (array: unknown[]) => array.sort(() => Math.random() - 0.5)
