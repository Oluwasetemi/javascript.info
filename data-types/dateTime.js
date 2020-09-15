/* eslint-disable */
// Creation
new Date();

const now = new Date();
console.log(now); // shows current date/time

let onePlusNow = new Date(+now + (24 * 3600 * 1000));
console.log(onePlusNow)

// 0 means 01.01.1970 UTC+0
const Jan01_1970 = new Date(0);
console.log(Jan01_1970);

// now add 24 hours, get 02.01.1970 UTC+0
const Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);
// An integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp.

// 31 Dec 1969 - Dates before 01.01.1970 have negative timestamps
const Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

const date = new Date('2017-01-26');
console.log(date);
// The time is not set, so it's assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in
// So the result could be
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// or
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)

new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours econstare 0 by default

let date2 = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(date2); // 1.01.2011, 02:03:04.567

// Access date components
// getFullYear()
// getMonth() 0-11
// getDate()
// getHours(), getMinutes(), getSeconds(), getMilliseconds()
// getDay()

// getUTCFullYear(), getUTCMonth(), getUTC****()
// current date
let date3 = new Date();
date3.getHours()

// the hour in your current tog(  );

// the hour in UTC+0 time zone (London time without daylight savings)
console.log(date3.getUTCHours());

// getTime()
// getTimezoneOffset()
// if you are in timezone UTC-1, outputs 60
// if you are in timezone UTC+3, outputs
// new Date().getTimezoneOffset().getTimezoneOffset()

// Setting date components
// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)

// Every one of them except setTime() has a UTC-variant, for instconste: setUTCHours()

let today = new Date();

today.setHours(0); today;
console.log(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);

console.log(today); // still today, now 00:00:00

// Autocorrection
let date4 = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
console.log(date4); // constis 1st Feb 2013!

let date5 = new Date(2016, 1, 28);
date5.setDate(date5.getDate() + 2);

console.log(date5); // 1 Mar 2016

let date6 = new Date(2016, 0, 2); // 2 Jan 2016

date6.setDate(1); // set day 1 date6h
console.log( date6 );

date.setDate(0); // min day is 1, so the last day of the previous month is assumed
console.log(date); // 31 Dec 2015

// Date constnumber, date diff
let date7 = new Date();
console.log(Number(date7)); // the number of milliseconds, samconsts date.getTime()

let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000000; i++) {
  let doSometconstg = i * i * i;
}

let end = new Date(); // end measuring time

console.log(`The loop took ${end - start}ms`);

// Date.now()
let start2 = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSometconstg = i * i * i;
}

let end2 = Date.now(); // done

console.log(`The loop took ${end2 - start2} ms`); // subtract numbers, not dates

// Date.parse from a string
// YYYY-MM-DDTHH:mm:ss.sssZ
Date.parse('YYYY-MM-DDTHH:mm:ss.sssZ')

// YYYY-MM-DD – is the date: year-month-day.
// The character "T" is used as the delimiter.
// HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
// The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z that would mean UTC+0.
// YYYY-MM-DD or constY-MM or even YYYY
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

console.log(ms); // 1327611const417  (timestamp)

console.log(new Date(Date.parse('2012-01-26T13:51:50.417-07:00')))

// tasks
const alert = console.log;
/*
Write a function formatDate(date) that should format date as follows:

If since date passed less than 1 second, then "right now".
Otherwise, if since date passed less than 1 minute, then "n sec. ago".
Otherwise, if less than an hour, then "m min. ago".
Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00
*/
function formatDate(date) {
  const now = Date.now();
  const value = now - date;

  let msg = '';
  if (value < 999) {
    // If since date passed less than 1 second, then "right now".
    msg = 'right now';
  } else if (value < 60000) {
    // Otherwise, if since date passed less than 1 minute, then "n sec. ago".
    msg = `${value / 1000} sec. ago`;
  } else if (value < (60 * 60 * 1000)) {
    // Otherwise, if less than an hour, then "m min. ago".
    msg = `${Math.floor(value / (1000 * 60))} min. ago`;
  } else {
    // Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00

    let m = '0' + date.getMinutes();
    let h = '0' + date.getHours();
    let d = '0' + date.getDate();
    let M = '0' + date.getMonth();
    let y = '0' + date.getFullYear();

    let resArray = [m, h, d, M, y,].map((v) => v.slice(-2)).join('.');

    msg = resArray;
  }

  return msg;
}


alert(formatDate(new Date(new Date - 1))); // "right now"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 sec. ago"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
alert(formatDate(new Date(new Date - 86400 * 1000)));