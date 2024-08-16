import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

function ContactItem({ contact, onDelete }) {
  return (
    <li className={styles.item}>
      {contact.name} : {contact.number}
      <button className={styles.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
