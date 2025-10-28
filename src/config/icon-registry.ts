/**
 * Icon Registry
 * 
 * Central registry for all Lucide icons used in the application.
 * This allows icons to be referenced by string keys in i18n JSON files,
 * enabling dynamic icon selection based on configuration.
 * 
 * Usage:
 * ```tsx
 * import { iconRegistry } from '@/config/icon-registry';
 * const Icon = iconRegistry['upload'];
 * <Icon className="h-4 w-4" />
 * ```
 */

import {
  // Navigation & Layout
  Menu,
  PanelLeft,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  
  // Dashboard Navigation
  PieChart,
  FolderOpen,
  BarChart3,
  Users,
  CreditCard,
  Settings,
  HelpCircle,
  
  // User & Account
  User,
  LogOut,
  Bell,
  
  // Actions
  Search,
  Plus,
  Download,
  Upload,
  RefreshCw,
  Pause,
  Filter,
  
  // File Types
  FileText,
  FileCode,
  File,
  
  // Status Indicators
  CheckCircle2,
  AlertTriangle,
  Clock,
  
  // Theme
  Moon,
  Sun,
  
  // Social & External
  Github,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
  
  // Misc
  Globe,
  Zap,
  Shield,
  Lock,
  Eye,
  EyeOff,
  Copy,
  Check,
  X,
  Info,
  AlertCircle,
  
} from "lucide-react";

export const iconRegistry = {
  // Navigation & Layout
  menu: Menu,
  panelLeft: PanelLeft,
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  chevronDown: ChevronDown,
  
  // Dashboard Navigation
  pieChart: PieChart,
  dashboard: PieChart,
  folderOpen: FolderOpen,
  projects: FolderOpen,
  barChart: BarChart3,
  analytics: BarChart3,
  users: Users,
  team: Users,
  creditCard: CreditCard,
  billing: CreditCard,
  settings: Settings,
  helpCircle: HelpCircle,
  support: HelpCircle,
  
  // User & Account
  user: User,
  logout: LogOut,
  bell: Bell,
  notifications: Bell,
  
  // Actions
  search: Search,
  plus: Plus,
  add: Plus,
  download: Download,
  upload: Upload,
  refresh: RefreshCw,
  pause: Pause,
  filter: Filter,
  
  // File Types
  fileText: FileText,
  fileCode: FileCode,
  file: File,
  
  // Status Indicators
  checkCircle: CheckCircle2,
  success: CheckCircle2,
  completed: CheckCircle2,
  alertTriangle: AlertTriangle,
  warning: AlertTriangle,
  failed: AlertTriangle,
  clock: Clock,
  processing: Clock,
  
  // Theme
  moon: Moon,
  sun: Sun,
  
  // Social & External
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  mail: Mail,
  email: Mail,
  externalLink: ExternalLink,
  
  // Misc
  globe: Globe,
  zap: Zap,
  shield: Shield,
  lock: Lock,
  eye: Eye,
  eyeOff: EyeOff,
  copy: Copy,
  check: Check,
  close: X,
  x: X,
  info: Info,
  alertCircle: AlertCircle,
  
} as const;

export type IconName = keyof typeof iconRegistry;

/**
 * Get an icon component by its registry key
 * @param iconName - The key from the icon registry
 * @returns The Lucide icon component
 */
export function getIcon(iconName: IconName) {
  return iconRegistry[iconName];
}
