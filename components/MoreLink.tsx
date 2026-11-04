import Link from "next/link";
import { Arrow } from "./Arrow";

type Props = {
  href: string;
  label: string;
  className?: string;
};

// "Read more" link from a home page summary to the section's own page: a small outlined button.
export function MoreLink({ href, label, className = "" }: Props) {
  return (
    <Link href={href} className={`btn group h-12 bg-paper px-5 text-base ${className}`}>
      <span>{label}</span>
      <Arrow className="transition-transform duration-150 group-hover:translate-x-1" />
    </Link>
  );
}
