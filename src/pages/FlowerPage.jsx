import { useParams } from "react-router-dom";
import { hoaThaBinh, hoaBo } from "./ListingPage";
import { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import WhyChooseUs from "../component/WhyChooseUs";
import { useCart } from "../context/Cart";

const FlowerPage = ({ flower }) => {
    const { id } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const allFlowers = [...hoaThaBinh, ...hoaBo]; // Gộp hai danh sách hoa
    const selectedFlower = allFlowers.find((item) => item.id.toString() === id);
    const { addToCart } = useCart();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    if (!selectedFlower) {
        return <p className="text-center text-lg text-gray-600">Không tìm thấy sản phẩm</p>;
    }

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="text-yellow-500" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-gray-400" />);
            }
        }
        return stars;
    };


    return (
        <>
            <div className="mx-auto max-w-5xl px-8 py-8 font-lora">
                <div className="flex flex-col md:flex-row gap-6 items-start space-x-10">
                    {/* Hình ảnh sản phẩm */}
                    <div className="flex flex-col items-center">
                        <img
                            src={selectedFlower.image}
                            alt="hoa"
                            className="w-80 h-80 object-cover rounded-lg shadow-lg"
                            onClick={() => setIsModalOpen(true)}
                        />
                        <div className="flex mt-3 space-x-2">
                            <img src={selectedFlower.image} alt="small" className="w-14 h-14 object-cover border rounded-md" />
                            <img src={selectedFlower.image} alt="small" className="w-14 h-14 object-cover border rounded-md" />
                            <img src={selectedFlower.image} alt="small" className="w-14 h-14 object-cover border rounded-md" />
                        </div>
                        <button
                            className="mt-2 px-3 py-1 bg-gray-200 text-sm rounded-md hover:bg-gray-300"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Click để xem ảnh
                        </button>
                    </div>

                    {/* Thông tin sản phẩm */}
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-gray-800">{selectedFlower?.name ?? 'Hoa khuyến mãi'}</h1>

                        <p className="text-xl font-bold mt-1.5 ml-1 text-red-500">{selectedFlower?.discountPrice ?? '250.000'} đ</p>
                        {/* Hiển thị rating bằng ngôi sao */}
                        <div className="flex items-center mt-1 text-lg">
                            {renderStars(selectedFlower.rating)}
                            <span className="ml-2 text-sm text-gray-500">({selectedFlower.rating} sao)</span>
                        </div>
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                            Hoa không chỉ là một món quà, mà còn là cách bày tỏ yêu thương chân thành. Một bó hồng cho người vợ tảo tần, một cành hướng dương vàng tươi dành tặng bạn thân, hay một nhành cẩm chướng gửi đến người mẹ yêu dấu – mỗi bông hoa đều mang theo thông điệp trân quý.
                        </p>

                        <div className="mt-3 border-t pt-3">
                            <h2 className="text-sm font-semibold">Sản phẩm bao gồm:</h2>
                            <ul className="list-disc ml-4 text-sm text-gray-600">
                                <li>Hoa chính: 5 cành</li>
                                <li>Hoa phụ: 3 cành</li>
                                <li>Hoa điểm nhấn: 1 cành</li>
                                <li>Lá trang trí và phụ kiện</li>
                            </ul>
                        </div>


                        <div className="mt-4 flex flex-wrap gap-3">
                            <button
                                onClick={() => addToCart(selectedFlower)}
                                className="px-4 py-2 border border-orange-500 text-orange-500 text-sm font-semibold rounded-lg"
                            >
                                Thêm vào giỏ
                            </button>
                            <button className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg">Mua ngay</button>
                            <button className="px-4 py-2 border border-green-500 text-green-500 text-sm font-semibold rounded-lg">Gọi ngay: 1800 6353</button>
                        </div>
                    </div>
                </div>

                {/* Ưu đãi đặc biệt */}
                <div className="mt-8 p-4 border rounded-lg bg-gray-50 text-sm">
                    <h2 className="text-base font-semibold text-gray-800">ƯU ĐÃI ĐẶC BIỆT</h2>
                    <ul className="mt-2 space-y-1 text-gray-600">
                        <li>1️⃣ Tặng Banner Hoặc Thiệp (Trị Giá 20.000đ - 50.000đ) Miễn Phí</li>
                        <li>2️⃣ Giảm 3% Cho Đơn Hàng Thứ 2, 5% Cho Đơn Thứ 6, 10% Cho Đơn Thứ 12</li>
                        <li>3️⃣ Miễn Phí Giao Hàng Nội Thành</li>
                        <li>4️⃣ Giao Gấp Trong Vòng 2 Giờ</li>
                        <li>5️⃣ Cam Kết 100% Như Hình</li>
                        <li>6️⃣ Cam Kết Hoa Tươi Trên 3 Ngày</li>
                    </ul>
                </div>

                {/* Modal xem ảnh */}
                {isModalOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <div className="relative">
                            <img
                                src={selectedFlower.image}
                                alt="hoa lớn"
                                className="w-[500px] h-[500px] object-cover rounded-lg shadow-lg"
                                onClick={(e) => e.stopPropagation()} // Ngăn đóng modal khi nhấn vào ảnh
                            />
                            <button
                                className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                                onClick={() => setIsModalOpen(false)}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <WhyChooseUs />
        </>
    );
};

export default FlowerPage;