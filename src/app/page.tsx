import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/20 to-gray-900" />
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Forge & Flame
        </h1>
        <p className="text-xl md:text-3xl max-w-3xl mb-10 text-gray-300">
          The ultimate D&D campaign manager. Track characters, roll dice, build worlds — all in one place.
        </p>
        <div className="flex gap-6">
          <Link
            href="/dashboard" // We'll build this later
            className="px-8 py-4 text-lg font-semibold bg-orange-600 hover:bg-orange-500 rounded-lg transition shadow-lg"
          >
            Start Your Adventure
          </Link>
          <Link
            href="/login"
            className="px-8 py-4 text-lg font-semibold border-2 border-orange-600 hover:bg-orange-600/20 rounded-lg transition"
          >
            Sign In
          </Link>
        </div>
        {/* Subtle ember effect */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-orange-900/30 to-transparent" />
      </section>

      {/* Features Preview */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Built for Dungeon Masters & Heroes</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 bg-gray-800 rounded-xl border border-orange-900/50">
            <h3 className="text-2xl font-semibold mb-4 text-orange-500">Character Sheets</h3>
            <p className="text-gray-400">Dynamic, editable sheets with auto-calcs for stats, spells, and inventory.</p>
          </div>
          <div className="p-8 bg-gray-800 rounded-xl border border-orange-900/50">
            <h3 className="text-2xl font-semibold mb-4 text-orange-500">Dice Roller</h3>
            <p className="text-gray-400">Beautiful animated rolls with advantage, modifiers, and history.</p>
          </div>
          <div className="p-8 bg-gray-800 rounded-xl border border-orange-900/50">
            <h3 className="text-2xl font-semibold mb-4 text-orange-500">Campaign Hub</h3>
            <p className="text-gray-400">Shared notes, maps, session recaps — keep your table in sync.</p>
          </div>
        </div>
      </section>
    </div>
  );
}