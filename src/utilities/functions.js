export const sortedDayOfWeek = (array) => {
  const week = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  const arrayDayofWeek = week.map((day) => sortedArray(array, day));

  let newArray = [
    ...arrayDayofWeek[0],
    ...arrayDayofWeek[1],
    ...arrayDayofWeek[2],
    ...arrayDayofWeek[3],
    ...arrayDayofWeek[4],
    ...arrayDayofWeek[5],
    ...arrayDayofWeek[6],
  ];
  return newArray;
};

export function sortedArray(array, day) {
  return array
    .filter((item) => item.day === day)
    .sort((a, b) => (a.index > b.index ? 1 : -1));
}
