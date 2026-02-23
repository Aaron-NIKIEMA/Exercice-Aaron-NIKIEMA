import React from 'react'

const ContactInfo = () => {
  const socialContacts = [
    { name: 'Instagram', url: 'https://instagram.com/2ieinstitute' },
    { name: 'Facebook', url: 'https://facebook.com/2ieinstitute' },
    { name: 'Email', url: 'mailto:contact@2ie-institut.org', icon: '📧' },
  ]

  const departments = [
    {
      name: 'Admission',
      email: '2ie@2ie-edu.org',
      phone: '+226 25 49 28 00',
    },
    {
      name: 'Centre de Langue',
      email: '2ie@2ie-edu.org',
      phone: '+226 25 49 28 00',
    },
  ]

  return (
    <div className="min-h-screen bg-base-200 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-base-content mb-2">Contactez 2iE Institute</h1>
          <p className="text-base-content/70">Nous sommes ici pour vous aider</p>
        </div>

        {/* Siège Principal */}
        <div className="card bg-base-100 rounded-box shadow-md mb-8">
          <div className="card-body">
            <h2 className="card-title mb-6">Siège Principal - Ouagadougou</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="label">
                  <span className="label-text font-semibold">📍 Adresse</span>
                </div>
                <p className="text-base-content/90">
                  Rue de la Science - 01 BP 594<br />
                  Ouagadougou 01<br />
                  BURKINA FASO
                </p>
              </div>

              <div>
                <div className="label">
                  <span className="label-text font-semibold">📞 Téléphone</span>
                </div>
                <p className="text-base-content/90 mb-3">
                  <a href="tel:+22625492800" className="link link-primary">
                    +226 25 49 28 00
                  </a>
                </p>
                <div className="label">
                  <span className="label-text font-semibold">📧 Email</span>
                </div>
                <p className="text-base-content/90">
                  <a href="mailto:2ie@2ie-edu.org" className="link link-primary">
                    2ie@2ie-edu.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bureau Afrique Centrale */}
        <div className="card bg-base-100 rounded-box shadow-md mb-8">
          <div className="card-body">
            <h2 className="card-title mb-6">Bureau 2iE Afrique Centrale</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="label">
                  <span className="label-text font-semibold">📍 Adresse</span>
                </div>
                <p className="text-base-content/90">
                  IMMEUBLE LA LEKIE<br />
                  Quartier Hippodrome<br />
                  CAMEROUN
                </p>
              </div>

              <div>
                <div className="label">
                  <span className="label-text font-semibold">👤 Contact</span>
                </div>
                <p className="text-base-content/90 font-semibold mb-3">
                  Jean Marie MINKOULOU
                </p>
                
                <div className="label">
                  <span className="label-text font-semibold">📞 Téléphone</span>
                </div>
                <p className="text-base-content/90 mb-3">
                  <a href="tel:+237699832706" className="link link-primary">
                    +237 699 832 706
                  </a>
                </p>

                <div className="label">
                  <span className="label-text font-semibold">📧 Email</span>
                </div>
                <p className="text-base-content/90">
                  <a href="mailto:2ie_afriquecentrale@2ie-edu.org" className="link link-primary">
                    2ie_afriquecentrale@2ie-edu.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Départements */}
        <div className="card bg-base-100 rounded-box shadow-md mb-8">
          <div className="card-body">
            <h2 className="card-title mb-6">Contacts par Département</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="border border-base-300 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-3 text-base-content">{dept.name}</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs opacity-60">Téléphone</span>
                      <p className="text-base-content">
                        <a href={`tel:${dept.phone.replace(/\s/g, '')}`} className="link link-primary">
                          {dept.phone}
                        </a>
                      </p>
                    </div>
                    <div>
                      <span className="text-xs opacity-60">Email</span>
                      <p className="text-base-content">
                        <a href={`mailto:${dept.email}`} className="link link-primary">
                          {dept.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Réseaux Sociaux */}
        <div className="card bg-base-100 rounded-box shadow-md">
          <div className="card-body">
            <h2 className="card-title mb-6">Suivez-nous sur les Réseaux Sociaux</h2>
            <ul className="flex gap-4 flex-wrap">
              {socialContacts.map((contact) => (
                <li key={contact.name}>
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-primary"
                  >
                    {contact.icon} {contact.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
