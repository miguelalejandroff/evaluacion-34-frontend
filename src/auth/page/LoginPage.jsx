import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    return (
        <>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-white text-dark" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                                            <label className="form-label">Email</label>
                                        </div>

                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                                            <label className="form-label">Password</label>
                                        </div>

                                        <NavLink className="btn btn-outline-dark btn-lg px-5" to="/">
                                            Login
                                        </NavLink>

                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!">
                                                <i className="fab fa-facebook-f fa-lg"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fab fa-twitter fa-lg mx-4"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fab fa-google fa-lg"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginPage;
