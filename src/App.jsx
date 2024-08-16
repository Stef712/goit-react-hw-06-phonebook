// src/App.jsx
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import FilterInput from 'components/FilterInput';
import { getContacts } from './redux/contacts/contactsSelector';
import styles from 'App.module.css';

function App() {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.subtitle}>Contacts</h2>
      <FilterInput />
      <ContactList />
    </div>
  );
}

export default App;
