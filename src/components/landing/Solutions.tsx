import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { content } from "../../config/content";
import { 
  User, 
  Users, 
  ArrowRight, 
  Play,
  Radio,
  GraduationCap,
  Megaphone,
  Handshake,
  Camera,
  Clock
} from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

// Map target audiences with icons
const solutions = content.solutions.targetAudiences.map((audience, index) => ({
  icon: [User, Users, Play][index],
  ...audience
}));

// Map use case icons from content
const iconMapping = {
  play: Play,
  radio: Radio,
  "graduation-cap": GraduationCap,
  megaphone: Megaphone,
  handshake: Handshake,
  camera: Camera
};

const useCaseIconData = content.solutions.useCases.items.map((item) => ({
  icon: iconMapping[item.icon as keyof typeof iconMapping] || Play,
  title: item.title,
  description: item.description,
  color: item.color
}));

export function Solutions() {
  const headerReveal = useScrollReveal('fadeInUp');
  const cardsReveal = useScrollReveal('fadeInUp');
  const useCasesHeaderReveal = useScrollReveal('fadeInUp');
  const useCasesReveal = useScrollReveal('fadeInUp');

  return (
    <section id="solutions" className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container">
        <headerReveal.motion.div
          ref={headerReveal.ref}
          initial={headerReveal.initial}
          animate={headerReveal.animate}
          variants={headerReveal.variants}
          className="text-center space-y-4 mb-16"
        >
          <Badge variant="outline" className="px-4 py-2">
            {content.solutions.badge}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            {content.solutions.headline.part1}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}{content.solutions.headline.highlighted}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto">
            {content.solutions.subheadline}
          </p>
        </headerReveal.motion.div>

        {/* Target Audience Cards */}
        <cardsReveal.motion.div
          ref={cardsReveal.ref}
          initial={cardsReveal.initial}
          animate={cardsReveal.animate}
          variants={cardsReveal.variants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto"
        >
          {solutions.map((solution, index) => (
            <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${solution.popular ? 'ring-2 ring-indigo-500' : ''}`}>
              {solution.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center flex-shrink-0`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary">{solution.badge}</Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>

                  <div className="space-y-3">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                           solution.badge === 'Individual' ? 'bg-teal-500' : 
                           solution.badge === 'Studio' ? 'bg-indigo-500' : 'bg-purple-500'
                         }`} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{solution.stats}</span>
                    </div>
                    <Button 
                      className={`bg-gradient-to-r ${solution.gradient} hover:opacity-90 text-white`}
                      size="sm"
                    >
                      {solution.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </cardsReveal.motion.div>

        {/* Use Cases */}
        <div className="space-y-8">
          <useCasesHeaderReveal.motion.div
            ref={useCasesHeaderReveal.ref}
            initial={useCasesHeaderReveal.initial}
            animate={useCasesHeaderReveal.animate}
            variants={useCasesHeaderReveal.variants}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-4">{content.solutions.useCases.headline}</h3>
            <p className="text-muted-foreground max-w-5xl mx-auto">
              {content.solutions.useCases.subheadline}
            </p>
          </useCasesHeaderReveal.motion.div>

          <useCasesReveal.motion.div
            ref={useCasesReveal.ref}
            initial={useCasesReveal.initial}
            animate={useCasesReveal.animate}
            variants={useCasesReveal.variants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {useCaseIconData.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <useCase.icon className={`w-8 h-8 ${useCase.color} group-hover:scale-110 transition-transform`} />
                    <div>
                      <h4 className="font-semibold mb-1">{useCase.title}</h4>
                      <p className="text-sm text-muted-foreground">{useCase.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </useCasesReveal.motion.div>
        </div>
      </div>
    </section>
  );
}