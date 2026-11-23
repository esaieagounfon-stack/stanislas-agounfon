import { useState } from 'react'
import { Header } from './components/Header'
import { CvModal } from './components/CvModal'
import {
  ContactSection,
  CvSection,
  EducationSection,
  Experiences,
  Expertise,
  Footer,
  Hero,
  Presentation,
  ToolsSection,
} from './components/Sections'

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
      <Footer />
      <CvModal open={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  )
}
