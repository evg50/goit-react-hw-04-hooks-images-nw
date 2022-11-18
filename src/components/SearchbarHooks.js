import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ onSubmit }) {
  const [searchText, setSearchText] = useState(''); // стейт для хранения запроса

  // метод для записи поля ввода в стейт
  const changeSearch = e => {
    setSearchText(e.currentTarget.value);
  };
  // метод для отправки результата в App с проверкой на пустое поле или пробелы
  const formSubmit = e => {
    e.preventDefault();
    console.log('searchText', searchText);
    if (searchText.trim() === '') {
      toast.error('введитие запрос поиска');
      return;
    }
    onSubmit(searchText);

    setSearchText(''); // обнуление строки поиска послет отправки
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={formSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          value={searchText}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={changeSearch}
        />
      </form>
    </header>
  );
}
