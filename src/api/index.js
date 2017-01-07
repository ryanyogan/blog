/* global window */
import axios from 'axios';
import 'es6-promise/auto';

import conf from '../conf.json';
import { onlyTitle, onlyDate } from '../utils';

const API = 'https://api.github.com';

/**
 * Format Github Api url for content list
 * @returns {string}
 */
const getListUrl = () => {
  let url = `${API}/repos/${conf.repo}/contents/`;

  if (conf.path) {
    url += conf.path;
  }

  if (conf.branch) {
    url += `?ref=${conf.branch}`;
  }

  return url;
};

/**
 * Format Github Api url for file content
 * @param {string} hash
 * @returns {string}
 */
const getPostUrl = hash => (
  `${API}/repos/${conf.repo}/git/blobs/${hash}`
);

const setSession = ({ key, list }) => (
  window.sessionStorage &&
    window.sessionStorage.setItem(key.toString(), JSON.stringify(list))
);

const getSession = key => (
  window.sessionStorage &&
    window.sessionStorage.getItem(key.toString())
);

const sessionLookup = key => (
  window.sessionStorage &&
    // eslint-disable-next-line
    window.sessionStorage.hasOwnProperty(key.toString())
);

export default {
  getList() {
    if (sessionLookup('list')) {
      return Promise.resolve(JSON.parse(getSession('list')));
    }

    return axios.get(getListUrl())
      .then(res => res.data)
      .then((data) => {
        const list = data.map(({ name, sha, size }) => ({
          title: onlyTitle(name),
          date: onlyDate(name),
          sha,
          size,
        }));

        setSession({ key: 'list', list });
        return list;
      });
  },

  getDetail(hash) {
    const httpOptions = {
      headers: { Accept: 'application/vnd.github.v3.raw' },
    };
    const cacheKey = `post.${hash}`;

    if (sessionLookup(cacheKey)) {
      return Promise.resolve(JSON.parse(getSession(cacheKey)));
    }

    return axios.get(getPostUrl(hash), httpOptions)
      .then(res => res.data)
      .then((content) => {
        setSession({ key: cacheKey, list: content });
        return content;
      });
  },
};
