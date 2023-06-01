import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

export const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const contactsSlice = createSlice({
  name: 'contacts',
  // initialState: contactsInitialState,
  initialState: { items: [], isLoading: false, error: null },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // addContact: {
  //   reducer(state, action) {
  //     state.items.push(action.payload);
  //   },
  // },

  // deleteContact: (state, action) => {
  //   state = state.filter(contact => contact.id !== action.payload);
  //   return state;
  // },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;
