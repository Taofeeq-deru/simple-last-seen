# simple-last-seen

It is a simple light weight JavaScript package that returns relative date/time. It returns how long ago a time/date was or how long left to get to a time/date.

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
//=> 11 years ago

RelativeTime.fromNow(future, today);
//=> in 30 years
```

today is an optional parameter in the methods, when not passed, RelativeTime picks the current date/time as today.

The methods also takes a third parameter, the text to show when today === past/futrue or is just a second from past/future.
