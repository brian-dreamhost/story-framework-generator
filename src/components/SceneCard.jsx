export default function SceneCard({ beat, text }) {
  return (
    <div className="flex gap-3 py-3 border-b border-metal/10 last:border-0">
      <div className="shrink-0 w-28 sm:w-36">
        <span className="text-xs font-semibold text-turtle uppercase tracking-wider leading-tight block">{beat}</span>
      </div>
      <p className="text-sm text-cloudy flex-1 leading-relaxed">{text}</p>
    </div>
  );
}
