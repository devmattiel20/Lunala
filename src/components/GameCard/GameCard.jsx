import "./GameCard.css";

function GameCard({
    nombre,
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


                <span>${precio}</span>

               
            </div>

        </article>
    );
}

export default GameCard;