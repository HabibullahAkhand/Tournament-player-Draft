import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/main";
import AllPlayers from "../pages/AllPlayers/AllPlayers";
import Home from "../pages/Home/Home";
import Teams from "../pages/Teams/Teams";
import Fixtures from "../pages/Fixtures/Fixtures";
import PointTable from "../pages/PointTable/PointTable";
import RunScore from "../pages/RunScore/RunScore";


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
        },
        {
          path: '/teams',
          element: <Teams></Teams>
        },
        {
          path: '/fixtures',
          element: <Fixtures></Fixtures>
        },
        {
          path: '/pointTable',
          element: <PointTable></PointTable>
        }
      ]
    },
  ]);