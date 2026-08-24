import GameCard from "../GameCard/GameCard";

function PublisherContent({ publisherSeleccionado }) {

    return (
        <main className="publisher-content">

            <div className="publisher-header">
                <h2>{publisherSeleccionado}</h2>
                <p>
                    Explora los videojuegos de este publisher.
                </p>
            </div>

            <div className="games-grid">

                <GameCard
                    nombre="Pokémon Emerald"
                    genero="RPG"
                    precio="$59.99"
                />

                <GameCard
                    nombre="Mario Kart"
                    genero="Racing"
                    precio="$49.99"
                />

                <GameCard
                    nombre="The Legend of Zelda"
                    genero="Adventure"
                    precio="$69.99"
                />

            </div>

        </main>
    );
}

export default PublisherContent;