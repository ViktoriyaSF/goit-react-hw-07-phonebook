import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
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

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
