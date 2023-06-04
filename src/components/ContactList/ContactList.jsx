// import propTypes from 'prop-types';
import React, { useEffect } from 'react';

import { List, Item } from './ContactList.syled';
import { FiDelete } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!contacts?.length && !error && !isLoading && <h2>No contacts found.</h2>}

      {/* якщо виникла помилка */}
      {error && <h2>{error}</h2>}
      <List>
        {contacts.map(({ id, name, phone }) => (
          <Item key={id}>
            <p>{name}:</p>
            <p>{phone}</p>

            <button type="button" onClick={() => onDeleteContact(id)}>
              <FiDelete />
            </button>
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
