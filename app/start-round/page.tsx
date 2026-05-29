"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function StartRoundPage() {
  const router = useRouter()

  const [course, setCourse] = useState("Palouse Ridge")
  const [tee, setTee] = useState("Blue")
  const [date, setDate] = useState("")

  function beginRound() {
    // For now we just navigate
    // Later we will create a real round in Supabase here

    router.push("/round")
  }

  return (
    <main className="min-h-screen bg-green-900 text-white flex flex-col items-center p-6">
      <div className="w-full max-w-md mt-20">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Start Round
        </h1>

        <div className="flex flex-col gap-6">

          {/* Course */}
          <div>
            <label className="block mb-2 text-lg font-semibold">
              Course
            </label>

            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full p-3 rounded-xl text-black"
            >
              <option>Palouse Ridge</option>
              <option>Colfax National</option>
              <option>Saint John</option>
              <option>Idaho</option>
              <option>Sage Hills</option>
            </select>
          </div>

          {/* Tee */}
          <div>
            <label className="block mb-2 text-lg font-semibold">
              Tee Box
            </label>

            <select
              value={tee}
              onChange={(e) => setTee(e.target.value)}
              className="w-full p-3 rounded-xl text-black"
            >
              <option>Blue</option>
              <option>White</option>
              <option>Gold</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block mb-2 text-lg font-semibold">
              Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 rounded-xl text-black"
            />
          </div>

          {/* Button */}
          <button
            onClick={beginRound}
            className="bg-white text-green-900 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition w-full"
          >
            Begin Round
          </button>

        </div>
      </div>
    </main>
  )
}