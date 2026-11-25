import {
  Activity, Award, BookOpen, Check, CheckCircle, Cpu,
  FileText, GraduationCap, Radio, ShieldCheck, Wrench, Zap, Layers,
} from 'lucide-react'
import type { Education, Experience, MediaItem, Skill, SkillCategory, Tool } from '../types'

export const navLinks = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Présentation', href: '#presentation' },
  { name: 'Expertises', href: '#expertises' },
  { name: 'Expériences', href: '#experiences' },
  { name: 'Formations', href: '#formations' },
  { name: 'Outils & Matériel', href: '#outils' },
  { name: 'CV', href: '#cv' },
  { name: 'Contact', href: '#contact' },
] as const

export const mediaShowcase: MediaItem[] = [
  {
    title: 'Maintenance Réseaux HT / BT',
    subtitle: 'Bénin Textile Corporation',
    image: '/images/apropos-portrait-armoire.jpg',
    tag: 'Électromécanique Industrielle',
  },
  {
    title: 'Diagnostic & Automatismes',
    subtitle: 'TIA Portal & Armoires de Puissance',
    image: '/images/expertise-cablage-armoire.jpg',
    tag: 'Commandes & Moteurs',
  },
  {
    title: 'Groupes Électrogènes & UPS',
    subtitle: 'Gestion des Systèmes Critiques',
    image: '/images/outils-baie-critique-ups.jpg',
    tag: 'Sécurité & Énergie',
  },
]

export const experiences: Experience[] = [
  {
    period: 'Août 2024 – Présent',
    title: 'Électricien de Maintenance Industrielle',
    company: 'Bénin Textile Corporation (BTC)',
    location: 'Sékou / Bénin',
    badge: 'Poste Actuel (CDI)',
    description: 'Je pilote la sécurité opérationnelle ainsi que la maintenance préventive et corrective de l’ensemble du parc électrique et électromécanique de l’usine.',
    missions: [
      'Je réalise la maintenance préventive et corrective des installations électriques industrielles',
      'J’exploite et maintiens les réseaux HT, BT et TBT',
      'Je suis les transformateurs, les jeux de barres et les systèmes de mise à la terre',
      'Je réalise les tests d’isolement et les mises en service d’équipements industriels',
      'Je maintiens les UPS, les groupes électrogènes et les centrales d’alarme incendie',
      'J’installe et mets en service de nouvelles lignes de production',
      'Je diagnostique les moteurs électriques et les équipements électromécaniques',
      'Je rédige mes rapports d’intervention',
      'J’applique les normes de sécurité industrielle et les procédures HSE',
    ],
  },
  {
    period: '2021 – 2024',
    title: 'Stagiaire – Maintenance Automobile',
    company: 'Atelier Technique Spécialisé',
    location: 'Bénin',
    badge: 'Stage Professionnel',
    description: 'J’ai réalisé des diagnostics techniques sur les systèmes mécaniques lourds et électroniques embarqués.',
    missions: [
      'J’ai effectué la maintenance préventive et la réparation de véhicules légers',
      'J’ai diagnostiqué les calculateurs moteur et les capteurs électroniques',
      'J’ai réalisé des soudures à l’arc électrique et des soudures autogènes',
    ],
  },
  {
    period: '2019 – 2021',
    title: 'Stagiaire – Projets Techniques & Bâtiment',
    company: 'Entreprise d’Électricité & Climatisation',
    location: 'Bénin',
    badge: 'Stage Initial',
    description: 'J’ai réalisé des installations électriques tertiaires et assuré la maintenance de systèmes thermiques.',
    missions: [
      'J’ai réalisé des installations électriques conformes',
      'J’ai installé et entretenu des systèmes de climatisation',
      'J’ai câblé et paramétré des antennes satellitaires',
    ],
  },
]

export const education: Education[] = [
  { year: '2024', degree: 'Licence Professionnelle en Équipement Motorisé (EM)', school: 'École Nationale Supérieure de Génie Énergétique et Procédés (ENSGEP)', details: 'Diagnostic électromécanique, machines thermiques et réseaux de puissance.', icon: GraduationCap },
  { year: '2021', degree: 'Baccalauréat en Électrotechnique (BAC F3)', school: 'Lycée Technique de Natitingou', details: 'Distribution d’énergie, machines électriques et schémathèque.', icon: Award },
  { year: '2020', degree: 'Certificat d’Aptitude Professionnelle (CAP)', school: 'Lycée Technique de Natitingou', details: 'Câblage industriel, électricité et montage électromécanique.', icon: CheckCircle },
  { year: '2014 – 2018', degree: 'Brevet d’Étude du Premier Cycle (BEPC)', school: 'Collège Catholique Saint Michel de Dassa', details: 'Formation secondaire générale et bases scientifiques.', icon: BookOpen },
  { year: '2014', degree: 'Certificat d’Étude Primaire (CEP)', school: 'École Primaire Publique Dassa Centre', details: 'Cursus primaire fondamental.', icon: Check },
]

export const skillCategories: SkillCategory[] = [
  { id: 'all', label: 'Toutes les compétences' },
  { id: 'maint', label: 'Maintenance Industrielle' },
  { id: 'elec', label: 'Réseaux Électriques HT/BT' },
  { id: 'electro', label: 'Électromécanique' },
  { id: 'critique', label: 'Systèmes Critiques' },
]

export const skills: Skill[] = [
  { category: 'maint', title: 'Maintenance Préventive & Corrective', desc: 'Je planifie les opérations préventives et réalise rapidement les interventions curatives sur les équipements de l’usine.', icon: Wrench, highlight: 'Usine Textile' },
  { category: 'elec', title: 'Exploitation HT, BT & TBT', desc: 'Je gère les jeux de barres, les réseaux haute/basse tension et l’équilibrage des phases.', icon: Zap, highlight: 'Réseaux de Puissance' },
  { category: 'electro', title: 'Diagnostic Moteurs Électriques', desc: 'Je détecte les défauts de bobinage, mesure l’isolement et réalise les câblages d’armoires.', icon: Cpu, highlight: 'Électrotechnique' },
  { category: 'critique', title: 'Groupes Électrogènes & Onduleurs UPS', desc: 'Je maintiens les sources de secours pour assurer la continuité de service en cas de coupure réseau.', icon: Activity, highlight: 'Systèmes Critiques' },
  { category: 'maint', title: 'Rédaction de Rapports Techniques', desc: 'Je rédige mes comptes rendus d’intervention et assure le suivi des pannes et des actions qualité.', icon: FileText, highlight: 'Suivi Qualité' },
  { category: 'elec', title: 'Systèmes de Mise à la Terre & Transfos', desc: 'Je contrôle les transformateurs, les boucles de terre et les protections différentielles.', icon: ShieldCheck, highlight: 'Normes de Sécurité' },
  { category: 'electro', title: 'Lecture & Schémathèque', desc: 'Je lis les schémas électriques unifilaires et multifilaires pour diagnostiquer et intervenir avec précision.', icon: Layers, highlight: 'AutoCAD / Proteus' },
  { category: 'critique', title: 'Centrales Alarme Incendie', desc: 'Je maintiens les boucles de détection, centrales, sirènes et équipements associés à la sécurité.', icon: Radio, highlight: 'Protection Établissement' },
]

export const tools: Tool[] = [
  { name: 'TIA Portal', type: 'Logiciel Siemens', category: 'Software', desc: 'Configuration et diagnostic d’automates S7' },
  { name: 'AutoCAD', type: 'CAO / DAO', category: 'Software', desc: 'Dessin de schémas électriques' },
  { name: 'GMAO', type: 'Gestion de Maintenance', category: 'Software', desc: 'Suivi assisté des équipements' },
  { name: 'Proteus', type: 'Simulation', category: 'Software', desc: 'Simulation de circuits électroniques' },
  { name: 'Pack Office', type: 'Bureautique', category: 'Software', desc: 'Fiches techniques et rapports' },
  { name: 'Appareils de mesure', type: 'Matériel', category: 'Hardware', desc: 'Multimètre, pince ampèremétrique, telluromètre' },
]
