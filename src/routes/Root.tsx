import { NavLink, Outlet } from "react-router-dom";

function NavList() {
  const activeStyle = {
    textDecoration: "underline",
  };

  const activeClassName = "underline";

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contacts"
            className={({ isActive }) => isActive ? activeClassName : undefined}
          >
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink to="contacts/1">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Contact: 1
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function Layout() {
  return (
    <>
      <div className="Layout">
        <NavList />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;