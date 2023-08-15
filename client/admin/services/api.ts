import { env } from "process";

interface Question {
  answer: string;
  questionNumber: string;
}

interface Application {
  appliedAt: string;
  createdAt: string;
  domain: string;
  questions: Question[];
  status: string;
  updatedAt: string;
}

export interface Applicant {
  _id: string;
  application: Application[];
  branch: string;
  contact: string;
  createdAt: number;
  email: string;
  gender: string;
  name: string;
  notifications: any[];
  regNo: string;
  resume: string;
  socials: {
    github: string;
    linkedin: string;
    portfolio: string;
  };
  year: number;
}
// const API = {
//   BASE_URL: env.API_URL,
//   USERS: ()=> "/applications",
//   ENDPOINTS: {
//     DOMAINS: {
//       TECHNICAL: () => "/technical",
//       EVENTS: () => "/events",
//       CORPORATE: () => "/corporate",
//       EDITORIAL: () => "/editorial",
//     },
//   },
// };

// async function fetchData(): Promise<Applicant[]> {

//   const token=env.API_BEARER_TOKEN;
//   const response = await fetch(API.BASE_URL +API.USERS()+ API.ENDPOINTS.DOMAINS.TECHNICAL(),
//   {
//     headers:{
//       Authorization:`Bearer ${token}`, 
//     },
//   },);
//   const data: Applicant[] = await response.json();
//   return data;
// }

// export { fetchData };
