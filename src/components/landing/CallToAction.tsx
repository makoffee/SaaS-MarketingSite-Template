import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ArrowRight, Upload, Zap, Shield, Globe, Check, Bot } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { content } from "../../config/content";
import { useRef, useState } from "react";

export function CallToAction() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const headerReveal = useScrollReveal('fadeInUp');
  const uploadReveal = useScrollReveal('fadeInUp');
  const ctaReveal = useScrollReveal('fadeInUp');
  const trustReveal = useScrollReveal('fadeIn');

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Here you would typically handle the file upload
      console.log('Selected file:', file.name, file.size, file.type);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="py-24 bg-white dark:bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <headerReveal.motion.div
          ref={headerReveal.ref}
          initial={headerReveal.initial}
          animate={headerReveal.animate}
          variants={headerReveal.variants}
          className="text-center space-y-8 mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            {content.cta.headline.part1}
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {content.cta.headline.highlighted}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.cta.subheadline}
          </p>
        </headerReveal.motion.div>

        {/* Upload Area */}
        <uploadReveal.motion.div
          ref={uploadReveal.ref}
          initial={uploadReveal.initial}
          animate={uploadReveal.animate}
          variants={uploadReveal.variants}
        >
          <Card className="max-w-4xl mx-auto mb-16 border shadow-lg">
            <CardContent 
              className="p-8 border-2 border-dashed border-muted rounded-lg text-center hover:border-primary/50 transition-colors cursor-pointer"
              onClick={handleBrowseClick}
            >
                <Upload className="w-12 h-12 mx-auto mb-4 text-cyan-500" />
                <h3 className="text-xl font-semibold mb-2">
                  {selectedFile ? selectedFile.name : content.cta.upload.headline}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {selectedFile 
                    ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB • ${selectedFile.type}`
                    : content.cta.upload.description
                  }
                </p>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="h-12 px-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBrowseClick();
                  }}
                >
                  {selectedFile ? 'Change File' : content.cta.upload.button}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  {content.cta.upload.supportedFormats}
                </p>
                
                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
            </CardContent>
          </Card>
        </uploadReveal.motion.div>

        {/* Alternative CTAs */}
        <ctaReveal.motion.div
          ref={ctaReveal.ref}
          initial={ctaReveal.initial}
          animate={ctaReveal.animate}
          variants={ctaReveal.variants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white">
            {content.cta.buttons.primary}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-12 px-8"
          >
            {content.cta.buttons.secondary}
          </Button>
        </ctaReveal.motion.div>

        {/* Trust indicators */}
        <trustReveal.motion.div
          ref={trustReveal.ref}
          initial={trustReveal.initial}
          animate={trustReveal.animate}
          variants={trustReveal.variants}
          className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground"
        >
          {content.cta.trustIndicators.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              {item.icon === "shield" && <Shield className="h-4 w-4" />}
              {item.icon === "globe" && <Globe className="h-4 w-4" />}
              {item.icon === "zap" && <Zap className="h-4 w-4" />}
              {item.icon === "bot" && <Bot className="h-4 w-4" />}
              {item.icon === "check" && <Check className="h-4 w-4" />}
              <span>{item.text}</span>
            </div>
          ))}
        </trustReveal.motion.div>
      </div>
    </section>
  );
}