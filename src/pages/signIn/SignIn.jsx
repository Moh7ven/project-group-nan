import React from 'react'
import "../signIn/Signin.css"
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const navigate = useNavigate();
  return (
    
    <>

<div className="container">
        <input type="checkbox" id="check" />
        <div className="login form">
          <header>Inscription</header>
          <form action="">
            <input
              type="text"
              placeholder="Entrer votre nom"
              
            />
           
          
            <input
              type="email"
              placeholder="Entrer votre email"
              
            />
            <input
              type="password"
              placeholder="Entrer votre mot de pass"
             
            />

<input
              type="password"
              placeholder="confirmer le mot de pass"
             
            />
            <button
              className="button"
             
            >
              S'inscrire
            </button>
            <p className="message"></p>
          </form>
          <div className="signup">
            <span className="signup">
              vous avez dejà un compte?
              <p onClick={() => navigate("/connexion")}> Connecter vous</p>
            </span>
            
          </div>
        </div>
      </div>
    </>
  );
};

  
 