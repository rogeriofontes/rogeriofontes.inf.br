import { getProfile } from '@/lib/data';

export default function About() {
  const p = getProfile() as any;
  return (
    <article className="prose max-w-none">
      <h1 className="text-3xl font-bold text-blue-900">Sobre</h1>
      <p>{p?.short_bio}</p>
      <br />
      <p>{p?.bio}</p>
      <br />
      <h2 className="text-2xl font-bold text-blue-800">Experiência Acadêmica</h2>
      <ul>
        {p?.academic_positions.map((pos: any, index: number) => (
          <li key={index}>
            <strong>{pos.title}</strong> - {pos.institution} ({pos.period})
            <p>{pos.description}</p>
            &nbsp;
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold text-blue-800">Experiência Profissional</h2>
      <ul>
        {p?.professional_experience.map((exp: any, index: number) => (
          <li key={index}>
            <strong>{exp.title}</strong> - {exp.company} ({exp.period})
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
      <br />
      <p><strong>Email:</strong> <a href={`mailto:${p?.email}`}>{p?.email}</a></p>
      <p><strong>Local:</strong> {p?.location}</p>
    </article>
  );
}
