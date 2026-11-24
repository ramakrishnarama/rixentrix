const paths = {
  mobile: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  android: (
    <>
      <path d="M5 16V10a7 7 0 0 1 14 0v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z" />
      <path d="M8 3 6.5 1M16 3l1.5-2M9 10h.01M15 10h.01" />
    </>
  ),
  apple: (
    <>
      <path d="M12 7c-1-2-3-3-5-2-3 1.500-3 6-1 10 1.200 2.300 2.500 4 4 4 .900 0 1.500-.500 2-.500s1.100.500 2 .500c1.500 0 2.800-1.700 4-4 1-2 1.300-3.800 1-5-2 0-3-1.500-3-3s1-2.500 2-3c-1-1.500-3-1.500-4 0" />
    </>
  ),
  react: (
    <>
      <circle cx="12" cy="12" r="1.600" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="3" width="18" height="7" rx="2" />
      <rect x="3" y="14" width="18" height="7" rx="2" />
      <path d="M7 6.500h.01M7 17.500h.01" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
  chip: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.500" y="9.500" width="5" height="5" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </>
  ),
  home: (
    <>
      <path d="M3 11 12 3l9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 15 4-5 3 3 5-7" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.700 3.600 3 8 3s8-1.300 8-3V5" />
      <path d="M4 12c0 1.700 3.600 3 8 3s8-1.300 8-3" />
    </>
  ),
  cloud: (
    <path d="M7 18a5 5 0 1 1 1-9.900A6 6 0 0 1 19.500 10 4 4 0 0 1 18 18Z" />
  ),
  shield: (
    <>
      <path d="M12 3 4 6v6c0 5 3.500 8 8 9 4.500-1 8-4 8-9V6Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7Z" />,
  wifi: (
    <>
      <path d="M2 9a15 15 0 0 1 20 0M5 12.500a10 10 0 0 1 14 0M8.500 16a5 5 0 0 1 7 0" />
      <path d="M12 20h.01" />
    </>
  ),
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  check: <path d="m5 12 5 5 9-10" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

export default function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
