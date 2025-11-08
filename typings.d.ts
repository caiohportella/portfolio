interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Technology extends SanityBody {
  _type: "technology";
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  location: string;
  isCurrentlyWorkingHere: boolean;
  jobTitle: {
    en: string;
    pt: string;
  };
  points: string[];
  technologies: Technology[];
}

export interface Course extends SanityBody {
  _type: "course";
  institution: string;
  institutionImage: Image;
  dateStarted: date;
  dateEnded: date;
  isInProgress: boolean;
  courseTitle: string;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  linkToBuild: string;
  image: Image;
  summaryEN: string;
  summaryPT: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
