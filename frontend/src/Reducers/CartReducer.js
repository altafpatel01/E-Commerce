import { createSlice } from '@reduxjs/toolkit';

// Helper function to get the unique cart key for the logged-in user


// Helper function to save cart to local storage for a specific user
const saveCartToLocalStorage = ( cart) => {
    localStorage.setItem("FOGaltafpatel", JSON.stringify(cart));
};

// Helper function to load cart from local storage for a specific user
const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem("FOGaltafpatel");
    return storedCart ? JSON.parse(storedCart) : { items: [], totalQuantity: 0, totalPrice: 0 };
};

// Create the cart slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [], totalQuantity: 0, totalPrice: 0 },
    reducers: {
        initializeCart: (state, action) => {
            
            const cartData = loadCartFromLocalStorage();
            return { ...cartData };
        },
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);

            if (existingItem) {
                // Update the quantity of the existing item
                existingItem.quantity += item.quantity;
            } else {
                // Add new item to the cart
                state.items.push(item);
            }

            // Update total quantity and price
            state.totalQuantity += item.quantity;
            state.totalPrice += item.price * item.quantity;

            // Save updated cart to local storage for the current user
            saveCartToLocalStorage( state);
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                // Update total quantity and price
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.price * existingItem.quantity;

                // Remove item from cart
                state.items = state.items.filter((item) => item.id !== id);

                // Save updated cart to local storage for the current user
                saveCartToLocalStorage( state);
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;

            // Clear cart in local storage for the current user
            saveCartToLocalStorage( state);
        },
        updateItemQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                // Update total quantity and price
                const oldQuantity = existingItem.quantity;
                existingItem.quantity = quantity;
                state.totalQuantity += quantity - oldQuantity;
                state.totalPrice += existingItem.price * (quantity - oldQuantity);

                // Save updated cart to local storage for the current user
                saveCartToLocalStorage(state);
            }
        },
    },
});

// Export actions and reducer
export const { addItem, removeItem, clearCart, updateItemQuantity, initializeCart } = cartSlice.actions;
export default cartSlice.reducer;

