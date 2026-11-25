import { ArrowRight, Download, Menu, X, Zap } from 'lucide-react'
import { navLinks } from '../data/portfolio'

type HeaderProps = {
  mobileMenuOpen: boolean
  onToggleMenu: () => void
  onCloseMenu: () => void
  onOpenCv: () => void
}

export function Header({ mobileMenuOpen, onToggleMenu, onCloseMenu, onOpenCv }: HeaderProps) {
  return (
    <header className="site-header">
      <nav className="floating-nav" aria-label="Navigation principale">
        <button type="button" className="nav-menu-button" onClick={onToggleMenu} aria-expanded={mobileMenuOpen}>
          <Menu size={16} />
          <span>Menu</span>
        </button>
        <a href="#accueil" className="nav-mark" aria-label="Retour à l’accueil">
          <Zap size={14} fill="currentColor" />
        </a>
        <a href="#contact" className="nav-contact">
          <span>Contact</span>
          <ArrowRight size={13} />
        </a>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="drawer-close" onClick={onCloseMenu} aria-label="Fermer le menu">
            <X size={24} />
          </button>
          <div className="drawer-links">
            <p>Manonfi Stanislas AGOUNFON</p>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={onCloseMenu}>
                {link.name}
              </a>
            ))}
          </div>
          <button type="button" className="button button-primary" onClick={() => { onCloseMenu(); onOpenCv() }}>
            <Download size={16} />
            Consulter le CV
          </button>
        </div>
      )}
    </header>
  )
}
