'use client'

export default function Error({
  reset,
}: {
  reset: () => void
}) {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

