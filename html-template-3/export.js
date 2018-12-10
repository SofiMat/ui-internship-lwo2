/* global fetch */

import {renderFooterBlogs, renderLatestBlogs} from './blog.js';

function fetchData() {
  return fetch('http://localhost:3000/api/blogs')
      .then((response) => {
        return response.json();
      })
      .then(dataFilter);
}

export const formatDate = (date) => {
  const monthNames = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec',
  ];
  return {
    day: date.getDate(),
    month: monthNames[date.getMonth()],
    year: date.getFullYear(),
  };
};

function dataFilter(blogItems) {
  const {latest, blogs} = blogItems;
  const latestBlogs = [];
  const simpleBlogs = [];
  blogs.forEach((item) => {
    latest.includes(item.id) ? latestBlogs.push(item) : simpleBlogs.push(item);
  });
  renderFooterBlogs(simpleBlogs);
  renderLatestBlogs(latestBlogs);
}

window.onload = fetchData;
