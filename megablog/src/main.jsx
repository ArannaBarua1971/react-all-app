import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./components";
import "./index.css";

import Home from "./pages/Home.jsx";
import Allpost from "./pages/Allpost.jsx";
import AddPost from "./pages/AddPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import LoginComponent from "./pages/LoginComponent.jsx";
import SingUpComponent from "./pages/SingUpComponent.jsx";
import Post from "./pages/Post.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-post",
        element: (
          // <AuthLayout authentication>
            <Allpost />
        //  </AuthLayout>
        ),
      },
      {
        path: "/add-Post",
        element: (
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path:'/post/:slug',
        element:(
          <Post/>
        )
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/Login",
        element: <LoginComponent />,
      },
      {
        path: "/signUp",
        element: (
          // <AuthLayout authentication={false}>
            <SingUpComponent />
          // </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
  // </React.StrictMode>
);
