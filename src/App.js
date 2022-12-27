import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Addtask from "./components/Addtask/Addtask";
import Completedtask from "./components/Completedtask/Completedtask";
import Error from "./components/Error/Error";
import Mytask from "./components/Mytask/Mytask";
import Main from "./layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Mytask></Mytask>
      },
      {
        path: '/mytasks',
        element: <Mytask></Mytask>
      },
      {
        path: '/addtask',
        element: <Addtask></Addtask>
      },
      {
        path: '/completedtask',
        element: <Completedtask></Completedtask>
      }
      
    ]
  },
  {
    path: "*",
    element: <Error></Error>
  }
])
function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
