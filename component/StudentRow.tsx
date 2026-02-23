import React from 'react';

export interface Student {
  id: string;
  matricule: string;
  nom: string;
  prenom: string;
  image: string;
  origin: string;
  email: string;
  filiere: string;
  badge: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning';
  badgeText: string;
  niveau: string;
}

interface StudentRowProps {
  student: Student;
}

const StudentRow: React.FC<StudentRowProps> = ({ student }) => {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="font-bold">{student.matricule}</div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={student.image} alt={`${student.prenom} ${student.nom}`} />
            </div>
          </div>
          <div>
            <div className="font-bold">{student.prenom} {student.nom}</div>
            <div className="text-sm opacity-50">{student.origin}</div>
          </div>
        </div>
      </td>
      <td>{student.email}</td>
      <td>
        {student.filiere}
        <br />
        <span className={`badge badge-${student.badge} badge-sm`}>{student.badgeText}</span>
      </td>
      <td>{student.niveau}</td>
      <th>
        <button className="btn btn-ghost btn-xs">détails</button>
      </th>
    </tr>
  );
};

export default StudentRow;
