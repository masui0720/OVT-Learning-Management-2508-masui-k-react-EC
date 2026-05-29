import "./LoginForm.scss";
import { useForm } from "react-hook-form";
import type { FormValues } from "../../validators/types";
import { getLoginRules } from "../../validators/rules";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type Props = {
  onSubmit: (data: FormValues) => void;
};

function LoginForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const password = watch("password");
  const rules = getLoginRules(password);

  return (
    <form className="loginform" onSubmit={handleSubmit(onSubmit)}>

      <div className="formRow">
        <p className="formLabel">メールアドレス</p>
        <TextField
          placeholder="メールアドレス"
          {...register("email", rules.email)}
          error={!!errors.email}
          helperText={errors.email?.message}/>
      </div>

      <div className="formRow">
        <p className="formLabel">パスワード</p>
        <TextField
          type="password"
          placeholder="パスワード"
          {...register("password", rules.password)}
          error={!!errors.password}
          helperText={errors.password?.message}/>
      </div>


      <Button 
        variant="contained"
        type="submit">
        ログイン 
        </Button>
    </form>
  );
}

export default LoginForm;