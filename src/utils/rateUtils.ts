export const periodToPersent = (period: number, width: number, max: number) => {
  return Math.floor((period / width) * max);
};

export const PersentToPeriod = (
  percent: number,
  width: number,
  max: number
) => {
  return Math.floor((width / max) * percent);
};
