import type { CSSProperties } from "react";

export function BrandIcon({
  path,
  size = 16,
  className,
  style,
}: {
  path: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}
