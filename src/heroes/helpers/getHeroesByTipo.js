import { heroes } from '../data/heroes';

export const getHeroesByTipo = (tipo) => {
    const aux = ['animes', 'comics'];
    if (!aux.includes(tipo)) {
        throw new Error(`El tipo no se encuentra: ${tipo}`);
    }
    return heroes.filter((hero) => hero.tipo === tipo);
};
