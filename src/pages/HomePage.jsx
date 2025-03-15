import BannerCarousel from "../component/BannerCarousel"
import Header from "../component/Header"
import NavBar from "../component/NavBar"
import NewFlowerSample from "../component/NewFlowerSample"

const HomePage = () => {
    return (
        <>
            <Header />
            <NavBar />
            <BannerCarousel />
            <NewFlowerSample />
        </>
    )
}

export default HomePage