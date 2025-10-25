import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Rogério Fontes Tomaz',
  description: 'Arquiteto de Software • Java & Go • Cloud & Segurança',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-white text-gray-900">
        <header className="navbar">
          <div className="navbar-inner">
            <Link className="brand" href="/">Rogério Fontes Tomaz</Link>
            <nav className="nav flex gap-5">
              <Link href="/publications">Publicações</Link>
              <Link href="/talks">Palestras</Link>
              <Link href="/projects">Projetos</Link>
              <Link href="/communities">Comunidades</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">Sobre</Link>
            </nav>
          </div>
        </header>
        <main className="container py-8">{children}</main>
        <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Rogério Fontes Tomaz</footer>
      </body>
    </html>
  );
}
