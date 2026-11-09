"use client";
import { useState } from "react";
import { projects } from "@/data/portfolio";
import { pascal } from "./util";

const INITIAL = 4;

export default function Projects() {
  const [all, setAll] = useState(false);
  const shown = all ? projects : projects.slice(0, INITIAL);

  return (
    <section id="projects">
      <h2 className="head">
        <span className="m">//</span>projects
      </h2>

      {shown.map((p) => (
        <article key={p.name} className="entry flat">
          <h3>
            <span className="p">const</span> <span className="b">{pascal(p.name)}</span>{" "}
            <span className="m">// {p.kind === "client" ? "client site" : "personal"}</span>
          </h3>
          <p className="desc">{p.desc}</p>
          {p.note && <p className="a small">{p.note}</p>}
          <ul className="tags">
            {p.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {(p.github || p.demo) && (
            <p className="small links-row">
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  source ↗
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer">
                  live ↗
                </a>
              )}
            </p>
          )}
        </article>
      ))}

      {projects.length > INITIAL && (
        <button type="button" className="btn" onClick={() => setAll(!all)} aria-expanded={all}>
          {all ? "View Less" : `View All Projects (${projects.length})`}
        </button>
      )}
    </section>
  );
}
