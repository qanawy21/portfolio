import { education, training } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education">
      <h2 className="head">
        <span className="m">//</span>education
      </h2>

      <article className="entry">
        <p className="when">@ {education.date}</p>
        <h3>
          <span className="p">class</span> <span className="b">SinaiUniversity</span> <span className="m">// {education.degree}</span>
        </h3>
        <p className="m small">{education.place}</p>
        <ul className="arrows">
          <li>{education.major}. Grade: {education.grade}.</li>
          <li>
            Graduation project: {education.project} ({education.projectGrade}).
          </li>
        </ul>
      </article>

      <h2 className="head sub">
        <span className="m">//</span>training
      </h2>
      {training.map((t) => (
        <article key={t.title} className="entry">
          <p className="when">@ {t.date}</p>
          <h3>{t.title}</h3>
          <p className="m small">{t.org}</p>
          <p className="desc">{t.text}</p>
        </article>
      ))}
    </section>
  );
}
