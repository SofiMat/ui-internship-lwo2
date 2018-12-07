/* eslint-disable no-undef */
/* eslint-disable quotes */

import renderBlogs from "./blog.js";
import renderLatestBlogs from "./latestBlog.js";

function dataFilter(blogs) {
  const latestArr = blogs.latest;
  const blogsArr = blogs.blogs;
  return {
    latest: blogsArr.filter((el) => latestArr.includes(el.id)),
    usual: blogsArr.filter((el) => !latestArr.includes(el.id)),
  };
}

function fetchHandler(section) {
  fetch('http://localhost:3000/api/blogs')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        return {
          latest: myJson.latest,
          blogs: myJson.blogs,
        };
      })
      .then(section);
}
fetchHandler(renderBlogs);
fetchHandler(renderLatestBlogs);

export default dataFilter;
