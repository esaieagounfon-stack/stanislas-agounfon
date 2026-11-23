import type { LucideIcon } from 'lucide-react'

export type Experience = {
  period: string
  title: string
  company: string
  location: string
  badge: string
  description: string
  missions: string[]
}

export type Education = {
  year: string
  degree: string
  school: string
  details: string
  icon: LucideIcon
}

export type SkillCategory = {
  id: string
  label: string
}

export type Skill = {
  category: string
  title: string
  desc: string
  icon: LucideIcon
  highlight: string
}

export type Tool = {
  name: string
  type: string
  category: 'Software' | 'Hardware'
  desc: string
}

export type MediaItem = {
  title: string
  subtitle: string
  image: string
  tag: string
}

export type ContactForm = {
  name: string
  email: string
  subject: string
  requestType: string
  message: string
}
