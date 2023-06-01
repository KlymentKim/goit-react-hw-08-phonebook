import React from 'react';

import { nanoid } from 'nanoid';
import { Form } from './App.styled';
import { Filter } from './Filter';
import { ContactForm } from 'components/ContactForm/';
import { ContactList } from 'components/ContactList/';

export class App extends React.Component {
  
  state = {
    contacts: [
      { id: 'id-1', name: 'Eduard Fury', number: '098-354-05-00' },
      { id: 'id-2', name: 'Maksim Bekovikon', number: '063-458-00-77' },
      { id: 'id-3', name: 'Marta Sifurukova', number: '050-489-66-44' },
      { id: 'id-4', name: 'Anna Kuhta', number: '0564-4558-52' },
      { id: 'id-5', name: 'Anton Kuhta', number: '0564-4521-99' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = data => {
    this.setState(prevState => {
      if (prevState.contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
        alert(`${data.name} is already in contacts`);
        return;
      } else {
        return {
          contacts: [
            ...prevState.contacts,
            { id: nanoid(), name: data.name, number: data.number },
          ],
        };
      }
    });
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    return (
      <Form>
        <h1>Phonebook </h1>
        <ContactForm submitProp={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.getVisibleContacts()}
          onDeleteContact={this.deleteContact}
        />
      </Form>
    );
  }
}
