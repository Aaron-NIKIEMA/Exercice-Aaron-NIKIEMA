import React from 'react'

const Carte = () => {
  return (
    <div>
      {/* Section Cartes */}
<div className="max-w-4xl mx-auto p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Historique */}
    <div className="bg-white shadow-lg rounded-xl p-6 text-gray-800">
      <h2 className="text-xl font-bold mb-3">Historique</h2>
      <p>
        À l’origine, un engagement politique collectif de quatorze États 
        d’Afrique de l’Ouest et Centrale déterminés à doter leurs 
        administrations post-coloniales de cadres formés sur leur propre continent.
        En 2018, la législation en vigueur au Burkina conduit 2iE à opter 
        pour la dénomination d’Institut au lieu de fondation.
      </p>
    </div>

    {/* Politique */}
    <div className="bg-white shadow-lg rounded-xl p-6 text-gray-800">
      <h2 className="text-xl font-bold mb-3">Politique</h2>
      <p>
        L'institution dispose de plusieurs politiques :
        Charte information, politique qualité, politique RSE.
      </p>
    </div>

    {/* Formation */}
    <div className="bg-white shadow-lg rounded-xl p-6 text-gray-800">
      <h2 className="text-xl font-bold mb-3">Formation</h2>
      <p>
        4 domaines clés du développement socio-économique de l’Afrique :
        GEAAH, GC-BTP, GEE et Intelligence Artificielle & Applications.
      </p>
    </div>

    {/* Vision */}
    <div className="bg-white shadow-lg rounded-xl p-6 text-gray-800">
      <h2 className="text-xl font-bold mb-3">Vision</h2>
      <p>
        Former les ingénieurs de demain capables de relever les défis
        environnementaux et technologiques du continent africain.
      </p>
    </div>

  </div>
</div>
    </div>
  )
}

export default Carte
