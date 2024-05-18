import { Outlet, createBrowserRouter } from 'react-router-dom';
import LayoutPublic from '../layout/LayoutPublic.jsx';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import NewsDetails from '../pages/NewsDetails.jsx'
import LayoutPrivate from '../layout/LayoutPrivate.jsx';
import Register from '../pages/Register.jsx';
import NewsForm from '../pages/NewsForm.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import { getAllNews, getNewsById } from '../services/newsServices.js';
import ErrorBoundary from '../components/ErrorBoundary.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Outlet />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: getAllNews
            },
            {
                path: "/news/:id",
                element: <NewsDetails />,
                loader: ({params}) => getNewsById(params.id)
            },
        ],
    },
    {
        path: "/login",
        element: <Login />
    }
]);

export default router;






