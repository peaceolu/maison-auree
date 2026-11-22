import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

const links = [
  ['Shop', 'shop'],
  ['Collections', 'bestsellers'],
  ['Our Philosophy', 'philosophy'],
  ['Journal', 'journal'],
]

const iconBtn = 'relative flex h-10 w-10 items-center justify-center transition-colors hover:text-taupe'

function Logo({ className = '' }: { className?: string }) {
  return (
    <a
      href="#"
      className={`whitespace-nowrap font-serif tracking-[0.2em] text-espresso sm:tracking-[0.3em] lg:tracking-[0.35em] ${className}`}
    >
      MAISON<span className="italic tracking-normal"> Aurée</span>
    </a>
  )
}

export default function Navbar() {
  const { count, setOpen, add } = useCart()
  const [menu, setMenu] = useState(false)
  const [search, setSearch] = useState(false)
  const [q, setQ] = useState('')

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenu(false)
        setSearch(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menu])

  const go = (id: string) => {
    setMenu(false)
    setSearch(false)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return
      const offset = window.innerWidth >= 768 ? 80 : 64
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
    }, 60)
  }

  const results = q
    ? products.filter((p) => (p.name + p.category).toLowerCase().includes(q.toLowerCase()))
    : []

  return (
    <>
      <div className="bg-espresso px-4 py-2 text-center text-[9px] uppercase tracking-[0.18em] text-champagne sm:text-[10px] sm:tracking-[0.3em]">
        Complimentary shipping on orders above $150
      </div>

      <header className="sticky top-0 z-40 border-b border-champagne/40 bg-ivory/95 backdrop-blur">
        <nav className="mx-auto grid h-16 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 md:h-20 lg:px-12">
          {/* Left: hamburger (mobile/tablet) or links (desktop) */}
          <div className="flex items-center">
            <button className={`${iconBtn} -ml-2 lg:hidden`} aria-label="Open menu" onClick={() => setMenu(true)}>
              <Menu size={22} />
            </button>
            <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
              {links.map(([label, id]) => (
                <li key={id}>
                  <button
                    onClick={() => go(id)}
                    className="text-[11px] uppercase tracking-[0.25em] transition-colors hover:text-taupe"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Centre: logo */}
          <Logo className="text-xl sm:text-2xl lg:text-3xl" />

          {/* Right: icons */}
          <div className="flex items-center justify-end sm:gap-1">
            <button className={iconBtn} aria-label="Search" onClick={() => setSearch((s) => !s)}>
              <Search size={19} />
            </button>
            <button className={`${iconBtn} hidden sm:flex`} aria-label="Account">
              <User size={19} />
            </button>
            <button className={`${iconBtn} -mr-2 sm:mr-0`} aria-label="Open bag" onClick={() => setOpen(true)}>
              <ShoppingBag size={19} />
              {count > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-espresso px-1 text-[9px] text-ivory">
                  {count}
                </span>
              )}
            </button>
          </div>
        </nav>

        {search && (
          <div className="max-h-[70vh] overflow-y-auto border-t border-champagne/40 px-4 py-4 sm:px-6 lg:px-12">
            <div className="mx-auto flex max-w-[1440px] items-center gap-3">
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search the collection"
                className="min-w-0 flex-1 bg-transparent font-serif text-xl outline-none placeholder:text-taupe sm:text-2xl"
              />
              <button aria-label="Close search" onClick={() => { setSearch(false); setQ('') }}>
                <X size={18} />
              </button>
            </div>
            {results.map((p) => (
              <button
                key={p.id}
                onClick={() => { add(p); setSearch(false); setQ('') }}
                className="mx-auto mt-3 flex w-full max-w-[1440px] justify-between gap-4 py-1 text-left text-sm"
              >
                <span>{p.name}</span>
                <span className="shrink-0 text-taupe">${p.price} · Add</span>
              </button>
            ))}
            {q && results.length === 0 && <p className="mt-3 text-sm text-taupe">No products found.</p>}
          </div>
        )}
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            className="fixed inset-0 z-50 flex h-dvh flex-col bg-ivory px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex h-16 items-center justify-between md:h-20">
              <Logo className="text-xl sm:text-2xl" />
              <button className={`${iconBtn} -mr-2`} aria-label="Close menu" onClick={() => setMenu(false)}>
                <X size={22} />
              </button>
            </div>
            <ul className="mt-10 space-y-6 sm:mt-14 sm:space-y-8">
              {links.map(([label, id], i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.6 }}
                >
                  <button onClick={() => go(id)} className="font-serif text-4xl sm:text-5xl">
                    {label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <p className="mt-auto pb-8 text-[10px] uppercase tracking-[0.25em] text-taupe">
              Complimentary shipping above $150
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}