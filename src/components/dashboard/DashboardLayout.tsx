import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { ThemeToggle } from "../ThemeToggle";
import { Logo } from "../Logo";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "../ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  Bell,
  Search,
  Settings,
  User,
  LogOut,
  PieChart,
  FolderOpen,
  BarChart3,
  Users,
  CreditCard,
  HelpCircle,
  Menu,
  Clock,
  ChevronRight,
  PanelLeft,
  SlidersHorizontal,
  Plus
} from "lucide-react";

type DashboardView = 'dashboard' | 'projects' | 'analytics' | 'team' | 'billing' | 'settings' | 'support';

interface DashboardLayoutProps {
  children: React.ReactNode;
  onLogout?: () => void;
  activeView?: DashboardView;
  onNavigate?: (view: DashboardView) => void;
}

const navigationItems: Array<{
  icon: any;
  label: string;
  view: DashboardView;
  count?: number;
  badge?: string;
}> = [
  { icon: PieChart, label: "Dashboard", view: "dashboard" },
  { icon: FolderOpen, label: "Projects", view: "projects", count: 12 },
  { icon: BarChart3, label: "Analytics", view: "analytics" },
  { icon: Users, label: "Team", view: "team", badge: "Pro" },
  { icon: CreditCard, label: "Billing", view: "billing" },
  { icon: Settings, label: "Settings", view: "settings" },
  { icon: HelpCircle, label: "Support", view: "support" }
];

interface SidebarContentProps {
  isCollapsed?: boolean;
  activeView?: DashboardView;
  onNavigate?: (view: DashboardView) => void;
}

function SidebarContent({ isCollapsed = false, activeView = 'dashboard', onNavigate }: SidebarContentProps) {
  const [selectedTeam, setSelectedTeam] = useState<string>("EyzMedia");

  const teams = [
    { id: "eyzmedia", name: "EyzMedia" },
    { id: "contentscope", name: "ContentScope" },
  ];

  return (
    <div className="flex h-screen flex-col">
      <div className={`flex h-14 items-center ${isCollapsed ? 'justify-center px-3' : 'px-6'}`}>
        <button className="flex items-center hover:opacity-80 transition-opacity">
          {isCollapsed ? (
            <Logo iconOnly className="h-8 w-8" />
          ) : (
            <Logo className="h-7 w-auto" />
          )}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-3">
        <div className="space-y-1">
          {navigationItems.map((item) => {
            if (item.view === 'team') {
              if (isCollapsed) {
                return (
                  <button
                    key={item.label}
                    onClick={() => onNavigate?.(item.view)}
                    className={`group flex w-full items-center justify-center rounded-lg px-3 py-2 transition-all relative ${
                      activeView === item.view
                        ? 'bg-muted text-primary'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                    title={item.label}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    {item.badge && (
                      <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
                        <span className="text-[8px] text-white font-medium">P</span>
                      </span>
                    )}
                  </button>
                );
              }

              return (
                <Accordion key={item.label} type="single" collapsible className="border-0">
                  <AccordionItem value="teams" className="border-0">
                    <AccordionTrigger className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-all hover:no-underline ${
                      activeView === item.view
                        ? 'bg-muted text-primary'
                        : 'text-muted-foreground hover:text-primary'
                    } [&>svg]:ml-auto [&>svg]:h-4 [&>svg]:w-4`}>
                      <span className="flex items-center shrink-0">
                        <item.icon className="h-4 w-4" />
                      </span>
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.badge && (
                        <Badge className="h-5 bg-gradient-to-r from-indigo-500 to-purple-600 px-1.5 rounded-[0.625rem]">
                          {item.badge}
                        </Badge>
                      )}
                    </AccordionTrigger>
                    <AccordionContent className="pb-0 pt-1">
                      <div className="space-y-1 pl-2">
                        {teams.map((team) => (
                          <button
                            key={team.id}
                            onClick={() => setSelectedTeam(team.name)}
                            className={`group flex w-full items-center gap-2 rounded-lg px-3 py-2 transition-all ${
                              selectedTeam === team.name
                                ? 'bg-muted/50 text-primary'
                                : 'text-muted-foreground hover:text-primary hover:bg-muted/30'
                            }`}
                          >
                            <span className="flex-1 text-left text-sm">{team.name}</span>
                            <SlidersHorizontal className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ))}
                        <button
                          onClick={() => {}}
                          className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 transition-all text-muted-foreground hover:text-primary hover:bg-muted/30"
                        >
                          <Plus className="h-3.5 w-3.5" />
                          <span className="flex-1 text-left text-sm">Add new team</span>
                        </button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            }

            return (
              <button
                key={item.label}
                onClick={() => onNavigate?.(item.view)}
                className={`group flex w-full items-center ${isCollapsed ? 'justify-center' : 'gap-3'} rounded-lg px-3 py-2 transition-all ${
                  activeView === item.view
                    ? 'bg-muted text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {!isCollapsed && (
                  <>
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.count && (
                      <Badge variant="secondary" className="h-5 px-1.5 rounded-[0.625rem]">
                        {item.count}
                      </Badge>
                    )}
                    {item.badge && (
                      <Badge className="h-5 bg-gradient-to-r from-indigo-500 to-purple-600 px-1.5 rounded-[0.625rem]">
                        {item.badge}
                      </Badge>
                    )}
                  </>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {!isCollapsed && (
        <div className="px-3 pb-4">
          <div className="rounded-[0.625rem] border bg-card p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-[0.625rem] bg-gradient-to-br from-indigo-500/10 to-purple-600/10">
                <Clock className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm">Compute Usage</p>
                <p className="text-xs text-muted-foreground">This month</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">847 / 1500 min</span>
                <span className="font-medium">56%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-600" 
                  style={{ width: '56%' }} 
                />
              </div>
              <p className="text-xs text-muted-foreground">653 minutes remaining</p>
            </div>
            <Button 
              variant="secondary" 
              size="sm" 
              className="w-full mt-3 bg-muted text-muted-foreground hover:bg-muted/80"
            >
              Add more
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export function DashboardLayout({ children, onLogout, activeView = 'dashboard', onNavigate }: DashboardLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-muted/20 relative">
      {/* Background blur effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-32 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/15 dark:to-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-8 w-32 h-32 bg-gradient-to-br from-purple-500/8 to-pink-500/8 dark:from-purple-500/12 dark:to-pink-500/12 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-24 w-36 h-36 bg-gradient-to-br from-cyan-500/8 to-teal-500/8 dark:from-cyan-500/12 dark:to-teal-500/12 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-500/8 to-indigo-500/8 dark:from-purple-500/12 dark:to-indigo-500/12 rounded-full blur-3xl" />
      </div>

      {/* Sidebar: Background */}
      <div className={`hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:block transition-all duration-300 ${
        isSidebarCollapsed ? 'lg:w-16' : 'lg:w-64'
      }`}>
        <div className="absolute inset-0 bg-muted/20" />
      </div>

      {/* Sidebar: Content */}
      <aside className={`hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block transition-all duration-300 ${
        isSidebarCollapsed ? 'lg:w-16' : 'lg:w-64'
      }`}>
        <SidebarContent isCollapsed={isSidebarCollapsed} activeView={activeView} onNavigate={onNavigate} />
      </aside>

      {/* Main content */}
      <div className={`flex flex-1 flex-col transition-all duration-300 relative z-10 ${
        isSidebarCollapsed ? 'lg:pl-16' : 'lg:pl-64'
      }`}>
        {/* Header */}
        <header className="flex h-14 shrink-0 items-center gap-2 pr-2 pl-0 sm:gap-4 sm:pr-4 lg:pr-6 p-[0px] bg-muted/20">
          {/* Sheet: Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden shrink-0 ml-2"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Access navigation options and account settings
              </SheetDescription>
              <SidebarContent isCollapsed={false} activeView={activeView} onNavigate={onNavigate} />
            </SheetContent>
          </Sheet>

          <Button
            variant="ghost"
            size="icon"
            className="hidden lg:flex shrink-0"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="w-64 pl-8"
            />
          </div>

          <div className="ml-auto flex items-center gap-1 sm:gap-2 md:gap-4">
            <ThemeToggle />

            <Button variant="ghost" size="icon" className="relative shrink-0">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                3
              </span>
            </Button>

            {/* DropdownMenu: User menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 shrink-0">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/api/placeholder/32/32" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="hidden text-left md:block">
                    <p className="text-sm">John Doe</p>
                    <p className="text-xs text-muted-foreground">Studio Plan</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Content wrapper with rounded card */}
        <div className="flex-1 pt-[0px] pr-0 sm:pr-[16px] pb-[16px] pl-[0px] bg-muted/20">
          <div className="flex h-full flex-col rounded-[0.625rem] border bg-card overflow-hidden shadow-sm">
            {/* Page Content */}
            <main className="flex-1 overflow-auto lg:p-6 p-[16px]">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
