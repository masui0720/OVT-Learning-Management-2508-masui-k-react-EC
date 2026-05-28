import "./LoginPage.scss"
import { useNavigate, Link } from "react-router-dom";
import LoginForm from "../../features/LoginForm/LoginForm";
import type { FormValues } from "../../validators/types";

function LoginPage() {
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    console.log(data);

    const fakeToken ="test-token";
    localStorage.setItem("token", fakeToken)

    navigate("/home");
  };

  return (
    <div className="loginpage">
      <h1>ログイン</h1>
      <LoginForm onSubmit={onSubmit} />

      <Link to="/admin-login">
      管理者ログイン
      </Link>
    </div>
  );
}

export default LoginPage;