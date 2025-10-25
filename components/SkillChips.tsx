type Props = { group: string; items: string[] };
export default function SkillChips({ group, items }: Props) {
  return (
    <div className="card">
      <h3 className="font-semibold mb-2 text-blue-900">{group}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <span key={it} className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm ring-1 ring-blue-100">{it}</span>
        ))}
      </div>
    </div>
  );
}
