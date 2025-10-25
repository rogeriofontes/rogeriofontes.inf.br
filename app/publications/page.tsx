import Link from 'next/link';
import { listDocs } from '@/lib/md';

export default async function Page() {
  const docs = await listDocs('publications');
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Publicações</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {docs.map(d => (
          <Link key={d.slug} className="card hover:shadow-md transition" href={`/publications/${d.slug}`}>
            <h2 className="text-xl font-semibold text-blue-800">{d.data.title}</h2>
            <p className="text-sm mt-2">{d.data.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
