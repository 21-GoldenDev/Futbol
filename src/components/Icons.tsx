type IconProps = { className?: string };

function iconClass(extra?: string, fallback = "h-4 w-4") {
  const size = extra && /\bh-/.test(extra) ? "" : fallback;
  return [size, "shrink-0", extra].filter(Boolean).join(" ");
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg className={iconClass(className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 10h17" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 3.5v3.5M16 3.5v3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg className={iconClass(className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s6.5-5.8 6.5-10.5a6.5 6.5 0 1 0-13 0C5.5 15.2 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10.2" r="2" fill="currentColor" />
    </svg>
  );
}

export function BarsIcon({ className }: IconProps) {
  return (
    <svg className={iconClass(className)} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="4" y="13.5" width="3.4" height="6.5" rx="0.5" />
      <rect x="10.3" y="9" width="3.4" height="11" rx="0.5" />
      <rect x="16.6" y="5" width="3.4" height="15" rx="0.5" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg className={iconClass(className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5 6 6v5.8c0 3.8 2.5 6.6 6 7.9 3.5-1.3 6-4.1 6-7.9V6l-6-2.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M9.4 12.1 11.1 13.8 14.7 9.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function RunIcon({ className }: IconProps) {
  return (
    <svg className={iconClass(className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="14.2" cy="5.2" r="1.7" fill="currentColor" />
      <path
        d="M8.2 20.2 11 14.2l2.6 1.7 3.2 4.4M5.2 13.6 11 14.2l1.8-3.6 3.2.4 2.2-2.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PeopleIcon({ className }: IconProps) {
  return (
    <svg className={iconClass(className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8.2" r="2.1" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="15.6" cy="9" r="1.7" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4.4 18.5c.5-2.8 2.4-4.4 4.6-4.4s4.1 1.6 4.6 4.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M14 14.6c1.5-.3 3.1.7 3.9 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function BallIcon({ className }: IconProps) {
  return (
    <svg className={iconClass(className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 4.2 13.9 8.4l4.6 1-3 3.7.5 4.7L12 16.1l-4 1.7.5-4.7-3-3.7 4.6-1L12 4.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function StrategyIcon({ className }: IconProps) {
  return (
    <svg className={iconClass(className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 18 18 6" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 6h8v8" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="6.4" cy="17.6" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function TrophyIcon({ className }: IconProps) {
  return (
    <svg className={iconClass(className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8.2 5.2h7.6v4a3.8 3.8 0 0 1-7.6 0v-4Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.2 7.2H6A2.2 2.2 0 0 0 8.2 9.4M15.8 7.2H18A2.2 2.2 0 0 1 15.8 9.4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 13.2V16.6M9 18.8h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={iconClass(className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.4 12.2 10.8 14.7 15.6 9.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={iconClass(className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.4 4.4h2.3l1.1 2.8-1.4 1.1a11 11 0 0 0 5.7 5.7l1.1-1.4 2.8 1.1v2.3c0 .8-.6 1.5-1.4 1.6C9.8 18.4 5.6 14.2 4.8 5.8c0-.8.7-1.4 1.5-1.4h1.1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={iconClass(className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function FlexPinIcon({ className }: IconProps) {
  return (
    <svg className={iconClass(className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20.5s5.4-4.8 5.4-9a5.4 5.4 0 1 0-10.8 0c0 4.2 5.4 9 5.4 9Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M9.4 11h5.2M12 8.4v5.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={iconClass(className, "h-5 w-5")} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 7h15M4.5 12h15M4.5 17h15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={iconClass(className, "h-5 w-5")} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={iconClass(className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 7.2 12 13l8-5.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg className={iconClass(className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
