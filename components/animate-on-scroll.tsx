"use client"

import { useEffect, useRef, ReactNode } from "react"

interface AnimateOnScrollProps {
    children: ReactNode
    animation?: string
    delay?: number
    threshold?: number
    rootMargin?: string
    className?: string
}

export function AnimateOnScroll({
    children,
    animation = "fadeInUp",
    delay = 0,
    threshold = 0.1,
    rootMargin = "-100px",
    className = "",
}: AnimateOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (prefersReducedMotion) {
            element.style.opacity = "1"
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add animation class after delay
                        setTimeout(() => {
                            element.classList.add("animate-in")
                        }, delay)

                        // Unobserve after animation
                        observer.unobserve(element)
                    }
                })
            },
            {
                threshold,
                rootMargin,
            }
        )

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [delay, threshold, rootMargin])

    return (
        <div ref={ref} className={`animate-on-scroll ${animation} ${className}`}>
            {children}
        </div>
    )
}
