'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'

interface BackgroundVideoProps {
    videoSrc?: string | string[]
    imageSrc?: string
    children?: React.ReactNode
    className?: string
    autoPlay?: boolean
    loop?: boolean
    muted?: boolean
    parallaxStrength?: number
    animation?: string
    animationDelay?: number
    scrollPlayTrigger?: boolean
    triggerPercentage?: number
}

export function BackgroundVideo({
    videoSrc,
    imageSrc,
    children,
    className = '',
    autoPlay = true,
    loop = true,
    muted = true,
    parallaxStrength = 0.5,
    animation = 'fadeInUp',
    animationDelay = 0,
    scrollPlayTrigger = true,
    triggerPercentage = 30,
}: BackgroundVideoProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const isInView = useInView(containerRef, { once: false, margin: '-100px' })
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)

    // Scroll-based scale and opacity animation
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    })

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.15, 0.9])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3])
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50])

    // Handle scroll-triggered video play/pause with Intersection Observer
    useEffect(() => {
        if (!scrollPlayTrigger || !videoRef.current) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const visibilityPercent = Math.round(entry.intersectionRatio * 100)
                    setScrollProgress(visibilityPercent)

                    if (visibilityPercent >= triggerPercentage) {
                        if (!isVideoPlaying) {
                            videoRef.current?.play().catch(() => {
                                console.log('Video play prevented')
                            })
                            setIsVideoPlaying(true)
                        }
                    } else {
                        if (isVideoPlaying) {
                            videoRef.current?.pause()
                            setIsVideoPlaying(false)
                        }
                    }
                })
            },
            {
                threshold: Array.from({ length: 101 }, (_, i) => i / 100),
            }
        )

        observer.observe(videoRef.current)

        return () => {
            observer.disconnect()
        }
    }, [scrollPlayTrigger, triggerPercentage, isVideoPlaying])

    return (
        <motion.div
            ref={containerRef}
            className={`relative w-full overflow-hidden ${className}`}
            style={{ scale, opacity, y }}
        >
            <motion.div
                className="relative w-full h-full"
                initial={{ y: 120, opacity: 0, scale: 0.8 }}
                animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 120, opacity: 0, scale: 0.8 }}
                transition={{ duration: 1.2, delay: animationDelay / 1000, ease: "easeOut" }}
            >
                {/* Video Background */}
                {videoSrc && (
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: '50% 20%' }}
                        autoPlay={autoPlay && !scrollPlayTrigger}
                        loop={loop}
                        muted={muted}
                        playsInline
                        preload={scrollPlayTrigger ? 'metadata' : 'auto'}
                    >
                        {typeof videoSrc === 'string' ? (
                            <source src={videoSrc} type="video/mp4" />
                        ) : (
                            videoSrc.map((src, idx) => (
                                <source key={idx} src={src} type={`video/${src.split('.').pop()}`} />
                            ))
                        )}
                    </video>
                )}

                {/* Image Background */}
                {!videoSrc && imageSrc && (
                    <img src={imageSrc} alt="Background" className="w-full h-full object-cover" />
                )}

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10">
                    {children}
                </div>
            </motion.div>
        </motion.div>
    )
}
