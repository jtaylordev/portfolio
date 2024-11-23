import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './variables.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Notebook from './pages/notebook/index.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/experience',
        element: <Experience />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/projects',
        element: <Projects />
    },
    {
        path: '/notebook',
        element: <Notebook />
    }

])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
