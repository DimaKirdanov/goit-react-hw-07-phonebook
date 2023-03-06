import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/AsyncRedux'
import { getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';
import styles from "./ContactList.module.css";

export default function ContactList() {
    // const contacts = useSelector(getContacts);
    // const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const {items, error, isLoading} = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const getFilteredContacts = () => {
        if (!filter) {
            return items;
        }
        
        return items.filter(({name}) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    }

    const contactsToRender = getFilteredContacts()

    return (
        // <ul className={styles.list}>
        //     {error && <div>Something went wrong, please, try again</div>}
        //     {contactsToRender.map(item =>
        //     <li className={styles.item} key={item.id}>
        //         <p>{item.name}: {item.number}</p>
        //         <button type='button' className={styles.button} onClick={() => dispatch(removeContact(item.id))}>delete</button>
        //     </li>)
        //     }
        //     {isLoading && <div>Loading...</div>}
        // </ul>
         <>
      {' '}
      {contactsToRender.length > 0 ? (
                <table className={styles.table}>
                    {error && <div>Something went wrong, please, try again</div>}
          <thead>
            <tr>
              <th className={styles.thead}>№</th>
              <th className={styles.thead}>Name</th>
              <th className={styles.thead}>Number</th>
              <th className={styles.thead}>Options</th>
            </tr>
          </thead>
          <tbody>
            {contactsToRender.map((item, index) => (
              
              <tr key={item.id}>
                <td className={styles.data}>{index + 1}</td>
                <td className={styles.data}>{item.name}</td>
                <td className={styles.data}>{item.number}</td>
                <td className={styles.data}>
                  <button
                    type="button"
                    className={styles.button}
                    onClick={() => dispatch(deleteContact(item.id))}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
                    </tbody>
                    {isLoading && <div>Loading...</div>}
        </table>
      ) : (
        <p className={styles.empty}>No contacts</p>
      )}
    </>
    );
}