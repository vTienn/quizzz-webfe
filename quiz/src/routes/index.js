import LayoutDefault from "../Layout/LayoutDefault";

import PrivateRoutes from "../components/PrivateRoutes";
import Register from "../pages/Register";
import Topic from "../pages/Topics";
import Answers from "../pages/Answers";
import Quizs from "../pages/Quizs";
import Result from "../pages/Result";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Logout from "../pages/Logout";
import Questions from "../pages/Questions";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "topic",
            element: <Topic />,
          },
          {
            path: "result/:id",
            element: <Result />,
          },
          {
            path: "questions/:id",
            element: <Questions />,
          },
          {
            path: "answers",
            element: <Answers />,
          },
        ],
      },
    ],
  },
];
