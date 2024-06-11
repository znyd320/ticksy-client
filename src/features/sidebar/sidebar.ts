import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
};

const sidebar = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    sidebarOn: (state) => {
      state.sidebar = true;
    },
    sidebarOff: (state) => {
      state.sidebar = false;
    },
  },
});

export const { sidebarOn, sidebarOff } = sidebar.actions;

export default sidebar.reducer;
