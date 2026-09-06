import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  reverse?: boolean;
  pauseOnHover?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn('magic-marquee', pauseOnHover && 'magic-marquee-pause', className)}
    >
      <div className={cn('magic-marquee-track', reverse && 'magic-marquee-reverse')}>
        <div className="magic-marquee-group">{children}</div>
        <div className="magic-marquee-group" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
};
