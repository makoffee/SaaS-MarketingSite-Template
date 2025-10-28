/**
 * Select Plan Screen Component
 * Displayed after signup to allow users to select their plan
 */

import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { content } from "../../config/content";
import { Check, Star, ArrowRight, User, Users, Play, X } from "lucide-react";
import { Logo } from "../Logo";

// Map icons to plans dynamically from content
const plans = content.pricing.plans.map((plan, index) => ({
  ...plan,
  icon: [User, Users, Play][index]
}));

interface SelectPlanProps {
  onSelectPlan: (planName: string) => void;
  onBack?: () => void;
  className?: string;
}

export function SelectPlan({ onSelectPlan, onBack, className = "" }: SelectPlanProps) {
  const handlePlanSelect = (planName: string, isEnterprise: boolean) => {
    if (isEnterprise) {
      // For enterprise, open contact/sales page (not implemented yet)
      // Could open a modal, navigate to contact page, or external link
      console.log('Contact sales for Enterprise plan');
      // Don't navigate to dashboard for enterprise
      return;
    } else {
      // For Individual and Studio plans, proceed to dashboard
      onSelectPlan(planName);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-background dark:to-slate-800 px-4 py-12 relative${className ? ` ${className}` : ''}`}>
      {/* Close button */}
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-4 right-4 z-20 p-2 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
          aria-label="Back"
        >
          <X className="h-5 w-5 text-slate-600 dark:text-slate-400" />
        </button>
      )}

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-500/15 dark:to-pink-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo className="h-8 w-auto" />
        </div>

        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl md:text-4xl">
            Select your{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              plan
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. You can upgrade or downgrade at any time.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                plan.popular ? 'ring-2 ring-indigo-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-teal-500 text-black">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl truncate">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl lg:text-4xl">{plan.currency}{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  
                  {plan.additionalSeats && (
                    <p className="text-xs text-muted-foreground">{plan.additionalSeats}</p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6 pt-0">
                <Button 
                  onClick={() => handlePlanSelect(plan.name, plan.enterprise || false)}
                  variant="default"
                  size="lg"
                  className={`w-full h-12 text-white border-0 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700' 
                      : plan.enterprise
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                      : 'bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600'
                  }`}
                >
                  {plan.cta}
                  {!plan.enterprise && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
