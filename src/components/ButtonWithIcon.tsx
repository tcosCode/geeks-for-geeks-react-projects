interface ButtonWithIconProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
  className: string;
}

export default function ButtonWithIcon({
  icon,
  text,
  onClick,
  className,
}: ButtonWithIconProps) {
  return (
    <button className={className} onClick={onClick}>
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
}
