function GameCard({ nombre, genero, precio }) {

    return (
        <article className="game-card">

            <div className="game-image">
                Imagen
            </div>

            <div className="game-info">

                <h3>{nombre}</h3>

                <p>{genero}</p>

                <span>{precio}</span>

                <button>
                    Agregar al carrito
                </button>

            </div>

        </article>
    );
}

export default GameCard;