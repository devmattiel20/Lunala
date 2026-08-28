import { useState } from "react";
import PublisherSidebar from "../PublisherSidebar/PublisherSidebar";
import PublisherContent from "../PublisherContent/PublisherContent";
import "./PublisherExplorer.css";

function PublisherExplorer() {

    const [publisherSeleccionado, setPublisherSeleccionado] = useState("nintendo"); // Estado inicial 

    return (
        <section id="publishers" className="publisher-explorer">

            <PublisherSidebar
                publisherSeleccionado={publisherSeleccionado}
                setPublisherSeleccionado={setPublisherSeleccionado}
            />

            <PublisherContent
                publisherSeleccionado={publisherSeleccionado}
            />

        </section>
    );
}

export default PublisherExplorer;