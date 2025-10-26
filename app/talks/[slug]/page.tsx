import { getDoc, getSectionSlugs } from '@/lib/md';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const slugs = await getSectionSlugs('talks');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const doc = await getDoc('talks', params.slug);
  return { title: doc?.data?.title || 'talks_TITLE' };
}

export default async function DocPage({ params }: { params: { slug: string } }) {
  const doc = await getDoc('talks', params.slug);
  if (!doc) return <div>Não encontrado.</div>;
  return (
    <article className="prose max-w-none">
      <h1 className="text-3xl font-bold text-black-900">{doc.data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: doc.contentHtml }} />
      <hr className="my-6" />
      <pre className="text-xs bg-black-50 p-3 rounded ring-1 ring-black-100">{JSON.stringify(doc.data, null, 2)}</pre>
    </article>
  );
}
