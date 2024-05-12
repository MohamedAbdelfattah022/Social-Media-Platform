import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/login";
import NavBar from "./components/navbar";
import Profile from "./pages/profile/profile";
import { Home } from "./pages/home/home";
import LeftBar from "./components/leftbar";
import RightBar from "./components/rightbar";

function App() {
  const currentUser = true;

  const Layout = () => {
    return (
        <div>
        <NavBar />
        <div className="flex max-w-[110rem] justify-center mx-auto">
          <LeftBar />
          <div className="flex-[6]">
            <Outlet />
          </div>
          <RightBar />
        </div>
        </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;