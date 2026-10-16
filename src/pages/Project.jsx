import { useParams, Link } from 'react-router-dom'

function Project() {
  const { slug } = useParams()

  return (
    <section className="relative flex flex-col items-center justify-center flex-grow gap-6 px-5 py-12 text-center">
      <Link
        to="/"
        aria-label="Back to home"
        className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full text-[var(--text-h)] hover:bg-gray-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </Link>
      <h1 className="text-[var(--text-h)]">{slug}</h1>
      <p className="text-[var(--text)]">This page is a placeholder. Project details coming soon.</p>
    </section>
  )
}

export default Project
