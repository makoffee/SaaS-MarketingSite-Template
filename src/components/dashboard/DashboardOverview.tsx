import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { AspectRatio } from "../ui/aspect-ratio";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart
} from "recharts";
import {
  Plus,
  Clock,
  Globe,
  TrendingUp,
  Video,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Eye,
  CheckCircle2,
  Download,
  Sparkles,
  BarChart3,
  FileText,
  FileCode,
  File,
  RefreshCw,
  Pause
} from "lucide-react";

const statsData = [
  {
    title: "Total Projects",
    value: "24",
    change: "+12.5%",
    changeValue: "+3 from last month",
    trend: "up" as const,
    icon: Video,
  },
  {
    title: "Processing Time",
    value: "847",
    subtitle: "minutes",
    change: "56.5%",
    changeValue: "of 1,500 min limit",
    trend: "neutral" as const,
    icon: Clock,
  },
  {
    title: "Active Languages",
    value: "12",
    change: "+25%",
    changeValue: "+3 this month",
    trend: "up" as const,
    icon: Globe,
  },
  {
    title: "Team Members",
    value: "5",
    change: "+20%",
    changeValue: "2 active now",
    trend: "up" as const,
    icon: Users,
  },
];

const monthlyData = [
  { name: 'Jan', total: 420, completed: 380, processing: 40 },
  { name: 'Feb', total: 380, completed: 350, processing: 30 },
  { name: 'Mar', total: 520, completed: 490, processing: 30 },
  { name: 'Apr', total: 640, completed: 600, processing: 40 },
  { name: 'May', total: 720, completed: 680, processing: 40 },
  { name: 'Jun', total: 847, completed: 780, processing: 67 },
];

const recentProjects = [
  {
    id: 1,
    title: "Marketing Campaign Q3",
    status: "Completed",
    duration: "12:34",
    languages: ["EN", "ES", "FR"],
    updatedAt: "2 hours ago",
    progress: 100
  },
  {
    id: 2,
    title: "Product Demo Series",
    status: "Processing",
    duration: "45:12",
    languages: ["EN", "DE", "IT"],
    updatedAt: "5 hours ago",
    progress: 75
  },
  {
    id: 3,
    title: "Training Module Alpha",
    status: "Draft",
    duration: "23:45",
    languages: ["EN"],
    updatedAt: "1 day ago",
    progress: 30
  },
  {
    id: 4,
    title: "Client Testimonials",
    status: "Completed",
    duration: "8:21",
    languages: ["EN", "ES"],
    updatedAt: "2 days ago",
    progress: 100
  },
  {
    id: 5,
    title: "Webinar Recording",
    status: "Processing",
    duration: "56:08",
    languages: ["EN", "FR", "DE"],
    updatedAt: "3 days ago",
    progress: 45
  }
];

const topLanguages = [
  { language: "English", projects: 24, percentage: 35, change: "+12%" },
  { language: "Spanish", projects: 18, percentage: 25, change: "+8%" },
  { language: "French", projects: 14, percentage: 20, change: "+5%" },
  { language: "German", projects: 9, percentage: 12, change: "+3%" },
  { language: "Italian", projects: 6, percentage: 8, change: "+2%" },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-muted-foreground">
            Welcome back <span className="font-medium">John Doe</span>! You have <span className="font-medium">3</span> notifications.
          </p>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <Button variant="outline">
            Export
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-[0px] mr-[0px] mb-[24px] ml-[0px]">
        {/* Monthly Overview */}
        <Card className="md:col-span-2 lg:col-span-4 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden min-w-0 bg-muted/25">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Monthly usage</CardTitle>
                <CardDescription>
                  Monthly processing minutes over the last 6 months.
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                  <BarChart3 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pl-2 pr-2">
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="name" 
                  className="text-xs"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  className="text-xs"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="total" 
                  stroke="#6366f1" 
                  strokeWidth={2}
                  fill="url(#colorTotal)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Languages */}
        <Card className="md:col-span-2 lg:col-span-3 shadow-sm hover:shadow-md transition-shadow duration-300 min-w-0 bg-muted/25">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Trending Languages</CardTitle>
                <CardDescription>
                  Most frequently translated languages.
                </CardDescription>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                <BarChart3 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topLanguages.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm leading-none">{item.language}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.projects} projects
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <p className="text-sm">{item.percentage}%</p>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400">{item.change}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 bg-muted/25">
        <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Activity</CardTitle>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link to="/app/projects">View All</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="px-4 sm:px-6 pt-0 pb-4 sm:pb-6">
          <div className="space-y-2 sm:space-y-4">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between rounded-lg border p-2 sm:p-4 transition-colors hover:bg-muted/40"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 shrink-0">
                    <AspectRatio ratio={16 / 9}>
                      <div className="h-full w-full rounded bg-muted" />
                    </AspectRatio>
                  </div>
                  <div className="space-y-1 min-w-0">
                    <p className="text-sm leading-none truncate">{project.title}</p>
                    <div className="hidden sm:flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {project.duration}
                      </span>
                      <span>{project.updatedAt}</span>
                    </div>
                    <div className="flex sm:hidden text-sm text-muted-foreground">
                      {project.status === "Processing" && "In progress"}
                      {project.status === "Completed" && "Completed"}
                      {project.status === "Failed" && "Failed"}
                      {project.status === "Draft" && "Created"}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden items-center gap-1 sm:flex">
                    {project.languages.map((lang) => (
                      <Badge key={lang} variant="secondary">
                        {lang}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.status === "Processing" && (
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1">
                        <div className="w-full sm:w-20">
                          <Progress 
                            value={project.progress} 
                            className="h-1 bg-indigo-500/20 dark:bg-indigo-500/20 [&>div]:bg-gradient-to-r [&>div]:from-indigo-500 [&>div]:to-purple-600" 
                          />
                        </div>
                        <UITooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8 rounded-full shrink-0 self-end sm:self-auto"
                              onClick={() => {}}
                            >
                              <Pause className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Pause job</p>
                          </TooltipContent>
                        </UITooltip>
                      </div>
                    )}
                    {project.status === "Completed" && (
                      <>
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 sm:hidden shrink-0" />
                        <Badge
                          variant="default"
                          className="hidden sm:inline-flex bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                        >
                          {project.status}
                        </Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8 rounded-full shrink-0"
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>Download Format</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              SRT (SubRip)
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileCode className="mr-2 h-4 w-4" />
                              WebVTT
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              ASS (Advanced SubStation Alpha)
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <File className="mr-2 h-4 w-4" />
                              STL (Spruce Subtitle File)
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileCode className="mr-2 h-4 w-4" />
                              SCC (Scenarist Closed Caption)
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileCode className="mr-2 h-4 w-4" />
                              TTML (Timed Text Markup Language)
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              LRC (Lyrics Format)
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </>
                    )}
                    {project.status === "Failed" && (
                      <>
                        <Badge
                          variant="outline"
                          className="border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400"
                        >
                          Failed
                        </Badge>
                        <UITooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8 rounded-full shrink-0"
                              onClick={() => {}}
                            >
                              <RefreshCw className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Retry job</p>
                          </TooltipContent>
                        </UITooltip>
                      </>
                    )}
                    {project.status === "Draft" && (
                      <Badge variant="outline" className="shrink-0">
                        Draft
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
            {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300 bg-muted/25">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-1">
                <div className="text-2xl">{stat.value}</div>
                {stat.subtitle && (
                  <span className="text-sm text-muted-foreground">{stat.subtitle}</span>
                )}
              </div>
              <div className="flex items-center gap-1 text-xs">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                ) : stat.trend === "down" ? (
                  <ArrowDownRight className="h-3 w-3 text-red-500" />
                ) : null}
                <span className={stat.trend === "up" ? "text-emerald-600 dark:text-emerald-400" : stat.trend === "down" ? "text-red-600 dark:text-red-400" : "text-muted-foreground"}>
                  {stat.change}
                </span>
                <span className="text-muted-foreground">{stat.changeValue}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
