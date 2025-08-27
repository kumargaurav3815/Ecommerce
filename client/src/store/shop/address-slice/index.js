/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL for backend
const API_BASE = "https://ecommerce-q6f7.onrender.com/api/shop/address";

const initialState = {
  isLoading: false,
  addressList: [],
};

// Add new address
export const addNewAddress = createAsyncThunk(
  "/addresses/addNewAddress",
  async (formData) => {
    const response = await axios.post(`${API_BASE}/add`, formData);
    return response.data;
  }
);

// Fetch all addresses
export const fetchAllAddresses = createAsyncThunk(
  "/addresses/fetchAllAddresses",
  async (userId) => {
    const response = await axios.get(`${API_BASE}/get/${userId}`);
    return response.data;
  }
);

// Edit an address
export const editaAddress = createAsyncThunk(
  "/addresses/editaAddress ",
  async ({ userId, addressId, formData }) => {
    const response = await axios.put(
      `${API_BASE}/update/${userId}/${addressId}`,
      formData
    );
    return response.data;
  }
);

// Delete an address
export const deleteAddress = createAsyncThunk(
  "/addresses/deleteAddress",
  async ({ userId, addressId }) => {
    const response = await axios.delete(
      `${API_BASE}/delete/${userId}/${addressId}`
    );
    return response.data;
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add
      .addCase(addNewAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewAddress.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addNewAddress.rejected, (state) => {
        state.isLoading = false;
      })

      // Fetch
      .addCase(fetchAllAddresses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllAddresses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addressList = action.payload.data || [];
      })
      .addCase(fetchAllAddresses.rejected, (state) => {
        state.isLoading = false;
        state.addressList = [];
      })

      // Edit
      .addCase(editaAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editaAddress.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(editaAddress.rejected, (state) => {
        state.isLoading = false;
      })

      // Delete
      .addCase(deleteAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAddress.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteAddress.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default addressSlice.reducer;
