import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative overflow-hidden">
      {/* Light Mode Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat dark:hidden"
        style={{
          backgroundImage: `url('https://i.imgur.com/Xp9jO5H.png')`,
        }}
      />

      {/* Dark Mode Background - placeholder for now */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat hidden dark:block"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('https://i.imgur.com/placeholder-dark.jpg')`,
        }}
      />

      {/* Gentle overlay to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-gray-100/50 dark:via-gray-900/60 dark:to-gray-900 pointer-events-none" />

      <ThemeToggle />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-yellow-500 bg-clip-text text-transparent">
          Forge & Flame
        </h1>
        <p className="text-xl md:text-3xl max-w-4xl mb-12 text-gray-800 dark:text-gray-200">
          The ultimate home for your D&D campaigns. Build characters, roll dice, share stories — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="px-10 py-4 text-lg font-semibold bg-orange-600 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400 text-white rounded-lg shadow-xl transition">
            Start Your Adventure
          </button>
          <button className="px-10 py-4 text-lg font-semibold border-2 border-orange-600 dark:border-orange-400 hover:bg-orange-600/20 dark:hover:bg-orange-400/20 rounded-lg transition">
            Join the Guild
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-800 dark:text-gray-100">
          Everything Your Table Needs
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl border border-orange-200 dark:border-orange-900 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-orange-600 dark:text-orange-400">Character Builder</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Intuitive sheets with auto-calculations, spell tracking, and inventory management.
            </p>
          </div>
          <div className="p-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl border border-orange-200 dark:border-orange-900 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-orange-600 dark:text-orange-400">Dice Roller</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Animated rolls with advantage/disadvantage, modifiers, and full history.
            </p>
          </div>
          <div className="p-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl border border-orange-200 dark:border-orange-900 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-orange-600 dark:text-orange-400">Campaign Hub</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Shared notes, maps, session recaps, and party chat — keep everyone in sync.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}