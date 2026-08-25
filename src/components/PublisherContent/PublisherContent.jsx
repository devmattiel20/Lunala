import "./PublisherContent.css";
import { publishers } from "../data/games";
import GameCard from "../GameCard/GameCard";


function PublisherContent({ publisherSeleccionado }) {

    const publisher = publishers.find(
        (publisher) => publisher.id === publisherSeleccionado// busca dentro del array el publisher que coincide con nuestro estado.
    );

    return (
      <main
    key={publisher.id}
    className={`publisher-content theme-${publisher.tema}`}
>

            <header className="publisher-header">

                <h2>{publisher.nombre}</h2>

                <p>
                    {publisher.descripcion}
                </p>

            </header>

            <div className="games-grid">

                {publisher.juegos.map((juego, juegoIndex) => ( //"Por cada juego del array, crea este JSX."

                      <GameCard // Este es el componente que se va a renderizar por cada juego del array.
                        key={juego.id}
                        nombre={juego.nombre} //los properties que se le pasan al componente GameCard son los mismos que se encuentran en el objeto juego.
                        genero={juego.genero}
                        precio={juego.precio}
                        imagen={juego.imagen}
                        delay={juegoIndex * 100}
                    />

                ))}

            </div>

        </main>
    );
}

export default PublisherContent;