/* eslint-disable no-undef */
/* eslint-disable max-len */
/* global document:true */
/* eslint-disable quotes */

import dataFilter from "./render.js";

const blogContainer = document.getElementById('blog-items');

function formatDate(date) {
  const monthNames = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec',
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

function renderedBlogs(blogs) {
  const usualBlogs = dataFilter(blogs).usual;

  usualBlogs.forEach((el) => {
    const items = [];
    const data = {
      previewImg: el.previewImg,
      title: el.title,
      published: formatDate(new Date(el.published)),
    };

    items.push(data);
    for (let i = 0; i < items.length; i++) {
      const blogItem = document.createElement('div');
      blogItem.className = 'blog-item';
      blogItem.innerHTML = `
          <img src=${items[i].previewImg} alt='Something'>
          <div class='blog-text'>
            <h6 class='main-font drop-item-header wps-header blog-text-header'>${items[i].title}</h6>
            <p class='font date'>${items[i].published}</p>
          </div>
        `;

      blogContainer.appendChild(blogItem);
    }
  });
}

export default renderedBlogs;
