import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Linde Equity",
};

const inputClasses =
  "w-full border-b border-ink-line bg-transparent py-2 font-body text-base placeholder:text-ink-soft focus:border-ink focus:outline-none";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
      <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
        Contact
      </h1>
      <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-ink-soft">
        Get in touch and we&rsquo;ll respond as soon as we can.
      </p>

      <div className="mt-16 grid gap-16 lg:grid-cols-12">
        <form className="space-y-8 lg:col-span-7">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="font-body text-sm text-ink-soft">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="email" className="font-body text-sm text-ink-soft">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="font-body text-sm text-ink-soft">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={inputClasses}
              />
            </div>
            <div>
              <label
                htmlFor="bestTime"
                className="font-body text-sm text-ink-soft"
              >
                Best time to call
              </label>
              <input
                type="text"
                id="bestTime"
                name="bestTime"
                placeholder="e.g. Weekday afternoons"
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="font-body text-sm text-ink-soft">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className={`${inputClasses} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="border-b border-ink pb-1 font-body text-sm tracking-wide transition-opacity hover:opacity-60"
          >
            Send Message &rarr;
          </button>
        </form>

        <div className="space-y-10 lg:col-span-4 lg:col-start-9">
          <div>
            <h2 className="font-display text-xl font-medium tracking-tight">
              Office
            </h2>
            <p className="mt-3 font-body text-base leading-relaxed text-ink-soft">
              Suite 330 – 1385 West 8th Avenue
              <br />
              Vancouver, BC, V6H 3V9
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-medium tracking-tight">
              Phone
            </h2>
            <p className="mt-3 font-body text-base leading-relaxed text-ink-soft">
              <a href="tel:6047385200" className="hover:text-ink">
                604-738-5200
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-medium tracking-tight">
              Email
            </h2>
            <p className="mt-3 font-body text-base leading-relaxed text-ink-soft">
              <a href="mailto:info@lindeequity.com" className="hover:text-ink">
                info@lindeequity.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 border-t border-ink-line pt-8 font-body text-xs leading-relaxed text-ink-soft">
        <p>
          Linde Equity is registered as a portfolio manager and exempt market
          dealer in British Columbia, Alberta, Saskatchewan, Manitoba, and
          Ontario, and as an investment fund manager in British Columbia and
          Ontario.
        </p>
      </div>
    </section>
  );
}
