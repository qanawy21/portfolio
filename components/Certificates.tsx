"use client";
import { useState } from "react";
import { certificates } from "@/data/portfolio";

const INITIAL = 6;

export default function Certificates() {
  const [all, setAll] = useState(false);
  const shown = all ? certificates : certificates.slice(0, INITIAL);

  return (
    <section id="certificates">
      <h2 className="head">
        <span className="m">//</span>licenses &amp; certifications
      </h2>

      <ul className="rows">
        {shown.map((c) => (
          <li key={c.title} className="row">
            <div>
              {c.url ? (
                <a className="b" href={c.url} target="_blank" rel="noopener noreferrer">
                  {c.title} ↗
                </a>
              ) : (
                <span>{c.title}</span>
              )}
              <p className="m small">{c.issuer}</p>
            </div>
            <span className="m small nowrap">{c.date ?? ""}</span>
          </li>
        ))}
      </ul>

      <button type="button" className="btn" onClick={() => setAll(!all)} aria-expanded={all}>
        {all ? "View Less" : `View All (${certificates.length})`}
      </button>
    </section>
  );
}
