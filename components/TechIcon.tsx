import { getTechIcon } from "@/lib/techIcons";
import { cn } from "@/lib/utils";
import { BrandIcon } from "./BrandIcon";

export function TechIcon({
  name,
  size = 16,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const entry = getTechIcon(name);

  if (entry.kind === "lucide") {
    const Icon = entry.icon;
    return <Icon size={size} aria-hidden="true" className={className} style={{ color: entry.color }} />;
  }

  return (
    <BrandIcon
      path={entry.path}
      size={size}
      className={cn(entry.mono && "text-neutral-800 dark:text-white", className)}
      style={!entry.mono ? { color: entry.color } : undefined}
    />
  );
}
