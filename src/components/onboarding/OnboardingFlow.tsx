import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Upload,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Play,
  Globe,
  Zap,
  Shield,
  User,
  Users,
  Building2,
  CreditCard,
  FileVideo,
  Wand2,
  Clock
} from "lucide-react";

interface OnboardingStep {
  id: string;
  title: string;
  subtitle?: string;
  component: React.ComponentType<any>;
}

const plans = [
  {
    name: "Individual",
    price: "19",
    currency: "€",
    period: "/month",
    description: "Perfect for content creators",
    icon: User,
    gradient: "from-blue-500 to-cyan-500",
    features: ["150 minutes/month", "HD video support", "Basic templates"],
    popular: false
  },
  {
    name: "Studio", 
    price: "99",
    currency: "€",
    period: "/month",
    description: "For production teams",
    icon: Users,
    gradient: "from-indigo-500 to-purple-500",
    features: ["1,500 minutes/month", "4K video support", "Team collaboration"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    currency: "",
    period: "pricing",
    description: "For large organizations",
    icon: Building2,
    gradient: "from-purple-500 to-pink-500",
    features: ["Unlimited processing", "Custom AI training", "24/7 support"],
    popular: false
  }
];

// Step 1: Upload Component
function UploadStep({ onNext, onFileSelect }: { onNext: () => void; onFileSelect: (file: File) => void }) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
          <Upload className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold">Upload Your Video</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Drop your video file here and see eysign's AI in action. No account required for the demo.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto border-2 border-dashed border-border hover:border-indigo-300 transition-colors">
        <CardContent className="p-12">
          <div
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
              isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
            }`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
          >
            {selectedFile ? (
              <div className="space-y-4">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                <div>
                  <h3 className="font-semibold">{selectedFile.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
                <Button onClick={onNext} className="bg-gradient-to-r from-indigo-500 to-purple-600">
                  Process Video
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <FileVideo className="w-12 h-12 text-gray-400 mx-auto" />
                <div>
                  <h3 className="font-semibold mb-2">Drop your video here</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Or click to browse files
                  </p>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <Label htmlFor="file-upload">
                    <Button variant="outline" className="cursor-pointer">
                      Browse Files
                    </Button>
                  </Label>
                </div>
                <p className="text-xs text-muted-foreground">
                  Supports MP4, MOV, AVI up to 5GB
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Step 2: Processing Component
function ProcessingStep({ onNext }: { onNext: () => void }) {
  const [progress, setProgress] = useState(0);

  // Simulate processing
  useState(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onNext, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  });

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
          <Wand2 className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold">AI Processing Your Video</h2>
        <p className="text-muted-foreground">
          Our specialized AI is analyzing your content and generating accessibility features...
        </p>
      </div>

      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Processing Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <p className="font-medium text-sm">Audio Extracted</p>
                <p className="text-xs text-muted-foreground">High-quality audio isolated</p>
              </div>
            </div>
            <div className={`flex items-center space-x-3 p-4 rounded-lg ${progress > 30 ? 'bg-green-50' : 'bg-gray-50'}`}>
              <div className={`w-5 h-5 rounded-full ${progress > 30 ? 'bg-green-500' : 'bg-gray-300'} flex items-center justify-center`}>
                {progress > 30 ? (
                  <CheckCircle className="w-5 h-5 text-white" />
                ) : (
                  <Clock className="w-3 h-3 text-gray-500" />
                )}
              </div>
              <div>
                <p className="font-medium text-sm">Transcription</p>
                <p className="text-xs text-muted-foreground">Converting speech to text</p>
              </div>
            </div>
            <div className={`flex items-center space-x-3 p-4 rounded-lg ${progress > 60 ? 'bg-green-50' : 'bg-gray-50'}`}>
              <div className={`w-5 h-5 rounded-full ${progress > 60 ? 'bg-green-500' : 'bg-gray-300'} flex items-center justify-center`}>
                {progress > 60 ? (
                  <CheckCircle className="w-5 h-5 text-white" />
                ) : (
                  <Clock className="w-3 h-3 text-gray-500" />
                )}
              </div>
              <div>
                <p className="font-medium text-sm">AI Enhancement</p>
                <p className="text-xs text-muted-foreground">Adding context & formatting</p>
              </div>
            </div>
          </div>

          {progress === 100 && (
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="font-medium text-green-800">Processing Complete!</p>
              <p className="text-sm text-green-600">Your video is ready for review</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Step 3: Results Component
function ResultsStep({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold">Your Video is Ready!</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          See the power of eysign's AI in action. Here's what we've generated for your content.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Video Preview */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Video Preview</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center mb-4">
              <Play className="w-12 h-12 text-white opacity-75" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Duration: 2:34</span>
                <span>Quality: HD (1080p)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">English Subtitles</Badge>
                <Badge variant="secondary">Audio Description</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Generated Content */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileVideo className="w-5 h-5" />
              <span>Generated Content</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium text-sm">Subtitles (SRT)</p>
                    <p className="text-xs text-muted-foreground">432 words, 98% accuracy</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Download</Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium text-sm">Transcript</p>
                    <p className="text-xs text-muted-foreground">Full text with timestamps</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Download</Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-sm">Translation Ready</p>
                    <p className="text-xs text-muted-foreground">50+ languages available</p>
                  </div>
                </div>
                <Badge variant="secondary">Pro Feature</Badge>
              </div>
            </div>

            <Separator />

            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Want to unlock full features and save your work?
              </p>
              <Button onClick={onNext} className="w-full bg-gradient-to-r from-indigo-500 to-purple-600">
                Create Your Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Step 4: Plan Selection
function PlanSelectionStep({ onNext }: { onNext: () => void }) {
  const [selectedPlan, setSelectedPlan] = useState("Studio");

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Choose Your Plan</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Select the perfect plan for your needs. You can change or cancel anytime.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card 
            key={plan.name}
            className={`border-2 cursor-pointer transition-all ${
              selectedPlan === plan.name 
                ? 'border-indigo-500 shadow-lg scale-105' 
                : 'border-border hover:border-indigo-200'
            } ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            {plan.popular && (
              <div className="text-center">
                <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 -mt-3">
                  Most Popular
                </Badge>
              </div>
            )}
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${plan.gradient} flex items-center justify-center`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-bold">{plan.currency}{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={plan.name} id={plan.name} />
                    <Label htmlFor={plan.name} className="text-sm">
                      Choose {plan.name}
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button onClick={onNext} size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600">
          Continue with {selectedPlan}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <p className="text-sm text-muted-foreground mt-2">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
}

// Step 5: Account Creation
function AccountStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-8 max-w-md mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Create Your Account</h2>
        <p className="text-muted-foreground">
          You're almost done! Just a few details to get started.
        </p>
      </div>

      <Card className="border-0 shadow-lg">
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Create a secure password" />
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm">
                I agree to the <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and{" "}
                <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="newsletter" />
              <Label htmlFor="newsletter" className="text-sm">
                Send me product updates and tips (optional)
              </Label>
            </div>
          </div>

          <Button onClick={onComplete} className="w-full bg-gradient-to-r from-indigo-500 to-purple-600">
            Create Account & Start Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Your 14-day free trial starts now. No charges until trial ends.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

const steps: OnboardingStep[] = [
  {
    id: "upload",
    title: "Upload Video",
    component: UploadStep,
  },
  {
    id: "processing",
    title: "AI Processing",
    component: ProcessingStep,
  },
  {
    id: "results",
    title: "Review Results",
    component: ResultsStep,
  },
  {
    id: "plan",
    title: "Choose Plan",
    component: PlanSelectionStep,
  },
  {
    id: "account",
    title: "Create Account",
    component: AccountStep,
  },
];

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const completeOnboarding = () => {
    // Redirect to dashboard or show success message
    window.location.href = '/dashboard';
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600" />
            <span className="font-bold text-xl">eysign</span>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    index < currentStep 
                      ? 'bg-green-500 text-white' 
                      : index === currentStep 
                      ? 'bg-indigo-500 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {index < currentStep ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-1 ${
                      index < currentStep ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <CurrentStepComponent 
          onNext={nextStep} 
          onPrev={prevStep}
          onComplete={completeOnboarding}
          onFileSelect={setSelectedFile}
          selectedFile={selectedFile}
        />
      </div>
    </div>
  );
}