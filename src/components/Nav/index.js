import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link
                        to="/"
                        className={
                        window.location.pathname === "/" || window.location.pathname === "/books"
                            ? "nav-link active"
                            : "nav-link"
                        }
                    >
                        Search
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/books:id"
                        className={window.location.pathname === "/books:id" ? "nav-link active" : "nav-link"}
                    >
                        Saved
                    </Link>
                </li>
            </ul>
        </div>
    </nav>

    );
}
      
export default Nav;


  
