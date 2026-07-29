export type Locale = "fr" | "en";

export interface CarouselSlide {
  image: string;
  caption: string;
  linkLabel?: string;
  linkUrl?: string;
}

export const BIRTH_DATE = new Date(1978, 2, 9);

export function calculateAge(birthDate: Date, on: Date = new Date()): number {
  let age = on.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    on.getMonth() > birthDate.getMonth() ||
    (on.getMonth() === birthDate.getMonth() && on.getDate() >= birthDate.getDate());
  if (!hasHadBirthdayThisYear) {
    age -= 1;
  }
  return age;
}

export type ProjectKey = "ridgegear" | "planerz";

export interface ProjectCollaborator {
  text: string;
  name: string;
  url: string;
}

export interface ProjectEntry {
  key: ProjectKey;
  name: string;
  description: string;
  collaborator?: ProjectCollaborator;
}

export const projectIcons: Record<ProjectKey, string> = {
  ridgegear: "/icons/ridgegear.png",
  planerz: "/icons/planerz.png",
};

export const projectUrls: Record<ProjectKey, string> = {
  ridgegear: "https://ridgegear.centuryspine.org",
  planerz: "https://planerz.centuryspine.org",
};

export interface AboutContent {
  title: string;
  fullName: string;
  ageSuffix: string;
  introText: string;
  projectsTitle: string;
  projects: ProjectEntry[];
  passionsTitle: string;
  passions: string[];
  networksTitle: string;
  contactTitle: string;
  contactPersoLabel: string;
  contactTechLabel: string;
  quotesTitle: string;
  quotes: string[];
  carousel: CarouselSlide[];
}

const carouselFr: CarouselSlide[] = [
  { image: "/images/about_1.png", caption: "Saint-Gervais-les-Bains (Haute-Savoie), mai 2025" },
  { image: "/images/about_2.png", caption: "Surf à Peniche (Portugal), septembre 2023" },
  { image: "/images/about_3.png", caption: "Lac de Tavaneuse, Abondance (Haute-Savoie), juillet 2025" },
  { image: "/images/about_4.png", caption: "Capo Rosso, Corse-du-Sud, avril 2026" },
  { image: "/images/about_5.png", caption: "Week-end via ferrata en solo, Bourg-d'Oisans (Isère), juin 2025" },
  { image: "/images/about_6.png", caption: "Via ferrata du fort l'Écluse (Ain), septembre 2024" },
  {
    image: "/images/about_7.png",
    caption: "Vélo remis à neuf dans un atelier d'auto-réparation à Lyon, juillet 2024",
    linkLabel: "Voir l'atelier Etablicyclette",
    linkUrl: "https://www.etablicyclette.fr/",
  },
  { image: "/images/about_8.png", caption: "Stage de golf UCPA, Saint-Cyprien (Pyrénées-Orientales), mai 2024" },
];

const carouselEn: CarouselSlide[] = [
  { image: "/images/about_1.png", caption: "Saint-Gervais-les-Bains (Haute-Savoie, France), May 2025" },
  { image: "/images/about_2.png", caption: "Surfing in Peniche (Portugal), September 2023" },
  { image: "/images/about_3.png", caption: "Lake Tavaneuse, Abondance (Haute-Savoie, France), July 2025" },
  { image: "/images/about_4.png", caption: "Capo Rosso, Corsica, April 2026" },
  { image: "/images/about_5.png", caption: "Solo via ferrata weekend, Bourg-d'Oisans (Isère, France), June 2025" },
  { image: "/images/about_6.png", caption: "Fort l'Écluse via ferrata (Ain, France), September 2024" },
  {
    image: "/images/about_7.png",
    caption: "Bike refurbished at a self-repair workshop in Lyon, July 2024",
    linkLabel: "See the Etablicyclette workshop",
    linkUrl: "https://www.etablicyclette.fr/",
  },
  { image: "/images/about_8.png", caption: "UCPA golf camp, Saint-Cyprien (Pyrénées-Orientales, France), May 2024" },
];

export const content: Record<Locale, AboutContent> = {
  fr: {
    title: "À propos",
    fullName: "Bruno Chappe",
    ageSuffix: " ans",
    introText:
      "Développeur, passionné de rando et de montagne, je crée des applications pour simplifier des choses du quotidien : organiser un week-end entre amis, préparer un sac de rando, ou suivre ses projets. Mon objectif : centraliser l'organisation au lieu de jongler entre plusieurs outils.",
    projectsTitle: "Réalisations",
    projects: [
      {
        key: "ridgegear",
        name: "Ridgegear",
        description: "Gestion de matériel, projets et checklists de sac à dos",
      },
      {
        key: "planerz",
        name: "Planerz",
        description: "Organisation de week-ends et voyages entre amis",
        collaborator: {
          text: "🎨 Collab design & inspi :",
          name: "Florent P.",
          url: "https://www.instagram.com/florentfr/",
        },
      },
    ],
    passionsTitle: "Passions et occupations",
    passions: [
      "Rando",
      "Bachata",
      "Escalade",
      "Running",
      "Ciné",
      "Séries",
      "Golf",
      "Cuisine",
      "Réparation vélo",
      "Théâtre d'impro",
      "Jeux de société",
    ],
    networksTitle: "Réseaux",
    contactTitle: "Contact",
    contactPersoLabel: "Perso",
    contactTechLabel: "Technique (bug, demande d'amélioration, partenariat, etc.)",
    quotesTitle: "Citations",
    quotes: [
      "« Tout le malheur des hommes vient d'une seule chose, qui est de ne pas savoir demeurer en repos dans une chambre » (Pascal)",
      "« L'apparence n'est rien ; c'est au fond du cœur qu'est la plaie » (Euripide)",
    ],
    carousel: carouselFr,
  },
  en: {
    title: "About",
    fullName: "Bruno Chappe",
    ageSuffix: "",
    introText:
      "Developer, passionate about hiking and mountains, I build apps to simplify everyday things: organizing a weekend with friends, packing a backpack, or tracking projects. My goal: centralize the organization instead of juggling multiple tools.",
    projectsTitle: "Projects",
    projects: [
      {
        key: "ridgegear",
        name: "Ridgegear",
        description: "Gear management, trips and backpack checklists",
      },
      {
        key: "planerz",
        name: "Planerz",
        description: "Organize weekends and trips with friends",
        collaborator: {
          text: "🎨 Design & inspo collab:",
          name: "Florent P.",
          url: "https://www.instagram.com/florentfr/",
        },
      },
    ],
    passionsTitle: "Passions and activities",
    passions: [
      "Hiking",
      "Bachata",
      "Climbing",
      "Running",
      "Cinema",
      "Series",
      "Golf",
      "Cooking",
      "Bike repair",
      "Improv theater",
      "Board games",
    ],
    networksTitle: "Networks",
    contactTitle: "Contact",
    contactPersoLabel: "Personal",
    contactTechLabel: "Technical (bugs, feature requests, partnerships, etc.)",
    quotesTitle: "Quotes",
    quotes: [
      "“All of humanity's problems stem from man's inability to sit quietly in a room alone” (Pascal)",
      "“Appearance is nothing; the wound lies deep within the heart” (Euripides)",
    ],
    carousel: carouselEn,
  },
};

export type NetworkKey = "facebook" | "instagram" | "linkedin" | "github" | "kofi" | "blog";

export const networks: { key: NetworkKey; label: string; url: string }[] = [
  { key: "facebook", label: "Facebook", url: "https://www.facebook.com/bruno.chappe" },
  { key: "instagram", label: "Instagram", url: "https://www.instagram.com/centuryspine/" },
  { key: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/bruno-chappe-669a5869" },
  { key: "github", label: "GitHub", url: "https://github.com/CenturySpine" },
  { key: "kofi", label: "Ko-fi", url: "https://ko-fi.com/brunochappe" },
  { key: "blog", label: "Blog", url: "https://centuryspine.wordpress.com/" },
];

export const contactEmail = "bruno.chappe@gmail.com";
export const technicalEmail = "century.spine@gmail.com";
