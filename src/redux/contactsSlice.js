import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, handlePending)
    .addCase(fetchContacts.fulfilled, (state, action)=> {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, handleRejected)
    //
    .addCase(addContact.pending, handlePending)
    .addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    })
    .addCase(addContact.rejected, handleRejected)
    //
    .addCase(deleteContact.pending, handlePending)
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1);
    })
    .addCase(deleteContact.rejected, handleRejected);
}
});

export const contactsReducer = contactsSlice.reducer;
  // [fetchContacts.pending]: handlePending,
  // [fetchContacts.fulfilled](state, action) {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.items = action.payload;
  // },
  // [fetchContacts.rejected]: handleRejected,

  // [addContact.pending]: handlePending,
  // [addContact.fulfilled](state, action) {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.items.push(action.payload);
  // },
  // [addContact.rejected]: handleRejected,

  // [deleteContact.pending]: handlePending,
  // [deleteContact.fulfilled](state, action) {
  //   state.isLoading = false;
  //   state.error = null;
  //   const index = state.items.findIndex(
  //     contact => contact.id === action.payload.id
  //   );
  //   state.items.splice(index, 1);
  // },
  // [deleteContact.rejected]: handleRejected,
