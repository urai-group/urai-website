import { useEffect, useState } from "react";
import { MOBILE_BREAKPOINT } from "./use-mobile";

export function useMouseParallax(strength = 0.015) {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (window.innerWidth < MOBILE_BREAKPOINT) return;

        let rafId: number;
        let targetX = 0, targetY = 0;
        let currentX = 0, currentY = 0;

        const onMove = (e: MouseEvent) => {
            targetX = (e.clientX - window.innerWidth / 2) * strength;
            targetY = (e.clientY - window.innerHeight / 2) * strength;
        };

        function tick() {
            currentX += (targetX - currentX) * 0.06;
            currentY += (targetY - currentY) * 0.06;
            setOffset({ x: currentX, y: currentY });
            rafId = requestAnimationFrame(tick);
        }

        window.addEventListener("mousemove", onMove);
        rafId = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(rafId);
        };
    }, [strength]);

    return offset;
}
