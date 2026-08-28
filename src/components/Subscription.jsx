import { useState } from "react";
import ElectroBorder from "./lightswind/electro-border";
import "./Subscription.css";

const plans = [
    {
        name: "Explorer",
        price: "0",
        description: "Para descubrir el universo de Lunala a tu ritmo.",
        features: ["Acceso a juegos destacados", "Noticias semanales", "Perfil de jugador"],
        color: "#3b82f6",
    },
    {
        name: "Orbit",
        price: "9",
        description: "La mejor experiencia para quienes siempre quieren más.",
        features: ["Juegos exclusivos", "Contenido sin anuncios", "Recompensas mensuales"],
        color: "#a78bfa",
        featured: true,
    },
    {
        name: "Constellation",
        price: "19",
        description: "Beneficios premium para vivir cada lanzamiento primero.",
        features: ["Acceso anticipado", "Soporte prioritario", "Eventos para miembros"],
        color: "#f59e0b",
    },
];

function Subscription() {
    const [selectedPlan, setSelectedPlan] = useState("Orbit");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <section className="subscription" aria-labelledby="subscription-title">
            <div className="subscription-heading">
                <h2 id="subscription-title"> Tu plan de juego</h2>
                <p>Elige cómo quieres explorar juegos, estudios e ideas que están dando forma al futuro.</p>
            </div>

            <div className="subscription-plans">
                {plans.map((plan) => (
                    <ElectroBorder
                        key={plan.name}
                        borderColor={plan.color}
                        cardBackground={`linear-gradient(145deg, color-mix(in srgb, ${plan.color} 18%, #0d0d16), #0d0d16 62%)`}
                        glow
                        aura
                        distortion={0.65}
                        animationSpeed={0.8}
                        glowBlur={18}
                        className={`subscription-border ${plan.featured ? "subscription-border-featured" : ""}`}
                    >
                        <article className="subscription-card" style={{ "--plan-color": plan.color }}>
                            {plan.featured && <span className="subscription-badge">MÁS ELEGIDO</span>}
                            <h3>{plan.name}</h3>
                            <p className="subscription-description">{plan.description}</p>
                            <p className="subscription-price"><strong>${plan.price}</strong><span>/ mes</span></p>
                            <ul>
                                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                            </ul>
                            <button
                                type="button"
                                className="subscription-select"
                                onClick={() => {
                                    setSelectedPlan(plan.name);
                                    setSubmitted(false);
                                }}
                            >
                                {selectedPlan === plan.name ? "Plan seleccionado" : "Elegir plan"}
                            </button>
                        </article>
                    </ElectroBorder>
                ))}
            </div>

        
        </section>
    );
}

export default Subscription;