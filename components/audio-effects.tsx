"use client"

import { useEffect, useRef, useState } from "react"

interface AudioEffectsProps {
    audioUrl?: string
    volume?: number
    autoplay?: boolean
    loop?: boolean
    className?: string
    onPlay?: () => void
    onPause?: () => void
}

export function AudioEffects({
    audioUrl,
    volume = 0.5,
    autoplay = false,
    loop = true,
    className = "",
    onPlay,
    onPause,
}: AudioEffectsProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        if (!audioUrl) return

        // Create audio element
        const audio = new Audio(audioUrl)
        audio.volume = volume
        audio.loop = loop
        audioRef.current = audio

        // Audio event listeners
        const handlePlay = () => {
            setIsPlaying(true)
            onPlay?.()
        }

        const handlePause = () => {
            setIsPlaying(false)
            onPause?.()
        }

        const handleEnded = () => {
            if (!audio.loop) {
                setIsPlaying(false)
            }
        }

        audio.addEventListener("play", handlePlay)
        audio.addEventListener("pause", handlePause)
        audio.addEventListener("ended", handleEnded)

        // Autoplay if enabled
        if (autoplay) {
            audio.play().catch((error) => {
                console.error("Audio autoplay failed:", error)
            })
        }

        return () => {
            audio.removeEventListener("play", handlePlay)
            audio.removeEventListener("pause", handlePause)
            audio.removeEventListener("ended", handleEnded)
            audio.pause()
            audioRef.current = null
        }
    }, [audioUrl, volume, loop, autoplay, onPlay, onPause])

    const toggle = () => {
        if (!audioRef.current) return

        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play().catch((error) => {
                console.error("Audio play failed:", error)
            })
        }
    }

    const stateClasses = isPlaying
        ? "sc_audio_effects_on sc_audio_effects_playing"
        : "sc_audio_effects_off"

    return (
        <div
            className={`sc_audio_effects ${stateClasses} ${className}`}
            onClick={audioUrl ? toggle : undefined}
            role={audioUrl ? "button" : undefined}
            aria-label={audioUrl ? (isPlaying ? "Pause audio" : "Play audio") : "Audio visualizer"}
            tabIndex={audioUrl ? 0 : undefined}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
