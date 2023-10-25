/**
 * Returns time difference text e.g '3 days ago', '5 months ago', 'in 30 minutes', 'in 50 years'.
 *
 * @function lastSeenAgo
 * @param {DateConstructor} lastSeen the past date to compare to.
 * @returns {string} e.g '3 days ago', '5 months ago'
 * @function fromNow
 * @param {DateConstructor} futureTime the future date to compare to.
 * @returns {string} e.g 'in 30 minutes', 'in 50 years'.
 */

declare module "simple-last-seen" {
  /**
   * Returns past time difference text e.g '3 days ago', '5 months ago'.
   *
   * @param {DateConstructor} lastSeen the past date to compare to.
   * @param {DateConstructor} currentTime not mandatory, the control date, defaults to today.
   * @param {string} recentlyText not mandatory, the text to retuurn if the difference is less than a second. Defaults to 'just now'.
   * @returns {string} The time difference text.
   */
  export function lastSeenAgo(
    lastSeen: DateConstructor,
    currentTime?: DateConstructor,
    recentlyText?: string
  ): string;

  /**
   * Returns future time difference text e.g  'in 30 minutes', 'in 50 years'.
   *
   * @param {DateConstructor} futureTime the past date to compare to.
   * @param {DateConstructor} currentTime not mandatory, the control date, defaults to today.
   * @param {string} recentlyText not mandatory, the text to retuurn if the difference is less than a second. Defaults to 'soon'.
   * @returns {string} The time difference text.
   */
  export function fromNow(
    futureTime: DateConstructor,
    currentTime?: DateConstructor,
    recentlyText?: string
  ): string;
}
