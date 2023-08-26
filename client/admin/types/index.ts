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
    linkedIn: string;
    portfolio: string;
  };
  year: number;
}
