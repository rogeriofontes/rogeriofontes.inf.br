import Link from 'next/link';
import { listDocs } from '@/lib/md';

export default async function Page() {
  const docs = await listDocs('communities');
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Comunidades</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {docs.map(d => (
          <div key={d.slug} className="card hover:shadow-md transition">
            {/* título é o único Link interno */}
            <Link
              href={`/communities/${d.slug}`}
              className="text-xl font-semibold text-blue-800 hover:underline block"
            >
              {d.data.title}
            </Link>

            {d.data.summary && <p className="text-sm mt-2">{d.data.summary}</p>}

            {/* URLs externas podem ser <a> tranquilamente */}
            {d.data.url && (
              <a
                href={d.data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-xs text-blue-500 underline"
              >
                {d.data.url}
              </a>
            )}

            {d.data.meetup && (
              <a
                href={d.data.meetup}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-xs text-blue-500 underline"
              >
                {d.data.meetup}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
