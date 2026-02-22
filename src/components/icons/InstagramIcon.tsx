import { useId } from "react";

const InstagramIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const id = useId();
  const gradId = `ig-grad-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={gradId} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="1" y="1" width="22" height="22" rx="6" fill={`url(#${gradId})`} />
      <rect x="3" y="3" width="18" height="18" rx="4.5" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
    </svg>
  );
};

export default InstagramIcon;
