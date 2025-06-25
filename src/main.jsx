import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddRecipe from './components/AddRecipe.jsx';

import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import MyRecipe from './pages/MyRecipe.jsx';
import AllRecipe from './pages/AllRecipe.jsx';
import CardDetails from './pages/CardDetails.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import Error from './pages/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
   {
    index: true,
    Component: Home,
   },
   {
    path: "addRecipe",
    // Component: AddRecipe,
    element: <PrivateRoute>
      <AddRecipe></AddRecipe>
    </PrivateRoute>
   },
   
   {
    path: "login",
    Component: Login,
   },
    {
      path: "register",
      Component: Register,
    },
    {
      path: 'myRecipe',
      // Component: MyRecipe,
      element: <PrivateRoute>
        <MyRecipe></MyRecipe>
      </PrivateRoute>
    },
    {
     path: "allRecipe",
    loader: () => fetch("https://cecipe-server-site.vercel.app/recipes"),
    Component: AllRecipe,
    },
    {
  path: "recipes/:id",
  loader: async ({ params }) => {
    const res = await fetch(`https://cecipe-server-site.vercel.app/recipes/${params.id}`);
    return res.json();
  },
  // Component: CardDetails,
  element: <PrivateRoute>
    <CardDetails></CardDetails>
   </PrivateRoute>
}
   ]
  },

  {
    path: "*",
    Component: Error,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
  <RouterProvider router={router} />

    </AuthProvider>
  </StrictMode>,
)
