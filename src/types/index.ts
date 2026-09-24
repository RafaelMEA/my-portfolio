export interface Social {
  label: string;
  url: string;
  handle?: string;
}

export interface Socials {
  github: Social;
  linkedin: Social;
  facebook: Social;
}

export interface FocusPoint {
  label: string;
  detail: string;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  headline: string;
  roles: string[];
  summary: string;
  about: string[];
  focusPoints: FocusPoint[];
  location: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  availability: string;
  profileImage: string;
  resumePdf: string;
  socials: Socials;
}

export interface SoftwareProject {
  id: number;
  proj_name: string;
  proj_link?: string;
  proj_image: string;
  tech_stack: string;
  description: string;
  features?: string[];
  github_url?: string;
}

export interface CybersecProject {
  id: number;
  proj_name: string;
  proj_link?: string;
  proj_image: string;
  tech_stack: string;
  description: string;
}

export interface FocusArea {
  title: string;
  icon: string;
  items: string[];
}

export interface CybersecFocus {
  intro: string;
  focusAreas: FocusArea[];
}

export interface CertificationDocument {
  id: number;
  img_name?: string;
  credly_link?: string;
  certification: string;
}

export interface Certification {
  name: string;
  organization: string;
  badge: string | null;
  credlyLink: string | null;
  documentPdf: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  img: string;
  period: string;
  type: string;
  tech: string[];
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string | null;
  extra: string | null;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  groups: SkillGroup[];
}

export interface Skills {
  categories: SkillCategory[];
  softSkills: string[];
}

export interface PortfolioData {
  profile: Profile;
  softwareProjects: SoftwareProject[];
  cybersecProjects: CybersecProject[];
  cybersecFocus: CybersecFocus;
  documents: CertificationDocument[];
  certifications: Certification[];
  experience: Experience[];
  education: Education[];
  skills: Skills;
}