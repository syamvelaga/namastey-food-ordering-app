import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    addToCart: {},
  },
  reducers: {
    addItems: (state, action) => {
      let item = action.payload;
      state.items.push({ ...action.payload, count: 1 });
      state.addToCart[item.id] = true;
    },
    incrementCount: (state, action) => {
      let itemId = action.payload;
      const item = state.items.find((i) => i.id === itemId);
      if (item) {
        item.count += 1;
      }
    },
    decrementCount: (state, action) => {
      let itemId = action.payload;
      const item = state.items.find((i) => i.id === itemId);
      if (item) {
        if (item.count > 1) {
          item.count -= 1;
        }
      }
    },
    removeCartItem: (state, action) => {
      let itemId = action.payload;
      state.items = state.items.filter((i) => i.id !== itemId);
      delete state.addToCart[itemId];
    },
    clearCart: () => {},
  },
});

export const { addItems, incrementCount, decrementCount, removeCartItem } =
  cartSlice.actions;
export default cartSlice;
