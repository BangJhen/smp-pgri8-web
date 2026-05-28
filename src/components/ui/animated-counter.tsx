import { useCountUp } from '@/hooks/useCountUp';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
}: AnimatedCounterProps) {
  const { ref, inView } = useScrollTrigger({ threshold: 0.5, triggerOnce: true });
  const count = useCountUp({ end, duration, shouldStart: inView });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString('id-ID')}
      {suffix}
    </span>
  );
}
