import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/Home";
import MyPage from "./page/My";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/my", element: <MyPage /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
