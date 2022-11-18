import React from 'react';

export default function ImageGalleryItem({ title, webformatURL, largeURL }) {
  // console.log(title);
  return (
    <li>
      {/* {image.tags} , */}
      <img src={webformatURL} alt={title} />
    </li>
  );

  /* <li class="gallery-item">{key}</li> */
}
