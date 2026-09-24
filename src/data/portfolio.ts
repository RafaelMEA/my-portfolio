import type {
  Certification,
  CertificationDocument,
  CybersecFocus,
  CybersecProject,
  Education,
  Experience,
  PortfolioData,
  Profile,
  Skills,
  SoftwareProject,
} from '../types';
import info from '../../info.json';

import dole_pic from '../assets/Department_of_Labor_and_Employment_(DOLE).png';
import vibe_pic from '../assets/VibeCheckLogo.png';
import agritayo_pic from '../assets/agritayo_pic.png';
import inventory_pic from '../assets/inventory_pic.png';
import favicon_svg from '../assets/favicon.svg';
import cisco_badge from '../assets/introduction-to-cybersecurity-badge.png';
import city_logo from '../assets/city-government-of-baguio-logo.png';
import smartcity_img from '../assets/baguio-smart-city.jpeg';

const images: Record<string, string> = {
  'Department_of_Labor_and_Employment_(DOLE).png': dole_pic,
  'VibeCheckLogo.png': vibe_pic,
  'agritayo_pic.png': agritayo_pic,
  'inventory_pic.png': inventory_pic,
  'favicon.svg': favicon_svg,
  'introduction-to-cybersecurity-badge.png': cisco_badge,
  'city-government-of-baguio-logo.png': city_logo,
  'baguio-smart-city.jpeg': smartcity_img,
};

const raw = info as unknown as {
  profile: Profile;
  software_projects: SoftwareProject[];
  cybersec_projects: CybersecProject[];
  cybersec_focus: CybersecFocus;
  documents: CertificationDocument[];
  certifications: Certification[];
  for_experience: Experience[];
  education: Education[];
  skills: Skills;
};

export const portfolio: PortfolioData = {
  profile: raw.profile,
  softwareProjects: raw.software_projects.map((p) => ({
    ...p,
    proj_image: images[p.proj_image] ?? p.proj_image,
  })),
  cybersecProjects: raw.cybersec_projects.map((p) => ({
    ...p,
    proj_image: images[p.proj_image] ?? p.proj_image,
  })),
  cybersecFocus: raw.cybersec_focus,
  documents: raw.documents,
  certifications: raw.certifications.map((c) => ({
    ...c,
    badge: c.badge ? images[c.badge] ?? c.badge : null,
  })),
  experience: raw.for_experience.map((e) => ({
    ...e,
    img: images[e.img] ?? e.img,
  })),
  education: raw.education,
  skills: raw.skills,
};

export const imageFor = (name: string): string => images[name] ?? name;