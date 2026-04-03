import * as React from 'react';
import type { Transition } from 'motion/react';

import {
  Switch as SwitchPrimitive,
  SwitchThumb as SwitchThumbPrimitive,
  SwitchIcon as SwitchIconPrimitive,
  type SwitchProps as SwitchPrimitiveProps,
} from '@/components/animate-ui/primitives/base/switch';
import { cn } from '@/lib/utils';

type SwitchProps = SwitchPrimitiveProps & {
  pressedWidth?: number;
  /** Motion transition for thumb press / layout (default: snappy spring). */
  thumbTransition?: Transition;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  thumbIcon?: React.ReactElement;
};

function Switch({
  className,
  pressedWidth = 19,
  thumbTransition,
  startIcon,
  endIcon,
  thumbIcon,
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive
      className={cn(
        'relative peer focus-visible:border-ring focus-visible:ring-ring/50 flex h-5 w-8 shrink-0 items-center justify-start overflow-hidden rounded-full border border-transparent px-px shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-50',
        'data-[checked]:bg-primary data-[unchecked]:bg-input dark:data-[unchecked]:bg-input/80 data-[checked]:justify-end',
        className,
      )}
      {...props}
    >
      <SwitchThumbPrimitive
        className={cn(
          'relative z-10 box-border max-h-full min-h-0 min-w-0 max-w-[calc(100%-2px)] shrink-0 bg-background dark:data-[unchecked]:bg-foreground dark:data-[checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0',
        )}
        pressedAnimation={{ width: pressedWidth }}
        transition={thumbTransition}
      >
        {thumbIcon && (
          <SwitchIconPrimitive
            position="thumb"
            className="absolute [&_svg]:size-[9px] left-1/2 top-1/2 -translate-1/2 dark:text-neutral-500 text-neutral-400"
          >
            {thumbIcon}
          </SwitchIconPrimitive>
        )}
      </SwitchThumbPrimitive>

      {startIcon && (
        <SwitchIconPrimitive
          position="left"
          className="absolute [&_svg]:size-[9px] left-0.5 top-1/2 -translate-y-1/2 dark:text-neutral-500 text-neutral-400"
        >
          {startIcon}
        </SwitchIconPrimitive>
      )}
      {endIcon && (
        <SwitchIconPrimitive
          position="right"
          className="absolute [&_svg]:size-[9px] right-0.5 top-1/2 -translate-y-1/2 dark:text-neutral-400 text-neutral-500"
        >
          {endIcon}
        </SwitchIconPrimitive>
      )}
    </SwitchPrimitive>
  );
}

export { Switch, type SwitchProps };
