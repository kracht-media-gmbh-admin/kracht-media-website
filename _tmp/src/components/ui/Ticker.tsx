'use client';

import React, { useId, useRef, useState, useEffect } from 'react';
import { AnimationPlaybackControls, useAnimate, useInView } from 'framer-motion';

const TICKER_DIRECTION_LEFT = -1;
const TICKER_DIRECTION_RIGHT = 1;

type TickerProps = {
  children: React.ReactNode[];
  duration?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isPlaying?: boolean;
  direction?: typeof TICKER_DIRECTION_LEFT | typeof TICKER_DIRECTION_RIGHT;
};

const Ticker = ({
  children,
  duration = 20,
  onMouseEnter,
  onMouseLeave,
  isPlaying = true,
  direction = TICKER_DIRECTION_LEFT,
}: TickerProps) => {
  const containerId = useId();
  const tickerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  
  const [contentWidth, setContentWidth] = useState(0);
  const [numDupes, setNumDupes] = useState(1);
  const [animationControls, setAnimationControls] = useState<AnimationPlaybackControls>();

  // 1. Measure the content and the container
  useEffect(() => {
    if (contentRef.current && tickerRef.current) {
      const measuredWidth = contentRef.current.getBoundingClientRect().width;
      setContentWidth(measuredWidth);
      
      // Calculate how many clones we need to fill the rest of the screen
      const containerWidth = tickerRef.current.offsetWidth;
      const clonesNeeded = Math.max(1, Math.ceil(containerWidth / measuredWidth));
      setNumDupes(clonesNeeded);
    }
  }, [children]);

  // 2. Setup the Animation
  useEffect(() => {
    if (isInView && contentWidth > 0) {
      // The magic: Animate exactly the width of one content set
      const xTranslation = direction === TICKER_DIRECTION_LEFT ? -contentWidth : contentWidth;
      
      const controls = animate(
        scope.current,
        { x: [0, xTranslation] },
        { 
          ease: 'linear', 
          duration, 
          repeat: Infinity,
          repeatType: 'loop' 
        }
      );
      
      setAnimationControls(controls);
      return () => controls.stop();
    }
  }, [isInView, contentWidth, duration, direction]);

  // 3. Handle Play/Pause
  useEffect(() => {
    if (animationControls) {
      if (!isInView || !isPlaying) {
        animationControls.pause();
      } else {
        animationControls.play();
      }
    }
  }, [isInView, isPlaying, animationControls]);

  return (
    <div
      ref={tickerRef}
      style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div 
        ref={scope} 
        style={{ display: 'flex', width: 'max-content' }}
      >
        {/* Original Set: This is what we measure */}
        <div ref={contentRef} style={{ display: 'flex' }}>
          {children.map((item, i) => (
            <div key={`${containerId}-orig-${i}`}>{item}</div>
          ))}
        </div>

        {/* Clones: These provide the seamless loop overflow */}
        {[...Array(numDupes)].map((_, dupeIndex) => (
          <div key={`${containerId}-dupe-${dupeIndex}`} style={{ display: 'flex' }}>
            {children.map((item, i) => (
              <div key={`${containerId}-item-${dupeIndex}-${i}`}>{item}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
export { TICKER_DIRECTION_LEFT, TICKER_DIRECTION_RIGHT };