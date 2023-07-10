import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

import { Container, SubTitle, Wrapper } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 ? (
        // Если есть контакты, показывается компонент фильтрации
        <Filter />
      ) : (
        // Если нет контактов, выводится сообщение об отсутствии контактов
        <Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
      )}
      {contacts.length > 0 && (
        // Если есть контакты, показывается компонент списка контактов
        <ContactList />
      )}
    </Container>
  );
};