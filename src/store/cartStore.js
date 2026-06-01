import { create } from "zustand";

const useCartStore = create((set, get) => ({
  items: [],
  addItem: (product) => {
    const items = get().items;
    const existing = items.find((i) => i.id === product.id);
    if (existing) {
      set({
        items: items.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        ),
      });
    } else {
      set({
        items: [
          ...items,
          { id: product.id, name: product.name, price: product.price, qty: 1 },
        ],
      });
    }
  },
}));

export default useCartStore;
