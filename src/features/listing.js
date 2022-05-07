import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { id: "", headline: "", rent: 0, locality:"",broker:"",isFeatured:"",images:[] };

export const listingSlice = createSlice({
  name: "listing",
  initialState: { value: initialStateValue },
  reducers: {
    list: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login, logout } = listingSlice.actions;

export default listingSlice.reducer;