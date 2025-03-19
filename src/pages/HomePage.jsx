import { useRef } from "react";
import BannerCarousel from "../component/BannerCarousel";
import NewFlowerSample from "../component/NewFlowerSample";
import FlowerTypes from "../component/FlowerTypes";
import WhyChooseUs from "../component/WhyChooseUs";
import FutureSection from "../component/FutureSection";
import FutureFlowers from "../component/FutureFlowers";
import { hoaThaBinh, hoaBo } from "./ListingPage";

const HomePage = () => {
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
