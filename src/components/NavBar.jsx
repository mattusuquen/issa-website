import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
    const [open, setOpen] = useState(false)
    const { pathname } = useLocation()
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
        <nav className="sticky top-0 z-100 flex h-15 items-center justify-between border-b-3 border-terra bg-cream px-6 py-12 max-md:px-6 max-md:py-0">
            <Link to="/" className="font-serif text-[1.15rem] text-dark uppercase no-underline max-sm:text-xs" onClick={handleLinkClick}>
                {pathname === '/' ? 'welcome' : 'Isabelle Usuquen'}
            </Link>
            <div className="relative" ref={menuRef}>
                <button
                    className="group flex cursor-pointer flex-col justify-center gap-1.5 border-none bg-none p-1"
                    onClick={() => setOpen(o => !o)}
                    aria-expanded={open}
                    aria-label="Navigation menu"
                >
                    <span className="block h-[1.5px] w-5.5 bg-dark transition-colors duration-150 group-hover:bg-terra" />
                    <span className="block h-[1.5px] w-5.5 bg-dark transition-colors duration-150 group-hover:bg-terra" />
                    <span className="block h-[1.5px] w-5.5 bg-dark transition-colors duration-150 group-hover:bg-terra" />
                </button>
                {open && (
                    <div className="absolute top-[calc(100%+12px)] right-0 flex min-w-40 flex-col gap-3.5 bg-cream px-7 py-5 shadow-[0_4px_24px_rgba(43,26,20,0.08)] [&_a]:whitespace-nowrap [&_a]:text-sm [&_a]:tracking-[0.04em] [&_a]:text-dark [&_a]:no-underline [&_a]:transition-colors [&_a]:duration-150 [&_a:hover]:text-terra">
                        <Link to="/" onClick={handleLinkClick}>Welcome</Link>
                        <Link to="/about" onClick={handleLinkClick}>About</Link>
                        <Link to="/media" onClick={handleLinkClick}>Media</Link>
                        <Link to="/gallery" onClick={handleLinkClick}>Gallery</Link>
                        <Link to="/hr" onClick={handleLinkClick}>H&amp;R</Link>
                        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}
