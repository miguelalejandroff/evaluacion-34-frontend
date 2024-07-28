import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../helpers/getHeroesById';
import { HeroDetail } from '../components/HeroDetail';

const HeroPage = () => {
    const { id } = useParams();
    const hero = getHeroesById(Number(id));
    const navigate = useNavigate();

    useEffect(() => {
        if (!hero) {
            window.Swal.fire({
                title: 'Heroe no encontrado',
                text: `El heroe con el ID: ${id} No existe.`,
                icon: 'error',
                showCancelButton: true,
                confirmButtonText: 'Ir a Comics',
                cancelButtonText: 'Ir a Anime',
                showCloseButton: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/comics');
                } else if (result.dismiss === window.Swal.DismissReason.cancel) {
                    navigate('/animes');
                }
            });
        }
    }, [hero, id, navigate]);

    return (
        <>
            {hero ? (
                <HeroDetail {...hero} prevPath={location.state?.from} />
            ) : (
                <h1>Loading...</h1> // Muestra un mensaje de carga mientras se verifica la existencia del héroe
            )}
        </>
    );
};

export default HeroPage;
