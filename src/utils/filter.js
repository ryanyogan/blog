import Timeago from 'timeago.js';

export default (Vue) => {
  // https://github.com/hustcc/timeago.js#1-usage
  Vue.filter('timeago', (str) => {
    if (!str) return '';
    return new Timeago().format(new Date(str));
  });

  // get a string representing the date portion of the given Date
  Vue.filter('formatDate', date => (
    new Date(date).toLocaleDateString()
  ));
};
