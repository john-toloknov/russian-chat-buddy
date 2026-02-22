import { useId } from "react";

const TelegramIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  const id = useId();
  const gradId = `tg-grad-${id}`;

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
        <linearGradient id={gradId} x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="#37AEE2" />
          <stop offset="1" stopColor="#1E96C8" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11" fill={`url(#${gradId})`} />
      <path
        d="M6.5 12.2l2.15 2.02 .65 2.93c.08.36.52.48.76.2l1.5-1.76 2.94 2.17c.33.25.8.06.87-.34l1.93-9.5c.08-.42-.32-.76-.72-.6L6.52 11.3c-.38.15-.38.7-.02.9z"
        fill="white"
      />
      <path
        d="M9.3 13.4l-.15 2.15c.02 0 .7-.64.7-.64l-2.35-1.93"
        fill="#B0BEC5"
        opacity="0.5"
      />
    </svg>
  );
};

export default TelegramIcon;
