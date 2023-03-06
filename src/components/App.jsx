import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export default function App() {
  // const [contacts, setContacts] = useState(()=> JSON.parse(localStorage.getItem('contacts')) ?? [
  //     { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  //     { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  //     { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  //   ] );
  // const [filter, setFilter] = useState('');


  // useEffect(() => {
  // localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts])

  // const addContact = ({ name, number }) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase(),
  //     )
  //   ) {
  //     Notiflix.Notify.failure(`${name} is already in contacts.`);
  //   } else if (contacts.find(contact => contact.number === number)) {
  //     Notiflix.Notify.failure(`${number} is already in contacts.`);
  //   } else if (name.trim() === '' || number.trim() === '') {
  //     Notiflix.Notify.info("Enter the contact's name and number phone!");
  //   } else {
  //     setContacts([contact, ...contacts]);
  //   }
  // };

  // const removeContact = (id) => {
  //   const newContacts = contacts.filter((item) => item.id !== id);
  //   setContacts([...newContacts])
  // };

  // const changeFilter = (event) => {
  //   setFilter(event.currentTarget.value)
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
    </Container>
  );
};
