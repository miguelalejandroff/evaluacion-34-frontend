import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const HeroeCard = ({ image, ep, comments, views, title, tags, link }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                <Link to={link} className="text-decoration-none">
                    <div className="card h-100 bg-transparent">
                        <div
                            className="card-img-top"
                            style={{
                                backgroundImage: `url(${image})`,
                                height: '325px',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '5px',
                                position: 'relative',
                            }}
                        >
                            <div className="position-absolute top-0 start-0 m-2 p-2 bg-danger text-white rounded">{ep}</div>
                            <div className="position-absolute bottom-0 start-0 m-2 p-2 bg-dark text-white rounded">
                                <i className="fa fa-comments"></i> {comments}
                            </div>
                            <div className="position-absolute bottom-0 end-0 m-2 p-2 bg-dark text-white rounded">
                                <i className="fa fa-eye"></i> {views}
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="list-inline mb-2">
                                {tags.map((tag, index) => (
                                    <li key={index} className="list-inline-item badge bg-secondary">
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                            <h5 className="card-title fw-bold lh-sm text-white">{title}</h5>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};
HeroeCard.propTypes = {
    image: PropTypes.string.isRequired,
    ep: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
};
