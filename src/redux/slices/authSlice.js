import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { base_url } from '../../main'

const initialState = {
  user: {},
  isAuthenticated: false,
  status: 'idle',
  error: null,
  isUpdated: false,
  changePass: false
};

// API REQUESTS

// Login
export const loginUser = createAsyncThunk('user/loginUser', async ({ loginEmail, loginPassword }) => {

  const response = await axios.post(`${base_url}/api/user/login`,
    {
      email: loginEmail,
      password: loginPassword
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

  return response.data;
});

// Register user
export const registerUser = createAsyncThunk('user/registerUser', async (myForm) => {

  const response = await axios.post(`${base_url}/api/user/register`,
    myForm,
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

  return response.data;
});

// Logout user
export const logoutUser = createAsyncThunk('user/logoutUser', async () => {

  const response = await axios.get(`${base_url}/api/user/logout`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

  return response.data;
});

// Get user Profile
export const getUser = createAsyncThunk('user/getUser', async () => {

  const response = await axios.get(`${base_url}/api/user/profile`,
    {
      withCredentials: true,
    });

  return response.data;
});





const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Login 
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.isAuthenticated = true;

      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Register 
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {

        state.status = 'failed';
        state.error = action.error.message;

      })

      // Logout 
      .addCase(logoutUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = null;
        state.isAuthenticated = false;

      })
      .addCase(logoutUser.rejected, (state, action) => {

        state.status = 'failed';
        state.error = action.error.message;

      })

      // Profile
      .addCase(getUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = 'failed';
      })

  },
});

export default userSlice.reducer;

// Export any actions you need
export const selectUser = (state) => state.user;  
