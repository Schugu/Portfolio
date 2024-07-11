interface TagOpenProps {
  section: string;
}

const TagOpen = ({ section }: TagOpenProps) => {
  return (
    <div className="flex flex-col text-sm sm:text-2xl">
      <p className="text-[var(--color-primary)]">
        <span className="text-[var(--color-secondary)]">const </span>
        <span tabIndex={2} className="text-[var(--color-text)]">{section}</span>
        <span className="text-[var(--color-secondary)]"> = </span>
        {`()`}
        <span className="text-[var(--color-secondary)]">{` => `}</span>
        {`{`}
      </p>

      <p className="indent-5 text-[var(--color-text)]">
        <span className="text-[var(--color-secondary)]">return </span>
        {`(`}
      </p>
    </div>
  )
};

const TagClose = () => {
  return (
    <div className="flex flex-col text-sm sm:text-2xl">
      <p className="indent-5 text-[var(--color-text)]">
        {`)`}
      </p>
      <p className="text-[var(--color-primary)]">
        {`}`}
        <span className="text-[var(--color-secondary)]">;</span>
      </p>
    </div>
  )
}

export { TagOpen, TagClose };