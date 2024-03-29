import { Container, Logo } from "../../components";
import React from "react";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const authLogin = useSelector(state=> state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Posts",
      slug: "/all-post",
      active: authLogin,
    },
    {
      name: "Add Posts",
      slug: "/add-Post",
      active: authLogin,
    },
    {
      name: "Log in",
      slug: "/Login",
      active: !authLogin,
    },
    {
      name: "Register",
      slug: "/signUp",
      active: !authLogin,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authLogin && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
