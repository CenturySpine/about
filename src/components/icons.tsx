function IconBase({
  children,
  size = 20,
}: {
  children: React.ReactNode;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function FacebookIcon(props: { size?: number }) {
  return (
    <IconBase {...props}>
      <path d="M14 9h3V6h-3c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h3l1-3h-4V9c0-.55.45-1 1-1z" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function InstagramIcon(props: { size?: number }) {
  return (
    <IconBase {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function LinkedinIcon(props: { size?: number }) {
  return (
    <IconBase {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <line x1="7.5" y1="10" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.6" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5V10" />
      <path d="M11.5 12.8c0-1.5 1.2-2.4 2.5-2.4 1.4 0 2.3 1 2.3 2.6v3.5" />
    </IconBase>
  );
}

export function GithubIcon(props: { size?: number }) {
  return (
    <IconBase {...props}>
      <path d="M12 3.5c-4.7 0-8.5 3.8-8.5 8.5 0 3.8 2.4 6.9 5.8 8 .4.1.6-.2.6-.4v-1.6c-2.4.5-2.9-1.1-2.9-1.1-.4-1-.9-1.2-.9-1.2-.8-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.8 1.3 2 .9 2.5.7.1-.6.3-.9.6-1.1-1.9-.2-3.9-1-3.9-4.3 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.4.9a8 8 0 0 1 4.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.3 0 3.3-2 4.1-3.9 4.3.3.3.6.8.6 1.6v2.4c0 .2.2.5.6.4 3.4-1.1 5.8-4.2 5.8-8-.1-4.7-3.9-8.5-8.6-8.5z" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function KofiIcon(props: { size?: number }) {
  return (
    <IconBase {...props}>
      <path d="M4.5 8.5h12v5A5.5 5.5 0 0 1 11 19h-1a5.5 5.5 0 0 1-5.5-5.5v-5Z" />
      <path d="M16.5 10h1.3a2.5 2.5 0 0 1 0 5h-1.3" />
      <path d="M9 5.2c-.5.6-.5 1.2 0 1.8" />
    </IconBase>
  );
}

export function FeatherIcon(props: { size?: number }) {
  return (
    <IconBase {...props}>
      <path d="M20 4c-6 0-11 4.5-13 11l-2 5 5-2C17 16 21 11 21 5c0-.4-.1-.7-.2-1" />
      <path d="M8.5 15.5 4 20" />
    </IconBase>
  );
}

export function MailIcon(props: { size?: number }) {
  return (
    <IconBase {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4.5 7l7.5 6 7.5-6" />
    </IconBase>
  );
}
