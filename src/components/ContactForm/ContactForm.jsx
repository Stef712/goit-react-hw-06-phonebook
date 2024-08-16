import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsSlice';
import { getFilteredContacts } from '../../redux/contacts/contactsSelector';
import styles from './ContactForm.module.css';
import { nanoid } from '@reduxjs/toolkit';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      alert(`Contact with name "${name}" already exists.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.formLabel}>Name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        required
        className={styles.formInput}
      />
      <label className={styles.formLabel}>Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        required
        className={styles.formInput}
      />
      <button type="submit" className={styles.submitButton}>
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
