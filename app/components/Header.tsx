import Image from "next/image";

const navItems = [
  { label: "Buildings", href: "#buildings" },
  { label: "People", href: "#people" },
  { label: "Intelligence", href: "#intelligence" },
];

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.3.6 4.54 1.75 6.52L3 29l6.64-1.74A12.9 12.9 0 0 0 16.04 29C23.22 29 29 23.18 29 16S23.22 3 16.04 3Zm0 23.72c-2.02 0-4-.54-5.73-1.57l-.41-.24-3.94 1.03 1.05-3.84-.27-.43A10.7 10.7 0 0 1 5.3 16c0-5.92 4.82-10.74 10.74-10.74S26.72 10.08 26.72 16 21.96 26.72 16.04 26.72Zm5.88-8.04c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.52-.16-.74.16-.21.32-.85 1.04-1.04 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.31c.16.21 2.27 3.46 5.5 4.85.77.33 1.37.53 1.84.68.77.25 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.14-.3-.22-.62-.38Z" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-3 md:px-8">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-[#E8C686]/20 bg-[#FAF8F3]/90 px-5 shadow-[0_10px_35px_rgba(8,42,70,0.08)] backdrop-blur-xl md:px-6">
  {/* Logo */}
  <a href="#" className="flex items-center gap-3">
    <Image
      src="/logo.png"
      alt="Luxe & Pristine"
      width={36}
      height={36}
      priority
      className="h-8 w-auto"
    />

    <span className="hidden text-sm font-bold tracking-tight text-[#082A46] sm:block">
      Luxe & Pristine
    </span>
  </a>

  {/* Navigation */}
  <nav className="hidden items-center gap-8 md:flex">
    {navItems.map((item) => (
      <a
        key={item.label}
        href={item.href}
        className="text-sm font-medium text-[#33546F] transition-colors duration-300 hover:text-[#B28435]"
      >
        {item.label}
      </a>
    ))}
  </nav>

  {/* CTA */}
  <a
    href="https://wa.me/17864482284"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      items-center
      gap-2.5
      rounded-full
      bg-[#D4A84F]
      px-6
      py-3
      text-sm
      font-semibold
      text-white
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:bg-[#082A46]
      hover:shadow-lg
    "
  >
    <WhatsAppIcon className="h-5 w-5 shrink-0" />
    Let's Talk
  </a>
</div>
    </header>
  );
}