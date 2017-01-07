/**
 * get title from file name
 *
 * @export
 * @param {string} title
 * @returns {string}
 */
export const onlyTitle = title => (
 title.replace(/\.md$/, '')
  .replace(/^\d{4}-\d{1,2}-\d{1,2}-/, '')
);

/**
* get publish date from file name
*
* @export
* @param {string} title
* @returns {string}
*/
export const onlyDate = title => (
  /^\d{4}-\d{1,2}-\d{1,2}/.exec(title)[0]
);
