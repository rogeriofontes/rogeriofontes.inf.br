import { getProfile, getSkills, getSocials, getExperiences } from '@/lib/data';
import SkillChips from '@/components/SkillChips';
import Image from 'next/image';
import avatar from '@/public/images/rogeriofontes.jpeg'; // <-- import estático

export default function Home() {
  const profile = getProfile() as any;
  const skills = getSkills();
  const socials = getSocials() as any;
  const experiences = getExperiences();

  return (
    <div className="space-y-10">
      <section className="flex items-center gap-6">
        <Image src={avatar} 
               alt="Avatar" 
               width={188} 
               height={188} 
               className="rounded-full" 
               priority 
               unoptimized />
        <div>
          <h1 className="text-3xl font-bold text-blue-900">{profile?.name}</h1>
          <p className="text-gray-700">{profile?.headline}</p>
          <div className="mt-2 flex gap-3 text-sm">
            {socials.linkedin && <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
            {socials.github && <a href={socials.github} target="_blank" rel="noreferrer">GitHub</a>}
            {socials.lattes && <a href={socials.lattes} target="_blank" rel="noreferrer">Lattes</a>}
            {socials.aboutme && <a href={socials.aboutme} target="_blank" rel="noreferrer">Sobre mim</a>}
          </div>
          <div className="mt-4 flex gap-3">
            <a className="btn btn-primary" href="/publications">Ver publicações</a>
            <a className="btn btn-ghost" href="/talks">Palestras</a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Habilidades</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((g: any) => (
            <SkillChips key={g.group} group={g.group} items={g.items} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Experiências</h2>
        <div className="space-y-4">
          {experiences.map((e: any, idx: number) => (
            <div key={idx} className="card">
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-blue-900">{e.role} — {e.company}</h3>
                <span className="text-sm text-gray-500">{e.start} – {e.end}</span>
              </div>
              <p className="text-sm mt-2 whitespace-pre-line">{e.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
