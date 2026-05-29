"use client"

import { useState } from "react"

import { supabase } from "@/lib/supabase"

export default function RoundPage() {
  const [currentHole, setCurrentHole] = useState(1)

  // Each hole has its own stored data
  const [holes, setHoles] = useState(
    Array.from({ length: 18 }, (_, i) => ({
      hole: i + 1,
      score: 0,
      fairway: "Yes",
      gir: "Yes",
      putts: 0
    }))
  )

  // Get current hole object
  const current = holes[currentHole - 1]

  // Update a field for the current hole
  function updateHole(field: string, value: any) {
    const updated = [...holes]

    updated[currentHole - 1] = {
      ...updated[currentHole - 1],
      [field]: value
    }

    setHoles(updated)
  }

  function nextHole() {
    if (currentHole < 18) {
      setCurrentHole(currentHole + 1)
    }
  }

  function prevHole() {
    if (currentHole > 1) {
      setCurrentHole(currentHole - 1)
    }
  }

  return (
    <main className="min-h-screen bg-black-100 flex flex-col items-center p-6">
      <div className="w-full max-w-md mt-10">

        {/* Hole Title */}
        <h1 className="text-4xl font-bold mb-8 text-center">
          Hole {currentHole}
        </h1>

        <div className="bg-black text-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">

          {/* Score */}
          <div>
            <label className="block mb-2 font-semibold">
              Score
            </label>

            <input
              type="number"
              value={current.score}
              onChange={(e) =>
                updateHole("score", Number(e.target.value))
              }
              className="w-full border p-3 rounded-xl text-white"
            />
          </div>

          {/* Fairway */}
          <div>
            <label className="block mb-2 font-semibold">
              Fairway Hit
            </label>

            <select
              value={current.fairway}
              onChange={(e) =>
                updateHole("fairway", e.target.value)
              }
              className="w-full border p-3 rounded-xl text-white"
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* GIR */}
          <div>
            <label className="block mb-2 font-semibold">
              Green in Regulation
            </label>

            <select
              value={current.gir}
              onChange={(e) =>
                updateHole("gir", e.target.value)
              }
              className="w-full border p-3 rounded-xl text-white"
            >
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
              value={current.putts}
              onChange={(e) =>
                updateHole("putts", Number(e.target.value))
              }
              className="w-full border p-3 rounded-xl text-white"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={prevHole}
              className="bg-gray-600 text-white py-3 rounded-xl font-bold w-full"
            >
              Previous
            </button>

            <button
              onClick={nextHole}
              className="bg-green-900 text-white py-3 rounded-xl font-bold w-full"
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </main>
  )
}