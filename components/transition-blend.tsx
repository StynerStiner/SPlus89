"use client"

import React from 'react'
import { AnimateOnScroll } from '@/components/animate-on-scroll'

interface TransitionBlendProps {
    height?: string
    gradientDirection?: string
    animationDelay?: number
    showGeometricShapes?: boolean
}

interface GradientOverlayProps {
    height: string
    gradientDirection: string
}

interface GeometricShapesProps {
    animationDelay: number
}

// Gradient Overlay Component
const GradientOverlay: React.FC<GradientOverlayProps> = ({ height, gradientDirection }) => {
    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                height,
                background: `linear-gradient(${gradientDirection}, rgba(181, 49, 42, 0.7) 0%, rgba(181, 49, 42, 0.4) 30%, rgba(15, 14, 13, 0.8) 70%, rgba(15, 14, 13, 1) 100%)`,
                // Fallback for older browsers
                backgroundColor: 'rgba(15, 14, 13, 0.9)'
            }}
        />
    )
}

// Geometric Shapes Component
const GeometricShapes: React.FC<GeometricShapesProps> = ({ animationDelay }) => {
    return (
        <>
            {/* Left Decorative Shape */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 lg:w-30 h-20 lg:h-30 opacity-60 pointer-events-none">
                <svg
                    viewBox="0 0 120 120"
                    className="w-full h-full text-[#EFE8CE]"
                    fill="currentColor"
                >
                    <path d="M20 60 Q60 20 100 60 Q60 100 20 60 Z" />
                </svg>
            </div>

            {/* Right Accent Shape - Hidden on mobile */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 lg:w-25 h-16 lg:h-25 opacity-40 pointer-events-none hidden md:block">
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-[#B5312A]"
                    fill="currentColor"
                >
                    <circle cx="50" cy="50" r="30" />
                    <rect x="35" y="35" width="30" height="30" />
                </svg>
            </div>
        </>
    )
}

// Main TransitionBlend Component
export const TransitionBlend: React.FC<TransitionBlendProps> = ({
    height = "200px",
    gradientDirection = "to bottom",
    animationDelay = 0,
    showGeometricShapes = true
}) => {
    return (
        <div
            className="relative w-full overflow-hidden h-[100px] md:h-[150px] lg:h-[200px]"
            style={{
                // Allow custom height override if needed
                ...(height !== "200px" && { height })
            }}
        >
            <AnimateOnScroll animation="fadeIn" delay={animationDelay}>
                <GradientOverlay
                    height="100%"
                    gradientDirection={gradientDirection}
                />

                {showGeometricShapes && (
                    <GeometricShapes animationDelay={animationDelay} />
                )}
            </AnimateOnScroll>
        </div>
    )
}

export default TransitionBlend