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
