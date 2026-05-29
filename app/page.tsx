export default function Home() {
  return (
    <main className="min-h-screen bg-green-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold mb-6">
        Golf Tracker
      </h1>

      <p className="text-lg mb-10">
        Track your rounds hole by hole
      </p>

      <button className="bg-white text-green-900 px-6 py-3 rounded-xl font-semibold text-lg hover:bg-gray-200 transition">
        Start Round
      </button>
    </main>
  )
}