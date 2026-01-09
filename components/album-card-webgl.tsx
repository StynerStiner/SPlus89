'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface AlbumCardWebGLProps {
    title: string
    image: string
}

export function AlbumCardWebGL({ title, image }: AlbumCardWebGLProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)
    const [isHovering, setIsHovering] = useState(false)
    const mousePos = useRef({ x: 0, y: 0 })
    const time = useRef(0)

    useEffect(() => {
        const canvas = canvasRef.current
        const container = containerRef.current
        if (!canvas || !container || !imgRef.current) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const updateCanvasSize = () => {
            canvas.width = container.offsetWidth
            canvas.height = container.offsetHeight
        }
        updateCanvasSize()

        const animate = () => {
            if (!isHovering || !imgRef.current) {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.drawImage(imgRef.current as CanvasImageSource, 0, 0, canvas.width, canvas.height)
                requestAnimationFrame(animate)
                return
            }

            time.current += 0.016

            // Clear and draw with distortion
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Create ripple effect using canvas pixel manipulation
            const imageData = ctx.createImageData(canvas.width, canvas.height)
            const data = imageData.data

            // Draw the base image first
            ctx.drawImage(imgRef.current as CanvasImageSource, 0, 0, canvas.width, canvas.height)
            let baseImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
            const baseData = baseImageData.data

            // Apply ripple distortion with multiple layered waves
            const strength = 60
            for (let i = 0; i < baseData.length; i += 4) {
                const pixelIndex = i / 4
                const x = pixelIndex % canvas.width
                const y = Math.floor(pixelIndex / canvas.width)

                // Calculate distance from mouse
                const dx = (x / canvas.width) - mousePos.current.x
                const dy = (y / canvas.height) - mousePos.current.y
                const dist = Math.sqrt(dx * dx + dy * dy)

                // Create multiple layered ripple waves for cooler effect
                const ripple1 = Math.sin(dist * 40 - time.current * 6) * 0.8 + 0.6
                const ripple2 = Math.cos(dist * 25 - time.current * 4.5) * 0.6 + 0.5
                const ripple = (ripple1 + ripple2) / 2

                // Apply complex distortion offset with multiple frequencies
                const offset1 = Math.sin(dist * 50 - time.current * 5) * 25
                const offset2 = Math.cos(dist * 35 - time.current * 3.5) * 20
                const offset = (offset1 + offset2) * strength * ripple * 0.02

                const sourceX = Math.floor(x + dx * offset)
                const sourceY = Math.floor(y + dy * offset)

                // Bounds check
                if (sourceX >= 0 && sourceX < canvas.width && sourceY >= 0 && sourceY < canvas.height) {
                    const sourcePixel = (sourceY * canvas.width + sourceX) * 4

                    // Add subtle color shimmer to ripple zones
                    const shimmer = Math.sin(time.current * 3 + dist * 15) * 0.1 + 0.05
                    const shimmerR = Math.floor(baseData[sourcePixel] * (1 + shimmer))
                    const shimmerG = Math.floor(baseData[sourcePixel + 1] * (1 + shimmer * 0.7))
                    const shimmerB = Math.floor(baseData[sourcePixel + 2] * (1 + shimmer * 0.5))

                    data[i] = Math.min(255, shimmerR)
                    data[i + 1] = Math.min(255, shimmerG)
                    data[i + 2] = Math.min(255, shimmerB)
                    data[i + 3] = baseData[sourcePixel + 3]
                } else {
                    data[i] = baseData[i]
                    data[i + 1] = baseData[i + 1]
                    data[i + 2] = baseData[i + 2]
                    data[i + 3] = baseData[i + 3]
                }
            }

            ctx.putImageData(imageData, 0, 0)
            requestAnimationFrame(animate)
        }

        animate()
        window.addEventListener('resize', updateCanvasSize)

        return () => {
            window.removeEventListener('resize', updateCanvasSize)
        }
    }, [isHovering])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (!rect) return
        mousePos.current.x = (e.clientX - rect.left) / rect.width
        mousePos.current.y = (e.clientY - rect.top) / rect.height
    }

    return (
        <div
            className="group cursor-pointer relative overflow-hidden rounded-lg aspect-square bg-[#1A1917]"
            ref={containerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Hidden image for reference */}
            <img
                ref={imgRef}
                src={image}
                alt="album"
                className="hidden"
                crossOrigin="anonymous"
            />

            {/* Canvas with ripple effect blended into album image */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />

            {/* White Overlay - Fades In on Hover */}
            <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Title Bar with Gradient Background */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/90 via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 pointer-events-none">
                <h3 className="text-lg font-normal text-[#F7F5EC] group-hover:text-[#B5312A] transition-colors duration-700">
                    {title}
                </h3>
            </div>
        </div>
    )
}



