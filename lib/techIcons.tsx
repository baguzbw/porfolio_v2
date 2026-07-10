import { Database, Webhook, BarChart3, Globe, Code2, type LucideIcon } from "lucide-react";
import * as paths from "./iconPaths";

type BrandEntry = { kind: "brand"; path: string; color?: string; mono?: boolean };
type LucideEntry = { kind: "lucide"; icon: LucideIcon; color: string };
export type TechEntry = BrandEntry | LucideEntry;

const fallback: TechEntry = { kind: "lucide", icon: Code2, color: "#9CA3AF" };

// Brand colors are the official Simple Icons hex values, embedded locally as
// raw SVG path data (no react-icons / simple-icons runtime dependency).
// Entries without an official mark (Oracle, statsmodels, matplotlib, seaborn,
// generic REST API, open datasets) fall back to a neutral lucide glyph.
export const techIcons: Record<string, TechEntry> = {
  TypeScript: { kind: "brand", path: paths.TypeScriptPath, color: "#3178C6" },
  JavaScript: { kind: "brand", path: paths.JavaScriptPath, color: "#F7DF1E" },
  Go: { kind: "brand", path: paths.GoPath, color: "#00ADD8" },
  Python: { kind: "brand", path: paths.PythonPath, color: "#3776AB" },
  PHP: { kind: "brand", path: paths.PHPPath, color: "#777BB4" },
  Java: { kind: "brand", path: paths.JavaPath, color: "#ED8B00" },
  HTML: { kind: "brand", path: paths.HTMLPath, color: "#E34F26" },
  CSS: { kind: "brand", path: paths.CSSPath, color: "#663399" },
  "Next.js 14": { kind: "brand", path: paths.NextJSPath, mono: true },
  "React.js": { kind: "brand", path: paths.ReactPath, color: "#61DAFB" },
  "Tailwind CSS": { kind: "brand", path: paths.TailwindPath, color: "#06B6D4" },
  "Ant Design": { kind: "brand", path: paths.AntDesignPath, color: "#1890FF" },
  Figma: { kind: "brand", path: paths.FigmaPath, color: "#F24E1E" },
  Supabase: { kind: "brand", path: paths.SupabasePath, color: "#3ECF8E" },
  PostgreSQL: { kind: "brand", path: paths.PostgreSQLPath, color: "#4169E1" },
  "Oracle SQL": { kind: "lucide", icon: Database, color: "#F80000" },
  MySQL: { kind: "brand", path: paths.MySQLPath, color: "#4479A1" },
  Laravel: { kind: "brand", path: paths.LaravelPath, color: "#FF2D20" },
  "RESTful API": { kind: "lucide", icon: Webhook, color: "#6366F1" },
  pandas: { kind: "brand", path: paths.PandasPath, color: "#150458" },
  "statsmodels (SARIMA)": { kind: "lucide", icon: BarChart3, color: "#8B5CF6" },
  statsmodels: { kind: "lucide", icon: BarChart3, color: "#8B5CF6" },
  "scikit-learn": { kind: "brand", path: paths.ScikitLearnPath, color: "#F7931E" },
  matplotlib: { kind: "lucide", icon: BarChart3, color: "#11557C" },
  seaborn: { kind: "lucide", icon: BarChart3, color: "#3776AB" },
  Plotly: { kind: "brand", path: paths.PlotlyPath, color: "#7A76FF" },
  Streamlit: { kind: "brand", path: paths.StreamlitPath, color: "#FF4B4B" },
  "BPS Open Data": { kind: "lucide", icon: Globe, color: "#0EA5E9" },
  Git: { kind: "brand", path: paths.GitPath, color: "#F03C2E" },
  GitHub: { kind: "brand", path: paths.GitHubPath, mono: true },
  Vercel: { kind: "brand", path: paths.VercelPath, mono: true },
  Postman: { kind: "brand", path: paths.PostmanPath, color: "#FF6C37" },
  Jira: { kind: "brand", path: paths.JiraPath, color: "#0052CC" },
  Notion: { kind: "brand", path: paths.NotionPath, mono: true },
  Linux: { kind: "brand", path: paths.LinuxPath, color: "#FCC624" },
  "Framer Motion": { kind: "brand", path: paths.FramerMotionPath, color: "#0055FF" },
  "React Router": { kind: "brand", path: paths.ReactRouterPath, color: "#CA4245" },
  Leaflet: { kind: "brand", path: paths.LeafletPath, color: "#199900" },
  Recharts: { kind: "lucide", icon: BarChart3, color: "#8884D8" },
};

export function getTechIcon(name: string): TechEntry {
  return techIcons[name] ?? fallback;
}
