import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Addtask from "./components/Addtask/Addtask";
import Completedtask from "./components/Completedtask/Completedtask";
import Error from "./components/Error/Error";
import Login from "./components/Login/Login";
import Mytask from "./components/Mytask/Mytask";
import Signup from "./components/Signup/Signup";
import Main from "./layout/Main";
import PrivateRouter from "./layout/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRouter><Main></Main></PrivateRouter>,
    children: [
      {
        path: "/",
        element: <PrivateRouter><Mytask></Mytask></PrivateRouter>,
      },
      {
        path: "/mytasks",
        element: <PrivateRouter><Mytask></Mytask></PrivateRouter>,
      },
      {
        path: "/addtask",
        element: <PrivateRouter><Addtask></Addtask></PrivateRouter>,
      },
      {
        path: "/completedtask",
        element: <PrivateRouter><Completedtask></Completedtask></PrivateRouter>,
      },
    ],
  },
  {
    path: "*",
    element: <PrivateRouter><Error></Error></PrivateRouter>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </QueryClientProvider>
    </div>
  );
}

export default App;
