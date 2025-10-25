# Next.js + Markdown Site (tema branco + azul)

## Rodar
```bash
npm install
npm run dev
```

## Estrutura
- `app/` (App Router)
- `content/` (Markdown: publications, talks, projects, blog)
- `data/` (YAML: profile, skills, experiences, socials)
- `lib/` (parsers de MD/YAML)
- `public/images/avatar.svg` (avatar placeholder)

## Dicas
- Se quiser exportar estático: em `next.config.mjs` adicione `output: 'export'` e rode `next build && npx next export`.

---
npm run build
npx next export

npm install
npm run export
npx serve out  # (opcional) para ver a versão estática

---
git init
git add .
git commit -m "site: next.js + markdown"
gh repo create REPO --public --source=. --remote=origin --push
# ou crie manualmente no GitHub e:
# git remote add origin git@github.com:SEU-USUARIO/REPO.git
# git push -u origin main
