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
        { id: 1, name: "Cẩm Chướng Đỏ", price: "250.000", image: assets.hoathabinhIcon },
        { id: 2, name: "Golden 2", price: "350.000", image: assets.hoathabinh1 },
        { id: 3, name: "Tinh khiết", price: "400.000", image: assets.hoathabinh2 },
        { id: 4, name: "Hồng Mix", price: "500.000", image: assets.hoathabinh3 },
        { id: 5, name: "Hồng Rực", price: "250.000", image: assets.hoathabinh4 },
        { id: 6, name: "Yêu Thương 1", price: "250.000", image: assets.hoathabinh5 },
        { id: 7, name: "Yêu Thương 2", price: "250.000", image: assets.hoathabinh6 },
        { id: 8, name: "Yêu Thương 3", price: "250.000", image: assets.hoathabinh7 },
        { id: 9, name: "Yêu Thương 4", price: "250.000", image: assets.hoathabinh8 },
        { id: 10, name: "Yêu Thương 5", price: "250.000", image: assets.hoathabinh9 },
    ];

    const hoaBo = [
        { id: 1, name: "Cẩm tú cầu và em", price: "250.000", image: assets.hoaboIcon },
        { id: 2, name: "Blink 2", price: "350.000", image: assets.hoabo1 },
        { id: 3, name: "Gold love", price: "400.000", image: assets.hoabo2 },
        { id: 4, name: "Giỏ cúc tana mini 2", price: "500.000", image: assets.hoabo3 },
        { id: 5, name: "Tinh khiết", price: "250.000", image: assets.hoabo4 },
        { id: 6, name: "Tinh khiết", price: "250.000", image: assets.hoabo5 },
        { id: 7, name: "Tinh khiết", price: "250.000", image: assets.hoabo6 },
        { id: 8, name: "Tinh khiết", price: "250.000", image: assets.hoabo7 },
        { id: 9, name: "Tinh khiết", price: "250.000", image: assets.hoabo8 },
        { id: 10, name: "Tinh khiết", price: "250.000", image: assets.hoabo9 },
        { id: 11, name: "Tinh khiết", price: "250.000", image: assets.hoabo10 },
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
            <Header />
            <NavBar />
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
            <Footer />

        </>
    );
};

export default HomePage;
