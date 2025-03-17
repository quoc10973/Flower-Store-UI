import { useRef } from "react";
import BannerCarousel from "../component/BannerCarousel";
import Header from "../component/Header";
import NavBar from "../component/NavBar";
import NewFlowerSample from "../component/NewFlowerSample";
import { assets } from "../assets/assets";
import FlowerTypes from "../component/FlowerTypes";
import Footer from "../component/Footer";
import WhyChooseUs from "../component/WhyChooseUs";
import FutureSection from "../component/FutureSection";
import FutureFlowers from "../component/FutureFlowers";

const HomePage = () => {
    const hoaThaBinh = [
        { id: 1, name: "Cẩm Chướng Đỏ", price: "250.000", image: assets.hoathabinhIcon, category: "Hoa Thả Bình" },
        { id: 2, name: "Golden 2", price: "350.000", image: assets.hoathabinh1, category: "Hoa Thả Bình" },
        { id: 3, name: "Tinh khiết", price: "400.000", image: assets.hoathabinh2, category: "Hoa Thả Bình" },
        { id: 4, name: "Hồng Mix", price: "500.000", image: assets.hoathabinh3, category: "Hoa Thả Bình" },
        { id: 5, name: "Hồng Rực", price: "250.000", image: assets.hoathabinh4, category: "Hoa Thả Bình" },
        { id: 6, name: "Yêu Thương 1", price: "250.000", image: assets.hoathabinh5, category: "Hoa Thả Bình" },
        { id: 7, name: "Yêu Thương 2", price: "250.000", image: assets.hoathabinh6, category: "Hoa Thả Bình" },
        { id: 8, name: "Yêu Thương 3", price: "250.000", image: assets.hoathabinh7, category: "Hoa Thả Bình" },
        { id: 9, name: "Yêu Thương 4", price: "250.000", image: assets.hoathabinh8, category: "Hoa Thả Bình" },
        { id: 10, name: "Yêu Thương 5", price: "250.000", image: assets.hoathabinh9, category: "Hoa Thả Bình" }
    ];

    const hoaBo = [
        { id: 11, name: "Cẩm tú cầu và em", price: "250.000", image: assets.hoaboIcon, category: "Hoa Bó" },
        { id: 12, name: "Blink 2", price: "350.000", image: assets.hoabo1, category: "Hoa Bó" },
        { id: 13, name: "Gold love", price: "400.000", image: assets.hoabo2, category: "Hoa Bó" },
        { id: 14, name: "Giỏ cúc tana mini 2", price: "500.000", image: assets.hoabo3, category: "Hoa Bó" },
        { id: 15, name: "Tinh khiết", price: "250.000", image: assets.hoabo4, category: "Hoa Bó" },
        { id: 16, name: "Ngọt Ngào 1", price: "250.000", image: assets.hoabo5, category: "Hoa Bó" },
        { id: 17, name: "Ngọt Ngào 2", price: "250.000", image: assets.hoabo6, category: "Hoa Bó" },
        { id: 18, name: "Yêu Thương 1", price: "250.000", image: assets.hoabo7, category: "Hoa Bó" },
        { id: 19, name: "Hạnh Phúc", price: "250.000", image: assets.hoabo8, category: "Hoa Bó" },
        { id: 20, name: "Love 1", price: "250.000", image: assets.hoabo9, category: "Hoa Bó" },
        { id: 21, name: "Love 2", price: "250.000", image: assets.hoabo10, category: "Hoa Bó" }
    ];

    // Tạo hai ref riêng biệt
    const hoaThaBinhRef = useRef(null);
    const hoaBoRef = useRef(null);

    // Hàm scroll xuống từng loại hoa
    const handleScrollToFlowers = (type) => {
        if (type === "hoaThaBinh") {
            hoaThaBinhRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (type === "hoaBo") {
            hoaBoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>

            <BannerCarousel />
            <NewFlowerSample onFlowerClick={handleScrollToFlowers} />
            <div ref={hoaThaBinhRef}>
                <FlowerTypes flowers={hoaThaBinh} type="Hoa Thả Bình" />
            </div>
            <div ref={hoaBoRef}>
                <FlowerTypes flowers={hoaBo} type="Hoa Bó" />
            </div>
            <WhyChooseUs />
            <FutureSection />
            <FutureFlowers />


        </>
    );
};

export default HomePage;
