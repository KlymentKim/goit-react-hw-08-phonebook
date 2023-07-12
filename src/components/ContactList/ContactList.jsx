import React from 'react';
import { List, Item } from './ContactList.styled';
import {TiDelete} from 'react-icons/ti';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContacts } from '../../redux/operations';

// Компонент списку контактів
const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
          <TiDelete style={{cursor:'pointer'}} onClick={() => dispatch(deleteContacts(contact.id))} />          
          }
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
