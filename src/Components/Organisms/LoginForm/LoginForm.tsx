import BasicTextFields from "../../Atoms/TextField/TextField";
import Button from "../../Atoms/Button/Button";
import { useForm } from "react-hook-form";
import type { FormValues } from "../../../validators/types";
import { getLoginRules } from "../../../validators/rules";

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
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="formRow">
        <p className="formLabel">メールアドレス</p>
        <BasicTextFields
          placeholder="メールアドレス"
          {...register("email", rules.email)}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className="formRow">
        <p className="formLabel">パスワード</p>
        <BasicTextFields
          placeholder="パスワード"
          {...register("password", rules.password)}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>


      <Button label="ログイン" type="submit" />
    </form>
  );
}

export default LoginForm;