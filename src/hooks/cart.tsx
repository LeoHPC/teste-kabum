// REACT
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

// INTERFACES
import { IProduct } from "../interfaces/product";

interface CartContextData {
  cart: IProduct[];
  addProductToCart: (product: IProduct) => void;
  isProductAlreadyInCart: boolean;
  setIsProductAlreadyInCart: (itIs: boolean) => void;
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [isProductAlreadyInCart, setIsProductAlreadyInCart] = useState(false);

  useEffect(() => {
    const cartLocal = localStorage.getItem('@KaBum-teste:cart');

    if (cartLocal) {
      setCart(JSON.parse(cartLocal));
    }
  }, []);

  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem('@KaBum-teste:cart', JSON.stringify(cart));
    }
  }, [cart])

  const addProductToCart = (product: IProduct) => {
    const productIsAlreadyInCart = cart?.find((element: IProduct) => element.id === product.id);
    if (productIsAlreadyInCart === undefined) {
      setCart([...cart, product]);
    } else {
      setIsProductAlreadyInCart(true);
    }
  }

  return (
    <CartContext.Provider value={{
      cart,
      addProductToCart,
      isProductAlreadyInCart,
      setIsProductAlreadyInCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within an CartProvider');
  }
  return context;
}

export { CartProvider, useCart };