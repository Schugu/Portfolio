export interface ProfileType {
  fullname: string;
  titles?: string[];
  years: string;
  nationality: string;
  aboutMe?: string[];
  hobbies?: string[];
  linksSocialNetworks?: {
    Github: string;
    Linkedin: string;
    Instagram: string;
    FreeCodeCamp: string;
    Email: string;
    CV: string;
  };
  skills?: {
    frontEnd: string[];
    dataBase: string[];
    versionControl: string[];
  };
  profilePicture: string;
  workExperience?: {
    title: string;
    company: string;
    date: string;
    modality: string;
    workplace: string;
    country: string;
    description: string[];
    tasks?: string[];
    infoLink?: string;
  }[];
  certificates?: string[];
  textContact?: string[];
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  moreInfo: string[];
  techs: string[];
  linkGithub?: string;
  cantScreenshots: {
    cellphone: number;
    tablet: number;
    desktop: number;
  };
}

export interface Approaches {
  [key: string]: ProjectType[];
}

export interface ProjectsType {
  approaches: Approaches;
}