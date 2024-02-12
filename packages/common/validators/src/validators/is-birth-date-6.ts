/** @tossdocs-ignore */
export function isBirthDate6(birthDate: string) {
  if (!/^\d{6}$/.test(birthDate)) {
    return false;
  }

  const year = parseInt(birthDate.substring(0, 2), 10);
  const month = parseInt(birthDate.substring(2, 4), 10);
  const day = parseInt(birthDate.substring(4, 6), 10);

  const MIN_MONTH = 1;
  const MAX_MONTH = 12;

  if (month < MIN_MONTH || month > MAX_MONTH) {
    return false;
  }

  const daysInFebruary = isLeapYear(year) ? 29 : 28;
  const daysInMonth = [31, daysInFebruary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (day < 1 || day > daysInMonth[month - 1]) {
    return false;
  }

  return true;
}

function isLeapYear(year: number) {
  return year % 4 === 0;
}
