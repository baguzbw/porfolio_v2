export function PageHeader({
  title,
  subtitle,
  size = "default",
}: {
  title: string;
  subtitle: string;
  size?: "default" | "lg";
}) {
  return (
    <div className="mb-8 border-b border-border pb-6">
      <h1 className={size === "lg" ? "text-3xl font-semibold text-foreground" : "text-2xl font-semibold text-foreground"}>
        {title}
      </h1>
      <p className={size === "lg" ? "mt-2 text-base text-muted-foreground" : "mt-1.5 text-sm text-muted-foreground"}>
        {subtitle}
      </p>
    </div>
  );
}
