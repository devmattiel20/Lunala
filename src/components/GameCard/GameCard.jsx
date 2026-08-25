import "./GameCard.css";

function GameCard({
    nombre,
    genero,
    precio,
    imagen,
    delay,}) {

    return (
            <article
            className="game-card"
            style={{
                animationDelay: `${delay}ms`
            }}
        >

            <div className="game-image">

                <img
                    src={imagen}
                    alt={nombre}
                />

            </div>

            <div className="game-info">

                <h3>{nombre}</h3>

                <p>{genero}</p>

                <span>${precio}</span>

               
            </div>

        </article>
    );
}

export default GameCard;