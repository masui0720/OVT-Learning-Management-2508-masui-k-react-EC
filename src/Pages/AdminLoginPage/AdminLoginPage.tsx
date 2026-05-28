import "../LoginPage/LoginPage.scss";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../features/LoginForm/LoginForm";
import type { FormValues } from "../../validators/types";

function AdminLoginPage() {
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    console.log("管理者ログイン", data);

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