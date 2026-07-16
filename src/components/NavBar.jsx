import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    function handleLinkClick() {
        setOpen(false)
    }

    return (
        <nav className="nav">
            <Link to="/" className="nav-name" onClick={handleLinkClick}>welcome</Link>
            <div className="nav-menu" ref={menuRef}>
                <button
                    className="nav-more"
                    onClick={() => setOpen(o => !o)}
                    aria-expanded={open}
                    aria-label="Navigation menu"
                >
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                </button>
                {open && (
                    <div className="nav-dropdown">
                        <Link to="/" onClick={handleLinkClick}>Welcome</Link>
                        <Link to="/about" onClick={handleLinkClick}>About</Link>
                        <Link to="/media" onClick={handleLinkClick}>Media</Link>
                        <Link to="/training" onClick={handleLinkClick}>Training</Link>
                        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}
