import "./Button.scss";

type Props = {
  label: string;
  color?: "primary" | "secondary" | "success";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
};

export default function Button(props: Props) {
  const {
    label,
    color = "primary",
    onClick,
    className = "",
    type = "button",
  } = props;

  return (
    <button
      type={type}
      className={`button button--${color} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}