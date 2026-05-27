type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

function IconButton({ children, onClick, className }: Props) {
  return (
    <button className={className ?? "iconButton"} onClick={onClick}>
      {children}
    </button>
  );
}

export default IconButton;