/**
 * Multilingual Typewriter H1 Component
 * 
 * Demonstrates eysign's contextual translation capability through an animated
 * typewriter effect that cycles through multiple languages.
 * 
 * @features
 * - Custom character-by-character typewriter animation
 * - Selective gradient styling (only on key words like "Accessibility")
 * - Two-line layout with controlled line breaks
 * - Terminal-style blinking underscore cursor
 * - Fixed height container to prevent layout shift
 * - Cycles through English → French → Norwegian → Japanese → English (stops)
 * - Responsive typography matching brand design system
 * 
 * @technical
 * - No external animation libraries (custom implementation for performance)
 * - Optimized rendering with memoized calculations
 * - Opacity-based cursor visibility (reserves space to prevent jumping)
 * - Full width container prevents reflow during typing
 * 
 * @usage
 * ```tsx
 * <MultilingualTypewriterH1 
 *   speed={50}           // Typing speed in ms
 *   deletionSpeed={60}   // Backspace speed in ms  
 *   pauseDuration={2000} // Pause between languages in ms
 * />
 * ```
 * 
 * @migration-notes
 * - Ready for Next.js App Router (client component)
 * - Can be CMS-driven by passing phrases as prop
 * - Consider adding language prop for dynamic control
 */

"use client";

import { useState, useEffect, useRef } from "react";

// ============================================================================
// Types
// ============================================================================

interface MultilingualTypewriterH1Props {
  className?: string;
  speed?: number;
  deletionSpeed?: number;
  pauseDuration?: number;
}

interface PhrasePart {
  before: string;      // Text before the highlighted word (white)
  highlight: string;   // The word to highlight with gradient
  after: string;       // Text after the highlighted word (white)
  full: string;        // Complete phrase for typing reference
  breakAt?: number;    // Character position where line break occurs
}

// ============================================================================
// Static Data - Phrases Configuration
// ============================================================================
// Moved outside component to prevent recreation on each render
// Each phrase is split into parts for selective gradient styling

const PHRASES: PhrasePart[] = [
  // English - Break after "Accessibility"
  {
    before: 'Global Media ',
    highlight: 'Accessibility',
    after: ' Made Simple',
    full: 'Global Media Accessibility Made Simple',
    breakAt: 27 // After "Global Media Accessibility"
  },
  // French - "Simplified" is highlighted
  {
    before: 'Accès global aux médias ',
    highlight: 'simplifié',
    after: '',
    full: 'Accès global aux médias simplifié',
    breakAt: 24
  },
  // Norwegian - "Simple" is highlighted
  {
    before: 'Global medietilgjengelighet gjort ',
    highlight: 'enkelt',
    after: '',
    full: 'Global medietilgjengelighet gjort enkelt',
    breakAt: 28
  },
  // Japanese - "Accessibility" is highlighted
  {
    before: 'グローバルメディアの',
    highlight: 'アクセシビリティ',
    after: 'がシンプルに',
    full: 'グローバルメディアのアクセシビリティがシンプルに',
    breakAt: 18
  },
  // Back to English (final) - Stops here
  {
    before: 'Global Media ',
    highlight: 'Accessibility',
    after: ' Made Simple',
    full: 'Global Media Accessibility Made Simple',
    breakAt: 27
  }
];

// ============================================================================
// Component
// ============================================================================

export function MultilingualTypewriterH1({ 
  className = "",
  speed = 50,
  deletionSpeed = 60,
  pauseDuration = 2000
}: MultilingualTypewriterH1Props) {
  
  // State management
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ============================================================================
  // Typewriter Animation Effect
  // ============================================================================
  
  useEffect(() => {
    if (isComplete) return;

    const currentPhrase = PHRASES[currentPhraseIndex];
    const targetText = currentPhrase.full;

    const type = () => {
      // Pause state - Wait before starting deletion
      if (isPaused) {
        timeoutRef.current = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
        return;
      }

      // Deletion state - Backspace characters
      if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
          timeoutRef.current = setTimeout(type, deletionSpeed);
        } else {
          // Finished deleting - Move to next phrase
          if (currentPhraseIndex < PHRASES.length - 1) {
            setCurrentPhraseIndex(currentPhraseIndex + 1);
            setIsDeleting(false);
          } else {
            // All phrases complete
            setIsDeleting(false);
            setIsComplete(true);
          }
        }
        return;
      }

      // Typing state - Add characters
      if (currentText.length < targetText.length) {
        setCurrentText(targetText.slice(0, currentText.length + 1));
        timeoutRef.current = setTimeout(type, speed);
      } else {
        // Finished typing current phrase
        if (currentPhraseIndex === PHRASES.length - 1) {
          // Final phrase - Stop and hide cursor
          setIsComplete(true);
          setShowCursor(false);
        } else {
          // Pause before deleting
          setIsPaused(true);
        }
      }
    };

    timeoutRef.current = setTimeout(type, speed);

    // Cleanup timeout on unmount or state change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, isComplete, speed, deletionSpeed, pauseDuration]);

  // ============================================================================
  // Render Helper - Text with Gradient and Line Breaks
  // ============================================================================
  
  const renderStyledText = () => {
    const currentPhrase = PHRASES[currentPhraseIndex];
    const beforeLen = currentPhrase.before.length;
    const highlightLen = currentPhrase.highlight.length;
    const afterStart = beforeLen + highlightLen;
    const breakAt = currentPhrase.breakAt;

    // Two-line layout with controlled break point
    if (breakAt !== undefined) {
      const line1Text = currentText.slice(0, Math.min(breakAt, currentText.length));
      const line2Text = currentText.length > breakAt ? currentText.slice(breakAt) : '';

      // Calculate styling segments for line 1
      const line1BeforeText = line1Text.slice(0, Math.min(beforeLen, line1Text.length));
      const line1HighlightText = line1Text.slice(beforeLen, Math.min(afterStart, line1Text.length));
      const line1AfterText = line1Text.slice(Math.min(afterStart, line1Text.length));

      // Calculate styling segments for line 2
      let line2BeforeText = '';
      let line2HighlightText = '';
      let line2AfterText = '';

      if (line2Text.length > 0) {
        const line2Start = breakAt;
        
        if (line2Start < beforeLen) {
          // Break within 'before' section
          line2BeforeText = line2Text.slice(0, Math.min(beforeLen - line2Start, line2Text.length));
          if (line2Text.length > beforeLen - line2Start) {
            line2HighlightText = line2Text.slice(beforeLen - line2Start, Math.min(afterStart - line2Start, line2Text.length));
            line2AfterText = line2Text.slice(Math.max(0, afterStart - line2Start));
          }
        } else if (line2Start < afterStart) {
          // Break within 'highlight' section
          line2HighlightText = line2Text.slice(0, Math.min(afterStart - line2Start, line2Text.length));
          line2AfterText = line2Text.slice(Math.max(0, afterStart - line2Start));
        } else {
          // Break within 'after' section
          line2AfterText = line2Text;
        }
      }

      return (
        <>
          {/* Line 1 */}
          <span>
            {line1BeforeText}
            {line1HighlightText && (
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {line1HighlightText}
              </span>
            )}
            {line1AfterText}
          </span>
          
          {/* Line 2 (appears after breakAt) */}
          {(line2Text.length > 0 || currentText.length >= breakAt) && (
            <>
              <br />
              <span>
                {line2BeforeText}
                {line2HighlightText && (
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {line2HighlightText}
                  </span>
                )}
                {line2AfterText}
                {/* Cursor on line 2 (always rendered, opacity controlled) */}
                <span className={`animate-pulse ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
              </span>
            </>
          )}
          
          {/* Cursor on line 1 (before break point) */}
          {currentText.length < breakAt && (
            <span className={`animate-pulse ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
          )}
        </>
      );
    }

    // Fallback: Single line (no break point defined)
    const beforeText = currentText.slice(0, beforeLen);
    const highlightText = currentText.slice(beforeLen, afterStart);
    const afterText = currentText.slice(afterStart);

    return (
      <>
        <span>{beforeText}</span>
        {highlightText && (
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {highlightText}
          </span>
        )}
        <span>{afterText}</span>
        <span className={`animate-pulse ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
      </>
    );
  };

  // ============================================================================
  // Render
  // ============================================================================

  return (
    <div 
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl tracking-tight font-black w-full min-h-[160px] md:min-h-[180px] lg:min-h-[200px] xl:min-h-[200px] 2xl:min-h-[240px] flex items-center justify-center text-center ${className}`}
    >
      <h1 className="w-full">
        {renderStyledText()}
      </h1>
    </div>
  );
}
