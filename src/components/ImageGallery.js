import React, { Component } from 'react';
import { toast } from 'react-toastify';
import ImageGalleryItem from './ImageGalleryItem';
import FetchPixabeyImage from '../service/FetchPixabeyImage';
import fetchApi from '../service/imageApi';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
// pageNubmer: this.state.pageNubmer + 1
export default class ImageGallery extends Component {
  state = {
    images: null,
    pageNumber: 1,

    error: null,
    status: Status.IDLE,
  };

  // this.setState({pageNumber:this.props.imagePageNumber})
  fetchPixabey = (findImage, page) => {
    // console.log(findImage, page);
    return fetch(
      `https://pixabay.com/api/?key=23915322-b5091aa0ad0b72709b6c0de72&q=${findImage}& image_type=photo&per_page=12&page=${page}`,
    ).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`no image with ${findImage}`));
    });
  };
  // useEffect
  componentDidUpdate(prevProps, prevState) {
    console.log('last and new', prevProps.imageInfo, this.props.imageInfo);
    console.log(this.state.pageNumber);
    // console.log(prevState);

    if (prevProps !== this.props) {
      // console.log('предыдущее', prevProps.imageInfo);
      // console.log('єто ', this.props.imageInfo);
      // console.log('change props');
      const findImage = this.props.imageInfo;
      const page = this.props.pageNumber;
      // ready
      this.setState({
        status: Status.PENDING,
        pageNumber: page,
      });
      console.log('page', page);
      // FetchPixabeyImage. page={page}, findImage={findImage}

      fetchApi(findImage, page)
        .then(images => {
          console.log('images', images);
          if (images.hits.length) {
            this.setState({ images, status: Status.RESOLVED });
            return;
          }
          this.setState({ status: Status.REJECTED });
        })
        .catch(error =>
          this.setState(error, this.setState({ status: Status.REJECTED })),
        );
    }
  }
  handleOnClick = () => {
    this.props.imagePageNumber(this.state.pageNumber + 1);
  };

  render() {
    const { status, images, error } = this.state;
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
            <button type="button" onClick={this.handleOnClick}>
              Load More
            </button>
            {images.hits.map(image => (
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
}
