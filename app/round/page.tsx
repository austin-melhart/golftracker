export default function RoundPage() {
    return (
      <main className="min-h-screen bg-white-100 flex flex-col items-center p-6">
        <div className="w-full max-w-md mt-10">
  
          <h1 className="text-4xl font-bold mb-8 text-center">
            Hole 1
          </h1>
  
          <div className="bg-black rounded-2xl shadow-lg p-6 flex flex-col gap-6">
  
            {/* Score */}
            <div>
              <label className="block mb-2 font-semibold">
                Score
              </label>
  
              <input
                type="number"
                className="w-full border p-3 rounded-xl"
              />
            </div>
  
            {/* Fairway */}
            <div>
              <label className="block mb-2 font-semibold">
                Fairway Hit
              </label>
  
              <select className="w-full border p-3 rounded-xl">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
  
            {/* GIR */}
            <div>
              <label className="block mb-2 font-semibold">
                Green in Regulation
              </label>
  
              <select className="w-full border p-3 rounded-xl">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
  
            {/* Putts */}
            <div>
              <label className="block mb-2 font-semibold">
                Putts
              </label>
  
              <input
                type="number"
                className="w-full border p-3 rounded-xl"
              />
            </div>
  
            <button className="bg-green-900 text-white py-4 rounded-xl font-bold">
              Next Hole
            </button>
  
          </div>
        </div>
      </main>
    )
  }