interface ContImgProps {
  src: string;
  shape?: "square" | "circle";
  alt?: string;
  tabIndex: number;
}

export default function ContImg({ src, shape = "circle", alt, tabIndex }: ContImgProps) {
  return (
    <div className={`w-48 h-48 sm:w-80 sm:h-80
      md:w-full md:h-full 
      ${shape === "circle" ? "rounded-full overflow-hidden" : "rounded"}
      border-2 border-[var(--color-primary)] bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-primary)]`}>
      <img className="w-full h-full object-cover object-center" src={src} alt={alt} tabIndex={tabIndex} />
    </div>
  );
}
