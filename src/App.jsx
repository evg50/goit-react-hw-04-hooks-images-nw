import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import FormInput from './components/FormInput';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './components/ImageGallery';
import SearchbarHooks from './components/SearchbarHooks';
import ImageGalleryHooks from './components/ImageGalleryHooks';

// import PhoneBook from './cmponents/PhoneBook';
// import Filter from './components/Filter';
//Телефонная книга
// import Statistic from './components/Statistic';
// import Controls from './components/Controls';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
// import contactList from './components/contactList';
// import initialcontacts from './contacts.json';
import Searchbar from './components/Searchbar';

export default function App() {
  const [image, setImage] = useState(''); // хранение запроса из формы поиска
  const [numberPage, setNumberPage] = useState(null); // пропс из imageGallery

  const formSubmit = searchText => {
    console.log('app word search', searchText);
    toast('wow we are searching ', searchText);
    setImage(searchText);
    setNumberPage(1);
  };

  const handlePageNumber = props => {
    console.log('update page');
    console.log('props', props);
    setNumberPage(props);
  };

  return (
    <>
      <h1>Image Finder</h1>
      {/* <Searchbar onSubmit={formSubmit} /> */}
      <SearchbarHooks onSubmit={formSubmit} />
      {image && (
        <ImageGalleryHooks
          imageInfo={image}
          pageNumber={numberPage}
          imagePageNumber={handlePageNumber}
        />
      )}
      {
        // <ImageGallery
        //   imageInfo={image}
        //   pageNumber={numberPage}
        //   imagePageNumber={handlePageNumber}
        // />
      }
      <ToastContainer autoClose={1000} />
    </>
  );
}
