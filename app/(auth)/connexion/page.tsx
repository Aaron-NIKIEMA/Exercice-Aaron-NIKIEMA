
'use client'
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "@/component/Image";
import Header from "@/component/Header";

const ConnexionPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email && password) {
      router.push("/home");
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto p-6 text-center">
        <Header titre="Connexion" />
      </div>
      <Image src="https://tse3.mm.bing.net/th/id/OIP.ioVLtE2eYYG2o5yoC1PFPAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="2iE" width={50} height={50}  />

      <div className="flex items-center justify-center min-h-screen">
        <div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-100 border p-20">
            <legend className="fieldset-legend text-xl font-bold text-center mb-4">
              Login
            </legend>

            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn btn-neutral mt-4" onClick={handleLogin}>
              Login
            </button>
            <button
              className="btn btn-ghost mt-4"
              onClick={() => { setEmail(""); setPassword(""); }}
            >
              Reset
            </button>
            <Link href="/inscription" className="text-lg font-bold block mt-4">
              Inscription
            </Link>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default ConnexionPage;

 












