// function getWeekDay(data1) {
//   let arr = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
//   return arr[data1.getDay()];
// }
// console.log(getWeekDay(date));

// let date = new Date(2012, 0, 3); // 3 января 2012 года

// function getLocalDay(date) {
//   if (date.getDay() === 0) {
//     return 7;
//   }
//   return date.getDay();
// }
// console.log(getLocalDay(date));

// let date = new Date(2015, 0, 2);
// function getDateAgo(date, days) {
//   let date1 = new Date(date - days * 1000 * 3600 * 24);
//   return date1.getDate();
// }

// console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
// console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
// console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)

// function getLastDayOfMonth(year, month) {
//   const date = new Date(year, month);
//   date.setMonth(date.getMonth() + 1);
//   date.setDate(date.getDate() - 1);
//   const dateCopy = new Date(date);
//   return dateCopy.getDate();
// }

// console.log(getLastDayOfMonth(2012, 1));

// function getSecondsToday() {
//   const date = new Date();
//   const dateZero = new Date(
//     date.getFullYear(),
//     date.getMonth(),
//     date.getDate(),
//   );
//   let dif = date - dateZero;
//   return Math.round(dif / 1000);
// }

// console.log(getSecondsToday());

// function getSecondsToTomorrow() {
//   const now = new Date();
//   const tommorow = new Date(
//     now.getFullYear(),
//     now.getMonth(),
//     now.getDate() + 1,
//   );
//   let dif = tommorow - now;
//   return Math.round(dif / 1000);
// }

// console.log(getSecondsToTomorrow());

// function formatDate(date) {
//   const now = new Date();
//   const dif = now - date;
//   const round = Math.round(dif / 1000);
//   const roundMin = Math.round(round / 60);
//   let dayOfDate = date.getDate();
//   if (String(dayOfDate).length === 1) {
//     dayOfDate = "0" + dayOfDate;
//   }
//   let monthOfDate = date.getMonth();
//   if (String(monthOfDate).length === 1) {
//     monthOfDate = "0" + monthOfDate;
//   }

//   if (round < 1) {
//     return "right now";
//   } else if (round < 60) {
//     return `${round} sek. nazad`;
//   } else if (round < 3600) {
//     return `${roundMin} min. nazad`;
//   } else {
//     return `${dayOfDate}.${monthOfDate}.${String(date.getFullYear()).slice(2)} ${date.getHours()}:${date.getMinutes()}`;
//   }
// }

// console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

// console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

// console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// console.log(formatDate(new Date(new Date() - 86400 * 1000)));
