import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './AsyncRedux';

// const initialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

export const contactsSlice = createSlice({
  name: 'contacts',

  //   initialState,
  //   reducers: {},
  //   extraReducers: {
  //     [fetchContacts.pending](state) {
  //       state.isLoading = true;
  //     },
  //     [fetchContacts.fulfilled](state, { payload }) {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items = payload;
  //     },
  //     [fetchContacts.rejected](state, { payload }) {
  //       state.isLoading = false;
  //       state.error = payload;
  //     },
  //     [addContact.pending](state) {
  //       state.isLoading = true;
  //     },
  //     [addContact.fulfilled](state, { payload }) {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items.push(payload);
  //     },
  //     [addContact.rejected](state, { payload }) {
  //       state.addingLoader = false;
  //       state.error = payload;
  //     },
  //     [deleteContact.fulfilled](state, { payload }) {
  //       state.error = null;
  //       state.items = state.items.filter(item => item.id !== payload);
  //     },
  //     [deleteContact.rejected](state, { payload }) {
  //       state.error = payload;
  //     },
  //   },
  // });

  // export const getContacts = state => state.contacts;
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchContacts.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(fetchContacts.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(addContact.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(addContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items.push(payload);
      })
      .addCase(addContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(deleteContact.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(deleteContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = store.items.filter(item => item.id !== payload);
      })
      .addCase(deleteContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});
export const getContacts = state => state.contacts;
// export default contactsSlice.reducer;
