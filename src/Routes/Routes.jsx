import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/main";
import AllPlayers from "../pages/AllPlayers/AllPlayers";
import Home from "../pages/Home/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/allPlayer',
          element: <AllPlayers></AllPlayers>
        }
      ]
    },
  ]);