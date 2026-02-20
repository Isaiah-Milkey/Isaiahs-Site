export interface HeroSummary {
  headline: string
  description: string
  location: string
  currentTitle: string
  downloadLabel: string
}

export interface ExperienceEntry {
  company: string
  role: string
  location: string
  dates: string
  bullets: string[]
}

export interface EducationEntry {
  school: string
  degree: string
  dates: string
  highlights: string[]
}

export interface SkillsCategory {
  category: string
  skills: string[]
}

export const heroSummary: HeroSummary = {
  headline: "",
  description:
    '',
  location: '',
  currentTitle: '',
  downloadLabel: 'Download (PDF)',
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Arizona State University',
    role: 'Undergraduate Research Assistant',
    location: 'Tempe, AZ',
    dates: 'Aug 2024 — Present',
    bullets: [
      'Supporting research on renewable energy simulation tools built with TypeScript and Python.',
      'Co-authoring papers focused on sustainable microgrid controls and data visualization.',
      'Mentoring new student researchers and automating experiment data pipelines.',
    ],
  },
  {
    company: 'SolarTech Labs (internship placeholder)',
    role: 'Software Engineering Intern',
    location: 'Remote',
    dates: 'Summer 2023',
    bullets: [
      'Built instrumentation dashboards to visualize PV array performance in real time.',
      'Documented API integrations between on-site hardware and cloud monitoring services.',
      'Collaborated with electrical engineers to prototype edge-compute strategies.',
    ],
  },
]

export const education: EducationEntry[] = [
  {
    school: 'Arizona State University',
    degree: 'B.S. in Computer Science',
    dates: '2022 — 2026 (expected)',
    highlights: [
      'Relevant coursework: Energy Systems Modeling, Embedded Systems, AI Ethics.',
      'Dean’s List Spring 2024.',
    ],
  },
]

export const skills: SkillsCategory[] = [
  {
    category: 'Languages',
    skills: ['TypeScript', 'Python', 'Rust', 'C'],
  },
  {
    category: 'Tools & Frameworks',
    skills: ['Astro', 'React', 'Tailwind CSS', 'Docker', 'Azure'],
  },
  {
    category: 'Focus Areas',
    skills: ['Renewable energy simulations', 'Research workflows', 'Clean code'],
  },
]

// TODO: Replace the placeholder entries with the most recent projects, experiences, and precise dates before publishing.
