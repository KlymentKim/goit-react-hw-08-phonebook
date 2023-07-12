import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Встановлення базового URL для axios
axios.defaults.baseURL = 'https://64ad3c27b470006a5ec594cd.mockapi.io';
// axios.defaults.baseURL = 'https://64a199d00079ce56e2db3eeb.mockapi.io';
const path = '/contacts'
// Thunk-дії fetchContacts - одержання масиву контактів (метод GET) запитом.
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll', // Унікальний рядок, що ідентифікує цю дію
  async (_, thunkAPI) => {
    try {
      // Надсилання GET-запиту на '/contacts'
      const response = await axios.get(path);
      // Повернення отриманих даних
      return response.data;
    } catch (error) {
      // У разі помилки, відхилення дії із зазначенням помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Створення асинхронної Thunk-дії addContacts
export const addContacts = createAsyncThunk(
  'contacts/addContacts', // Унікальний рядок, що ідентифікує цю дію
  async (contacts, thunkAPI) => {
    try {
      // Надсилання POST-запиту на '/contacts' з даними { name, number }
      const response = await axios.post(path, contacts);
      // Повернення отриманих даних
      return response.data;
    } catch (error) {
      // У разі помилки, відхилення дії із зазначенням помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Создание асинхронного Thunk-действия deleteContacts
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts', // Унікальний рядок, що ідентифікує цю дію
  async (id, thunkAPI) => {
    try {
      // Надсилання DELETE-запиту на `/contacts/${contactId}`
      const response = await axios.delete(`/${path}/${id}`);
      // Повернення отриманих даних
      return response.data;
    } catch (error) {
      // У разі помилки, відхилення дії із зазначенням помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
