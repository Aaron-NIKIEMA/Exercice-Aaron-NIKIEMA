"use client"
import Link from "next/link"
import React from 'react'






const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
          <button onClick={() => window.location.href = './home'}><img src="https://tse3.mm.bing.net/th/id/OIP.ioVLtE2eYYG2o5yoC1PFPAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="2iE" className="rounded-lg shadow-lg" width={50} height={50} /></button>
  </div>
  <div className="flex-none">
    


<div className="flex-1 justify-center space-x-4">
    <Link href="./home" className="link link-hover">Home</Link>
    <Link href="./contacts" className="link link-hover">Contacts</Link>
    <Link href="./apropos" className="link link-hover">À propos</Link>
    <Link href="./deconnexion" className="link link-hover">Déconnexion</Link>
    
</div>
</div>
    </div>
    </div>
  )
}

export default NavBar

