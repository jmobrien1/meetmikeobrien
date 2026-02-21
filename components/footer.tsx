import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-teal/[0.06] bg-navy" style={{ padding: '48px clamp(24px, 6vw, 96px)' }}>
      <div className="content-max flex justify-between items-center flex-wrap gap-4">
        <div className="font-sans text-[0.82rem] text-slate">
          &copy; 2026 Mike O&apos;Brien &middot; meetmikeobrien.com
        </div>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/mikeobrien74/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[0.82rem] text-teal opacity-70 hover:opacity-100 transition-opacity no-underline"
          >
            LinkedIn
          </a>
          <a
            href="https://www.thoughtworks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[0.82rem] text-teal opacity-70 hover:opacity-100 transition-opacity no-underline"
          >
            Thoughtworks
          </a>
          <Link
            href="/propelai"
            className="font-sans text-[0.82rem] text-teal opacity-70 hover:opacity-100 transition-opacity no-underline"
          >
            PropelAI
          </Link>
        </div>
      </div>
    </footer>
  );
}
