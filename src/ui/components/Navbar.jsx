import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-navbar">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        <img src="assets/logo.png" alt="" />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                            <NavLink className="nav-link" to="/animes">
                                Animes
                            </NavLink>
                            <NavLink className="nav-link" to="/comics">
                                Comics
                            </NavLink>
                            <NavLink className="nav-link" to="/logout">
                                Logout
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
