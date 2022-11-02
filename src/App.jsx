import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FourOhFour, Home } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '*',
    element: <FourOhFour></FourOhFour>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
