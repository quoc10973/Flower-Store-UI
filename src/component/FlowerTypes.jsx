import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const FlowerTypes = ({ flowers, type }) => {
    return (
        <div className="mx-auto max-w-6xl p-3">
            <p className="text-start ml-6 text-red-700 text-xl font-lora font-semibold py-3">
                {type}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 bg-blue-50 rounded-lg">
                {flowers.slice(0, 10).map((flower) => ( // Chỉ lấy 10 hoa đầu tiên
                    <div key={flower.id} className="bg-white text-center p-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                        <img src={flower.image} alt={flower.name} className="w-full h-48 object-cover rounded-md" />
                        <hr className="my-3 border-gray-300" />
                        <h3 className="mt-2 text-md font-light">{flower.name}</h3>
                        <p className="text-red-500 font-bold">{flower.price} đ</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-4 mb-2">
                <Link
                    to={`/listing?category=${encodeURIComponent(type)}`}
                    className="bg-red-500 text-white text-sm px-8 py-1.5 rounded-full font-semibold tracking-wide hover:bg-red-600 transition duration-300 shadow-md"
                >
                    Xem thêm <ChevronRightIcon className="h-5 w-5 inline-block" />
                </Link>
            </div>
        </div>
    );
};

export default FlowerTypes;