import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const value = useMemo(
    () => ({
      items,
      itemCount: items.length,
      addItem: (item) =>
        setItems((current) => [
          ...current,
          { ...item, id: `${item.product.slug}-${Date.now()}` },
        ]),
      beginOrder: (item) =>
        setItems([{ ...item, id: `${item.product.slug}-${Date.now()}` }]),
      updateItem: (itemId, updates) =>
        setItems((current) =>
          current.map((item) =>
            item.id === itemId ? { ...item, ...updates, id: item.id } : item,
          ),
        ),
      removeItem: (itemId) =>
        setItems((current) => current.filter((item) => item.id !== itemId)),
    }),
    [items],
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// The hook is colocated with its provider so all cart consumers share one contract.
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
