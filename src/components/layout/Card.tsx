import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export function Card({ className, style, children }: PropsWithChildren<Props>) {
  return (
    <div
      className={`p-1.5 sm:p-3 md:p-3.5 relative bg-white overflow-auto ${className}`}
      style={{ ...style, ...styles.card }}
    >
      {children}
    </div>
  );
}

const styles = {
  card: {
    background: `var(--Color-fill-surface-surface, #FFF)`,
    boxShadow: `var(--Shadow-card, 0px 6px 28px rgba(0, 0, 0, 0.08))`,
  },
};
