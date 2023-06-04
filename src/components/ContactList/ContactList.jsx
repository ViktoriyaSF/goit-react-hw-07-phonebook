// import propTypes from 'prop-types';
// import React, { useEffect } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { List, Item } from './ContactList.syled';
import { FiDelete } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  );

  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <p>{name}:</p>
            <p>{number}</p>

            {/* <button type="button" onClick={() => onDelContact(id)}>
              <FiDelete />
            </button> */}
          </Item>
        ))}
      </List>
    </>
  );
};
// ContactList.propTypes = {
//   contacts: propTypes.arrayOf(
//     propTypes.exact({
//       id: propTypes.string.isRequired,
//       name: propTypes.string.isRequired,
//       number: propTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };
