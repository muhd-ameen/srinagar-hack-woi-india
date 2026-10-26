import { site } from "@/content/site";

type Props = {
  size?: "sm" | "lg";
  className?: string;
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  lg: "h-14 px-7 text-base",
};

// The one primary button. While registrations are closed it points to the waitlist form,
// or renders disabled if the waitlist is switched off.
export function RegisterButton({ size = "lg", className = "" }: Props) {
  const base = `inline-flex items-center justify-center rounded-[3px] font-medium whitespace-nowrap ${sizes[size]} ${className}`;
  const primary = "bg-accent text-fg transition-colors duration-150 hover:bg-secondary hover:text-bg";

  if (!site.registrationOpen && site.waitlist.enabled) {
    return (
      <a href={`/#${site.waitlist.anchor}`} className={`${base} ${primary}`}>
        {site.waitlist.navLabel}
      </a>
    );
  }

  if (!site.registrationOpen) {
    return (
      <button
        type="button"
        disabled
        className={`${base} cursor-not-allowed border border-line text-muted`}
      >
        {site.registerClosedLabel}
      </button>
    );
  }

  return (
    <a
      href={site.registerUrl}
      className={`${base} ${primary}`}
    >
      {site.registerLabel}
    </a>
  );
}
