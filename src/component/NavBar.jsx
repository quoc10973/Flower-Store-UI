import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="pt-[120px] hidden md:block bg-gray-100 shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <ul className="flex justify-center font-poppins space-x-8 py-3 text-gray-700 font-semibold text-xs uppercase">
                    <li><Link to="/" className="hover:text-orange-500 transition">Trang Chủ</Link></li>
                    <li><Link to="/chu-de" className="hover:text-orange-500 transition">Chủ Đề</Link></li>
                    <li><Link to="/doi-tuong" className="hover:text-orange-500 transition">Đối Tượng</Link></li>
                    <li><Link to="/kieu-dang" className="hover:text-orange-500 transition">Kiểu Dáng</Link></li>
                    <li><Link to="/hoa-tuoi" className="hover:text-orange-500 transition">Hoa Tươi</Link></li>
                    <li><Link to="/mau-sac" className="hover:text-orange-500 transition">Màu Sắc</Link></li>
                    <li><Link to="/bo-suu-tap" className="hover:text-orange-500 transition">Bộ Sưu Tập</Link></li>
                    <li><Link to="/qua-tang" className="hover:text-orange-500 transition">Quà Tặng Kèm</Link></li>
                    <li><Link to="/hoa-cuoi" className="hover:text-orange-500 transition">Hoa Cưới</Link></li>
                    <li><Link to="/y-nghia-hoa" className="hover:text-orange-500 transition">Ý Nghĩa Hoa</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
