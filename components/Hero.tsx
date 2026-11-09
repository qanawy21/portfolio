import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="prompt">
          <span className="g">$</span> {profile.handle}@hero
        </p>

        <h1>
          {profile.firstName} {profile.lastName}
          <span className="cursor" aria-hidden="true" />
        </h1>
        <p className="role">
          <span className="m">//</span> {profile.role} <span className="m">|</span> {profile.stack}
        </p>
        <p className="avail">Open to full-time roles and freelance projects</p>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="photo"
        src="/me.png"
        alt={`${profile.firstName} ${profile.lastName}`}
        width={270}
        height={270}
      />
    </section>
  );
}