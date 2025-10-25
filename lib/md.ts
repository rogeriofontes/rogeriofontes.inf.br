import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

export type Doc = {
  slug: string;
  contentHtml: string;
  data: Record<string, any>;
};

const CONTENT_DIR = path.join(process.cwd(), 'content');

function mdDir(section: string) {
  const dir = path.join(CONTENT_DIR, section);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir;
}

export async function getSectionSlugs(section: string): Promise<string[]> {
  const dir = mdDir(section);
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''));
}

export async function getDoc(section: string, slug: string): Promise<Doc | null> {
  const full = path.join(mdDir(section), `${slug}.md`);
  if (!fs.existsSync(full)) return null;
  const file = fs.readFileSync(full, 'utf-8');
  const { content, data } = matter(file);
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);
  return { slug, contentHtml: processed.toString(), data };
}

export async function listDocs(section: string): Promise<Doc[]> {
  const slugs = await getSectionSlugs(section);
  const docs = await Promise.all(slugs.map(s => getDoc(section, s)));
  return (docs.filter(Boolean) as Doc[]).sort((a, b) => {
    const ad = (a.data?.date ?? a.data?.year ?? '').toString();
    const bd = (b.data?.date ?? b.data?.year ?? '').toString();
    return bd.localeCompare(ad);
  });
}
