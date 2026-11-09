"use client";
import { useState } from "react";
import { profile, tools, moreSkills } from "@/data/portfolio";

const INITIAL = 12;

export default function About() {
  const [all, setAll] = useState(false);
  const core = tools.map((t) => t.name);
  const extra = Object.values(moreSkills).flat();
  const skills = all ? [...core, ...extra] : core.slice(0, INITIAL);

  return (
    <section id="about">
      <h2 className="head">
        <span className="m">//</span>about
      </h2>
      <p className="lead">{profile.summary}</p>

      <p className="m code-line">// key_skills = [</p>
      <ul className="skills">
        {skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <p className="m code-line">// ]</p>

      <button type="button" className="btn" onClick={() => setAll(!all)} aria-expanded={all}>
        {all ? "View Less" : "View More"}
      </button>
    </section>
  );
}
