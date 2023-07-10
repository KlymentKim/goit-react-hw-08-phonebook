import React from 'react';
import { List, Item } from './ContactList.styled';
// import { ReactComponent as DeleteIcon } from '../icons/delete.svg';
import {TiDelete} from 'react-icons/ti';

import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';

// Компонент списка контактов
const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact());
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            // Кнопка удаления контакта
            <TiDelete style={{cursor:'pointer'}} onClick={handleDelete} />
           
          }
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
