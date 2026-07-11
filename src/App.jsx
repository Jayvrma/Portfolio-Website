import { Routes, Route, NavLink } from 'react-router'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <nav className="flex gap-6 px-5 py-4 border-t border-[var(--border)]">
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
      </nav>
    </>
  )
}

export default App
