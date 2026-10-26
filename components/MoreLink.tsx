import Link from "next/link";
import { Arrow } from "./Arrow";

type Props = {
  href: string;
  label: string;
  className?: string;
};

// "Read more" link from a home page summary to the section's own page.
export function MoreLink({ href, label, className = "" }: Props) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-2 text-base font-normal ${className}`}>
      <span className="link-underline">{label}</span>
      <Arrow className="transition-transform duration-150 group-hover:translate-x-1" />
    </Link>
  );
}
