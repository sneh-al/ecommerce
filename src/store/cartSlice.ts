

export const createCartSlice = (set) => ({
  cart: [],
  addItem: (cartItem) => {
    set((state) => ({ cart: [...state.cart, cartItem] }));
  },
  clearCart: () => {
    set(() => ({ cart: [] }));
  },
  increaseItemQuantity: (id) => {
    set((state) => ({
      cart: state.cart.map((cartItem) =>
        cartItem.id == id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ),
    }));
  },
  decreaseItemQuantity: (id) => {
    set((state) => ({
      cart: state.cart.map((cartItem) =>
        cartItem.id == id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ),
    }));
  },

});
  