import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
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
  PieChart,
  Pie,
  Cell
} from "recharts";
import {
  Play,
  Clock,
  Globe,
  TrendingUp,
  Video,
  FileText,
  Users,
  Zap,
  Calendar,
  Download,
  Eye,
  MoreHorizontal,
  ArrowRight
} from "lucide-react";

const statsData = [
  {
    title: "Total Projects",
    value: "24",
    change: "+12%",
    changeType: "positive" as const,
    icon: Video,
  },
  {
    title: "Minutes Processed",
    value: "847",
    change: "of 1,500",
    changeType: "neutral" as const,
    icon: Clock,
  },
  {
    title: "Languages",
    value: "12",
    change: "+3 this month",
    changeType: "positive" as const,
    icon: Globe,
  },
  {
    title: "Team Members",
    value: "5",
    change: "2 active",
    changeType: "neutral" as const,
    icon: Users,
  },
];

const chartData = [
  { month: 'Jan', minutes: 420 },
  { month: 'Feb', minutes: 380 },
  { month: 'Mar', minutes: 520 },
  { month: 'Apr', minutes: 640 },
  { month: 'May', minutes: 720 },
  { month: 'Jun', minutes: 847 },
];

const languageData = [
  { name: 'English', value: 35, color: '#6366f1' },
  { name: 'Spanish', value: 25, color: '#8b5cf6' },
  { name: 'French', value: 20, color: '#06b6d4' },
  { name: 'German', value: 12, color: '#10b981' },
  { name: 'Others', value: 8, color: '#f59e0b' },
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
  }
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your projects.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
          <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
            <Play className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <Card key={index} className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className={`text-sm ${
                    stat.changeType === 'positive' ? 'text-green-600' : 
                    stat.changeType === 'negative' ? 'text-red-600' : 
                    'text-muted-foreground'
                  }`}>
                    {stat.change}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Usage Chart */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Monthly Usage</CardTitle>
                <p className="text-sm text-muted-foreground">Minutes processed over time</p>
              </div>
              <Badge variant="outline">Last 6 months</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="minutes" fill="url(#gradient)" radius={4} />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Language Distribution */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Language Distribution</CardTitle>
                <p className="text-sm text-muted-foreground">Content by language</p>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={languageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {languageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {languageData.map((lang, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                  <span className="text-sm">{lang.name}</span>
                  <span className="text-sm font-medium ml-auto">{lang.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Projects */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Projects</CardTitle>
              <p className="text-sm text-muted-foreground">Your latest video processing projects</p>
            </div>
            <Button variant="outline" size="sm">
              View All
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                    <Video className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">{project.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{project.duration}</span>
                      </span>
                      <span>{project.updatedAt}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {project.languages.map((lang) => (
                      <Badge key={lang} variant="secondary" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : project.status === 'Processing' ? 'secondary' : 'outline'}
                      className={project.status === 'Completed' ? 'bg-green-100 text-green-800' : ''}
                    >
                      {project.status}
                    </Badge>
                    {project.status === 'Processing' && (
                      <div className="w-16">
                        <Progress value={project.progress} className="h-1" />
                      </div>
                    )}
                  </div>

                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}