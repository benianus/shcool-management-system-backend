import { createContext, useContext, useState } from "react";

const TeachersContext = createContext({
  teachers: [],
  setTeachers: (data) => {},
});

type Children = {
  children: React.ReactNode;
};

interface Teacher {
}

export const TeachersProvider = ({ children } : Children) => {
  const [teachers, setTeachers] = useState([]);

  return (
    <TeachersContext.Provider value={{ teachers, setTeachers }}>
      {children}
    </TeachersContext.Provider>
  );
};

export const useTeachersContext = () => useContext(TeachersContext);
