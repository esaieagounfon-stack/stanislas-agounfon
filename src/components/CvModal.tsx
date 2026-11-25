import { Download, ExternalLink, FileText, X } from 'lucide-react'

const CV_PATH = '/documents/CV_Stanislas_AGOUNFON.pdf'

type CvModalProps = {
  open: boolean
  onClose: () => void
}

export function CvModal({ open, onClose }: CvModalProps) {
  if (!open) return null

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <div className="modal-card cv-modal-card" role="dialog" aria-modal="true" aria-labelledby="cv-modal-title">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Fermer">
          <X size={20} />
        </button>
        <div className="modal-heading">
          <div className="icon-box"><FileText size={22} /></div>
          <div>
            <h3 id="cv-modal-title">Curriculum Vitae</h3>
            <p>Manonfi Stanislas AGOUNFON</p>
          </div>
        </div>
        <iframe
          className="cv-reader"
          src={`${CV_PATH}#view=FitH`}
          title="CV complet de Manonfi Stanislas Agounfon"
        />
        <a className="cv-open-link" href={CV_PATH} target="_blank" rel="noreferrer">
          <ExternalLink size={14} /> Ouvrir le document dans un nouvel onglet
        </a>
        <div className="modal-actions">
          <a className="button button-primary" href={CV_PATH} download="CV_Stanislas_AGOUNFON.pdf">
            <Download size={16} />
            Télécharger le PDF
          </a>
          <button type="button" className="button button-secondary" onClick={onClose}>Fermer</button>
        </div>
      </div>
    </div>
  )
}
