import React from "react";
import { Link } from "react-router-dom";
import "../Components/Navbar.css";
function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="Link" href="#">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/showbook" className="Link" href="#">
                            Show Book
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/addbook" className="Link" href="#">
                            Add Book
                        </Link>
                    </li> */}
                    <li>
                        <Link to="*" className="Link" href="#">
                            Error Page
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
