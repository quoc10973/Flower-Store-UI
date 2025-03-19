import { Route, Routes } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ListingPage from "../pages/ListingPage";
import FlowerPage from "../pages/FlowerPage";
import { CartProvider } from "../context/Cart";

const AppRoutes = () => {
    return (
        <CartProvider>
            <Routes>
                {/* Layout chính */}
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="/listing" element={<ListingPage />} />
                    <Route path="/flower/:id" element={<FlowerPage />} />
                </Route>
            </Routes>
        </CartProvider>
    );
}
export default AppRoutes;