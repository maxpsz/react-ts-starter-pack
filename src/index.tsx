import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.scss";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import reportWebVitals from "./reportWebVitals";
import Contacts from "routes/contacts/Contacts";
import Contact from "routes/contacts/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contacts",
        children: [
          {
            index: true,
            element: <Contacts />,
          },
          {
            path: ":contactId",
            element: <Contact />,
          },
        ]
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
