import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from '../../redux/operations';
import { Container,Title, SubTitle, Wrapper } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    // Запуск асинхронної Thunk-дії fetchContacts при монтуванні компонента
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
   
    <Container>
      <Title>Phonebook</Title>
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