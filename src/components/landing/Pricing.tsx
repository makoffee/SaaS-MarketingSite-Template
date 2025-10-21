import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { content } from "../../config/content";
import { Check, Star, ArrowRight, User, Users, Play } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

// Map icons to plans dynamically from content
const plans = content.pricing.plans.map((plan, index) => ({
  ...plan,
  icon: [User, Users, Play][index]
}));

export function Pricing() {
  const headerReveal = useScrollReveal('fadeInUp');
  const cardsReveal = useScrollReveal('fadeInUp');
  const faqReveal = useScrollReveal('fadeIn');

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-background">
      <div className="container">
        <headerReveal.motion.div
          ref={headerReveal.ref}
          initial={headerReveal.initial}
          animate={headerReveal.animate}
          variants={headerReveal.variants}
          className="text-center space-y-4 mb-16"
        >
          <Badge variant="outline" className="px-4 py-2">
            {content.pricing.badge}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            {content.pricing.headline.part1}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}{content.pricing.headline.highlighted}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.pricing.subheadline}
          </p>
        </headerReveal.motion.div>

        <cardsReveal.motion.div
          ref={cardsReveal.ref}
          initial={cardsReveal.initial}
          animate={cardsReveal.animate}
          variants={cardsReveal.variants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto"
        >
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
                    <h3 className="text-xl font-bold truncate">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl lg:text-4xl font-bold">{plan.currency}{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  
                  {plan.additionalSeats && (
                    <p className="text-xs text-muted-foreground">{plan.additionalSeats}</p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6 pt-0">
                  <Button 
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
        </cardsReveal.motion.div>

        {/* FAQ Section */}
        <faqReveal.motion.div
          ref={faqReveal.ref}
          initial={faqReveal.initial}
          animate={faqReveal.animate}
          variants={faqReveal.variants}
          className="text-center space-y-8"
        >
          <h3 className="text-2xl font-bold">{content.pricing.faq.headline}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {content.pricing.faq.items.map((item, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-2">{item.question}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </faqReveal.motion.div>
      </div>
    </section>
  );
}