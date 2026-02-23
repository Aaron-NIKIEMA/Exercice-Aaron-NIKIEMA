import React from "react";
import ListeEtudiants from "@/component/listeEtudiant";
import Header from "@/component/Header";
import Access from "@/component/Access";
import Image from "@/component/Image";

const App = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto p-6 text-center">
        <Header
          titre="Home"
          titre1="Référence de l'école"
          texte="Bienvenue sur une plateforme dédiée à
          l’Institut International d’Ingénierie de l’Eau et de l’Environnement"
        />
      </div>

      <Image src="https://tse3.mm.bing.net/th/id/OIP.ioVLtE2eYYG2o5yoC1PFPAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="2iE" width={150} height={150} />
      
      < Access Connexion="Connexion" Inscription="Inscription" />

      <ListeEtudiants />
    </div>
  );
};
export default App;


