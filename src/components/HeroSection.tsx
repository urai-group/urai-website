import { useEffect, useRef } from "react";
import { Button } from "@src/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const MOBILE_BREAKPOINT = 768;

export function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        if (window.innerWidth < MOBILE_BREAKPOINT) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let W = (canvas.width = window.innerWidth);
        let H = (canvas.height = window.innerHeight);
        let animFrameId: number;

        const mouse = { x: W / 2, y: H / 2 };

        // Reduced node count — visual quality is nearly identical
        const NODE_COUNT = Math.min(Math.round((W * H) / 6000), 350);
        const CONNECT_DIST = 100;
        const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;
        const MOUSE_RADIUS = 150;
        const MOUSE_PUSH = 100;
        const MOUSE_PUSH_SQ = MOUSE_PUSH * MOUSE_PUSH;

        // Spatial grid for O(n) neighbor lookup instead of O(n²)
        const CELL = CONNECT_DIST;
        let gridCols = 0;
        let gridRows = 0;
        let grid: number[][] = [];

        function buildGrid() {
            gridCols = Math.ceil(W / CELL) + 1;
            gridRows = Math.ceil(H / CELL) + 1;
            grid = Array.from({ length: gridCols * gridRows }, () => []);
        }

        function clearGrid() {
            for (let i = 0; i < grid.length; i++) grid[i].length = 0;
        }

        function cellIndex(x: number, y: number) {
            return (Math.floor(y / CELL) * gridCols) + Math.floor(x / CELL);
        }

        // Text-zone and edge strength — unchanged logic, no canvas blur
        function textZoneStrength(x: number, y: number): number {
            const dx = (x - W / 2) / 340;
            const dy = (y - H / 2) / 180;
            const d = Math.sqrt(dx * dx + dy * dy);
            return Math.max(0, Math.min(1, 1 - d / 0.9));
        }

        function edgeStrength(x: number, y: number): number {
            const dx = (x - W / 2) / (W / 2);
            const dy = (y - H / 2) / (H / 2);
            const d = Math.sqrt(dx * dx + dy * dy);
            return Math.min(d * 0.85, 1);
        }

        interface NodeData {
            x: number; y: number;
            vx: number; vy: number;
            big: boolean; r: number;
            pulse: number; pulseSpeed: number;
            activated: number;
        }

        let nodes: NodeData[] = [];

        function makeNode(): NodeData {
            const big = Math.random() < 0.1;
            return {
                x: Math.random() * W,
                y: Math.random() * H,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                big,
                r: big ? Math.random() * 5 + 3 : Math.random() * 1.5 + 0.7,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: 0.015 + Math.random() * 0.015,
                activated: 0,
            };
        }

        function initNodes() {
            nodes = Array.from({ length: NODE_COUNT }, makeNode);
            buildGrid();
        }

        // --- Update all nodes ---
        function updateNodes() {
            clearGrid();
            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];
                n.pulse += n.pulseSpeed;
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > W) n.vx *= -1;
                if (n.y < 0 || n.y > H) n.vy *= -1;

                const dx = n.x - mouse.x;
                const dy = n.y - mouse.y;
                const distSq = dx * dx + dy * dy;

                if (distSq < MOUSE_PUSH_SQ) {
                    const dist = Math.sqrt(distSq);
                    const force = (MOUSE_PUSH - dist) / MOUSE_PUSH;
                    n.x += (dx / dist) * force * 2;
                    n.y += (dy / dist) * force * 2;
                    n.activated = Math.min(1, n.activated + 0.1);
                } else if (distSq < MOUSE_RADIUS * MOUSE_RADIUS) {
                    n.activated = Math.min(1, (MOUSE_RADIUS - Math.sqrt(distSq)) / MOUSE_RADIUS);
                } else {
                    n.activated = Math.max(0, n.activated - 0.03);
                }

                // Register in spatial grid
                const ci = cellIndex(n.x, n.y);
                if (ci >= 0 && ci < grid.length) grid[ci].push(i);
            }
        }

        // --- Draw connections using spatial grid ---
        function drawConnections() {
            ctx.lineWidth = 0.6;

            for (let i = 0; i < nodes.length; i++) {
                const a = nodes[i];
                const col = Math.floor(a.x / CELL);
                const row = Math.floor(a.y / CELL);

                // Only check 3x3 neighboring cells (skipping already-checked pairs via j > i)
                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        const nr = row + dr;
                        const nc = col + dc;
                        if (nr < 0 || nr >= gridRows || nc < 0 || nc >= gridCols) continue;
                        const cell = grid[nr * gridCols + nc];
                        for (let k = 0; k < cell.length; k++) {
                            const j = cell[k];
                            if (j <= i) continue; // avoid duplicate pairs

                            const b = nodes[j];
                            const dx = a.x - b.x;
                            const dy = a.y - b.y;
                            const distSq = dx * dx + dy * dy;
                            if (distSq >= CONNECT_DIST_SQ) continue;

                            const dist = Math.sqrt(distSq);
                            const proximity = 1 - dist / CONNECT_DIST;
                            const activation = a.activated > b.activated ? a.activated : b.activated;
                            const alpha = proximity * 0.18 + proximity * activation * 0.65;
                            if (alpha < 0.01) continue;

                            const mx = (a.x + b.x) / 2;
                            const my = (a.y + b.y) / 2;
                            // Replace expensive canvas blur with simple opacity fade
                            const blur = textZoneStrength(mx, my);
                            const opacity = (1 - blur * 0.92);
                            const edge = edgeStrength(mx, my);

                            ctx.globalAlpha = opacity;
                            // No shadowBlur — replaced with brighter color on activated lines
                            ctx.shadowBlur = 0;

                            if (activation > 0.1) {
                                ctx.strokeStyle = `rgba(180,100,255,${alpha})`;
                                ctx.lineWidth = proximity * (0.6 + activation * 1.2);
                            } else if (edge > 0.5) {
                                const t = (edge - 0.5) / 0.5;
                                const r = Math.round(160 + t * 60);
                                const g = Math.round(120 + t * 60);
                                ctx.strokeStyle = `rgba(${r},${g},255,${alpha * (1 + t * 0.4)})`;
                                ctx.lineWidth = proximity * 0.6;
                            } else {
                                ctx.strokeStyle = `rgba(60,0,120,${alpha})`;
                                ctx.lineWidth = proximity * 0.6;
                            }

                            ctx.beginPath();
                            ctx.moveTo(a.x, a.y);
                            ctx.lineTo(b.x, b.y);
                            ctx.stroke();
                        }
                    }
                }
            }
            ctx.globalAlpha = 1;
            ctx.lineWidth = 1;
        }

        // --- Draw nodes — batched by style category to minimize state changes ---
        function drawNodes() {
            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];
                const blur = textZoneStrength(n.x, n.y);
                const opacity = 1 - blur * 0.88;
                if (opacity < 0.02) continue;

                const edge = edgeStrength(n.x, n.y);
                const pulse = 0.9 + Math.sin(n.pulse) * 0.1;
                const radius = n.r * pulse * (1 + n.activated * 0.3);

                ctx.globalAlpha = opacity;

                // Node fill
                ctx.beginPath();
                ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);

                if (n.activated > 0.1) {
                    const av = n.activated;
                    ctx.fillStyle = n.big
                        ? `rgba(${Math.round(50 + av * 50)},0,${Math.round(130 + av * 70)},0.95)`
                        : `rgba(${Math.round(160 - av * 40)},${Math.round(130 - av * 70)},255,0.85)`;
                } else if (edge > 0.5) {
                    const t = (edge - 0.5) / 0.5;
                    if (n.big) {
                        ctx.fillStyle = `rgba(${Math.round(80 + t * 140)},${Math.round(t * 180)},${Math.round(160 + t * 95)},${0.85 + t * 0.1})`;
                    } else {
                        ctx.fillStyle = `rgba(${Math.round(140 + t * 90)},${Math.round(100 + t * 100)},${Math.round(200 + t * 55)},${0.4 + t * 0.35})`;
                    }
                } else {
                    const t = 1 - edge / 0.5;
                    if (n.big) {
                        ctx.fillStyle = `rgba(${Math.round(80 - t * 40)},0,${Math.round(160 - t * 50)},${0.7 + t * 0.2})`;
                    } else {
                        ctx.fillStyle = `rgba(${Math.round(160 - t * 60)},${Math.round(130 - t * 70)},${Math.round(210 - t * 40)},${0.35 + t * 0.2})`;
                    }
                }
                ctx.fill();

                // Activation glow — simple second circle, no radial gradient unless activated strongly
                if (n.activated > 0.15 && blur < 0.5) {
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, radius * 2.5, 0, Math.PI * 2);
                    const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 2.5);
                    grad.addColorStop(0, `rgba(120,40,220,${n.activated * 0.25})`);
                    grad.addColorStop(1, "rgba(120,40,220,0)");
                    ctx.fillStyle = grad;
                    ctx.fill();
                }
            }
            ctx.globalAlpha = 1;
        }

        // The background is rendered via CSS gradient behind the canvas to prevent JavaScript painting overhead.

        function drawMousePulse() {
            const t = Date.now() / 1000;
            for (let r = 1; r <= 3; r++) {
                const radius = (t * 55 * r) % MOUSE_RADIUS;
                const alpha = (1 - radius / MOUSE_RADIUS) * 0.07;
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(180,100,255,${alpha})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }

        let lastTime = 0;
        const FRAME_DURATION = 1000 / 30;

        function animate(time: number) {
            animFrameId = requestAnimationFrame(animate);
            // If scrolled past the hero section (which is ~100vh), stop rendering
            if (window.scrollY > window.innerHeight) return;

            if (time - lastTime < FRAME_DURATION) return;
            lastTime = time - ((time - lastTime) % FRAME_DURATION);

            ctx.clearRect(0, 0, W, H);
            drawMousePulse();
            updateNodes();   // also rebuilds spatial grid
            drawConnections();
            drawNodes();
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleResize = () => {
            if (window.innerWidth < MOBILE_BREAKPOINT) {
                cancelAnimationFrame(animFrameId);
                return;
            }
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
            buildGrid();
            initNodes();
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        initNodes();
        animFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animFrameId);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-16">
            {/* Static CSS background gradient (rendered behind canvas on desktop) */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, #ffffff 0%, #f0eaff 40%, #c9b8ee 70%, #7b4fc4 100%)",
                }}
            />

            {/* Animated canvas for desktop */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full hidden md:block" />

            <div className="relative z-10 text-center px-4 animate-fade-up">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
                    Regensburg's
                    <br />
                    first student <span className="text-primary">AI</span> initiative
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                    Shaping the future of artificial intelligence — together.
                </p>
                <div className="flex flex-wrap gap-4 justify-center mt-8">
                    <Button variant="outline" size="lg" asChild>
                        <a href="mailto:partners@urai-group.com">
                            Become a Partner
                        </a>
                    </Button>
                    <Button size="lg" asChild>
                        <Link to="/member">
                            Become a Member
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />

            <div className="absolute bottom-8 left-0 right-0 flex justify-center z-30">
                <div className="animate-bounce cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                    <ChevronDown className="w-10 h-10 text-primary opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300" />
                </div>
            </div>
        </section>
    );
}
