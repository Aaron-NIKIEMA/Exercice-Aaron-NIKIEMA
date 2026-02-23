"use client";
import React, { useState } from 'react';
import Link from 'next/link';


const App = () => {
  const [formData, setFormData] = useState({
    nom: '',
    Prenom: '',
    email: '',
    password: '',
    dateNaissance: '',
    lieuNaissance: '',
    nationalite: '',
    dernierDiplome: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
/*const handleSubmit = asunc (e) => {
    e.preventDefault();
    console.log('Inscription:', formData);
    alert (JSON.stringify(formData));
  };
  
  
*/
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inscription:', formData);
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-6 w-full max-w-md">
        <legend className="fieldset-legend">Inscription</legend>

        <label className="label">Nom</label>
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Votre nom"
          required
        />

        <label className="label">Prenom</label>
        <input
          type="text"
          name="prenom"
          value={formData.Prenom}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Votre prenom"
          required
        />

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="email"
          required
        />

        <label className="label">Mot de passe</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="••••••••"
          required
        />

        <label className="label">Date de naissance</label>
        <input
          type="date"
          name="dateNaissance"
          value={formData.dateNaissance}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <label className="label">Lieu de naissance</label>
        <input
          type="text"
          name="lieuNaissance"
          value={formData.lieuNaissance}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Votre lieu de naissance"
          required
        />

        <label className="label">Nationalité</label>
        <input
          type="text"
          name="nationalite"
          value={formData.nationalite}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Votre nationalité"
          required
        />

        <label className="label">Dernier diplôme obtenu</label>
        <input
          type="text"
          name="dernierDiplome"
          value={formData.dernierDiplome}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Ex: Licence, Master, etc."
          required
        />

        <button onClick={handleSubmit} className="btn btn-primary w-full mt-4">
          S'inscrire
        </button>

        <div className="text-center mt-4">
          <Link href="../connexion" className="link link-primary text-sm">
            Se connecter
          </Link>
        </div>
      </fieldset>
    </div>
  );
};
export default App;