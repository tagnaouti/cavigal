export const navigation = [
  { name: "Accueil", href: "/" },
  { name: "L'association", href: "/association" },
  { name: "Actualités", href: "/actualites" },
  { name: "Calendrier", href: "/calendrier" },
  { name: "Contact", href: "/contact" },
];

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: "sortie" | "competition" | "evenement";
  description: string;
}

export interface Dirigeant {
  name: string;
  role: string;
  image?: string;
}

export const articles: Article[] = [
  {
    id: "course-printaniere-2026",
    title: "Retour sur la Course Printanière 2026",
    excerpt:
      "Belle journée de compétition sur le circuit de la Gaude avec plus de 80 participants.",
    content:
      "Belle journée de compétition sur le circuit de la Gaude avec plus de 80 participants. Les coureurs du Cavigal se sont illustrés avec 3 podiums dans les différentes catégories. Un grand merci aux bénévoles et aux partenaires qui ont rendu cet événement possible.",
    date: "2026-03-28",
    image: "/images/course-printaniere.jpg",
    category: "Compétition",
  },
  {
    id: "stage-paques-jeunes",
    title: "Stage de Pâques pour les jeunes",
    excerpt:
      "L'école de cyclisme organise un stage pendant les vacances de Pâques pour les 8-16 ans.",
    content:
      "L'école de cyclisme organise un stage pendant les vacances de Pâques pour les 8-16 ans. Au programme : technique, endurance et découverte des cols de l'arrière-pays niçois. Inscriptions ouvertes jusqu'au 10 avril.",
    date: "2026-03-20",
    image: "/images/stage-jeunes.jpg",
    category: "École de vélo",
  },
  {
    id: "assemblee-generale-2026",
    title: "Assemblée Générale 2026",
    excerpt:
      "L'assemblée générale du club se tiendra le 15 février au gymnase Cavigal.",
    content:
      "L'assemblée générale du club s'est tenue le 15 février au gymnase Cavigal. Bilan positif de la saison 2025 avec une augmentation de 15% du nombre de licenciés. Le bureau a été reconduit à l'unanimité.",
    date: "2026-02-15",
    image: "/images/ag-2026.jpg",
    category: "Vie du club",
  },
  {
    id: "nouveaux-maillots",
    title: "Nouveaux maillots saison 2026",
    excerpt:
      "Découvrez les nouveaux maillots du club pour la saison 2026, disponibles à la boutique.",
    content:
      "Les nouveaux maillots du Cavigal Nice Cyclisme pour la saison 2026 sont arrivés ! Design modernisé aux couleurs rouge et bleu du club. Disponibles en précommande sur la boutique en ligne et lors des permanences au local.",
    date: "2026-01-10",
    image: "/images/maillots-2026.jpg",
    category: "Vie du club",
  },
];

export const events: Event[] = [
  {
    id: "1",
    title: "Sortie Col de la Bonette",
    date: "2026-04-05",
    time: "07:30",
    location: "Départ parking du Ray",
    type: "sortie",
    description:
      "Sortie longue distance - 140km / 3200m D+. Niveau confirmé. Prévoir ravitaillement.",
  },
  {
    id: "2",
    title: "Critérium de Nice",
    date: "2026-04-12",
    time: "09:00",
    location: "Circuit de la Promenade des Anglais",
    type: "competition",
    description:
      "Course sur circuit fermé en bord de mer. Toutes catégories. Inscription obligatoire.",
  },
  {
    id: "3",
    title: "Sortie Col de Turini",
    date: "2026-04-13",
    time: "08:00",
    location: "Départ parking du Ray",
    type: "sortie",
    description:
      "Sortie montagne - 95km / 2100m D+. Tous niveaux avec regroupements.",
  },
  {
    id: "4",
    title: "École de vélo - Entraînement",
    date: "2026-04-16",
    time: "14:00",
    location: "Vélodrome de Nice",
    type: "evenement",
    description:
      "Entraînement encadré pour les jeunes licenciés. Apporter casque et vélo en bon état.",
  },
  {
    id: "5",
    title: "Étape du Tour - La Niçoise",
    date: "2026-04-20",
    time: "07:00",
    location: "Place Masséna, Nice",
    type: "competition",
    description:
      "Cyclosportive ouverte à tous. Parcours 120km à travers l'arrière-pays niçois.",
  },
  {
    id: "6",
    title: "Sortie Vallée de la Vésubie",
    date: "2026-04-26",
    time: "08:00",
    location: "Départ parking du Ray",
    type: "sortie",
    description: "Sortie découverte - 80km / 1400m D+. Tous niveaux.",
  },
];

export const dirigeants: Dirigeant[] = [
  { name: "Jean-Pierre Martin", role: "Président" },
  { name: "Sophie Durand", role: "Vice-Présidente" },
  { name: "Marc Lefebvre", role: "Trésorier" },
  { name: "Catherine Rossi", role: "Secrétaire Générale" },
  { name: "Philippe Blanc", role: "Directeur Sportif" },
  { name: "Isabelle Mercier", role: "Responsable École de Vélo" },
];

export const partenaires = [
  { name: "Ville de Nice", logo: "/images/partenaires/ville-nice.png" },
  {
    name: "Département 06",
    logo: "/images/partenaires/departement-06.png",
  },
  { name: "FFC", logo: "/images/partenaires/ffc.png" },
  { name: "Cycles Azur", logo: "/images/partenaires/cycles-azur.png" },
  {
    name: "Sport 2000 Nice",
    logo: "/images/partenaires/sport-2000.png",
  },
];
