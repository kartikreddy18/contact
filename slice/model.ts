import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IModel {
  id: string;
  isOpen: boolean;
}

const initialState: IModel = {
  id: "",
  isOpen: false,
};

export const modelSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

export const { open, close, setId } = modelSlice.actions;
export default modelSlice.reducer;
