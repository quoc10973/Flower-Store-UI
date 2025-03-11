import { Route, Routes } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Layout chính */}
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    );
}
export default AppRoutes;