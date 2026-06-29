import { useReducedMotion } from 'motion/react';
import {
  ScrollProgress,
  ScrollProgressProvider,
} from './animate-ui/primitives/animate/scroll-progress';

export default function ScrollProgressBar() {
  const reducedMotion = useReducedMotion();

  // Keep the bar visible for everyone; under reduced motion drop the springy
  // smoothing so it tracks scroll position directly instead of easing.
  const transition = reducedMotion
    ? { stiffness: 1000, damping: 100, bounce: 0 }
    : { stiffness: 220, damping: 32, bounce: 0 };

  return (
    <ScrollProgressProvider global direction="vertical" transition={transition}>
      <ScrollProgress mode="width" className="scroll-progress" aria-hidden="true" />
    </ScrollProgressProvider>
  );
}
