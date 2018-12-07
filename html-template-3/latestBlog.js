/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* global document:true */

import dataFilter from "./render.js";

const latestBlogContainer = document.getElementById('lb-gallery');

function formatDate(date) {
  const monthNames = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec',
  ];
  const monthIndex = date.getMonth();

  return monthNames[monthIndex];
}

function renderLatestBlogs(blogs) {
  const latestBlogs = dataFilter(blogs).latest;

  latestBlogs.forEach((el) => {
    const items = [];
    const data = {
      previewImg: el.previewImg,
      title: el.title,
      description: el.description,
      watched: el.watched,
      comments: el.comments,
      published: {
        day: new Date(el.published).getDate(),
        month: formatDate(new Date(el.published)),
      },
    };

    items.push(data);
    for (let i = 0; i < items.length; i++) {
      const latestBlogItem = document.createElement('div');
      latestBlogItem.className = 'lb-item';
      latestBlogItem.innerHTML = `
      <div class="lb-item">
        <img src=${items[i].previewImg} alt="Something" class="pic lb-pic" /> 
        <div class="calendar font">${items[i].published.month} <span class="main-header number">${items[i].published.day}</span></div>
        <div class="lb-text-block">
          <h6 class="main-font drop-item-header wps-header lb-header">${items[i].title}</h6>
          <p class="font flow">${items[i].description}</p>
        </div>
        <div class="lb-icons">
          <i class="fas fa-eye"><span class="font">${items[i].watched}</span></i>
          <i class="far fa-comment-dots"><span class="font">${items[i].comments}</span></i>
        </div>
      </div>
      `;

      latestBlogContainer.appendChild(latestBlogItem);
    }
  });
}

export default renderLatestBlogs;

