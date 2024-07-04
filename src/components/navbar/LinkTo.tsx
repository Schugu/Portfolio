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
      className={`w-fit rounded px-1 py-0.5 border-2 flex justify-center items-center gap-1 transition-colors duration-300 ease-in-out
          ${location.pathname === to
          ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
          : 'border-transparent text-[var(--color-text)]'}
          hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]`}
    >
      <p className="text-lg md:text-2xl font-ubuntu font-thin text-[var(--color-primary)]">#</p>
      {label}
    </Link>
  )

}
