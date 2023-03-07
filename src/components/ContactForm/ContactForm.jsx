import { useState } from 'react';
import { nanoid } from 'nanoid';
import { getContacts } from '../../redux/contactsSlice';
import { addContact } from '../../redux/AsyncRedux'
import { useSelector, useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import s from "./ContactForm.module.css";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (event) => {
    const { name, value } = event.target;

        switch (name) {
        case 'name':
            setName(value);
        break;

        case 'number':
            setNumber(value);
        break;

        default:
            return;
    }
    };

    const dispatch = useDispatch();
    const {items} = useSelector(getContacts);

    const contactAlreadyExists = (name) => {
    return items.find((item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    }

    const addContactToList = (id, name, number) => {
        if (contactAlreadyExists(name)) {
        Notiflix.Notify.failure(`${name} is already in contacts.`);
        } else if (items.find(contact => contact.number === number)) {
        Notiflix.Notify.failure(`${number} is already in contacts.`);
        } else if (name.trim() === '' || number.trim() === '') {
        Notiflix.Notify.info("Enter the contact's name and number phone!");
        } else {
            dispatch(addContact({ id, name, number }))
            setName('')
            setNumber('')
    }
    }


    const handleSubmit = (event) => {
    event.preventDefault();

    addContactToList(nanoid(), name, number);
    };

    const nameId = nanoid();
    const numberId = nanoid();

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label} htmlFor={nameId}>
                Name
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="Input name"
                />
            </label>
            <label className={s.label} htmlFor={numberId}>
                Number
                <input
                    className={s.input}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    placeholder="Input number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={s.button} type="submit">
                Add contact
            </button>
        </form>
    );

}
