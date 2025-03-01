import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Github, { loadGithubData } from './components/Github/Github.jsx';
import Home from './components/Home/Home.jsx';
import MainLayout from './components/MainLayout.jsx';
import User from './components/User/User.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/user/:userId',
        element: <User />,
      },
      {
        loader: loadGithubData,
        path: 'github',
        element: <Github />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
