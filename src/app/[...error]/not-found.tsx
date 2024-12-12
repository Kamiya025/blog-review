import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-xl text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  )
}