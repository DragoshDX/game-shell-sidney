import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
