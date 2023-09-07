import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={css.listContainer}>
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <li className={css.listItem} key={contact.id}>
            <div className={css.contactInfo}>
              <span className={css.contactName}>{contact.name}: </span>
              <span className={css.contactNumber}>{contact.number}</span>
            </div>
            <button
              className={css.deletButton}
              onClick={() => onDeleteContact(contact.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
