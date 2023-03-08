import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { getData, addData, removeData } from '../api/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await getData();
      return contacts;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const result = await addData(data);
      Notiflix.Notify.success('CONTACT ADDED');
      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async (id, thunkAPI) => {
    try {
      const result = await removeData(id);
      Notiflix.Notify.info('CONTACT DELETED');
      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
