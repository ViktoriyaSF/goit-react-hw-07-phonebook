// import propTypes from 'prop-types';
// import React, { useEffect } from 'react';

import { List, Item } from './ContactList.syled';
import { FiDelete } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <p>{name}:</p>
            <p>{number}</p>

            <button type="button" onClick={() => dispatch(deleteContact(id))}>
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
