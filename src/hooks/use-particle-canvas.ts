import { useEffect, useRef } from "react";
import { MOBILE_BREAKPOINT } from "./use-mobile";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    baseAlpha: number;
    glow: boolean;
    phase: number;
    phaseSpeed: number;
}

const GLOW_PROBABILITY = 0.14;
const LERP_FACTOR = 0.06;

function createParticle(w: number, h: number, mobile: boolean): Particle {
    const glow = Math.random() < GLOW_PROBABILITY;
    const speed = mobile ? 0.18 : 0.3;
    return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: glow ? Math.random() * 3.5 + 2.5 : Math.random() * 2 + 0.6,
        baseAlpha: glow ? 0.85 : Math.random() * 0.35 + 0.2,
        glow,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.008 + Math.random() * 0.02,
    };
}

function drawGlow(ctx: CanvasRenderingContext2D, p: Particle, size: number, alpha: number) {
    const glowRadius = size * 5;
    const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
    grad.addColorStop(0, `hsla(268, 85%, 72%, ${alpha * 0.55})`);
    grad.addColorStop(0.35, `hsla(262, 70%, 62%, ${alpha * 0.18})`);
    grad.addColorStop(1, "hsla(262, 70%, 60%, 0)");
    ctx.beginPath();
    ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
}

function drawPulseRings(ctx: CanvasRenderingContext2D, mx: number, my: number, mouseRadius: number) {
    const t = Date.now() / 1000;
    for (let r = 1; r <= 2; r++) {
        const radius = (t * 35 * r) % mouseRadius;
        const a = (1 - radius / mouseRadius) * 0.05;
        ctx.beginPath();
        ctx.arc(mx, my, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(270, 70%, 72%, ${a})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }
}

export function useParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        let W: number, H: number;
        const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

        function resize() {
            W = canvas!.offsetWidth;
            H = canvas!.offsetHeight;
            canvas!.width = W * dpr;
            canvas!.height = H * dpr;
            ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        resize();

        const count = isMobile ? 55 : Math.min(Math.round((W * H) / 7000), 300);
        const connectDist = isMobile ? 85 : 130;
        const connectSq = connectDist * connectDist;
        const mouseRadius = 220;
        const mouseRadiusSq = mouseRadius * mouseRadius;

        const particles: Particle[] = Array.from({ length: count }, () =>
            createParticle(W, H, isMobile),
        );

        const mouse = { x: -9999, y: -9999 };
        let lastTime = 0;
        let animFrameId: number;
        const frameInterval = 1000 / (isMobile ? 24 : 30);

        function animate(time: number) {
            animFrameId = requestAnimationFrame(animate);
            if (window.scrollY > H * 1.2) return;
            if (time - lastTime < frameInterval) return;
            lastTime = time;

            ctx.clearRect(0, 0, W, H);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.phase += p.phaseSpeed;
                const twinkle = 0.65 + Math.sin(p.phase) * 0.35;

                p.x += p.vx;
                p.y += p.vy;
                if (p.x < -10) p.x = W + 10;
                if (p.x > W + 10) p.x = -10;
                if (p.y < -10) p.y = H + 10;
                if (p.y > H + 10) p.y = -10;

                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const distSq = dx * dx + dy * dy;
                let activation = 0;

                if (distSq < mouseRadiusSq) {
                    const dist = Math.sqrt(distSq);
                    activation = 1 - dist / mouseRadius;
                    const force = activation * activation * 2.5;
                    p.x += (dx / dist) * force;
                    p.y += (dy / dist) * force;
                }

                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const cdx = p.x - q.x;
                    const cdy = p.y - q.y;
                    const cdistSq = cdx * cdx + cdy * cdy;
                    if (cdistSq >= connectSq) continue;

                    const cdist = Math.sqrt(cdistSq);
                    const prox = 1 - cdist / connectDist;
                    const pairAct = Math.max(activation, 0);
                    const alpha = prox * 0.1 + pairAct * prox * 0.6;
                    if (alpha < 0.01) continue;

                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = `hsla(${262 + pairAct * 20}, 65%, ${55 + pairAct * 25}%, ${alpha})`;
                    ctx.lineWidth = 0.4 + pairAct * 2.2 + prox * 0.4;
                    ctx.stroke();
                }

                const alpha = p.baseAlpha * twinkle * (1 + activation * 0.6);
                const size = p.size * (1 + activation * 0.5);

                if (p.glow) drawGlow(ctx, p, size, alpha);

                ctx.beginPath();
                ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
                ctx.fillStyle = p.glow
                    ? `hsla(270, 80%, 78%, ${alpha})`
                    : `hsla(258, 55%, 55%, ${alpha})`;
                ctx.fill();

                if (p.glow && activation > 0.15) {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, size * 0.35, 0, Math.PI * 2);
                    ctx.fillStyle = `hsla(280, 100%, 94%, ${activation * 0.8})`;
                    ctx.fill();
                }
            }

            if (mouse.x > 0 && mouse.y > 0) {
                drawPulseRings(ctx, mouse.x, mouse.y, mouseRadius);
            }
        }

        const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
        const onTouch = (e: TouchEvent) => {
            const t = e.touches[0];
            if (t) { mouse.x = t.clientX; mouse.y = t.clientY; }
        };
        const onTouchEnd = () => { mouse.x = -9999; mouse.y = -9999; };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("touchmove", onTouch, { passive: true });
        window.addEventListener("touchend", onTouchEnd);
        window.addEventListener("resize", resize);
        animFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animFrameId);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("touchmove", onTouch);
            window.removeEventListener("touchend", onTouchEnd);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return canvasRef;
}
