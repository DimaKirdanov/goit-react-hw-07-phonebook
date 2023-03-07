import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/AsyncRedux'
import { getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';
import s from "./ContactList.module.css";

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
         <>
      {' '}
      {contactsToRender.length > 0 ? (
                <table className={s.table}>
                    {error && <div>Something went wrong, please, try again</div>}
          <thead>
            <tr>
              <th className={s.thead}>№</th>
              <th className={s.thead}>Name</th>
              <th className={s.thead}>Number</th>
              <th className={s.thead}>Options</th>
            </tr>
          </thead>
          <tbody>
            {contactsToRender.map((item, index) => (
              
              <tr key={item.id}>
                <td className={s.data}>{index + 1}</td>
                <td className={s.data}>{item.name}</td>
                <td className={s.data}>{item.number}</td>
                <td className={s.data}>
                  <button
                    type="button"
                    className={s.button}
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
        <p className={s.empty}>No contacts</p>
      )}
    </>
    );
}