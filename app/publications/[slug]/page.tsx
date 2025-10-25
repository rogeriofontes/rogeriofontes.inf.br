import { getDoc, getSectionSlugs } from '@/lib/md';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const slugs = await getSectionSlugs('publications');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const doc = await getDoc('publications', params.slug);
  return { title: doc?.data?.title || 'publications_TITLE' };
}

export default async function DocPage({ params }: { params: { slug: string } }) {
  const doc = await getDoc('publications', params.slug);
  if (!doc) return <div>Não encontrado.</div>;
  return (
    <article className="prose max-w-none">
      <h1 className="text-3xl font-bold text-blue-900">{doc.data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: doc.contentHtml }} />
      <hr className="my-6" />
      <pre className="text-xs bg-blue-50 p-3 rounded ring-1 ring-blue-100">{JSON.stringify(doc.data, null, 2)}</pre>
    </article>
  );
}
