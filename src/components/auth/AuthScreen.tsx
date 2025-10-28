/**
 * Authentication Screen Component
 * AWS Cognito-compatible login and signup interface
 */

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Alert, AlertDescription } from "../ui/alert";
import { Eye, EyeOff, Loader2, Mail, Lock, User, AlertCircle, X } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Logo } from "../Logo";

interface AuthScreenProps {
  onLogin: () => void;
  onBackToLanding?: () => void;
  selectedPlan?: string;
  initialMode?: 'login' | 'signup';
  className?: string;
}

export function AuthScreen({ onLogin, onBackToLanding, selectedPlan, initialMode = 'login', className = "" }: AuthScreenProps) {
  const [isSignup, setIsSignup] = useState(initialMode === 'signup');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    // Simulate AWS Cognito authentication
    setTimeout(() => {
      if (isSignup) {
        if (email && password && name) {
          // In production, this would call AWS Cognito
          // await Auth.signUp({ username: email, password, attributes: { name } });
          onLogin();
        } else {
          setError("Please fill in all fields");
          setIsLoading(false);
        }
      } else {
        if (email && password) {
          // In production, this would call AWS Cognito
          // await Auth.signIn(email, password);
          onLogin();
        } else {
          setError("Please enter your email and password");
          setIsLoading(false);
        }
      }
    }, 1000);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-background dark:to-slate-800 px-4 relative${className ? ` ${className}` : ''}`}>
      {/* Close button */}
      {onBackToLanding && (
        <button
          onClick={onBackToLanding}
          className="absolute top-4 right-4 z-20 p-2 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
          aria-label="Back to landing page"
        >
          <X className="h-5 w-5 text-slate-600 dark:text-slate-400" />
        </button>
      )}

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-500/15 dark:to-pink-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo className="h-8 w-auto" />
        </div>

        {/* Auth Card */}
        <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle>{isSignup ? "Create an account" : "Welcome back"}</CardTitle>
              <CardDescription>
                {isSignup 
                  ? "Enter your information to get started" 
                  : "Enter your credentials to access your account"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {isSignup && (
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="pl-10"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isLoading}
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    {!isSignup && (
                      <button
                        type="button"
                        className="text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 pr-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isLoading}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {isSignup && (
                    <p className="text-xs text-muted-foreground">
                      Must be at least 8 characters with uppercase, lowercase, and numbers
                    </p>
                  )}
                </div>

                {!isSignup && (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    />
                    <Label
                      htmlFor="remember"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Remember me for 30 days
                    </Label>
                  </div>
                )}

                {isSignup && (
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required />
                    <Label
                      htmlFor="terms"
                      className="text-sm font-normal leading-snug cursor-pointer"
                    >
                      I agree to the{" "}
                      <a href="#" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">
                        Privacy Policy
                      </a>
                    </Label>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {isSignup ? "Creating account..." : "Signing in..."}
                    </>
                  ) : (
                    isSignup ? "Create account" : "Sign in"
                  )}
                </Button>
              </form>

              {/* Toggle between login and signup */}
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setIsSignup(!isSignup);
                    setError("");
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {isSignup ? (
                    <>
                      Already have an account?{" "}
                      <span className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 font-medium">
                        Sign in
                      </span>
                    </>
                  ) : (
                    <>
                      Don't have an account yet?{" "}
                      <span className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 font-medium">
                        Sign up
                      </span>
                    </>
                  )}
                </button>
              </div>

              {isSignup && (
                <p className="text-xs text-center text-muted-foreground mt-4">
                  By creating an account, you agree that we may contact you about our service and promotional offers.
                </p>
              )}

              <p className="text-center text-xs text-muted-foreground mt-6">
                Protected by AWS Cognito authentication
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
