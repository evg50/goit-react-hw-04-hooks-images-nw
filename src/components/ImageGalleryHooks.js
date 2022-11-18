import { useState, useEffect } from 'react';

import ImageGalleryItem from './ImageGalleryItem';
import FetchPixabeyImage from '../service/FetchPixabeyImage';
import fetchApi from '../service/imageApi';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export default function ImageGalleryHooks({
  imageInfo,
  pageNumber,
  imagePageNumber,
}) {
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState();
  const [status, setStatus] = useState(Status.IDLE);

  //handler load more
  const handleOnClick = () => {
    imagePageNumber(pageNumber + 1);
    console.log(pageNumber + 1);
  };

  useEffect(() => {
    console.log('gallery change props!', imageInfo, pageNumber);
    setStatus(Status.PENDING);
    console.log('imageInfo', imageInfo);
    fetchApi(imageInfo, pageNumber)
      .then(images => {
        if (images.hits.length) {
          setStatus(Status.RESOLVED);
          setImages(images);
          return;
        }
        setStatus(Status.REJECTED);
      })
      .catch(error => setError(error), setStatus(Status.REJECTED));
  }, [imageInfo, pageNumber]);

  if (status === 'pending') {
    return <h1>Loading</h1>;
  }

  if (status === 'idle') {
    return <div>Введите название для поиска</div>;
  }

  if (status === 'reject') {
    return <h1>{error.message}</h1>;
  }

  if (status === 'resolved') {
    return (
      <>
        <ul>
          <button type="button" onClick={handleOnClick}>
            Load More
          </button>
          {images.hits &&
            images.hits.map(image => (
              <ImageGalleryItem
                key={image.id}
                title={image.tags}
                webformatURL={image.webformatURL}
                largeURL={image.largeURL}
              />
            ))}
        </ul>
      </>
    );
  }
}
