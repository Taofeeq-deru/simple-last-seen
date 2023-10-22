# simple-last-seen

It is a simple light weight JavaScript package that returns relative date/time. It returns how long ago a time/date was or how long left to get to a time/date. It also returns an object that returns breakdown of the time left.

## ¶Installation

```js
npm install simple-last-seen --save
//or with yarn
yarn add simple-last-seen
```

## ¶Usage

```js
import RelativeTime from "simple-last-seen";

const past = new Date("2014-01-01");
const future = new Date("2050-12-01");

const today = new Date("2023-10-22");

RelativeTime.lastSeenAgo(past, today);
//=> {
//   text: '11 years ago',
//   timeObj: {
//     secs: 309477733.34,
//     mins: 5157962,
//     hrs: 85966,
//     days: 3582,
//     weeks: 512,
//     months: 128,
//     years: 11
//   }
// }

RelativeTime.fromNow(future, today);
//=> {
//   text: 'in 30 years',
//   timeObj: {
//     secs: 855453466.651,
//     mins: 14257558,
//     hrs: 237626,
//     days: 9901,
//     weeks: 1414,
//     months: 354,
//     years: 30
//   }
// }
```

today is an optional parameter in the methods, when not passed, RelativeTime picks the current date/time as today.

The methods also takes a third parameter, the text to show when today === past/futrue or is just a second from past/future.
