import React from 'react';

export function fetchImage(findImage, page) {
  console.log('findImage fetch Api', findImage);
  return fetch(
    `https://pixabay.com/api/?key=23915322-b5091aa0ad0b72709b6c0de72&q=${findImage}& image_type=photo&per_page=12&page=${page}`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`no image with ${findImage}`));
  });
}

const api = { fetchImage };

export default fetchImage;
