export default function Header() {
  return (
    <header className="sticky top-0 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-display text-2xl">DeWork Pulse</h1>
        <span className="flex items-center gap-2 text-sm text-white/70">
          <span className="pulse" /> Live
        </span>
      </div>
    </header>
  );
}
