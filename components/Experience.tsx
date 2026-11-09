import { pascal } from "./util";
import { experiences } from "@/data/portfolio";


export default function Experience() {
  return (
    <section id="experience">
      <h2 className="head">
        <span className="m">//</span>work experience
      </h2>

      {experiences.map((e) => (
        <article key={e.company} className="entry">
          <p className="when">@ {e.date.toLowerCase()}</p>
          <h3>
            <span className="p">class</span> <span className="b">{pascal(e.company)}</span> <span className="m">// {e.title}</span>
          </h3>
          <p className="m small">{e.place}</p>
          <ul className="arrows">
            {e.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <ul className="tags">
            {e.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {e.link && (
            <p className="small">
              <a className="a" href={e.link.href} target="_blank" rel="noopener noreferrer">
                {e.link.label} ↗
              </a>
            </p>
          )}
        </article>
      ))}
    </section>
  );
}
