import { BookOpen, AlertTriangle, Database, Zap, FileText, Activity, Puzzle, GitBranch, Server } from "lucide-react"

export const navigationItems = [
  {
    name: "Glossary",
    path: "/glossary",
    icon: BookOpen,
    description: "PostgreSQL terminology and definitions",
  },
  {
    name: "Error Guide",
    path: "/error-guide",
    icon: AlertTriangle,
    description: "Common errors and their solutions",
  },
  {
    name: "System Catalog",
    path: "/system-catalog",
    icon: Database,
    description: "System catalog tables and views",
  },
  {
    name: "Performance",
    path: "/performance",
    icon: Zap,
    description: "Performance tuning parameters",
  },
  {
    name: "Cheatsheet",
    path: "/cheatsheet",
    icon: FileText,
    description: "Quick reference commands",
  },
  {
    name: "Monitoring",
    path: "/monitoring",
    icon: Activity,
    description: "Monitoring and maintenance",
  },
  {
    name: "Extensions",
    path: "/extensions",
    icon: Puzzle,
    description: "Available extensions",
  },
  {
    name: "Version Features",
    path: "/version-features",
    icon: GitBranch,
    description: "Features by PostgreSQL version",
  },
  {
    name: "Architecture",
    path: "/architecture",
    icon: Server,
    description: "PostgreSQL architecture overview",
  },
]
