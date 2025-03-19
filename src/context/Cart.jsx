import { createContext, useContext, useState } from "react";

// Tạo Context
const CartContext = createContext();

// Provider cho giỏ hàng
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Thêm sản phẩm vào giỏ hàng
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    // Xóa sản phẩm khỏi giỏ hàng
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook để sử dụng giỏ hàng
export const useCart = () => useContext(CartContext);
