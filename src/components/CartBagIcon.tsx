interface Props {
  size?: number;
  className?: string;
}

export default function CartBagIcon({ size = 22, className = '' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 7 L6 20 L18 20 L20 7 Z" />
      <path d="M9 7 C9 4 9.5 2 12 2 C14.5 2 15 4 15 7" />
    </svg>
  );
}
