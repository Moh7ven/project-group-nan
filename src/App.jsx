
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import Acceuil from "./pages/signIn/acceuil";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/Acceuil",
      element: <Acceuil/>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
