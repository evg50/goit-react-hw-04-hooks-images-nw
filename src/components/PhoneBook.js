import React from 'react';
// import ContactItem from './ContactItem';
export default function PhoneBook({ contactsList, onDeleteContact }) {
  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contactsList.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name} {number}
            </p>
            <button type="button" onClick={() => onDeleteContact(id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
