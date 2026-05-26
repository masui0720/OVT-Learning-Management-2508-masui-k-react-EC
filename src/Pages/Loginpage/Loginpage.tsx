import { useNavigate } from "react-router-dom";
import LoginForm from "../../Components/Organisms/LoginForm/LoginForm";
import type { FormValues } from "../../validators/types";

function LoginPage() {
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    console.log("", data);

    navigate("/home");
  };

  return (
    <div>
      <h1>ログインページ</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

export default LoginPage;