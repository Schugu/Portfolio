export interface Profile {
  fullname: string;
  descript?: string;
  dev: string;
  years: string;
  nationality: string;
  linksSocialNetworks: {
    Github: string;
    Linkedin: string;
    Instagram: string;
    FreeCodeCamp: string;
    Email: string;
    CV: string;
  };
  skills: {
    frontEnd: string[];
    dataBase: string[];
    versionControl: string[];
  };
  profilePicture: string;
  workExperience?: {
    title: string;
    company: string;
    date: string;
    description: string;
    linkDescription: string;
  }[];
  certificates?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  moreInfo: string[];
  techs: string[];
  linkGithub : string;
  cantScreenshots: {
    cellphone: number;
    tablet: number;
    desktop: number;
  };
}