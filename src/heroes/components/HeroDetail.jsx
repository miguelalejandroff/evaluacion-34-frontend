import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const HeroDetail = ({ image, comments, views, title, descripcion, tipo, studios, status, genero, prevPath }) => {
    const navigate = useNavigate();

    const handleReturn = () => {
        if (prevPath) {
            navigate(prevPath);
        } else if (tipo === 'animes') {
            navigate('/animes');
        } else {
            navigate('/comics');
        }
    };
    return (
        <>
            <div className="row py-5">
                <div className="col-lg-3">
                    <div
                        className="position-relative text-white rounded-3"
                        style={{
                            height: '440px',
                            backgroundImage: `url(../${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="position-absolute bottom-0 start-0 bg-secondary text-white px-2 py-1 rounded-2 m-2">
                            <i className="fa fa-comments"></i> {comments}
                        </div>
                        <div className="position-absolute bottom-0 end-0 bg-secondary text-white px-2 py-1 rounded-2 m-2">
                            <i className="fa fa-eye"></i> {views}
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className=" text-white p-3 rounded-3">
                        <div className="mb-3">
                            <h3 className="fw-bold">{title}</h3>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <div className="me-2">
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                            </div>
                        </div>
                        <p className="text-light">{descripcion}</p>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <ul className="list-unstyled">
                                    <li>
                                        <strong>Tipo:</strong> {tipo}
                                    </li>
                                    <li>
                                        <strong>Estudio:</strong> {studios}
                                    </li>
                                    <li>
                                        <strong>Estado:</strong> {status}
                                    </li>
                                    <li>
                                        <strong>Géneros:</strong> {genero.join(', ')}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-3">
                            <button onClick={handleReturn} className="btn btn-danger">
                                <span>Volver</span> <i className="fa fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

HeroDetail.propTypes = {
    image: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    tipo: PropTypes.arrayOf(PropTypes.string).isRequired,
    studios: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    genero: PropTypes.arrayOf(PropTypes.string).isRequired,
    prevPath: PropTypes.string.isRequired,
};
