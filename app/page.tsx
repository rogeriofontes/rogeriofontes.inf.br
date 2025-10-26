import { getProfile, getSkills, getSocials, getExperiences } from '@/lib/data';
import SkillChips from '@/components/SkillChips';
import Image from 'next/image';
import avatar from '@/public/images/rogeriofontes.jpeg'; // <-- import estático
import { Linkedin, Github, FileText, UserRound } from "lucide-react";

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
          <h1 className="text-3xl font-bold text-black-900">{profile?.name}</h1>
          <p className="text-gray-700">{profile?.headline}</p>
          {profile?.especiality && (
            <ul className="mt-2 list-disc list-inside text-gray-700">
              {profile.especiality.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}  
          <div className="mt-2 flex gap-3 text-sm">
            <div className="mt-3 flex gap-4 text-black-700">
              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="hover:text-blue-800">
                  <Linkedin size={22} />
                </a>
              )}
              {socials.github && (
                <a href={socials.github} target="_blank" rel="noreferrer" title="GitHub" className="hover:text-blue-800">
                  <Github size={22} />
                </a>
              )}
              {socials.lattes && (
                <a href={socials.lattes} target="_blank" rel="noreferrer" title="Lattes" className="hover:text-blue-800">
                  <FileText size={22} />
                </a>
              )}
              {socials.aboutme && (
                <a href={socials.aboutme} target="_blank" rel="noreferrer" title="Sobre mim" className="hover:text-blue-800">
                  <UserRound size={22} />
                </a>
              )}
            </div>
          </div>
          {/* <div className="mt-4 flex gap-3">
            <a className="btn btn-primary" href="/publications">Ver publicações</a>
            <a className="btn btn-ghost" href="/talks">Palestras</a>
          </div> */}
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
                <h3 className="font-semibold text-black-900">{e.role} — {e.company}</h3>
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
