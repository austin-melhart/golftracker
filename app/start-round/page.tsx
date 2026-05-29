export default function StartRoundPage() {
    return (
      <main className="min-h-screen bg-green-900 text-white flex flex-col items-center p-6">
        <div className="w-full max-w-md mt-20">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Start Round
          </h1>
  
          <div className="flex flex-col gap-6">
  
            {/* Course Selection */}
            <div>
              <label className="block mb-2 text-lg font-semibold">
                Course
              </label>
  
              <select className="w-full p-3 rounded-xl text-black">
                <option>Palouse Ridge</option>
                <option>Augusta National</option>
                <option>Pebble Beach</option>
              </select>
            </div>
  
            {/* Tee Selection */}
            <div>
              <label className="block mb-2 text-lg font-semibold">
                Tee Box
              </label>
  
              <select className="w-full p-3 rounded-xl text-black">
                <option>Blue</option>
                <option>White</option>
                <option>Gold</option>
              </select>
            </div>
  
            {/* Date Input */}
            <div>
              <label className="block mb-2 text-lg font-semibold">
                Date
              </label>
  
              <input
                type="date"
                className="w-full p-3 rounded-xl text-black"
              />
            </div>
  
            {/* Begin Round Button */}
            <button className="bg-white text-green-900 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition">
              Begin Round
            </button>
  
          </div>
        </div>
      </main>
    )
  }