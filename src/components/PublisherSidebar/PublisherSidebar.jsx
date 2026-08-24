function PublisherSidebar({
    publisherSeleccionado,
    setPublisherSeleccionado
}) {

    const publishers = [
        {
            id: "nintendo",
            nombre: "Nintendo"
        },
        {
            id: "playstation",
            nombre: "PlayStation"
        },
        {
            id: "xbox",
            nombre: "Xbox"
        },
        {
            id: "ea",
            nombre: "EA Sports"
        },
        {
            id: "konami",
            nombre: "Konami"
        }
    ];

    return (
        <aside className="publisher-sidebar">

            <h2>Explorar</h2>

            <ul>
                {publishers.map((publisher) => (

                    <li key={publisher.id}>
                        <button
                            className={
                                publisherSeleccionado === publisher.id
                                    ? "publisher-btn active"
                                    : "publisher-btn"
                            }
                            onClick={() =>
                                setPublisherSeleccionado(publisher.id)
                            }
                        >
                            {publisher.nombre}
                        </button>
                    </li>

                ))}
            </ul>

        </aside>
    );
}

export default PublisherSidebar;