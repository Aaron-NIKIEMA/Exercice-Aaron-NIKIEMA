import React from 'react';
import StudentRow, { Student } from './StudentRow';

interface StudentTableProps {
  students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  return (
    <div className="overflow-x-auto mt-8">
      <table className="table bg-base-100">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Matricule</th>
            <th>Nom & Prénom</th>
            <th>Email</th>
            <th>Filière</th>
            <th>Niveau</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow key={student.id} student={student} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Matricule</th>
            <th>Nom & Prénom</th>
            <th>Email</th>
            <th>Filière</th>
            <th>Niveau</th>
            <th>Actions</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default StudentTable;
