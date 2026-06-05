import "./TextField.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  variantSize?: "small" | "medium";
  color?: "primary" | "secondary" | "success" | "error";
};

function TextFields({
  variantSize = "medium",
  color = "primary",
  className, ...rest}: Props) {
  return (
    <input
      {...rest}
      className={`textField textField--${variantSize} textField--${color} ${className ?? ""}`}
    />
  );
}

export default TextFields;