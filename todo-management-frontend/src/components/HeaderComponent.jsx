import { NavLink } from "react-router-dom";
import { isUserLoggedIn } from "../services/AuthService";

const HeaderComponent = () => {
  /* Diplay the Links as Per User Auth in the Header */
  const isAuth = isUserLoggedIn();

  console.log("Auth: ", isAuth);

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <NavLink className="navbar-brand" to="/">
              Todo Management System
            </NavLink>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {isAuth && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/todos">
                    Todos
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <ul className="navbar-nav">
            {!isAuth && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
            )}

            {!isAuth && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
