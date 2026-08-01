import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <nav
        className="relative left-1/2 w-screen -translate-x-1/2 h-28 bg-gray-200"
        style={{
          clipPath:
            'polygon(0 0, 30% 0, 42% 45%, 62% 45%, 74% 0, 100% 0, 100% 100%, 0 100%)',
        }}
      >
        <div className="mx-auto flex h-full max-w-[1126px] items-end justify-center gap-6 pb-5">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'text-[var(--accent)]' : 'text-[var(--text)]'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-[var(--accent)]' : 'text-[var(--text)]'
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  )
}

export default App
