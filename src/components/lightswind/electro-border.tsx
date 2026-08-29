"use client";

import React, { CSSProperties, PropsWithChildren } from "react";

const toRGBA = (color: string, alpha = 1): string => {
    if (!color) return `rgba(0, 255, 252, ${alpha})`;

    if (color.startsWith("#")) {
        const hex = color.length === 4
            ? `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`
            : color;

        if (hex.length === 7) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }
    }

    if (typeof window === "undefined") return color;

    try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return color;
        ctx.fillStyle = color;
        const computed = ctx.fillStyle;

        if (computed.startsWith("rgba")) {
            return computed.replace(/[\d.]+\)$/g, `${alpha})`);
        }
        if (computed.startsWith("rgb")) {
            return computed.replace("rgb", "rgba").replace(")", `, ${alpha})`);
        }
        if (computed.startsWith("#")) {
            const r = parseInt(computed.slice(1, 3), 16);
            const g = parseInt(computed.slice(3, 5), 16);
            const b = parseInt(computed.slice(5, 7), 16);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }
    } catch {
        return color;
    }

    return color;
};

export interface ElectroBorderProps extends PropsWithChildren {
    borderColor?: string;
    cardBackground?: string;
    borderWidth?: number;
    distortion?: number;
    animationSpeed?: number;
    radius?: string | number;
    glow?: boolean;
    aura?: boolean;
    overlay?: boolean;
    effects?: boolean;
    glowBlur?: number;
    className?: string;
    style?: CSSProperties;
}

export const ElectroBorder: React.FC<ElectroBorderProps> = ({
    children,
    borderColor = "#00fffc",
    cardBackground,
    borderWidth = 2,
    distortion = 1,
    animationSpeed = 1,
    radius = "24px",
    glow = true,
    aura = true,
    overlay = true,
    effects = true,
    glowBlur = 32,
    className,
    style,
}) => {
    const parsedRadius = typeof radius === "number" ? `${radius}px` : radius;
    const gradientColor = toRGBA(borderColor, 0.25);
    const electricLight = toRGBA(borderColor, 0.9);
    const electricDim = toRGBA(borderColor, 0.5);
    const pulseDuration = `${Math.max(2.4, 6 / Math.max(0.25, animationSpeed))}s`;
    const driftDuration = `${Math.max(6, 12 / Math.max(0.25, animationSpeed))}s`;
    const glowSize = Math.max(12, glowBlur);
    const borderGlow = `0 0 0 1px ${electricDim}, 0 0 ${glowSize}px ${electricLight}`;

    return (
        <>
            <style>{`
                @keyframes electro-drift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                @keyframes electro-pulse {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.03); }
                }

                @keyframes electro-scan {
                    0% { background-position: -120% 0; }
                    100% { background-position: 220% 0; }
                }
            `}</style>

            <div
                className={`relative overflow-hidden ${className ?? ""}`}
                style={{
                    borderRadius: parsedRadius,
                    padding: "2px",
                    ...style,
                    willChange: "transform",
                }}
            >
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        borderRadius: parsedRadius,
                        background: cardBackground ? cardBackground : undefined,
                        backgroundImage: cardBackground
                            ? undefined
                            : `linear-gradient(135deg, ${gradientColor}, rgba(255,255,255,0.04), ${gradientColor})`,
                        backgroundSize: "180% 180%",
                        animation: `electro-drift ${driftDuration} ease-in-out infinite`,
                        opacity: cardBackground ? 1 : 0.95,
                    }}
                />

                <div
                    className="absolute inset-[2px] pointer-events-none"
                    style={{
                        borderRadius: parsedRadius,
                        border: `${borderWidth}px solid ${electricDim}`,
                        boxShadow: borderGlow,
                        background: "transparent",
                        animation: `electro-pulse ${pulseDuration} ease-in-out infinite`,
                    }}
                />

                {effects && glow && (
                    <div
                        className="absolute inset-[1px] pointer-events-none"
                        style={{
                            borderRadius: parsedRadius,
                            border: `${borderWidth + 1}px solid ${electricLight}`,
                            filter: `blur(${Math.max(2, glowBlur / 4)}px)`,
                            opacity: 0.9,
                        }}
                    />
                )}

                {effects && overlay && (
                    <div
                        className="absolute inset-0 pointer-events-none opacity-35 dark:opacity-55 mix-blend-screen"
                        style={{
                            borderRadius: parsedRadius,
                            background: `linear-gradient(120deg, transparent 0%, ${electricLight} 30%, transparent 45%, transparent 55%, ${electricLight} 70%, transparent 100%)`,
                            backgroundSize: "220% 100%",
                            animation: `electro-scan ${Math.max(2.8, 5 / Math.max(0.25, animationSpeed))}s linear infinite`,
                        }}
                    />
                )}

                {effects && aura && (
                    <div
                        className="absolute inset-[-10%] pointer-events-none"
                        style={{
                            borderRadius: parsedRadius,
                            background: `radial-gradient(circle at center, ${electricLight} 0%, ${electricDim} 35%, transparent 72%)`,
                            filter: `blur(${glowBlur}px)`,
                            opacity: 0.6,
                            transform: `scale(${1 + (distortion || 1) * 0.04})`,
                        }}
                    />
                )}

                <div className="relative z-10 h-full w-full" style={{ borderRadius: parsedRadius }}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default ElectroBorder;
