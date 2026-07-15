function Home() {
  const buttonClass = "group relative bg-sky-500 border-6 border-transparent hover:border-blue-500 hover:z-10 rounded-3xl w-full h-36"
  const labelClass = "absolute -left-3 -right-3 top-[calc(100%+14px)] flex justify-center py-3 bg-white text-[var(--text-h)] font-medium rounded-xl border-2 border-black [clip-path:inset(0_0_100%_0)] group-hover:[clip-path:inset(0_0_0%_0)] transition-[clip-path] duration-150 ease-out group-hover:duration-300"

  return (
    <>
    <div className="grow flex flex-col justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <button className={buttonClass}><span className={labelClass}>Project1</span></button>
        <button className={buttonClass}><span className={labelClass}>Project1</span></button>
        <button className={buttonClass}><span className={labelClass}>Project1</span></button>
        <button className={buttonClass}><span className={labelClass}>Project1</span></button>
        <button className={buttonClass}><span className={labelClass}>Project1</span></button>
        <button className={buttonClass}><span className={labelClass}>Project1</span></button>
        <button className={buttonClass}><span className={labelClass}>Project1</span></button>
        <button className={buttonClass}><span className={labelClass}>Project1</span></button>
        <button className={buttonClass}><span className={labelClass}>Project1</span></button>
      </div>
    </div>

    </>
  )
}

export default Home
