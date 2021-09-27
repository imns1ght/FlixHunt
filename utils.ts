export const convertMinsToTime = (mins: number | null) => {
  if (mins) {
    const hours = Math.floor(mins / 60)
    const minutes = mins % 60
    const minutesStr = minutes < 10 ? '0' + minutes : minutes
    return `${hours ? `${hours}h` : ''}${minutesStr}m`
  }
}

export const arrToStringFormated = (arr: any[]) => {
  if (arr) {
    const result = arr.map((value, index, arr) => {
      if (arr.length - 1 === index) {
        return value.name + '.'
      } else {
        return value.name + ', '
      }
    })
    return result
  }

  return ''
}
