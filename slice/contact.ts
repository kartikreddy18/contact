import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  status: boolean;
}

const initialState: IContact[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    status: true,
  },
];

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IContact>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) =>
      state.filter((contact) => contact.id !== action.payload),
    update: (state, action: PayloadAction<IContact>) =>
      state.map((contact) => {
        if (contact.id === action.payload.id) return { ...action.payload };
        return contact;
      }),
  },
});

export const { add, remove, update } = contactSlice.actions;
export default contactSlice.reducer;
