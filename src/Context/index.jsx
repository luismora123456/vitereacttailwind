import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
  //Shopping Cart
  const [count, setCount] = useState(0);

  // Product Detail : Open/Close
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  // Checkout Side Menu
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  // Product Detail : ShowProduct
  const [productToShow, setProductToShow] = useState({});

  const [cartProducts, setCartProducts] = useState([]);

  const [order, setOrder] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        isCheckoutSideMenuOpen,
        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
