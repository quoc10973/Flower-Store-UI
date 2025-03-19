import React, { useState } from "react";
import { ShoppingBagIcon, UserIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram } from "react-icons/fa"; // Thêm icon từ react-icons
import { assets } from "../assets/assets";
import { useCart } from "../context/Cart";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cart, removeFromCart } = useCart();

    //total items in cart
    const totalItems = cart.length;

    return (
        <header className="fixed top-0 left-0 w-full bg-white text-black py-2.5 shadow-sm z-50">
            <div className="mx-auto  max-w-6xl flex justify-between items-center px-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={assets.logo} alt="FLEURISH Flowers" className="h-24 w-24" />
                    <h1 className="text-2xl font-bold font-signika italic text-gray-800">FLEURISH Flowers</h1>
                </div>

                {/* Search Bar & Contact - Ẩn trên mobile */}
                <div className="hidden md:flex items-center space-x-8">
                    {/* Search */}
                    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg w-[320px] md:w-[420px] lg:w-[500px] h-10">
                        <input
                            type="text"
                            placeholder="Tìm sản phẩm..."
                            className="flex-1 bg-transparent outline-none text-black px-2 text-sm"
                        />
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-1.5 rounded-lg transition text-sm">
                            Tìm kiếm
                        </button>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-3 flex flex-col space-y-2 text-center">
                        <a
                            href="https://www.instagram.com/fleurish.saigon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 text-gray-700 hover:text-pink-500 transition"
                        >
                            <FaInstagram className="h-5 w-5" />
                            <span className="text-sm font-semibold">fleurish.saigon</span>
                        </a>
                        <a
                            href="https://www.facebook.com/61574471211051"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-600 transition"
                        >
                            <FaFacebookF className="h-5 w-5" />
                            <span className="text-sm font-semibold">Fleurish Florist</span>
                        </a>

                    </div>
                </div>

                {/* Icons & Mobile Menu */}
                <div className="flex mt-2 items-center space-x-6">
                    {/* Giỏ hàng */}
                    <div className="relative">
                        <button
                            onClick={() => setIsCartOpen(!isCartOpen)}
                            className="relative flex flex-col items-center text-gray-700 hover:text-gray-900 transition"
                        >
                            <ShoppingBagIcon className="h-6 w-6" />
                            {totalItems > 0 && (
                                <span className="absolute top-0 left-5 md:left-10  bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {totalItems}
                                </span>
                            )}
                            <span className="text-sm hidden md:block">Giỏ hàng</span>
                        </button>

                        {/* Dropdown danh sách sản phẩm trong giỏ */}
                        {isCartOpen && (
                            <div className="absolute -right-1/3 mt-2 w-64 bg-white shadow-lg border rounded-md p-3 z-50">
                                <h3 className="font-semibold text-gray-800 mb-2">Giỏ hàng</h3>
                                {cart.length === 0 ? (
                                    <p className="text-sm text-gray-500">Giỏ hàng trống</p>
                                ) : (
                                    <ul className="space-y-2">
                                        {cart.map((item) => (
                                            <li key={item.id} className="flex items-center gap-3">
                                                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                                                <div className="flex-1">
                                                    <p className="text-sm font-semibold">{item.name}</p>
                                                    <p className="text-xs text-gray-500">x{item.quantity} - {item.price.toLocaleString()} đ</p>
                                                </div>
                                                <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm">X</button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <div className="mt-3 text-center">
                                    <button className="w-full bg-orange-500 text-white py-2 rounded-md text-sm font-semibold hover:bg-orange-600">
                                        Thanh toán
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <a href="#" className="flex flex-col items-center text-gray-700 hover:text-gray-900 transition">
                        <UserIcon className="h-6 w-6" />
                        <span className="text-sm hidden md:block">Tài khoản</span>
                    </a>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-100 px-4 py-3">
                    {/* Search Bar */}
                    <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow w-full">
                        <input
                            type="text"
                            placeholder="Tìm sản phẩm..."
                            className="flex-1 bg-transparent outline-none text-black px-2 text-sm"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg transition text-sm">
                            Tìm
                        </button>
                    </div>

                    <div className="flex justify-around">
                        {/* Social Media Links */}
                        <div className="mt-3 flex flex-col space-y-2 text-center">
                            <a
                                href="https://www.instagram.com/fleurish.saigon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-2 text-gray-700 hover:text-pink-500 transition"
                            >
                                <FaInstagram className="h-3 w-3" />
                                <span className="text-xs font-semibold">fleurish.saigon</span>
                            </a>
                            <a
                                href="https://www.facebook.com/61574471211051"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-600 transition"

                            >
                                <FaFacebookF className="h-3 w-3" />
                                <span className="text-xs font-semibold">Fleurish Florist</span>
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-4 text-xs text-gray-600 text-center">
                            <div>
                                <span className="font-semibold">HOTLINE MIỀN NAM:</span>{" "}
                                <span className="text-orange-500">0912388108</span>
                            </div>
                            <div>
                                <span className="font-semibold">HOTLINE MIỀN BẮC:</span>{" "}
                                <span className="text-orange-500">0912388108</span>
                            </div>
                        </div>



                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
