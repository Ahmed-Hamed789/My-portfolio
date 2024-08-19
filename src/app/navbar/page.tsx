// src/app/navbar/Navbar.tsx
import './page.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/">
            <span className="text-white font-bold text-2xl">Portfolio</span>
          </Link>
        </div>
        <div className="navbar-links">
          <Link href="/about" className="navbar-link">
            About Me
          </Link>
          <Link href="/projects" className="navbar-link">
            Projects
          </Link>
          <Link href="/contact" className="navbar-link">
            Contact Me
          </Link>
          <Link href="/exp" className="navbar-link">
            Experience
          </Link>
        </div>
      </div>
    </nav>
  );
}
