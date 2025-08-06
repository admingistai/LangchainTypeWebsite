"use client"

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const LangChainWaveAnimation = ({ 
  showContent = true,
  title = "The perfect AI search companion for your website. For free.",
  subtitle = "Supercharge your site with intelligent AI answers powered by your own content. Extend engagement, grow traffic, and unlock new revenue."
}) => {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(true);
  const gradientCacheRef = useRef<Map<string, CanvasGradient>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;
    
    let width: number, height: number;
    let time = 0;

    // Device performance detection
    const getDevicePerformance = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isLowEnd = navigator.hardwareConcurrency <= 4 || isMobile;
      return isLowEnd ? 'low' : 'high';
    };

    const devicePerformance = getDevicePerformance();
    
    // Performance-adaptive configuration
    const config = {
      lineCount: devicePerformance === 'low' ? 40 : 60, // Reduced from 80
      lineSpacing: 6,
      segments: devicePerformance === 'low' ? 80 : 120, // Reduced from 200
      waveAmplitude: 40,
      waveFrequency: 0.006,
      waveSpeed: 0.02,
      lineWidth: 1.8,
      targetFPS: devicePerformance === 'low' ? 30 : 60,
      enableGlow: devicePerformance === 'high', // Disable glow on low-end devices
      colors: [
        { r: 147, g: 51, b: 234 }, // Purple
        { r: 236, g: 72, b: 153 }, // Pink
      ],
      backgroundColor: '#0d2626'
    };

    // Resize handler
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
    }

    // Draw a single wave line
    function drawWaveLine(y: number, index: number, totalLines: number) {
      const points: { x: number; y: number }[] = [];
      const segments = config.segments; // Adaptive segments based on performance
      
      // Generate wave points
      for (let i = 0; i <= segments; i++) {
        const x = (i / segments) * (width + 200) - 100;
        const normalizedX = i / segments;
        
        // Create wave effect that moves across the screen
        const waveOffset = Math.sin(
          normalizedX * Math.PI * 3 + // 3 waves across the screen
          time + // Animation time
          index * 0.1 // Phase offset for each line
        ) * config.waveAmplitude;
        
        // Add secondary wave for more organic movement
        const secondaryWave = Math.sin(
          normalizedX * Math.PI * 5 + 
          time * 1.3 + 
          index * 0.15
        ) * config.waveAmplitude * 0.3;
        
        points.push({
          x: x,
          y: y + waveOffset + secondaryWave
        });
      }
      
      // Color interpolation
      const normalizedIndex = index / totalLines;
      const colorT = Math.sin(normalizedIndex * Math.PI); // Smooth transition
      
      const r = Math.floor(config.colors[0].r + (config.colors[1].r - config.colors[0].r) * colorT);
      const g = Math.floor(config.colors[0].g + (config.colors[1].g - config.colors[0].g) * colorT);
      const b = Math.floor(config.colors[0].b + (config.colors[1].b - config.colors[0].b) * colorT);
      
      // Create or retrieve cached gradient
      const gradientKey = `${r}-${g}-${b}-${normalizedIndex.toFixed(2)}-${width}`;
      let gradient = gradientCacheRef.current.get(gradientKey);
      
      if (!gradient) {
        gradient = ctx.createLinearGradient(0, 0, width, 0);
        
        // Opacity based on position (stronger in middle)
        const centerDistance = Math.abs(normalizedIndex - 0.5) * 2;
        const baseOpacity = 0.9 - centerDistance * 0.4;
        
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
        gradient.addColorStop(0.1, `rgba(${r}, ${g}, ${b}, ${baseOpacity * 0.5})`);
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${baseOpacity})`);
        gradient.addColorStop(0.9, `rgba(${r}, ${g}, ${b}, ${baseOpacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        
        // Cache the gradient (limit cache size)
        if (gradientCacheRef.current.size < 100) {
          gradientCacheRef.current.set(gradientKey, gradient);
        }
      }
      
      // Draw the line
      ctx.strokeStyle = gradient;
      ctx.lineWidth = config.lineWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      
      // Draw smooth curve through points
      for (let i = 1; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.stroke();
    }

    // Animation loop with frame rate limiting
    function animate(currentTime: number) {
      // Frame rate limiting
      const frameDelta = 1000 / config.targetFPS;
      if (currentTime - lastFrameTimeRef.current < frameDelta) {
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTimeRef.current = currentTime;

      // Skip animation if not visible
      if (!isVisibleRef.current) {
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Clear canvas
      ctx.fillStyle = config.backgroundColor;
      ctx.fillRect(0, 0, width, height);
      
      // Calculate line positions
      const totalHeight = config.lineCount * config.lineSpacing;
      const startY = (height - totalHeight) / 2;
      
      // Draw all lines
      for (let i = 0; i < config.lineCount; i++) {
        const y = startY + i * config.lineSpacing;
        drawWaveLine(y, i, config.lineCount);
      }
      
      // Add glow effect only on high-performance devices
      if (config.enableGlow) {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.filter = 'blur(4px)';
        ctx.globalAlpha = 0.3;
        
        // Draw select lines with glow (reduced frequency)
        for (let i = 0; i < config.lineCount; i += 4) {
          const y = startY + i * config.lineSpacing;
          drawWaveLine(y, i, config.lineCount);
        }
        
        ctx.restore();
      }
      
      // Update time
      time += config.waveSpeed;
      
      animationIdRef.current = requestAnimationFrame(animate);
    }

    // Visibility observer for performance optimization
    const setupVisibilityObserver = () => {
      if ('IntersectionObserver' in window) {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            isVisibleRef.current = entries[0].isIntersecting;
          },
          { threshold: 0.1 }
        );
        
        if (canvas) {
          observerRef.current.observe(canvas);
        }
      }
    };

    // Initialize
    resize();
    setupVisibilityObserver();
    animate(window.performance.now());

    // Event listeners
    window.addEventListener('resize', resize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      // Clear gradient cache
      gradientCacheRef.current.clear();
    };
  }, []);

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh', 
      overflow: 'hidden',
      backgroundColor: '#0d2626'
    }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
      
      {showContent && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: 10,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          maxWidth: '900px',
          width: '90%'
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 300,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
            lineHeight: 1.2
          }}>
            {title}
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            opacity: 0.8,
            fontWeight: 300,
            marginBottom: '2.5rem',
            lineHeight: 1.5,
            maxWidth: '700px',
            margin: '0 auto 2.5rem'
          }}>
            {subtitle}
          </p>
          <button 
            onClick={() => router.push('/book-demo')}
            style={{
              background: 'linear-gradient(135deg, #9333EA 0%, #EC4899 100%)',
              border: 'none',
              padding: '16px 32px',
              fontSize: '1.125rem',
              fontWeight: 500,
              color: 'white',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(147, 51, 234, 0.3)',
              pointerEvents: 'auto'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(147, 51, 234, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(147, 51, 234, 0.3)';
            }}
          >
            Book a Demo
          </button>
        </div>
      )}
    </div>
  );
};

export default LangChainWaveAnimation;