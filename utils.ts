export const convertMinsToTime = (mins: number | null) => {
  if (mins) {
    let hours = Math.floor(mins / 60);
    let minutes = mins % 60;
    let minutesStr = minutes < 10 ? "0" + minutes : minutes;
    return `${hours ? `${hours}h` : ""}${minutesStr}m`;
  }
};

export const arrToStringFormated = (arr: any[]) => {
  if (arr) {
    const result = arr.map((value, index, arr) => {
      if (arr.length - 1 === index) {
        return value.name + ".";
      } else {
        return value.name + ", ";
      }
    });
    return result;
  }

  return "";
};
