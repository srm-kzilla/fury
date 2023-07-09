import React, { useState, ReactNode } from "react";

type StoreProps = {
  children: ReactNode;
};

type StoreContextType = {
  domain: string;
  setDomain: (domain: string) => void;
  userProjects: any;
  setUserProjects: (projects: any) => void;
  selectedProjectSlug: string;
  setSelectedProjectSlug: (slug: string) => void;
  isSubmitted: boolean;
  setSubmitted: (state: boolean) => void;
  blob: string;
  setBlob: (blob: string) => void;
  selectedDomainSlug: string;
  setSelectedDomainSlug: (slug: string) => void;
  year: string;
  setYear: (year: string) => void;
};

const err = () => {
  throw new Error("Used StoreContext outside of provider");
};

export const StoreContext = React.createContext<StoreContextType>({
  domain: "",
  setDomain: () => err(),
  userProjects: [],
  setUserProjects: () => err(),
  selectedProjectSlug: "",
  setSelectedProjectSlug: () => err(),
  isSubmitted: false,
  setSubmitted: () => err(),
  blob: "",
  setBlob: () => err(),
  selectedDomainSlug: "",
  setSelectedDomainSlug: () => err(),
  year: "",
  setYear: () => err(),
});

const Store = ({ children }: StoreProps) => {
  const [domain, setDomain] = useState("editorial");
  const [userProjects, setUserProjects] = useState([]);
  const [selectedProjectSlug, setSelectedProjectSlug] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);
  const [blob, setBlob] = useState("");
  const [selectedDomainSlug, setSelectedDomainSlug] = useState("");
  const [year, setYear] = useState("");

  return (
    <StoreContext.Provider
      value={{
        domain,
        setDomain,
        userProjects,
        setUserProjects,
        selectedProjectSlug,
        setSelectedProjectSlug,
        isSubmitted,
        setSubmitted,
        blob,
        setBlob,
        selectedDomainSlug,
        setSelectedDomainSlug,
        year,
        setYear,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
