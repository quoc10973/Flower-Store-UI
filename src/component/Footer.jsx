const Footer = () => {
    return (
        <footer className="bg-orange-100 text-gray-800 text-md font-lora py-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Logo và giới thiệu */}
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Flower Shop</h2>
                    <p className="text-sm mt-2 text-gray-700">Chuyên cung cấp các loại hoa tươi, giao hàng tận nơi với chất lượng tốt nhất.</p>
                    <p className="text-sm mt-2 text-gray-700">Chúng tôi cam kết mang đến những bông hoa đẹp nhất cho những dịp quan trọng của bạn.</p>
                </div>

                {/* Thông tin liên hệ */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Liên hệ</h3>
                    <p className="text-sm mt-2 text-gray-700">📍 Địa chỉ: 123 Đường Hoa, Quận 1, TP.HCM</p>
                    <p className="text-sm text-gray-700">📞 Điện thoại: 0123 456 789</p>
                    <p className="text-sm text-gray-700">✉ Email: support@flowershop.com</p>
                    <p className="text-sm text-gray-700">⏰ Giờ làm việc: 8:00 - 20:00 (Thứ 2 - Chủ Nhật)</p>
                </div>

                {/* Liên kết nhanh */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Liên kết nhanh</h3>
                    <ul className="text-sm mt-2 space-y-2">
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Trang chủ</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Sản phẩm</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Khuyến mãi</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Giới thiệu</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Blog</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Liên hệ</a></li>
                    </ul>
                </div>

                {/* Mạng xã hội */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Theo dõi chúng tôi</h3>
                    <div className="flex flex-col space-y-2 mt-2">
                        <a href="#" className="text-gray-700 hover:text-gray-900">🌐 Facebook</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">📸 Instagram</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">🐦 Twitter</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">📌 Pinterest</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">🎥 YouTube</a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm border-t border-gray-300 mt-6 pt-4 text-gray-700">
                © 2025 Flower Shop. All rights reserved. Thiết kế bởi <span className="text-gray-900 font-bold">Flower Team</span>.
            </div>
        </footer>
    );
};

export default Footer;