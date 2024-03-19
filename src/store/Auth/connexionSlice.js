import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  id: '',
  nom: '',
  prenom: '',
  email: '',
  password: '',
  role: '',
  is_logged: false,
  token: '',
};

const connexionSlice = createSlice({
  name: 'connexion',
  initialState,
  reducers: {
    changeFieldValue: (state, action) => {
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue,
      };
    },
    handleSuccessLogin: (state, action) => {
      return { ...state, ...action.payload, error: null };
    },
    ConnexionAfterSignUp: (state, action) => {
      console.log('action', action.payload);
      return { ...state, ...action.payload, error: null };
    },
    handleLoginError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    handleUpdateUser: (state, action) => {
      console.log('action', action.payload);
      return { ...state, ...action.payload };
    },
    handleLogout: (state) => {
      return {
        ...state,
        id: '',
        nom: '',
        prenom: '',
        email: '',
        password: '',
        role: '',
        is_logged: false,
      };
    },
    deleteUser: (state) => {
      return {
        ...state,
        id: '',
        nom: '',
        prenom: '',
        email: '',
        password: '',
        role: '',
        is_logged: false,
      };
    },
  },
});

export const {
  changeFieldValue,
  handleLoginError,
  handleSuccessLogin,
  ConnexionAfterSignUp,
  handleUpdateUser,
  handleLogout,
  deleteUser,
} = connexionSlice.actions;

export default connexionSlice.reducer;
