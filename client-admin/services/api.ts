import { env } from "process";

export interface PersonType {
  id: number;
  name: string;
  regno: string;
  year: number;
  dept: string;
  email: string;
  gender: string;
  contact: number;
  socials: {
    github: string;
    linkedin: string;
    portfolio: string;
  };
  application: Application[];
}
export interface Application {
  question: string;
  answer: string;
}

const API = {
  BASE_URL: env.API_BASE_URL,
  ENDPOINTS: {
    DOMAINS: {
      TECHNICAL: () => "/technical",
      EVENTS: () => "/events",
      CORPORATE: () => "/corporate",
      EDITORIAL: () => "/editorial",
    },
  },
};

async function fetchData(token:string): Promise<PersonType[]> {
  //need to implement choice here for the domains.
  const response = await fetch(API.BASE_URL + API.ENDPOINTS.DOMAINS.TECHNICAL(),
  {
    headers:{
      Authorization:`Bearer ${token}`, 
    },
  },);
  const data: PersonType[] = await response.json();
  console.log(data);
  return data;
}

export { fetchData };
