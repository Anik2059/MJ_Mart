import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Increase quantity if already in cart
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case "REMOVE":
      return state.filter(item => item.id !== action.payload);

    case "INCREASE":
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );

    case "DECREASE":
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) }
          : item
      );

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
