interface TagOpenProps {
  section: string;
}

const TagOpen = ({ section }: TagOpenProps) => {
  return (
    <div className="flex flex-col text-sm sm:text-2xl">
      <p className="text-[var(--color-primary-first)]">
        <span className="text-[var(--color-secondary-first)]">const </span>
        <span tabIndex={2} className="text-[var(--color-text-first)]">{section}</span>
        <span className="text-[var(--color-secondary-first)]"> = </span>
        {`()`}
        <span className="text-[var(--color-secondary-first)]">{` => `}</span>
        {`{`}
      </p>

      <p className="indent-5 text-[var(--color-text-first)]">
        <span className="text-[var(--color-secondary-first)]">return </span>
        {`(`}
      </p>
    </div>
  )
};

const TagClose = () => {
  return (
    <div className="flex flex-col text-sm sm:text-2xl">
      <p className="indent-5 text-[var(--color-text-first)]">
        {`)`}
      </p>
      <p className="text-[var(--color-primary-first)]">
        {`}`}
        <span className="text-[var(--color-secondary-first)]">;</span>
      </p>
    </div>
  )
}

export { TagOpen, TagClose };