import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import AdminLoginPage from "./Pages/AdminLoginPage/AdminLoginPage";
import TopPage from "./Pages/TopPage/TopPage";
import CartPage from "./Pages/CartPage/CartPage";


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