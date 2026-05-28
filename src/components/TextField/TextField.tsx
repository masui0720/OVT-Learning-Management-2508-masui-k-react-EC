import { forwardRef } from "react";
import "./TextField.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  size?: "small" | "medium";
  color?: "primary" | "secondary" | "success" | "error";
};

const TextFields = forwardRef<HTMLInputElement, Props>(
  ({ size = "medium", color = "primary", className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        {...rest}
        className={`textField textField--${size} textField--${color} ${className ?? ""}`}
      />
    );
  }
);

TextFields.displayName = "BasicTextFields";

export default TextFields;