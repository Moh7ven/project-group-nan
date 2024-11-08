import React from 'react';
import "../SignUp/signUp.css"
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const navigate = useNavigate();
    return (
        <>
             <div className="container">
        <input type="checkbox" id="check" />
        <div className="login form">
          <header>Se connecter</header>
          <form action="">
            <input
              type="text"
              placeholder="Enter your email"
             
            />
            <input
              type="password"
              placeholder="Enter your password"
             
            />

            <button
              className="button"
           
            >
              Connection
            </button>
            <p className="message"></p>
          </form>
          <div className="signup">
            <span className="signup">
              Vous n'avez pas de compte
              <p onClick={() => navigate("/")}> inscrivez-vous</p>
            </span>
            
          </div>
        </div>
      </div>
        </>
    );
};

export default SignUp;