import { Download, FileText, X } from 'lucide-react'

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
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="cv-modal-title">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Fermer">
          <X size={20} />
        </button>
        <div className="modal-heading">
          <div className="icon-box"><FileText size={22} /></div>
          <div>
            <h3 id="cv-modal-title">Curriculum Vitae Certifié</h3>
            <p>Manonfi Stanislas AGOUNFON</p>
          </div>
        </div>
        <div className="cv-summary">
          <p>Informations certifiées :</p>
          <ul>
            <li><strong>Profession :</strong> Électromécanicien</li>
            <li><strong>Lieu :</strong> Sékou, Bénin</li>
            <li><strong>Contact :</strong> +229 01 41 57 48 43 / +229 01 98 23 71 68</li>
            <li><strong>Diplôme récent :</strong> Licence Professionnelle Équipement Motorisé (2024)</li>
            <li><strong>Poste actuel :</strong> Électricien de maintenance industrielle à BTC</li>
          </ul>
        </div>
        <div className="modal-actions">
          <a className="button button-primary" href="/documents/cv-stanislas-agounfon.pdf" download="CV_Manonfi_Stanislas_AGOUNFON.pdf">
            <Download size={16} />
            Télécharger le PDF
          </a>
          <button type="button" className="button button-secondary" onClick={onClose}>Fermer</button>
        </div>
      </div>
    </div>
  )
}
