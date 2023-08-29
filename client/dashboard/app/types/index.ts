type User = {
  _id: string;
  regNo: string;
  name: string;
  year: number;
  email: string;
  gender?: string;
  branch?: string;
  resume?: string;
  contact?: string;
  createdAt: Date;
  application: Array<Application>;
  socials: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
};

type UpdateUser = Pick<
  User,
  "name" | "gender" | "branch" | "resume" | "contact" | "socials"
>;

type Application = {
  status: "draft" | "pending" | "accepted" | "rejected";
  domain: string;
  appliedAt: Date;
  updatedAt: Date;
  questions: Array<Question>;
};

type Question = {
  questionNumber: string;
  answer: string;
};

type NotificationType = {
  markdown: string;
  text: string;
  timestamp: Date;
};

type Activity = {
  _id: string;
  location: string;
  timestamp: Date;
  type: "login" | "add_project" | "update_project" | "delete_project";
  project_slug?: string;
  user_id: string;
};

type Answer = {
  questionNumber: string;
  answer: string;
};

type FormSession = {
  domain: string;
};

type TaskType = {
  id: string;
  title: string;
  section: string;
};

type Project = {
  slug: string;
  title: string;
  icon?: JSX.Element;
  description: string;
  domain: string;
  tasks: TaskType[];
  additionalNotes: string;
};

type ToastMessage =
  | {
      type: "success" | "error";
      message: string;
    }
  | {
      type: "custom";
      message: string;
      icon: string;
    };

type ToastIdentifier =
  | "form_saved"
  | "form_submitted"
  | "form_submit_error"
  | "draft_deleted"
  | "answer_required";

  enum States {
    DRAFT= "draft",
    ACCEPTED= "accepted",
    REJECTED= "rejected",
    PENDING="pending",
  };
  
