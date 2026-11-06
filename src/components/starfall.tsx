"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

type Star = { x: number; y: number; vx: number; vy: number; r: number; a: number };

const REPEL_RADIUS = 120;

export default function Starfall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rgb = resolvedTheme === "dark" ? "255,255,255" : "30,41,59";
    const mouse = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let raf = 0;

    const spawn = (anywhere: boolean): Star => ({
      x: Math.random() * width,
      y: anywhere ? Math.random() * height : -10,
      vx: 0,
      vy: 0.3 + Math.random() * 0.7,
      r: 0.6 + Math.random() * 1.4,
      a: 0.2 + Math.random() * 0.5,
    });

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(120, Math.floor((width * height) / 14000));
      stars = Array.from({ length: count }, () => spawn(true));
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const dx = s.x - mouse.x;
        const dy = s.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (1 - dist / REPEL_RADIUS) * 0.6;
          s.vx += (dx / dist) * force;
          s.vy += (dy / dist) * force * 0.5;
        }
        s.vx *= 0.94;
        s.x += s.vx;
        s.y += s.vy;
        if (s.y > height + 10 || s.x < -20 || s.x > width + 20) stars[i] = spawn(false);

        ctx.fillStyle = `rgba(${rgb},${s.a})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    if (reduceMotion) {
      draw();
      cancelAnimationFrame(raf);
    } else {
      window.addEventListener("pointermove", onMove);
      document.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
