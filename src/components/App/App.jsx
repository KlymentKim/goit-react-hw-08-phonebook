import { Component } from 'react';

import { nanoid } from 'nanoid';
import { Form } from './App.styled';
import { Filter } from '../Filter';
import { ContactForm } from 'components/ContactForm/';
import { ContactList } from 'components/ContactList/';

export class App extends Component {
  
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount(){
    const initialContact = localStorage.getItem('contact');
    if (initialContact){
      const parsedContact = JSON.parse(initialContact);
      this.setState({
        contacts: parsedContact,
      })}
  }

  componentDidUpdate(_, prevState){
    if (prevState.contact !== this.state.contacts){
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
      }
    }

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
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <Form>
        <h1>Phonebook</h1>
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
