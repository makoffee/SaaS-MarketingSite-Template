import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Checkbox } from "../ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "../ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  Plus,
  Download,
  ChevronDown,
  Filter,
  ChevronLeft,
  ChevronRight,
  FileText,
  FileCode,
  File,
  RefreshCw,
  Pause,
  CheckCircle2,
  AlertTriangle,
  X,
  Search,
} from "lucide-react";

interface Project {
  id: string;
  projectName: string;
  languages: string[];
  status: "Completed" | "Processing" | "Failed";
  accuracy: number;
  duration: number; // in minutes
  created: string;
  progress?: number;
}

const mockProjects: Project[] = [
  {
    id: "1",
    projectName: "The Crown S05E03 - Final Cut",
    languages: ["EN"],
    status: "Completed",
    accuracy: 100,
    duration: 154, // 2h 34min = 154 minutes
    created: "01/15/2024",
  },
  {
    id: "2",
    projectName: "Client Pitch - Q1 Product Launch",
    languages: ["DE", "FR"],
    status: "Processing",
    accuracy: 100,
    duration: 105, // 1h 45min = 105 minutes
    created: "01/15/2024",
    progress: 65,
  },
  {
    id: "3",
    projectName: "Documentary - Ocean Voices",
    languages: ["FR", "IT", "ES"],
    status: "Processing",
    accuracy: 100,
    duration: 45,
    created: "01/15/2024",
    progress: 45,
  },
  {
    id: "4",
    projectName: "Feature Film - Midnight Echo",
    languages: ["EN", "DE", "FR", "IT", "ES", "PT"],
    status: "Processing",
    accuracy: 100,
    duration: 90,
    created: "01/15/2024",
    progress: 80,
  },
  {
    id: "5",
    projectName: "Training Module - Safety Protocols",
    languages: ["KO", "JA", "ZH"],
    status: "Completed",
    accuracy: 100,
    duration: 15,
    created: "01/15/2024",
  },
  {
    id: "6",
    projectName: "Commercial Spot - Nike Campaign",
    languages: ["ES", "PT"],
    status: "Failed",
    accuracy: 100,
    duration: 154,
    created: "01/15/2024",
  },
  {
    id: "7",
    projectName: "Series Finale - Breaking Boundaries",
    languages: ["NL", "DE", "FR", "IT", "ES", "PT", "PL", "RU"],
    status: "Completed",
    accuracy: 100,
    duration: 154,
    created: "01/15/2024",
  },
  {
    id: "8",
    projectName: "Webinar - Marketing Strategies 2024",
    languages: ["NL"],
    status: "Completed",
    accuracy: 100,
    duration: 154,
    created: "01/15/2024",
  },
  {
    id: "9",
    projectName: "Investor Presentation - Series B",
    languages: ["JA", "KO"],
    status: "Completed",
    accuracy: 100,
    duration: 154,
    created: "01/15/2024",
  },
  {
    id: "10",
    projectName: "Global Launch Event - Tech Summit",
    languages: ["EN", "DE", "FR", "IT", "ES", "PT", "NL", "PL", "RU", "JA", "KO", "ZH"],
    status: "Completed",
    accuracy: 100,
    duration: 154,
    created: "01/15/2024",
  },
];

type FilterStatus = "all" | "completed" | "processing" | "failed";
type FilterLanguage = "all" | "EN" | "DE" | "FR" | "ES" | "IT" | "PT" | "NL" | "PL" | "RU" | "JA" | "KO" | "ZH";

interface ProjectsViewProps {
  initialSearchQuery?: string;
}

export function ProjectsView({ initialSearchQuery = "" }: ProjectsViewProps) {
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [statusFilter, setStatusFilter] = useState<FilterStatus>("all");
  const [languageFilter, setLanguageFilter] = useState<FilterLanguage>("all");
  const [filterPopoverOpen, setFilterPopoverOpen] = useState(false);
  
  const totalProjects = 1000;
  const projectsPerPage = 10;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  useEffect(() => {
    if (initialSearchQuery) {
      setSearchQuery(initialSearchQuery);
    }
  }, [initialSearchQuery]);

  const toggleProjectSelection = (projectId: string) => {
    setSelectedProjects((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  const toggleAllProjects = () => {
    if (selectedProjects.length === mockProjects.length) {
      setSelectedProjects([]);
    } else {
      setSelectedProjects(mockProjects.map((p) => p.id));
    }
  };

  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "Completed":
        return (
          <Badge
            variant="outline"
            className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          >
            Completed
          </Badge>
        );
      case "Failed":
        return (
          <Badge
            variant="outline"
            className="border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400"
          >
            Failed
          </Badge>
        );
      case "Processing":
        return null;
    }
  };

  const getStatusIcon = (status: Project["status"]) => {
    switch (status) {
      case "Completed":
        return (
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="inline-flex">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Completed</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      case "Failed":
        return (
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="inline-flex">
                  <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Failed</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      case "Processing":
        return null;
    }
  };

  const renderLanguages = (languages: string[]) => {
    const displayLanguages = languages.slice(0, 3);
    const remainingCount = languages.length - 3;

    return (
      <div className="flex items-center gap-1 flex-wrap">
        {displayLanguages.map((lang, index) => (
          <Badge key={`${lang}-${index}`} variant="secondary">
            {lang}
          </Badge>
        ))}
        {remainingCount > 0 && (
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="inline-flex">
                  <Badge 
                    variant="secondary" 
                    className="cursor-help"
                  >
                    +{remainingCount}
                  </Badge>
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <div className="flex flex-wrap gap-1">
                  {languages.map((lang, index) => (
                    <span key={`${lang}-${index}`} className="inline-block">
                      {lang}
                      {index < languages.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    );
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setLanguageFilter("all");
  };

  const hasActiveFilters = searchQuery !== "" || statusFilter !== "all" || languageFilter !== "all";
  const activeFilterCount = (statusFilter !== "all" ? 1 : 0) + (languageFilter !== "all" ? 1 : 0);

  const statusOptions: { value: FilterStatus; label: string; icon?: React.ReactNode }[] = [
    { value: "all", label: "All statuses" },
    { value: "completed", label: "Completed", icon: <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> },
    { value: "processing", label: "Processing", icon: <RefreshCw className="h-4 w-4 text-blue-600 dark:text-blue-400" /> },
    { value: "failed", label: "Failed", icon: <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" /> },
  ];

  const languageOptions: { value: FilterLanguage; label: string }[] = [
    { value: "all", label: "All languages" },
    { value: "EN", label: "English" },
    { value: "DE", label: "German" },
    { value: "FR", label: "French" },
    { value: "ES", label: "Spanish" },
    { value: "IT", label: "Italian" },
    { value: "PT", label: "Portuguese" },
    { value: "NL", label: "Dutch" },
    { value: "PL", label: "Polish" },
    { value: "RU", label: "Russian" },
    { value: "JA", label: "Japanese" },
    { value: "KO", label: "Korean" },
    { value: "ZH", label: "Chinese" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 flex-wrap flex-1">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 bg-background"
              />
            </div>

            {/* Popover: Unified filter dropdown */}
            <Popover open={filterPopoverOpen} onOpenChange={setFilterPopoverOpen}>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  className="gap-2 shrink-0 h-9"
                >
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                  {activeFilterCount > 0 && (
                    <Badge variant="secondary" className="h-5 px-1.5 rounded-full ml-0.5">
                      {activeFilterCount}
                    </Badge>
                  )}
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-0" align="start">
                <div className="p-3 space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Status</label>
                    <div className="space-y-1">
                      {statusOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setStatusFilter(option.value)}
                          className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted ${
                            statusFilter === option.value ? "bg-muted" : ""
                          }`}
                        >
                          {option.icon && <span className="shrink-0">{option.icon}</span>}
                          <span className="flex-1 text-left">{option.label}</span>
                          {statusFilter === option.value && (
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-3 space-y-2">
                    <label className="text-sm font-medium">Language</label>
                    <div className="space-y-1 max-h-60 overflow-y-auto">
                      {languageOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setLanguageFilter(option.value)}
                          className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted ${
                            languageFilter === option.value ? "bg-muted" : ""
                          }`}
                        >
                          <span className="flex-1 text-left">{option.label}</span>
                          {languageFilter === option.value && (
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {activeFilterCount > 0 && (
                    <div className="border-t pt-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setStatusFilter("all");
                          setLanguageFilter("all");
                        }}
                        className="w-full text-sm"
                      >
                        Clear filters
                      </Button>
                    </div>
                  )}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Time Badge */}
            <Badge variant="outline" className="h-9 px-3 gap-2 shrink-0">
              <span className="text-muted-foreground">1500min</span>
            </Badge>

            {/* Actions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 shrink-0">
                  <span className="hidden sm:inline">Actions</span>
                  <span className="sm:hidden">•••</span>
                  <ChevronDown className="h-4 w-4 hidden sm:inline-block" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>Export Selected</DropdownMenuItem>
                <DropdownMenuItem>Download All</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 dark:text-red-400">
                  Delete Selected
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Add New Button */}
            <Button className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shrink-0">
              <Plus className="h-4 w-4" />
              Add new
            </Button>
          </div>
        </div>

        {/* Active Filters Row */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            
            {searchQuery && (
              <Badge 
                variant="secondary" 
                className="gap-1.5 pl-2 pr-1 h-7"
              >
                <span className="text-sm">Search: "{searchQuery}"</span>
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-0.5 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}

            {statusFilter !== "all" && (
              <Badge 
                variant="secondary" 
                className="gap-1.5 pl-2 pr-1 h-7"
              >
                <span className="text-sm">{statusOptions.find(opt => opt.value === statusFilter)?.label}</span>
                <button
                  onClick={() => setStatusFilter("all")}
                  className="ml-0.5 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}

            {languageFilter !== "all" && (
              <Badge 
                variant="secondary" 
                className="gap-1.5 pl-2 pr-1 h-7"
              >
                <span className="text-sm">{languageOptions.find(opt => opt.value === languageFilter)?.label}</span>
                <button
                  onClick={() => setLanguageFilter("all")}
                  className="ml-0.5 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="h-7 px-2 text-sm text-muted-foreground hover:text-foreground"
            >
              Clear all
            </Button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="rounded-[0.625rem] border bg-card overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12 hidden md:table-cell">
                <Checkbox
                  checked={selectedProjects.length === mockProjects.length}
                  onCheckedChange={toggleAllProjects}
                  aria-label="Select all projects"
                />
              </TableHead>
              <TableHead>Project name</TableHead>
              <TableHead className="hidden md:table-cell">Language</TableHead>
              <TableHead className="hidden md:table-cell">Duration</TableHead>
              <TableHead className="hidden md:table-cell">Created</TableHead>
              <TableHead className="hidden lg:table-cell">Accuracy</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockProjects.map((project, index) => (
              <TableRow 
                key={project.id} 
                className={`${index % 2 === 1 ? "bg-muted/30" : ""} hover:bg-violet-50/70 dark:hover:bg-violet-950/40`}
              >
                <TableCell className="hidden md:table-cell">
                  <Checkbox
                    checked={selectedProjects.includes(project.id)}
                    onCheckedChange={() => toggleProjectSelection(project.id)}
                    aria-label={`Select ${project.projectName}`}
                  />
                </TableCell>
                <TableCell className="max-w-[200px] truncate">{project.projectName}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {renderLanguages(project.languages)}
                </TableCell>
                <TableCell className="hidden md:table-cell">{project.duration} min</TableCell>
                <TableCell className="hidden md:table-cell">{project.created}</TableCell>
                <TableCell className="hidden lg:table-cell">{project.accuracy}%</TableCell>
                <TableCell className="max-w-[5rem] md:max-w-none">
                  {/* Mobile: Icon-based status */}
                  <div className="md:hidden">
                    {project.status === "Processing" && project.progress ? (
                      <div className="w-20">
                        <Progress
                          value={project.progress}
                          className="h-1.5 bg-muted [&>div]:bg-gradient-to-r [&>div]:from-indigo-500 [&>div]:to-purple-600"
                        />
                      </div>
                    ) : (
                      getStatusIcon(project.status)
                    )}
                  </div>
                  {/* Desktop: Badge/Progress */}
                  <div className="hidden md:block">
                    {project.status === "Processing" && project.progress ? (
                      <div className="w-24">
                        <Progress
                          value={project.progress}
                          className="h-1.5 bg-muted [&>div]:bg-gradient-to-r [&>div]:from-indigo-500 [&>div]:to-purple-600"
                        />
                      </div>
                    ) : (
                      getStatusBadge(project.status)
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-end gap-1">
                    {project.status === "Completed" && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 rounded-full"
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
                    )}
                    {project.status === "Processing" && (
                      <TooltipProvider delayDuration={200}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8 rounded-full"
                              onClick={() => {}}
                            >
                              <Pause className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Pause job</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                    {project.status === "Failed" && (
                      <TooltipProvider delayDuration={200}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8 rounded-full"
                              onClick={() => {}}
                            >
                              <RefreshCw className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Retry job</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between gap-4">
        {/* Desktop: Full text */}
        <p className="text-sm text-muted-foreground hidden sm:block">
          Showing {(currentPage - 1) * projectsPerPage + 1}-
          {Math.min(currentPage * projectsPerPage, totalProjects)} of{" "}
          {totalProjects}
        </p>
        {/* Mobile: Compact text */}
        <p className="text-sm text-muted-foreground sm:hidden">
          Page {currentPage} of {totalPages}
        </p>
        
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          {/* Desktop: Page numbers */}
          <div className="hidden md:flex items-center gap-1">
            {[...Array(Math.min(10, totalPages))].map((_, i) => {
              const page = i + 1;
              return (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  className={`h-8 w-8 ${
                    currentPage === page
                      ? "bg-muted text-primary hover:bg-muted"
                      : ""
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              );
            })}
          </div>
          
          {/* Mobile: Current page indicator */}
          <div className="md:hidden flex items-center justify-center min-w-[2rem]">
            <span className="text-sm">{currentPage}</span>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0"
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
