import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <div className="py-5 text-white">
                <h1>Bienvenido a nuestro sitio web</h1>
                <p>En nuestro sitio web, puedes encontrar las siguientes secciones:</p>
                <ul>
                    <li>
                        <strong>Animes:</strong> Visita nuestra página de <Link to="/animes">Animes</Link> para explorar una colección de tus animes
                        favoritos.
                    </li>
                    <li>
                        <strong>Comics:</strong> Dirígete a nuestra página de <Link to="/comics">Comics</Link> para descubrir una amplia variedad de
                        comics.
                    </li>
                    <li>
                        <strong>Logout:</strong> Cuando hayas terminado, asegúrate de <Link to="/logout">Cerrar Sesión</Link> de manera segura.
                    </li>
                </ul>
            </div>
        </>
    );
};

export default HomePage;
