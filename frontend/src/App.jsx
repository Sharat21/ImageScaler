import React, { useState } from "react"

export default function App() {
  const [file, setFile] = useState(null)
  const [scale, setScale] = useState(1.0)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) return alert("Please upload an image")

    setLoading(true)
    setResult(null)

    const formData = new FormData()
    formData.append("file", file)
    formData.append("scale", scale)

    try {
      const res = await fetch("http://127.0.0.1:8000/scale", {
        method: "POST",
        body: formData,
      })

      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      setResult(url)
    } catch (err) {
      alert("Error scaling image. Make sure backend is running.")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">🖼️ Universal Image Scaler</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="border p-3 rounded-xl shadow-inner focus:ring-2 focus:ring-purple-400"
          />

          <label className="text-sm font-semibold text-gray-700">Scale Factor (0.1–5.0)</label>
          <input
            type="number"
            step="0.1"
            min="0.1"
            max="5"
            value={scale}
            onChange={(e) => setScale(e.target.value)}
            className="border p-3 rounded-xl shadow-inner focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            className="bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all shadow-lg"
          >
            {loading ? "Processing..." : "Scale Image"}
          </button>
        </form>

        {loading && <p className="mt-4 text-gray-600">⏳ Scaling image, please wait...</p>}

        {result && (
          <div className="mt-6">
            <img src={result} alt="Scaled" className="rounded-2xl max-w-full shadow-lg mx-auto" />
            <a
              href={result}
              download="scaled.png"
              className="block mt-4 bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all font-semibold"
            >
              Download Image
            </a>
          </div>
        )}
      </div>
    </div>
  )
}