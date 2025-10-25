import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

function loadYaml(file: string) {
  const p = path.join(process.cwd(), 'data', file);
  if (!fs.existsSync(p)) return null;
  return yaml.load(fs.readFileSync(p, 'utf-8'));
}

export function getProfile() { return loadYaml('profile.yaml'); }
export function getSkills() { return (loadYaml('skills.yaml') as any[]) || []; }
export function getExperiences() { return (loadYaml('experiences.yaml') as any[]) || []; }
export function getSocials() { return loadYaml('socials.yaml') || {}; }
