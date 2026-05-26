import { forwardRef } from "react";
import "./Textfield.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  size?: "small" | "medium";
  color?: "primary" | "secondary" | "success" | "error";
};

const BasicTextFields = forwardRef<HTMLInputElement, Props>(
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

BasicTextFields.displayName = "BasicTextFields";

export default BasicTextFields;