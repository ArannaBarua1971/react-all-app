import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import auth from "../../appwrite/auth";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandlebtn = () => {
    auth.logout().then((status) => {
      if (status) {
        dispatch(logout());
      }
    });
  };

  return (
    <button
      onClick={logoutHandlebtn}
      className="px-3 py-2 text-white bg-blue-500"
    >
      Log out
    </button>
  );
}

export default LogoutBtn;
