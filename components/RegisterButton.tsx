import { site } from "@/content/site";

type Props = {
  size?: "sm" | "lg";
  className?: string;
};

const sizes = {
  sm: "h-11 px-4 text-sm",
  lg: "h-14 px-7 text-base",
};

// The one primary button. While registrations are closed it points to the waitlist form,
// or renders disabled if the waitlist is switched off.
export function RegisterButton({ size = "lg", className = "" }: Props) {
  const base = `btn ${sizes[size]} ${className}`;

  if (!site.registrationOpen && site.waitlist.enabled) {
    return (
      <a href={`/#${site.waitlist.anchor}`} className={base}>
        {site.waitlist.navLabel}
      </a>
    );
  }

  if (!site.registrationOpen) {
    return (
      <button type="button" disabled className={base}>
        {site.registerClosedLabel}
      </button>
    );
  }

  return (
    <a href={site.registerUrl} className={base}>
      {site.registerLabel}
    </a>
  );
}
