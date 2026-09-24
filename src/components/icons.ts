import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  KeyRound,
  Mail,
  MapPin,
  Network,
  Phone,
  Search,
  Server,
  Shield,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  wrench: Wrench,
  shield: Shield,
  'shield-check': ShieldCheck,
  key: KeyRound,
  network: Network,
  search: Search,
};

export { ArrowRight, ArrowUpRight, BookOpen, Briefcase, Download, ExternalLink, GraduationCap, Activity, Mail, MapPin, Network, Phone, Server, Shield, ShieldCheck, Wrench, Code2, KeyRound, Search };

export type { LucideIcon };