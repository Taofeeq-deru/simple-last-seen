class LastSeen {
  static lastSeenAgo(lastSeen, currentTime, recentlyText) {
    if (!lastSeen) return null;

    const now = currentTime ? new Date(currentTime) : Date.now();

    const lastSeenDate = new Date(lastSeen);

    if (lastSeenDate > now) return this.fromNow(lastSeen, currentTime);

    const secs = (now - lastSeenDate) / 1000;
    const mins = Math.round(secs / 60);
    const hrs = Math.round(mins / 60);
    const days = Math.round(hrs / 24);
    const weeks = Math.round(days / 7);
    const months = Math.round(weeks / 4);
    const years = Math.round(months / 12);

    let text = "";

    if (secs <= 1) text = recentlyText || `just now`;
    else if (mins <= 1) text = `${secs} seconds ago`;
    else if (mins === 1) text = "a minute ago";
    else if (mins <= 59) text = `${mins} minutes ago`;
    else if (hrs === 1) text = `an hour ago`;
    else if (hrs <= 24) text = `${hrs} hours ago`;
    else if (days === 1) text = `a day ago`;
    else if (days <= 7) text = `${days} days ago`;
    else if (weeks === 1) text = `a week ago`;
    else if (weeks <= 3) text = `${weeks} weeks ago`;
    else if (months === 1) text = `a month ago`;
    else if (months <= 11) text = `${months} months ago`;
    else if (years === 1) text = `a year ago`;
    else text = `${years} years ago`;

    return { text, timeObj: { secs, mins, hrs, days, weeks, months, years } };
  }

  static fromNow(futureTime, currentTime, soonText) {
    if (futureTime === null) return null;

    const now = currentTime ? new Date(currentTime) : Date.now();

    const futureTimeDate = new Date(futureTime);

    if (futureTimeDate < now) return this.lastSeenAgo(futureTime, currentTime);

    const secs = (futureTimeDate - now) / 1000;
    const mins = Math.round(secs / 60);
    const hrs = Math.round(mins / 60);
    const days = Math.round(hrs / 24);
    const weeks = Math.round(days / 7);
    const months = Math.round(weeks / 4);
    const years = Math.round(months / 12);

    let text = "";

    if (secs <= 1) text = soonText || `soon`;
    else if (mins <= 1) text = `in ${secs} seconds`;
    else if (mins === 1) text = "in a minute";
    else if (mins <= 59) text = `in ${mins} minutes`;
    else if (hrs === 1) text = `in an hour`;
    else if (hrs <= 24) text = `in ${hrs} hours`;
    else if (days === 1) text = `in a day`;
    else if (days <= 7) text = `in ${days} days`;
    else if (weeks === 1) text = `in a week`;
    else if (weeks <= 3) text = `in ${weeks} weeks`;
    else if (months === 1) text = `in a month`;
    else if (months <= 11) text = `in ${months} months`;
    else if (years === 1) text = `in a year`;
    else text = `in ${years} years`;

    return { text, timeObj: { secs, mins, hrs, days, weeks, months, years } };
  }
}

module.exports = LastSeen;
