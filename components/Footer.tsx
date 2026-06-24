const CONNECT_LINKS = [
  { label: "X", href: "https://x.com/lindeequity" },
  { label: "LinkedIn", href: "https://linkedin.com/company/lindeequity" },
  { label: "YouTube", href: "https://youtube.com/@lindeequity" },
  { label: "Apple Podcasts", href: "https://podcasts.apple.com" },
  { label: "Spotify", href: "https://open.spotify.com" },
  { label: "media@lindeequity.com", href: "mailto:media@lindeequity.com" },
  { label: "talent@lindeequity.com", href: "mailto:talent@lindeequity.com" },
];

export default function Footer() {
  return (
    <footer className="bg-paper-dim">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <p className="font-body text-sm uppercase tracking-[0.1em] text-ink">
              Connect with Linde Equity
            </p>
            <ul className="mt-6 space-y-3 font-mono text-sm text-ink-soft">
              {CONNECT_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-ink">
                    {"------ "}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-body text-sm uppercase tracking-[0.1em] text-ink">
              Our Offices
            </p>
            <div className="mt-6 font-body text-sm leading-relaxed text-ink-soft">
              <p>Suite 330 – 1385 West 8th Avenue</p>
              <p>Vancouver, BC, V6H 3V9</p>
            </div>
          </div>
        </div>
        <div className="border-t border-ink-line pt-6 font-mono text-xs leading-relaxed text-ink-soft">
          <p>
            Linde Equity is registered as a portfolio manager and exempt
            market dealer in British Columbia, Alberta, Saskatchewan,
            Manitoba, and Ontario, and as an investment fund manager in
            British Columbia and Ontario.
          </p>
        </div>
      </div>
    </footer>
  );
}
