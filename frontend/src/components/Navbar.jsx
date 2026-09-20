import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const navClass = ({ isActive }) => isActive ? 'active font-semibold' : ''

  return (
    <header className="navbar bg-base-100 border-b border-base-300 px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-square lg:hidden" aria-label="Open navigation menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8M4 18h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg">
            <li><NavLink to="/" className={navClass}>Home</NavLink></li>
            <li><NavLink to="/vendor/dashboard" className={navClass}>Vendor dashboard</NavLink></li>
            <li><NavLink to="/admin/dashboard" className={navClass}>Admin dashboard</NavLink></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl tracking-tight"><span className="badge badge-success text-base-100 font-bold">G</span> GullyCart</Link>
      </div>
      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1">
          <li><NavLink to="/" className={navClass}>Home</NavLink></li>
          <li><NavLink to="/vendor/dashboard" className={navClass}>Vendor dashboard</NavLink></li>
          <li><NavLink to="/admin/dashboard" className={navClass}>Admin dashboard</NavLink></li>
        </ul>
      </nav>
      <div className="navbar-end gap-2">
        <Link to="/login" className="btn btn-ghost btn-sm">Log in</Link>
        <Link to="/signup" className="btn btn-success btn-sm">Sign up</Link>
      </div>
    </header>
  )
}

export default Navbar