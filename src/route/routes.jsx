import { Route, Routes } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ListingPage from "../pages/ListingPage";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Layout chính */}
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="/listing" element={<ListingPage />} />
            </Route>
        </Routes>
    );
}
export default AppRoutes;