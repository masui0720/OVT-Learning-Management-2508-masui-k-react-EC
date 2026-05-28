import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import AdminLoginPage from "../pages/AdminLoginPage/AdminLoginPage";
import TopPage from "../pages/TopPage/TopPage";
import CartPage from "../pages/CartPage/CartPage";


export default function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/home" element={<TopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
  );
}