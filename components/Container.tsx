import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

// Max-width wrapper with the page gutters. Use `grid-page` children for the 12-column grid.
export function Container({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto w-full max-w-page px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
