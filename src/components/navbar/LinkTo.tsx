import { Link, useLocation } from "react-router-dom"

interface LinkToProps {
  to: string;
  label: string;
  tabIndex: number;
}

export default function LinkTo({ to, label, tabIndex }: LinkToProps) {
  const location = useLocation();
  return (
    <Link
      tabIndex={tabIndex}
      to={to}
      className={`w-fit rounded px-1 py-0.5 border-2 flex justify-center items-center gap-1 hoverAnimation
          ${location.pathname === to
          ? 'border-[var(--color-primary-first)] text-[var(--color-primary-first)]'
          : 'border-transparent text-[var(--color-text-first)]'}
          hover:border-[var(--color-primary-first)] hover:text-[var(--color-primary-first)]`}
    >
      <p aria-hidden className="text-lg md:text-2xl font-ubuntu font-thin text-[var(--color-primary-first)]">#</p>
      {label}
    </Link>
  )

}
