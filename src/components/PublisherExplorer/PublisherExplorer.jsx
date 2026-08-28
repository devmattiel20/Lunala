import { useState } from "react";
import PublisherSidebar from "../PublisherSidebar/PublisherSidebar";
import PublisherContent from "../PublisherContent/PublisherContent";
import "./PublisherExplorer.css";

function PublisherExplorer() {

    const [publisherSeleccionado, setPublisherSeleccionado] = useState("nintendo"); // Estado inicial 

    return (
        <section id="publishers" className="publisher-explorer">

            <header className="publisher-explorer-header">
                <p>THE WORLD OF PUBLISHERS</p>
                <h1>Explore the universe</h1>
            </header>

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