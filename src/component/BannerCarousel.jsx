import { assets } from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerCarousel = () => {
    const banners = [assets.banner1, assets.banner2, assets.banner3, assets.banner4];

    return (
        <div className="w-full pt-[130px] md:pt-3 max-w-5xl py-4 mx-auto relative">
            <div className="hidden md:block">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop
                    className="rounded-lg overflow-hidden"
                >
                    {banners.map((banner, index) => (
                        <SwiperSlide key={index} className="relative">
                            <img src={banner} alt={`Banner ${index + 1}`} className="w-full h-auto" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="hidden md:block absolute font-lora bottom-10 right-10 z-10 bg-red-500 p-6 rounded-2xl shadow-2xl w-72">
                <div>
                    <span className="text-sm text-white">Chọn loại hoa</span>
                    <h1 className="text-xl text-white font-bold mb-4">Loại hiện có</h1>
                    <div className="space-y-4">
                        <select className="w-full p-2 border border-white bg-white text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
                            <option value="" disabled selected>Chọn một loại hoa</option>
                            <option value="hoa-bo">Hoa bó</option>
                            <option value="hoa-tha-binh">Hoa thả bình</option>
                        </select>
                        <button className="w-full bg-yellow-400 text-white font-bold py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-md">Xem ngay</button>
                    </div>
                </div>
            </div>

            <div className="p-1.5 mt-[-15px]">
                <div className="md:hidden font-lora inset-0 flex items-center justify-center rounded-sm bg-red-600 p-6 z-20">
                    <div className="w-full max-w-md text-start">
                        <span className="text-lg text-white">Chọn loại hoa</span>
                        <h1 className="text-2xl text-white font-bold mb-6">Loại hiện có</h1>
                        <div className="space-y-4">
                            <select className="w-full p-3 border border-white bg-white text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
                                <option value="" disabled selected>Chọn một loại hoa</option>
                                <option value="hoa-bo">Hoa bó</option>
                                <option value="hoa-tha-binh">Hoa thả bình</option>
                            </select>
                            <button className="w-full bg-yellow-400 text-white font-bold py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-md">Xem ngay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerCarousel;