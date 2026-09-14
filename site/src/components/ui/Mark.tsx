import { cn } from '@/lib/cn';

type MarkProps = {
  className?: string;
  size?: number;
  withWordmark?: boolean;
};

export function Mark({ className, size = 28, withWordmark = false }: MarkProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="cinestudio"
      >
        <rect width="64" height="64" rx="14" fill="#0a0907" />
        <circle cx="32" cy="32" r="14" stroke="#d4a830" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="4" fill="#d4a830" />
        <rect x="14" y="28" width="36" height="8" rx="1" fill="#d4a830" opacity="0.85" />
      </svg>
      {withWordmark && (
        <span className="font-display text-[18px] tracking-tight text-bone-50">cinestudio</span>
      )}
    </span>
  );
}