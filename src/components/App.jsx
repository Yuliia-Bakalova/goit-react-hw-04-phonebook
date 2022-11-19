import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container, Title } from './App.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { LS_KEY_CONTACTS } from 'constans/ConstansKey';
import { localStorageGetItem, localStorageSetItem } from 'utils/useLocalStorage';

export const App = () => {
  const [contacts, setContacts] = useState(
   
      localStorageGetItem(LS_KEY_CONTACTS) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
   
  );

  const [filter, setFilter] = useState('');

   useEffect(() => {
    localStorageSetItem(LS_KEY_CONTACTS, contacts);
  }, [contacts]);

const formSubmitHemdler = contact => {
        contact.id = nanoid();
        const names = contacts.map(item => item.name)  
        
       if (names.includes(contact.name)) {
      return Notify.warning(`${contact.name} is already in contacts`, {
        position: 'center-top',
      });
    }
    setContacts([...contacts, contact]);
    };

    const deleteContact = contactId => {
      setContacts(praveState => {
        return praveState.filter(contact => contact.id !== contactId)
      });
    };
  

    
  const handlerChangeFilter = evt => {
    setFilter(evt.currentTarget.value);
    filterContacts();
  };
   
  const filterContacts = () => {
     const normalizedFilter = filter.toLowerCase();
        return contacts.filter(({name}) => name.toLowerCase().includes(normalizedFilter));
       
    };

        const filtered = filterContacts();

        return (
            <Container>
                <Title> Phonebook </Title>

                <ContactForm onSubmit={formSubmitHemdler} />
                <Title>Contacts</Title>
                <Filter onChange={handlerChangeFilter} />
                <ContactList contacts={filtered} onClick={deleteContact} />
            </Container>
        );
    
}


