import {
    createBrowserRouter
} from "react-router-dom";
import App from './App';
import FormPage from './pages/form';

export const router = createBrowserRouter([
    {
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "form",
                element: <FormPage />,
            },
        ]
    },
]);