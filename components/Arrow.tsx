type Props = {
  className?: string;
};

export function Arrow({ className = "" }: Props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}

// Up-right arrow for links that leave the site.
export function ExternalArrow({ className = "" }: Props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M5 11l6-6M6 5h5v5" />
    </svg>
  );
}
