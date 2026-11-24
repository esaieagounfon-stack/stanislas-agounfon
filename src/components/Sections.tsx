import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  Activity, Check, CheckCircle, ChevronRight, Compass, Download, Eye,
  Mail, MapPin, MessageSquare, Phone, Send, Settings, Terminal,
} from 'lucide-react'
import { education, experiences, mediaShowcase, skillCategories, skills, tools } from '../data/portfolio'
import type { ContactForm } from '../types'

type CvProps = { onOpenCv: () => void }

export function Hero({ onOpenCv }: CvProps) {
  return (
    <section id="accueil" className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="status-pill"><span /> Électromécanicien • Bénin Textile Corporation</div>
        <h1>Électro<br /><em>Mécanisme</em></h1>
        <p>Expertise en maintenance préventive et corrective des installations électriques industrielles HT / BT / TBT et équipements motorisés.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">Me contacter</a>
          <button type="button" className="button button-glass" onClick={onOpenCv}><Download size={16} />Consulter le CV PDF</button>
        </div>
      </div>
      <div className="side-badge" aria-hidden="true">
        <span>BELGRADE</span>
        <strong>MANONFI STANISLAS AGOUNFON</strong>
        <i />
      </div>
    </section>
  )
}

export function Presentation() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = mediaShowcase[activeIndex]

  return (
    <section id="presentation" className="section presentation-section">
      <div className="container">
        <p className="eyebrow">Stanislas Agounfon • Électromécanique</p>
        <div className="presentation-grid">
          <div className="presentation-copy">
            <h2>L’expertise technique et la <em>maintenance industrielle</em> s’appuient sur une rigueur exemplaire.</h2>
            <p>Basé à Sékou (Bénin) et en poste à <strong>Bénin Textile Corporation (BTC)</strong>, Stanislas intervient sur le diagnostic, la prévention des pannes, les transformateurs, les armoires de distribution et les sources de secours.</p>
            <div className="inline-actions">
              <a className="button button-secondary" href="#expertises"><Compass size={16} />Explorer en détail</a>
              <span>Diplômé ENSGEP 2024</span>
            </div>
          </div>
          <div className="showcase-card">
            <div className="showcase-image">
              <img src={active.image} alt={active.title} />
              <span className="image-tag">{active.tag}</span>
              <div className="image-caption"><p>{active.subtitle}</p><h3>{active.title}</h3></div>
            </div>
            <div className="thumbnails">
              {mediaShowcase.map((item, index) => (
                <button type="button" key={item.title} onClick={() => setActiveIndex(index)} className={index === activeIndex ? 'active' : ''} aria-label={`Afficher ${item.title}`}>
                  <img src={item.image} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Expertise() {
  const [activeTab, setActiveTab] = useState('all')
  const filtered = activeTab === 'all' ? skills : skills.filter((skill) => skill.category === activeTab)

  return (
    <section id="expertises" className="section section-dark">
      <div className="container">
        <SectionHeading overline="Compétences opérationnelles" title="Domaines d’expertise technique" />
        <div className="filter-tabs" role="tablist" aria-label="Filtrer les compétences">
          {skillCategories.map((category) => (
            <button type="button" role="tab" aria-selected={activeTab === category.id} key={category.id} onClick={() => setActiveTab(category.id)} className={activeTab === category.id ? 'active' : ''}>
              {category.label}
            </button>
          ))}
        </div>
        <div className="skills-grid">
          {filtered.map((skill) => {
            const Icon = skill.icon
            return (
              <article className="skill-card" key={skill.title}>
                <div className="icon-box"><Icon size={24} /></div>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
                <span>{skill.highlight}</span>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Experiences() {
  return (
    <section id="experiences" className="section">
      <div className="container">
        <SectionHeading overline="Chronologie de terrain" title="Expériences professionnelles" />
        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-card" key={`${experience.period}-${experience.title}`}>
              <header>
                <div>
                  <span className="period">{experience.period}</span>
                  <h3>{experience.title}</h3>
                  <p>{experience.company} • <em>{experience.location}</em></p>
                </div>
                <span className="badge">{experience.badge}</span>
              </header>
              <p className="experience-description">{experience.description}</p>
              <h4>Interventions & missions exécutées</h4>
              <div className="missions-grid">
                {experience.missions.map((mission) => (
                  <div key={mission}><ChevronRight size={16} /><span>{mission}</span></div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EducationSection() {
  return (
    <section id="formations" className="section section-dark">
      <div className="container">
        <SectionHeading overline="Parcours d’études" title="Formations & diplômes" />
        <div className="education-grid">
          {education.map((item) => {
            const Icon = item.icon
            return (
              <article className="education-card" key={`${item.year}-${item.degree}`}>
                <div className="education-top"><span>{item.year}</span><div className="icon-box small"><Icon size={20} /></div></div>
                <h3>{item.degree}</h3>
                <p className="school">{item.school}</p>
                <p>{item.details}</p>
                <div className="validated"><span>Diplôme validé</span><CheckCircle size={16} /></div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function ToolsSection() {
  return (
    <section id="outils" className="section">
      <div className="container">
        <SectionHeading overline="Maîtrise logicielle & appareils" title="Outils & matériel technique" />
        <div className="tools-grid">
          {tools.map((tool) => (
            <article className="tool-card" key={tool.name}>
              <div className="icon-box small">{tool.category === 'Software' ? <Terminal size={20} /> : <Settings size={20} />}</div>
              <div><div className="tool-title"><h3>{tool.name}</h3><span>{tool.category}</span></div><p className="tool-type">{tool.type}</p><p>{tool.desc}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CvSection({ onOpenCv }: CvProps) {
  return (
    <section id="cv" className="section section-dark">
      <div className="container">
        <div className="cv-banner">
          <div>
            <span className="period">Document officiel PDF</span>
            <h2>Télécharger le CV professionnel</h2>
            <p>Consultez la synthèse complète du parcours académique, des missions chez BTC et des coordonnées professionnelles.</p>
            <div className="inline-actions">
              <button type="button" className="button button-primary" onClick={onOpenCv}><Download size={16} />Télécharger CV PDF</button>
              <button type="button" className="button button-secondary" onClick={onOpenCv}><Eye size={16} />Aperçu rapide</button>
            </div>
          </div>
          <div className="cv-file"><Terminal size={48} /><p>CV_Stanislas_AGOUNFON.pdf</p><strong>Version officielle PDF</strong></div>
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<ContactForm>({
    name: '', email: '', subject: '', requestType: 'Offre d’emploi', message: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading overline="Formulaire & contacts" title="Entrer en contact" />
        <div className="contact-grid">
          <div className="contact-details">
            <h3>Coordonnées directes</h3>
            <a href="tel:+2290141574843"><div className="icon-box small"><Phone size={19} /></div><div><span>Appel uniquement</span><strong>+229 01 41 57 48 43</strong></div></a>
            <a href="https://wa.me/2290198237168" target="_blank" rel="noreferrer"><div className="icon-box small"><MessageSquare size={19} /></div><div><span>Appel & WhatsApp</span><strong>+229 01 98 23 71 68</strong></div></a>
            <a href="mailto:manonfiagounfon@gmail.com"><div className="icon-box small"><Mail size={19} /></div><div><span>E-mail officiel</span><strong>manonfiagounfon@gmail.com</strong></div></a>
            <div><div className="icon-box small"><MapPin size={19} /></div><div><span>Résidence</span><strong>Sékou (Bénin)</strong></div></div>
          </div>
          <div className="contact-form-card">
            <h3>Envoyer une demande</h3>
            {submitted ? (
              <div className="success-message"><CheckCircle size={38} /><h4>Message prêt à être envoyé</h4><p>Merci pour votre prise de contact. Le formulaire local peut être relié à un service d’e-mail ou API.</p><button type="button" className="button button-secondary" onClick={() => setSubmitted(false)}>Nouvelle demande</button></div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>Nom complet *<input name="name" required value={formData.name} onChange={handleChange} placeholder="Nom et prénoms" /></label>
                  <label>Adresse e-mail *<input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="votre.email@domaine.com" /></label>
                </div>
                <div className="form-row">
                  <label>Type de demande *<select name="requestType" value={formData.requestType} onChange={handleChange}><option>Offre d’emploi</option><option>Prestation ou mission technique</option><option>Collaboration</option><option>Stage ou formation</option><option>Autre</option></select></label>
                  <label>Objet<input name="subject" value={formData.subject} onChange={handleChange} placeholder="Sujet de votre message" /></label>
                </div>
                <label>Message *<textarea name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="Précisez votre demande..." /></label>
                <button type="submit" className="button button-primary submit-button"><Send size={16} />Transmettre le message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ overline, title }: { overline: string; title: string }) {
  return (
    <div className="section-heading"><h2>{overline}</h2><p>{title}</p><span /></div>
  )
}
