/* eslint-disable max-len */
/* global document:true */
/* eslint-disable no-invalid-this */

class LatestBlogView {
  constructor(model, elem) {
    this.model = model;
    this.elem = elem;
  }
  model = {
    id: this.id,
    previewImg: this.previewImg,
    title: this.title,
    watched: this.watched,
    coments: this.comments,
    published: {
      day: this.day,
      month: this.month,
    },
  };
  elem = `
  <div class="lb-item">
    <img src=${this.previewImg} alt="Something" class="pic lb-pic" />
    <div class="calendar font">${this.month} <span class="main-header number">${this.day}</span></div>
    <div class="lb-text-block">
      <h6 class="main-font drop-item-header wps-header">${this.title}</h6>
      <p class="font">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="lb-icons">
      <i class="fas fa-eye"><span class="font">${this.watched}</span></i>
      <i class="far fa-comment-dots"><span class="font">${this.comments}</span></i>
    </div>
  </div>
  `;
}

const model = new LatestBlogView();

class BlogView {
  constructor(model, elem) {
    this.model = model;
    this.elem = elem;
  }
    model = {
      id: this.id,
      previewImg: this.previewImg,
      title: this.title,
      published: this.published,
    };
    elem = `
<div class="blog-item">
      <img src=${this.previewImg} alt="Something">
      <div class="blog-text">
        <h6 class="main-font drop-item-header wps-header blog-text-header">${this.title}</h6>
        <p class="font date">${this.published}</p>
      </div>
    </div>
    `;
}

const months = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
}
const date = new Date(published);

(function renderBlog() {
  fetch('/localhost:3000/api/blogs')
      .then(JSON.parse)
      .then(render);
}());


