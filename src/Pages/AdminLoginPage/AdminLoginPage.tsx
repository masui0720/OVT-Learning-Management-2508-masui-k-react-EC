import "../LoginPage/LoginPage.scss";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../features/LoginForm/LoginForm";
import type { FormValues } from "../../validators/types";
import { useAuthStore } from "../../stores/authStore";

function AdminLoginPage() {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  const onSubmit = (data: FormValues) => {
    console.log("管理者ログイン", data);

    const fakeToken = "admin-token";
    setToken(fakeToken); 

    navigate("/home");
  };

  return (
    <div className="loginpage">
      <h1>管理者ログイン</h1>
      <LoginForm onSubmit={onSubmit} />

      <Link to="/login">
      ログインページ</Link>
    </div>
  );
}

export default AdminLoginPage;