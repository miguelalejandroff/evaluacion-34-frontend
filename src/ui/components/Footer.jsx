import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    useEffect(() => {
        const scrollToTopButton = document.getElementById('scrollToTopButton');
        scrollToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }, []);

    return (
        <footer className="footer bg-navbar text-white py-5 position-relative">
            <div className="page-up position-absolute" style={{ left: '50%', top: '-25px', marginLeft: '-25px' }}>
                <a
                    href="#"
                    id="scrollToTopButton"
                    className="d-inline-block text-white bg-danger rounded-circle text-center"
                    style={{ fontSize: '36px', height: '50px', width: '50px', lineHeight: '50px' }}
                >
                    <i className="fa fa-solid fa-angle-up text-white"></i>
                </a>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mb-3">
                        <div className="footer__logo">
                            <a href="/">
                                <img src="assets/logo.png" alt="Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <div className="text-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item mr-1">
                                    <NavLink className="nav-link" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink className="nav-link" to="/animes">
                                        Animes
                                    </NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink className="nav-link" to="/comics">
                                        Comics
                                    </NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink className="nav-link" to="/logout">
                                        Logout
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 text-lg-right text-center">
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} Todos los derechos reservados | Diseñado y desarrollado por{' '}
                            <a target="_blank" rel="noopener noreferrer" className="text-danger">
                                Miguel Fernandez
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
