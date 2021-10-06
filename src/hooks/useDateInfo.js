const useDateInfo = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const monthToCheck = currentMonth - 1 >= 0 ? currentMonth - 1 : 11;
  const yearToCheck = monthToCheck === 11 ? currentYear - 1 : currentYear;

  return { currentDate, currentMonth, currentYear, monthToCheck, yearToCheck };
}

export default useDateInfo;