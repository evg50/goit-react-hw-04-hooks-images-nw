// import React from 'react';

// export default function fetchPixabeyImage({page,findImage}) {
//   return {
//     fetch(
//         `https://pixabay.com/api/?key=23915322-b5091aa0ad0b72709b6c0de72&q=${findImage}& image_type=photo&per_page=12&page=${page}`,
//       )
//         .then(res => {
//           if (res.ok) {
//             return res.json();
//           }
//         })};
// }
function fetchPixabeyImage(findImage) {}

const api = {
  fetchPixabeyImage,
};

export default api;
