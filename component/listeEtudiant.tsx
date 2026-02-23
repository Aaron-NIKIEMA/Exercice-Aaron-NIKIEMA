import React from "react";
import StudentTable from "./StudentTable";
import students from "./student.json";

const ListeEtudiants: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Liste des étudiants</h2>

      <StudentTable students={students as any} />
    </div>
  );
};

export default ListeEtudiants;
