interface GeometricElementsProps {
  variant?: 'hero' | 'features' | 'minimal';
  className?: string;
}

export function GeometricElements({ variant = 'hero', className = '' }: GeometricElementsProps) {
  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Large semi-circles */}
        <div className="absolute top-20 left-10 w-32 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-500/30 dark:to-pink-500/30 rounded-t-full transform rotate-12" />
        <div className="absolute top-40 right-20 w-48 h-24 bg-gradient-to-l from-cyan-400/25 to-teal-400/25 dark:from-cyan-500/35 dark:to-teal-500/35 rounded-t-full transform -rotate-45" />
        
        {/* Quarter circles */}
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 dark:from-indigo-500/30 dark:to-purple-500/30 rounded-br-full" />
        <div className="absolute top-60 left-1/3 w-16 h-16 bg-gradient-to-tl from-orange-400/25 to-pink-400/25 dark:from-orange-500/35 dark:to-pink-500/35 rounded-tl-full" />
        
        {/* Full circles */}
        <div className="absolute bottom-20 right-1/4 w-12 h-12 bg-gradient-to-r from-cyan-400/30 to-teal-400/30 dark:from-cyan-500/40 dark:to-teal-500/40 rounded-full" />
        <div className="absolute top-32 left-1/2 w-8 h-8 bg-gradient-to-r from-purple-400/25 to-indigo-400/25 dark:from-purple-500/35 dark:to-indigo-500/35 rounded-full" />
        
        {/* Stroke circles */}
        <div className="absolute top-80 right-32 w-20 h-20 border-2 border-purple-400/30 dark:border-purple-500/40 rounded-full" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-cyan-400/25 dark:border-cyan-500/35 rounded-full" />
        
        {/* Overlapping circles sequence */}
        <div className="absolute top-16 right-16 flex space-x-2">
          <div className="w-6 h-6 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 dark:from-indigo-500/30 dark:to-purple-500/30 rounded-full" />
          <div className="w-6 h-6 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-500/30 dark:to-pink-500/30 rounded-full -ml-2" />
          <div className="w-6 h-6 bg-gradient-to-r from-pink-400/20 to-orange-400/20 dark:from-pink-500/30 dark:to-orange-500/30 rounded-full -ml-2" />
        </div>
      </div>
    );
  }

  if (variant === 'features') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Subtle background elements */}
        <div className="absolute top-10 right-10 w-24 h-12 bg-gradient-to-r from-teal-400/15 to-cyan-400/15 dark:from-teal-500/20 dark:to-cyan-500/20 rounded-t-full" />
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-br from-purple-400/15 to-indigo-400/15 dark:from-purple-500/20 dark:to-indigo-500/20 rounded-br-full" />
        <div className="absolute top-1/2 right-1/4 w-8 h-8 border border-cyan-400/20 dark:border-cyan-500/25 rounded-full" />
        <div className="absolute bottom-10 right-10 w-12 h-6 bg-gradient-to-l from-pink-400/15 to-purple-400/15 dark:from-pink-500/20 dark:to-purple-500/20 rounded-t-full transform rotate-45" />
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <div className="absolute top-20 left-20 w-12 h-6 bg-gradient-to-r from-purple-400/10 to-indigo-400/10 dark:from-purple-500/15 dark:to-indigo-500/15 rounded-t-full" />
        <div className="absolute bottom-20 right-20 w-6 h-6 border border-teal-400/15 dark:border-teal-500/20 rounded-full" />
      </div>
    );
  }

  return null;
}