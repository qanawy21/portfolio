import { profile } from "@/data/portfolio";

export default function TopBar() {
  return (
    <header className="bar">
      <div className="bar-row">
        <p>
          <span className="g">$</span> <a href="#top">~</a> <span className="m">/</span> {profile.handle} <span className="m">/</span> portfolio{" "}
          <a className="m" href="#hero">/hero</a>
        </p>
        <p className="git">
          git:<b>main</b>
          <span className="g">✓</span>
        </p>
      </div>
      <nav aria-label="Links">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={profile.resume}>Resume</a>
        <span className="m">{profile.location}</span>
      </nav>
    </header>
  );
}
