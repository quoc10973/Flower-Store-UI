import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import WhyChooseUs from "../component/WhyChooseUs";
import { motion } from "framer-motion";

export const hoaThaBinh = [
    { id: 1, name: "Cẩm Chướng Đỏ", price: "180.000", image: assets.hoathabinhIcon, category: "Hoa Thả Bình", rating: 4 },
    { id: 2, name: "Golden 2", price: "320.000", image: assets.hoathabinh1, category: "Hoa Thả Bình", rating: 5 },
    { id: 3, name: "Tinh Khiết", price: "280.000", image: assets.hoathabinh2, category: "Hoa Thả Bình", rating: 4 },
    { id: 4, name: "Hồng Mix", price: "450.000", image: assets.hoathabinh3, category: "Hoa Thả Bình", rating: 5 },
    { id: 5, name: "Hồng Rực", price: "350.000", image: assets.hoathabinh4, category: "Hoa Thả Bình", rating: 4 },
    { id: 6, name: "Yêu Thương 1", price: "200.000", image: assets.hoathabinh5, category: "Hoa Thả Bình", rating: 5 },
    { id: 7, name: "Yêu Thương 2", price: "220.000", image: assets.hoathabinh6, category: "Hoa Thả Bình", rating: 4 },
    { id: 8, name: "Yêu Thương 3", price: "250.000", image: assets.hoathabinh7, category: "Hoa Thả Bình", rating: 5 },
    { id: 9, name: "Yêu Thương 4", price: "270.000", image: assets.hoathabinh8, category: "Hoa Thả Bình", rating: 4 },
    { id: 10, name: "Yêu Thương 5", price: "290.000", image: assets.hoathabinh9, category: "Hoa Thả Bình", rating: 5 }
];

export const hoaBo = [
    { id: 11, name: "Tình Yêu Vĩnh Cửu", price: "350.000", image: assets.hoaboIcon, category: "Hoa Bó", rating: 5 },
    { id: 12, name: "Nhịp Đập Yêu Thương", price: "420.000", image: assets.hoabo1, category: "Hoa Bó", rating: 4 },
    { id: 13, name: "Hẹn Ước", price: "480.000", image: assets.hoabo2, category: "Hoa Bó", rating: 5 },
    { id: 14, name: "Tâm Ý", price: "550.000", image: assets.hoabo3, category: "Hoa Bó", rating: 4 },
    { id: 15, name: "Nụ Hôn Đầu", price: "320.000", image: assets.hoabo4, category: "Hoa Bó", rating: 5 },
    { id: 16, name: "Lời Hứa", price: "350.000", image: assets.hoabo5, category: "Hoa Bó", rating: 4 },
    { id: 17, name: "Mộng Mơ", price: "360.000", image: assets.hoabo6, category: "Hoa Bó", rating: 5 },
    { id: 18, name: "Yêu Thương", price: "380.000", image: assets.hoabo7, category: "Hoa Bó", rating: 4 },
    { id: 19, name: "Hạnh Phúc", price: "400.000", image: assets.hoabo8, category: "Hoa Bó", rating: 5 },
    { id: 20, name: "Trái Tim Chung Nhịp", price: "450.000", image: assets.hoabo9, category: "Hoa Bó", rating: 4 },
    { id: 21, name: "Vòng Tay Ấm", price: "500.000", image: assets.hoabo10, category: "Hoa Bó", rating: 5 }
];


// Hợp nhất danh sách
const allFlowers = [...hoaThaBinh, ...hoaBo];

const ListingPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get("category");

    // Danh sách category hợp lệ
    const validCategories = ["Hoa Thả Bình", "Hoa Bó"];
    const defaultCategory = validCategories.includes(categoryParam) ? categoryParam : "Tất cả";

    const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        if (validCategories.includes(categoryParam)) {
            setSelectedCategory(categoryParam);
        } else {
            setSelectedCategory("Tất cả");
        }
    }, [categoryParam]);

    // Lọc danh sách hoa theo loại
    const filteredFlowers = selectedCategory === "Tất cả"
        ? allFlowers
        : allFlowers.filter((flower) => flower.category === selectedCategory);

    return (
        <>
            <div className="mx-auto max-w-6xl px-6 py-8 mt-28 md:mt-0">
                {/* Bộ lọc */}
                <div className="flex gap-4 mb-6">
                    {["Tất cả", "Hoa Thả Bình", "Hoa Bó"].map((category) => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Danh sách hoa */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredFlowers.map((flower) => (
                        <Link to={`/flower/${flower.id}`} key={flower.id} className="block">
                            <motion.div
                                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
                                transition={{ duration: 0.3 }}
                                className="bg-white shadow-lg rounded-lg p-4 cursor-pointer"
                            >
                                <img src={flower.image} alt={flower.name} className="w-full h-48 object-cover rounded" />
                                <h3 className="text-lg font-semibold mt-4">{flower.name}</h3>
                                <p className="text-gray-600">{flower.price} VND</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
            <WhyChooseUs />
        </>
    );
};

export default ListingPage;
