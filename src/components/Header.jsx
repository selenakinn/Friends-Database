import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div className="loginFormHeaderDiv">
      <div>
        <h1>FRIENDS DATABASE</h1>
      </div>

      <div className="loginFormHeaderButtonDiv">
        {!isAuthenticated ? (
          <Link to="/login">
            <button>LOGIN</button>
          </Link>
        ) : (
          <>
            <Link to="/friends">
              <button>FRIENDS LIST</button>
            </Link>

            <Link to="/friends/add">
              <button>ADD FRIEND</button>
            </Link>

            <button onClick={logout}>LOGOUT</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
