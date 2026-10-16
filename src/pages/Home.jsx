import { Link } from 'react-router-dom'

const projects = [
  { slug: 'crochet-tools', name: 'Crochet tools', image: '/Portfolio-Website/crochetToolsImage.png' },
  { slug: 'project2', name: 'Project2', image: '/Portfolio-Website/placeholder.svg' },
  { slug: 'project3', name: 'Project3', image: '/Portfolio-Website/placeholder.svg' },
  { slug: 'project4', name: 'Project4', image: '/Portfolio-Website/placeholder.svg' },
  { slug: 'project5', name: 'Project5', image: '/Portfolio-Website/placeholder.svg' },
  { slug: 'project6', name: 'Project6', image: '/Portfolio-Website/placeholder.svg' },
  { slug: 'project7', name: 'Project7', image: '/Portfolio-Website/placeholder.svg' },
  { slug: 'project8', name: 'Project8', image: '/Portfolio-Website/placeholder.svg' },
  { slug: 'project9', name: 'Project9', image: '/Portfolio-Website/placeholder.svg' },
]

function Home() {
  const buttonClass = "group relative block bg-sky-500 border-6 border-transparent hover:border-blue-500 hover:z-10 rounded-3xl w-full h-28 sm:h-36 md:h-[min(9rem,calc((100svh-15.5rem)/3))]"
  const imageClass = "w-full h-full object-cover object-left-top rounded-[1.125rem]"
  const labelClass = "absolute -left-3 -right-3 top-[calc(100%+14px)] flex justify-center py-2 sm:py-3 text-sm sm:text-base bg-white text-[var(--text-h)] font-medium rounded-xl border-2 border-black [clip-path:inset(0_0_100%_0)] group-hover:[clip-path:inset(0_0_0%_0)] transition-[clip-path] duration-150 ease-out group-hover:duration-300"

  return (
    <>
    <div className="grow flex flex-col justify-center px-4 pt-6 pb-24">
      <div className="grid grid-cols-3 gap-2">
        {projects.map((project) => (
          <Link key={project.slug} to={`/projects/${project.slug}`} className={buttonClass}>
            <img src={project.image} alt={project.name} className={imageClass} />
            <span className={labelClass}>{project.name}</span>
          </Link>
        ))}
      </div>
    </div>

    </>
  )
}

export default Home
