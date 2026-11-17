import type { ReactNode, SVGProps } from 'react';

const strokeIcons: Record<string, ReactNode> = {
  scissors: (
    <>
      <circle cx="6" cy="6" r="2.6" />
      <circle cx="6" cy="18" r="2.6" />
      <path d="M8.3 7.6 20 18M20 6 8.3 16.4" />
    </>
  ),
  fade: (
    <>
      <path d="M4 8h16M4 12h16M4 16h16" />
      <path d="M4 8h16" strokeDasharray="2 2" />
      <path d="M4 12h16" strokeDasharray="4 2" />
      <path d="M4 16h16" strokeDasharray="6 2" />
    </>
  ),
  razor: (
    <>
      <path d="M4 20 18.5 5.5a2.1 2.1 0 0 0 0-3 2.1 2.1 0 0 0-3 0L4 18" />
      <path d="M4 20v-2M3 15l6 3" />
    </>
  ),
  beard: (
    <>
      <path d="M6 4v6a6 6 0 0 0 12 0V4" />
      <path d="M9 14.5c0 3 1.3 5.5 3 5.5s3-2.5 3-5.5" />
      <path d="M9.5 10h.01M14.5 10h.01" />
    </>
  ),
  brow: (
    <>
      <path d="M2.5 10c3.5-4 15.5-4 19 0" />
      <path d="M4 15c1.8-1.5 4-2.2 6-1.6M20 15c-1.8-1.5-4-2.2-6-1.6" />
    </>
  ),
  kid: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
      <path d="M9.5 7.5h.01M14.5 7.5h.01" />
    </>
  ),
  combo: (
    <>
      <path d="M4 7h13l3 3v7H4z" />
      <path d="M4 12h16" />
      <path d="M9 16h.01M14 16h.01" />
    </>
  ),
  color: (
    <>
      <path d="M12 3c4 4.4 6 7.4 6 10a6 6 0 0 1-12 0c0-2.6 2-5.6 6-10Z" />
      <path d="M9 14.5a3 3 0 0 0 3 3" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 5.5-8 11-8 11S4 15.5 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </>
  ),
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <path d="M3 10h18M16.5 14.5h.01" />
    </>
  ),
  phone: (
    <path d="M5 3.5h3l1.7 4.2-2 1.5a12 12 0 0 0 5.6 5.6l1.5-2 4.2 1.7v3a2.5 2.5 0 0 1-2.7 2.5C9.9 19.5 4.5 14.1 4 6.2A2.5 2.5 0 0 1 5 3.5Z" />
  ),
  check: <path d="m4.5 12.5 4.5 4.5L19.5 6.5" />,
  arrowRight: <path d="M4 12h15M13 6l6 6-6 6" />,
  arrowLeft: <path d="M20 12H5M11 6l-6 6 6 6" />,
  arrowUp: <path d="M12 20V5M6 11l6-6 6 6" />,
  chevronDown: <path d="m5 9 7 7 7-7" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
      <path d="M18 16.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5.5c0 4.3-2.9 7.8-7 9.5-4.1-1.7-7-5.2-7-9.5V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  droplet: (
    <path d="M12 3.5c3.3 3.6 5 6.3 5 8.5a5 5 0 0 1-10 0c0-2.2 1.7-4.9 5-8.5Z" />
  ),
};

const filledIcons: Record<string, ReactNode> = {
  whatsapp: (
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.89 9.89m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9 0-3.17-1.24-6.16-3.48-8.4" />
  ),
  google: (
    <path d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.63h6.45a5.5 5.5 0 0 1-2.39 3.62v3h3.86c2.26-2.08 3.58-5.15 3.58-8.8Z" />
  ),
  instagram: (
    <path d="M12 2.16c3.2 0 3.58.02 4.85.07 3.25.15 4.77 1.7 4.92 4.92.05 1.27.06 1.65.06 4.85s-.01 3.58-.06 4.85c-.15 3.22-1.67 4.77-4.92 4.92-1.27.05-1.64.07-4.85.07s-3.58-.02-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.18 15.58 2.16 15.2 2.16 12s.02-3.58.07-4.85c.15-3.22 1.66-4.77 4.92-4.92C8.42 2.18 8.8 2.16 12 2.16Zm0 5.1a4.74 4.74 0 1 0 0 9.48 4.74 4.74 0 0 0 0-9.48Zm0 7.82a3.08 3.08 0 1 1 0-6.16 3.08 3.08 0 0 1 0 6.16Zm6.04-8.01a1.11 1.11 0 1 1-2.22 0 1.11 1.11 0 0 1 2.22 0Z" />
  ),
  star: (
    <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.44 6.19 20.5 7.3 14.03 2.6 9.45l6.5-.95L12 2.6Z" />
  ),
  barberPole: (
    <path d="M7 2h10v2H7V2Zm1 3h8v3.5c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V5Zm0 7h8v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-7Zm0 8h8v2H8v-2Z" />
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: string;
  label?: string;
};

export function Icon({ name, label, className, ...props }: IconProps) {
  const isFilled = name in filledIcons;
  const content = isFilled ? filledIcons[name] : strokeIcons[name];

  if (!content) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
      aria-label={label}
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth={isFilled ? 0 : 1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {content}
    </svg>
  );
}
