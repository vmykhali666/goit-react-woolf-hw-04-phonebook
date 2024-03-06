import React, { useState } from 'react';
import clsx from 'clsx';
import styles from 'styles/ContactForm.module.css';
import { nanoid } from 'nanoid';

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { name, number, id: nanoid() };
    setName('');
    setNumber('');
    onAddContact(newContact);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={clsx(styles.input)}
        name="name"
        placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, rles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="number"
        placeholder="Enter phone number"
        className={clsx(styles.input)}
        pattern="\+?\d{1,4}[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        required
        onChange={handleChange}
      />

      <input className={styles.button} type="submit" value="Add Contact" />
    </form>
  );
};