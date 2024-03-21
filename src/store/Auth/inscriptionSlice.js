import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  id: '',
  nom: '',
  prenom: '',
  email: '',
  password: '',
  error: null,
  message: null,
};
const inscriptionSlice = createSlice({
  name: 'inscription',
  initialState,
  reducers: {
    changeFieldValue: (state, action) => {
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue,
      };
    },
    handleSuccessSignup: (state, action) => {
      return { ...state, ...action.payload, error: null };
    },
    handleSignupError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
});

export const { changeFieldValue, handleSignupError, handleSuccessSignup } =
  inscriptionSlice.actions;

export default inscriptionSlice.reducer;
