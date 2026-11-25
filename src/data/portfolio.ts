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
    description: 'Pilotage complet de la sécurité opérationnelle, de la maintenance préventive et corrective de l’ensemble du parc électrique et électromécanique de l’usine.',
    missions: [
      'Maintenance préventive et corrective des installations électriques industrielles',
      'Exploitation et maintenance des réseaux HT, BT et TBT',
      'Suivi des transformateurs, jeux de barres et systèmes de mise à la terre',
      'Tests d’isolement et mise en service d’équipements industriels',
      'Suivi des UPS, groupes électrogènes et centrales d’alarme incendie',
      'Installation et mise en service de nouvelles lignes de production',
      'Diagnostic des moteurs électriques et équipements électromécaniques',
      'Rédaction des rapports d’intervention',
      'Application des normes de sécurité industrielle et procédures HSE',
    ],
  },
  {
    period: '2021 – 2024',
    title: 'Stagiaire – Maintenance Automobile',
    company: 'Atelier Technique Spécialisé',
    location: 'Bénin',
    badge: 'Stage Professionnel',
    description: 'Diagnostic technique, mécanique lourde et électronique appliquée aux systèmes embarqués.',
    missions: [
      'Maintenance préventive et réparation de véhicules légers',
      'Diagnostic des calculateurs moteur et capteurs électroniques',
      'Soudure à l’arc électrique et soudure autogène',
    ],
  },
  {
    period: '2019 – 2021',
    title: 'Stagiaire – Projets Techniques & Bâtiment',
    company: 'Entreprise d’Électricité & Climatisation',
    location: 'Bénin',
    badge: 'Stage Initial',
    description: 'Réalisation d’installations électriques tertiaires et maintenance de systèmes thermiques.',
    missions: [
      'Réalisation d’installations électriques conformes',
      'Installation et entretien de systèmes de climatisation',
      'Câblage et paramétrage d’antennes satellitaires',
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
  { category: 'maint', title: 'Maintenance Préventive & Corrective', desc: 'Interventions curatives d’urgence et plan de maintenance préventive usine.', icon: Wrench, highlight: 'Usine Textile' },
  { category: 'elec', title: 'Exploitation HT, BT & TBT', desc: 'Gestion des jeux de barres, réseaux haute/basse tension et équilibrage des phases.', icon: Zap, highlight: 'Réseaux de Puissance' },
  { category: 'electro', title: 'Diagnostic Moteurs Électriques', desc: 'Détection des défauts de bobinage, mesure d’isolement et câblage d’armoires.', icon: Cpu, highlight: 'Électrotechnique' },
  { category: 'critique', title: 'Groupes Électrogènes & Onduleurs UPS', desc: 'Continuité de service en coupure réseau et maintenance des sources de secours.', icon: Activity, highlight: 'Systèmes Critiques' },
  { category: 'maint', title: 'Rédaction de Rapports Techniques', desc: 'Compte-rendu d’intervention, suivi des pannes et respect des consignes qualité.', icon: FileText, highlight: 'Suivi Qualité' },
  { category: 'elec', title: 'Systèmes de Mise à la Terre & Transfos', desc: 'Contrôle des transformateurs, boucles de terre et protections différentielles.', icon: ShieldCheck, highlight: 'Normes de Sécurité' },
  { category: 'electro', title: 'Lecture & Schémathèque', desc: 'Interprétation de schémas électriques unifilaires et multifilaires.', icon: Layers, highlight: 'AutoCAD / Proteus' },
  { category: 'critique', title: 'Centrales Alarme Incendie', desc: 'Maintenance des boucles de détection, centrales, sirènes et équipements associés.', icon: Radio, highlight: 'Protection Établissement' },
]

export const tools: Tool[] = [
  { name: 'TIA Portal', type: 'Logiciel Siemens', category: 'Software', desc: 'Configuration et diagnostic d’automates S7' },
  { name: 'AutoCAD', type: 'CAO / DAO', category: 'Software', desc: 'Dessin de schémas électriques' },
  { name: 'GMAO', type: 'Gestion de Maintenance', category: 'Software', desc: 'Suivi assisté des équipements' },
  { name: 'Proteus', type: 'Simulation', category: 'Software', desc: 'Simulation de circuits électroniques' },
  { name: 'Pack Office', type: 'Bureautique', category: 'Software', desc: 'Fiches techniques et rapports' },
  { name: 'Appareils de mesure', type: 'Matériel', category: 'Hardware', desc: 'Multimètre, pince ampèremétrique, telluromètre' },
]
