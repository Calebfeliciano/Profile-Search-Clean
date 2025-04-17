import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import RootLayout from './RootLayout.tsx';
import ProfileSearch from './pages/ProfileSearch.tsx';
import ShortlistPage from './pages/ShortlistPage'; // Ensure the file exists in the correct path
import ErrorPage from './pages/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProfileSearch />,
      },
      {
        path: '/saved',
        element: <ShortlistPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
