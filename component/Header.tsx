import React from 'react'
import Link from "next/link";

import Texte from "../component/texte";
import Titre from "../component/Titre";
import Soustitre from '../component/Soustitre';

interface TitrePage {
    titre: string,
    titre1?: string,
    texte?: string
}


const Entete= ({ titre, titre1 ,texte}:TitrePage ) => {
 
  return (
    <div>
       <Titre 
        Titre={titre}      />

      <Soustitre 
        STitre={titre1 || ""}      />

       <Texte text={texte || ""}
      />
   </div>
  );
};
export default Entete;