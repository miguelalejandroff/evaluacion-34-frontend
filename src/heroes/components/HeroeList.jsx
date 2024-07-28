import PropTypes from 'prop-types';
import { getHeroesByTipo } from '../helpers/getHeroesByTipo';
import { HeroeCard } from './HeroeCard';

export const HeroeList = ({ tipo }) => {
    const heroes = getHeroesByTipo(tipo);
    return (
        <>
            <div className="row py-5 px-3">
                <h5 className="text-white titulo">Anime</h5>
            </div>
            <div className="row">
                {heroes.map((item, index) => (
                    <HeroeCard key={index} {...item} link={`/hero/${item.id}`} />
                ))}
            </div>
        </>
    );
};

HeroeList.propTypes = {
    tipo: PropTypes.string.isRequired,
};
