import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h2>
        <p className="text-purple-200 mb-8">The page you are looking for does not exist.</p>
        <Link 
          href="/" 
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

