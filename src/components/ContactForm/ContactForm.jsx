import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Label, Button } from './ContactForm.styled';

export const ContactForm = ({ onSubmit}) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


   const handlerSubmit = evt => {
        evt.preventDefault();
        onSubmit({name, number});
        reset();
    };

   const reset = () => {
       setName('');
       setNumber('');
   };
   
    
    const handlerChange = evt => {
        switch (evt.currentTarget.name) {
            case 'name':
                setName(evt.currentTarget.value);
                break;
            case 'number':
                setNumber(evt.currentTarget.value);
                break;
            default:
                console.log('There is no such value');
       }
    };

    
        return (
            <Form onSubmit={handlerSubmit}>
                <Label>
                    Name :
                <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handlerChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                </Label>
                <Label>
                    Number : 
                <Input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handlerChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                </Label>
                <Button type="submit">Add contact</Button>
            </Form>
        );
    }
ContactForm.propTypes = {
  addContact: PropTypes.func,
};


