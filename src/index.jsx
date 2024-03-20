import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "../pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <RouterProvider router={router} />
	</React.StrictMode>
)