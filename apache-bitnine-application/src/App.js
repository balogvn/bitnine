import "./App.css";
//mui
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//components
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
        <div />
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
