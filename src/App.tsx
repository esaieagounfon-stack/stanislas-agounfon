import { useState } from 'react'
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

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cvModalOpen, setCvModalOpen] = useState(false)

  return (
    <div className="app-shell">
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
        brand="AGOUNFON"
        copyright={`© ${new Date().getFullYear()} Manonfi Stanislas AGOUNFON`}
        tagline={'Électromécanicien industriel\nSékou, Bénin'}
        height="520px"
        drawerHeight="clamp(190px, 28vw, 320px)"
        drawerImage="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=85&w=1942&auto=format&fit=crop"
      />
      <CvModal open={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  )
}
