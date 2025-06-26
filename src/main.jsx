// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router';

import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import CardDetails from './pages/CardDetails.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import Error from './pages/Error.jsx';

// 🔽 Dashboard pages & layout
// import DashboardLayout from './layouts/DashboardLayout.jsx';
// import Overview from './pages/dashboard/Overview.jsx';
// import AllRecipe from './pages/AllRecipe.jsx';
import AddRecipe from './components/AddRecipe.jsx';
import MyRecipe from './pages/MyRecipe.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import Overview from './pages/dashboard/Overview.jsx';
import AllRecipe from './pages/AllRecipe.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'recipes/:id',
        element: (
          <PrivateRoute>
            <CardDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch(
            `https://cecipe-server-site.vercel.app/recipes/${params.id}`
          );
          return res.json();
        },
      },
      {
        path: 'allRecipe',
        element: <AllRecipe />,
        loader: () => fetch('https://cecipe-server-site.vercel.app/recipes'),
      },
    ],
  },
  // ✅ Dashboard Route
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Overview /> },
      // { path: 'allRecipe', element: <AllRecipe /> },
      {
        path: 'allRecipe',
        loader: () => fetch('https://cecipe-server-site.vercel.app/recipes'),
        element: <AllRecipe />,
      },
      { path: 'addRecipe', element: <AddRecipe /> },
      { path: 'myRecipe', element: <MyRecipe /> },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
