function Home() {
  const buttonClass = "bg-sky-500 hover:bg-sky-700 rounded-3xl w-full h-36 flex items-center justify-center border-none"

  return (
    <>
    <div class="grow flex flex-col justify-center">
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <button class={buttonClass}>Project1</button>
        <button class={buttonClass}>Project1</button>
        <button class={buttonClass}>Project1</button>
        <button class={buttonClass}>Project1</button>
        <button class={buttonClass}>Project1</button>
        <button class={buttonClass}>Project1</button>
      </div>
    </div>

    </>
  )
}

export default Home
