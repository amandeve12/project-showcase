import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rippleColor?: string;
}

export const RippleButton = React.forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({ className, children, onClick, rippleColor = '#ADD8E6', ...props }, ref) => {
    const [ripples, setRipples] = useState<number[]>([]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const rippleId = Date.now();
      setRipples((currentRipples) => [...currentRipples, rippleId]);
      window.setTimeout(() => {
        setRipples((currentRipples) => currentRipples.filter((id) => id !== rippleId));
      }, 700);
      onClick?.(event);
    };

    return (
      <button
        ref={ref}
        {...props}
        onClick={handleClick}
        className={cn('relative isolate overflow-hidden', className)}
      >
        <span className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          {ripples.map((rippleId) => (
            <span
              key={rippleId}
              className="magic-ripple absolute left-1/2 top-1/2 aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ backgroundColor: rippleColor }}
            />
          ))}
        </span>
        <span className="relative z-10">{children}</span>
      </button>
    );
  },
);

RippleButton.displayName = 'RippleButton';
