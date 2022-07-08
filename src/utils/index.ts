export const isPassedMinute = (targetMinute: number) => (tDate: Date) => {
  tDate.setMinutes(tDate.getMinutes() + targetMinute);
  return new Date() >= tDate;
};
