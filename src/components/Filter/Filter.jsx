import React from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import styles from "./Filter.module.css";

export default function Filter() {
    const dispatch = useDispatch();

    const filter = useSelector(state => state.filter);

    const changeFilter = (event) => {
        dispatch(setFilter(event.target.value));
    }

    const filterId = nanoid();

    return (
        <label className={styles.label} htmlFor={filterId}>
            Find contacts by name
            <input
                className={styles.input}
                type="text"
                value={filter}
                onChange={changeFilter}
            />
        </label>
    );
}
