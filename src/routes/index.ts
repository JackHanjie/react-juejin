import React, { lazy } from "react";

const Home: React.FC = lazy(() => import("../views/Home/Home"));
const Following: React.FC = lazy(() => import("../components/routes/Following"));
const Recommended: React.FC = lazy(() => import("../components/routes/Recommended"));
const Frontend: React.FC = lazy(() => import("../components/routes/Frontend"));
const Backend: React.FC = lazy(() => import("../components/routes/Backend"));
const Android: React.FC = lazy(() => import("../components/routes/Android"));
const IOS: React.FC = lazy(() => import("../components/routes/Ios"));
const AI: React.FC = lazy(() => import("../components/routes/Ai"));
const Devtools: React.FC = lazy(() => import("../components/routes/Devtools"));
const Codelife: React.FC = lazy(() => import("../components/routes/Codelife"));
const Reading: React.FC = lazy(() => import("../components/routes/Reading"));
const Ranking: React.FC = lazy(() => import("../components/routes/Ranking"));



const routes = [
  {
    path: "/",
    element: React.createElement(Home),
    children: [
      {
        index: true,
        element: React.createElement(Recommended),
      },
      {
        path: "following",
        element: React.createElement(Following),
      },
      {
        path: "frontend",
        element: React.createElement(Frontend),
      },
      {
        path: "backend",
        element: React.createElement(Backend),
      },
      {
        path: "android",
        element: React.createElement(Android),
      },
      {
        path: "ios",
        element: React.createElement(IOS),
      },
      {
        path: "ai",
        element: React.createElement(AI),
      },
      {
        path: "devtools",
        element: React.createElement(Devtools),
      },
      {
        path: "codelife",
        element: React.createElement(Codelife),
      },
      {
        path: "reading",
        element: React.createElement(Reading),
      },
      {
        path: "ranking",
        element: React.createElement(Ranking),
      },
    ]
  },
  
];

export default routes


