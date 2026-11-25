import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { CvModal } from './components/CvModal'
import {
  ContactSection,
  CvSection,
  EducationSection,
  Experiences,
  Expertise,
  Hero,
  Presentation,
  ToolsSection,
} from './components/Sections'
import PaperPlaneDrawerFooter from './components/ui/paper-plane-drawer-footer'
import FluidSim from './components/ui/fluid-trail'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cvModalOpen, setCvModalOpen] = useState(false)
  const [introVisible, setIntroVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroVisible(false), 5200)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="app-shell">
      {introVisible && (
        <button
          type="button"
          className="intro-screen"
          aria-label="Ouvrir le portfolio"
          onClick={() => setIntroVisible(false)}
        >
          <FluidSim
            palette={['#ccff00', '#99a673', '#e8eae6']}
            intensity={80}
            trailDuration={10}
            mouseRadius={18}
          />
          <div className="intro-screen-content" aria-hidden="true">
            <span>Manonfi Stanislas</span>
            <strong>AGOUNFON</strong>
            <small>Électromécanicien industriel</small>
          </div>
          <span className="intro-screen-cue">Entrer</span>
        </button>
      )}
      <Header
        mobileMenuOpen={mobileMenuOpen}
        onToggleMenu={() => setMobileMenuOpen((open) => !open)}
        onCloseMenu={() => setMobileMenuOpen(false)}
        onOpenCv={() => setCvModalOpen(true)}
      />
      <main>
        <Hero onOpenCv={() => setCvModalOpen(true)} />
        <Presentation />
        <Expertise />
        <Experiences />
        <EducationSection />
        <ToolsSection />
        <CvSection onOpenCv={() => setCvModalOpen(true)} />
        <ContactSection />
      </main>
      <PaperPlaneDrawerFooter
        brand="Stanislas Agounfon"
        copyright={`© ${new Date().getFullYear()} Manonfi Stanislas AGOUNFON`}
        tagline={'Électromécanicien industriel\nSékou, Bénin'}
        height="520px"
        drawerHeight="clamp(190px, 28vw, 320px)"
        drawerImage="/images/hero-principal-btc.jpg"
      />
      <CvModal open={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  )
}
