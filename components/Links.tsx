import { profile } from "@/data/portfolio";

const strip = (u: string) => u.replace(/^https?:\/\/(www\.)?/, "");

export default function Links() {
  return (
    <footer id="contact" className="foot">
      <h2 className="head">
        <span className="m">//</span>links
      </h2>
      <p>
        <span className="p">const</span> linkedin = [<a className="a" href={profile.linkedin} target="_blank" rel="noopener noreferrer">&apos;{strip(profile.linkedin)}&apos;</a>]
      </p>
      <p>
        <span className="p">const</span> github = [<a className="a" href={profile.github} target="_blank" rel="noopener noreferrer">&apos;{strip(profile.github)}&apos;</a>]
      </p>
      <p>
        <span className="p">const</span> email = [<a className="a" href={`mailto:${profile.email}`}>&apos;{profile.email}&apos;</a>]
      </p>
      <p className="commit">
        <span className="g">git commit</span> -m &quot;built by {profile.firstName} {profile.lastName}&quot;
      </p>
      <p className="m small">// Next.js · TypeScript · plain CSS.</p>
    </footer>
  );
}
