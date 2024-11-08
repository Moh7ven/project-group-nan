import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/connexion",
      element: <SignUp />
    },
   
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
