"use client"

import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { SocialSidebar } from "@/components/social-sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#141312] text-[#EFE8CE]">
            <SocialSidebar />
            <MobileNavigation currentPage="about" />

            {/* Hero Section */}
            <section className="relative h-[50vh] sm:h-[60vh] lg:h-[80vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
                {/* Decorative Shape - Gold on Right */}
                <div className="absolute right-0 top-0 w-48 sm:w-64 lg:w-80 h-[600px] sm:h-[800px] lg:h-[1200px] opacity-80 pointer-events-none z-10">
                    <Image
                        src="/svg-Shapes/Asset 10.svg"
                        alt=""
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/image-17-copyright.jpg"
                        alt="About Me Hero"
                        fill
                        className="object-cover"
                        style={{ objectPosition: '50% 20%' }}
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-[#141312]"></div>
                    {/* Smooth Bottom Blend */}
                    <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10"
                        style={{
                            background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 15%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0.15) 80%, rgba(0,0,0,0.05) 90%, rgba(0,0,0,0) 100%)'
                        }}>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 sm:px-8">
                    <AnimateOnScroll animation="fadeInUp">
                        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                            <div className="flex items-center gap-1">
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-100"></div>
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-200"></div>
                            </div>
                            <span className="text-base sm:text-lg font-subace-expanded tracking-wider text-[#EFE8CE]">SPlus89</span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl lg:text-9xl font-subace-expanded text-[#EFE8CE] mb-4 sm:mb-6 tracking-tight">About Me</h1>
                        <p className="text-[#EFE8CE]/90 text-base sm:text-lg font-subace tracking-wide">Rapper • Lyricist • Songwriter • Entertainer</p>
                    </AnimateOnScroll>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
                    </div>
                </div>
            </section>

            {/* Main About Section */}
            <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 bg-[#0F0E0D] overflow-hidden">
                {/* Top Dark Smooth Blend Transition */}
                <div className="absolute top-0 left-0 right-0 h-96 pointer-events-none z-10"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 15%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0.15) 80%, rgba(0,0,0,0.05) 90%, rgba(0,0,0,0) 100%)'
                    }}>
                </div>

                {/* Smoke Background Overlay */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <Image src="/images/smoke-dec-01.jpg" alt="" fill className="object-cover mix-blend-screen" />
                </div>
                {/* Dark Gradient Blend */}
                <div className="absolute inset-0 bg-linear-to-b from-[#141312] via-transparent to-[#141312] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
                        {/* Image Collage */}
                        <AnimateOnScroll animation="fadeInLeft">
                            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                                {/* Main Image (bottom-left) */}
                                <div className="absolute bottom-0 left-0 w-[65%] h-[70%] rounded-sm overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/image-17-copyright.jpg"
                                        alt="Artist Photo 1"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Top Image */}
                                <div className="absolute top-0 right-0 w-[55%] h-[50%] rounded-sm overflow-hidden shadow-2xl border-4 sm:border-8 border-[#0F0E0D] z-10">
                                    <Image
                                        src="/images/bg05-copyright.png"
                                        alt="Artist Photo 2"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Bottom-right Image */}
                                <div className="absolute bottom-0 right-0 w-[45%] h-[55%] rounded-sm overflow-hidden shadow-2xl border-4 sm:border-8 border-[#0F0E0D] z-20">
                                    <Image
                                        src="/images/image-17-copyright.jpg"
                                        alt="Artist Photo 3"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Content */}
                        <AnimateOnScroll animation="fadeInRight" delay={200}>
                            <div className="space-y-6 sm:space-y-8">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.3em] text-[#B5312A] mb-4 sm:mb-6 font-subace-condensed">
                                        NIGERIAN ARTIST FROM LAGOS
                                    </p>
                                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-subace-expanded text-[#EFE8CE] leading-[1.1] mb-6 sm:mb-8">
                                        Blending Afrosounds<br />with Hip-Hop culture
                                    </h2>
                                    <p className="text-[#EFE8CE]/70 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-subace">
                                        Based in Lagos, Nigeria, I create authentic music that fuses Afrobeats with Hip-Hop and Afro-Hip-Hop influences. Every track tells a story, every beat carries the energy of Lagos streets.
                                    </p>
                                    <p className="text-[#EFE8CE]/70 text-sm sm:text-base leading-relaxed font-subace">
                                        From "We No Send Dem" to "My Baby (Mapami)", my music represents the real voice of Nigerian youth, blending traditional Afrosounds with modern Hip-Hop to create something uniquely authentic.
                                    </p>
                                </div>

                                {/* Music Stats */}
                                <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-[#EFE8CE]/10">
                                    <div className="flex items-center gap-3 sm:gap-4 text-[#EFE8CE]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#B5312A]"></div>
                                        <p className="text-xs sm:text-sm font-subace">5+ Singles Released Since 2024</p>
                                    </div>
                                    <div className="flex items-center gap-3 sm:gap-4 text-[#EFE8CE]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#B5312A]"></div>
                                        <p className="text-xs sm:text-sm font-subace">Available on Audiomack as S-Plus 8ight9ine</p>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <a href="https://audiomack.com/shedracksplus" target="_blank" rel="noopener noreferrer">
                                        <Button className="w-full sm:w-auto bg-[#B5312A] hover:bg-[#9D2820] text-white px-8 sm:px-10 py-4 sm:py-6 rounded-full text-xs sm:text-sm font-subace-condensed uppercase tracking-wider hover:scale-105 transition-all shadow-lg">
                                            Listen on Audiomack
                                        </Button>
                                    </a>
                                    <a href="https://music.apple.com/us/artist/s-plus-8ight9ine/1767245123" target="_blank" rel="noopener noreferrer">
                                        <Button className="w-full sm:w-auto bg-transparent hover:bg-[#B5312A] text-[#B5312A] hover:text-white border-2 border-[#B5312A] px-8 sm:px-10 py-4 sm:py-6 rounded-full text-xs sm:text-sm font-subace-condensed uppercase tracking-wider hover:scale-105 transition-all shadow-lg">
                                            Apple Music
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Latest Releases Section */}
            <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 bg-[#141312] overflow-hidden">
                {/* Smoke Background Overlay */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <Image src="/images/smoke-dec-02.jpg" alt="" fill className="object-cover mix-blend-screen" />
                </div>
                {/* Dark Gradient Blend */}
                <div className="absolute inset-0 bg-linear-to-b from-[#0F0E0D] via-transparent to-transparent pointer-events-none"></div>

                {/* Decorative Shape - Red on Left */}
                <div className="absolute left-0 top-0 w-24 sm:w-32 lg:w-48 h-[600px] sm:h-[800px] lg:h-[1000px] opacity-60 sm:opacity-80 pointer-events-none z-0">
                    <Image
                        src="/svg-Shapes/Asset 35.svg"
                        alt=""
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <AnimateOnScroll animation="fadeInUp">
                        <div className="mb-16">
                            <p className="text-xs uppercase tracking-[0.3em] text-[#B5312A] mb-4 font-subace-condensed">
                                LATEST RELEASES
                            </p>
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-subace-expanded text-[#EFE8CE] leading-tight mb-6">
                                Fresh tracks from<br />Lagos, Nigeria
                            </h2>
                        </div>
                    </AnimateOnScroll>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                        {/* Album Image */}
                        <AnimateOnScroll animation="fadeInLeft">
                            <div className="relative">
                                <div className="relative aspect-square rounded-sm overflow-hidden">
                                    <Image
                                        src="/images/image-17-copyright.jpg"
                                        alt="SPlus89 Artist Photo"
                                        fill
                                        className="object-cover"
                                        style={{ objectPosition: '50% 20%' }}
                                    />
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Track List */}
                        <AnimateOnScroll animation="fadeInRight" delay={200}>
                            <div className="bg-[#B5312A] rounded-sm p-8 sm:p-10 shadow-2xl">
                                <div className="mb-6 sm:mb-8">
                                    <h3 className="text-2xl sm:text-3xl font-subace-expanded text-[#EFE8CE] mb-2">"We No Send Dem (WNSD)"</h3>
                                    <div className="flex items-center gap-3 text-[#EFE8CE]/80">
                                        <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                                            <Play className="w-5 h-5 fill-white" />
                                        </button>
                                        <span className="text-sm font-subace">SPlus89 feat. BigBang</span>
                                        <span className="text-sm font-subace">3:24</span>
                                        <button className="ml-auto text-[#EFE8CE]/60 hover:text-[#EFE8CE]">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Track List */}
                                <div className="space-y-4">
                                    {[
                                        { num: "1", title: "We No Send Dem (WNSD)", artist: "SPlus89 feat. BigBang", time: "3:24" },
                                        { num: "2", title: "Roll It Tonight", artist: "SPlus89 feat. Amotex", time: "4:12" },
                                        { num: "3", title: "My Baby (Mapami)", artist: "SPlus89", time: "3:45" },
                                        { num: "4", title: "Go Local", artist: "SPlus89 feat. Anogiri & Raze Dee", time: "5:03" },
                                        { num: "5", title: "Got No Fear (GNF)", artist: "SPlus89 feat. Raze Dee", time: "3:56" }
                                    ].map((track, index) => (
                                        <div key={index} className="flex items-center gap-4 text-[#EFE8CE]/90 hover:text-[#EFE8CE] transition-colors pb-4 border-b border-white/10 last:border-0">
                                            <span className="text-sm font-subace-expanded w-6">{track.num}</span>
                                            <button className="text-[#EFE8CE]/60 hover:text-[#EFE8CE]">
                                                <Play className="w-4 h-4" />
                                            </button>
                                            <div className="flex-1">
                                                <p className="text-sm font-subace-expanded">{track.title}</p>
                                                <p className="text-xs text-[#EFE8CE]/60 font-subace">{track.artist}</p>
                                            </div>
                                            <span className="text-sm text-[#EFE8CE]/60 font-subace">{track.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Brand Logos */}
                    <AnimateOnScroll animation="fadeIn" delay={400}>
                        <div className="mt-16 sm:mt-24 flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-16">
                            <div className="text-sm sm:text-xl lg:text-2xl font-subace-expanded tracking-wider text-[#EFE8CE]">AUDIOMACK</div>
                            <div className="text-sm sm:text-xl lg:text-2xl font-subace-expanded tracking-wider text-[#EFE8CE]">LAGOS</div>
                            <div className="text-sm sm:text-xl lg:text-2xl font-subace-expanded tracking-wider text-[#EFE8CE]">NIGERIA</div>
                            <div className="text-sm sm:text-xl lg:text-2xl font-subace-expanded tracking-wider text-[#EFE8CE]">AFROBEATS</div>
                            <div className="text-sm sm:text-xl lg:text-2xl font-subace-expanded tracking-wider text-[#EFE8CE]">HIP-HOP</div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Club Music Scene Section */}
            <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/bg05-copyright.png"
                        alt="Club Scene"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#B5312A]/70"></div>
                </div>

                {/* Smoke Background Overlay */}
                <div className="absolute inset-0 opacity-8 pointer-events-none">
                    <Image src="/images/smoke-dec-03.jpg" alt="" fill className="object-cover mix-blend-soft-light" />
                </div>
                {/* Top Smooth Blend Gradient - Extended */}
                <div className="absolute top-0 left-0 right-0 h-64 pointer-events-none z-10"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(20, 19, 18, 1) 0%, rgba(20, 19, 18, 0.7) 30%, rgba(20, 19, 18, 0.4) 60%, rgba(20, 19, 18, 0.2) 80%, transparent 100%)'
                    }}>
                </div>

                {/* Dark Gradient Blend */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>

                {/* Soft Shader Dark Transition */}
                <div className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none z-10"
                    style={{
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.6) 80%, rgba(15, 14, 13, 1) 100%)'
                    }}>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <AnimateOnScroll animation="fadeInUp">
                        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-subace-expanded text-[#EFE8CE] leading-tight mb-6 sm:mb-8">
                            Bringing Lagos vibes<br />to the world stage
                        </h2>
                        <a href="https://audiomack.com/shedracksplus" target="_blank" rel="noopener noreferrer">
                            <Button className="bg-[#B5312A] hover:bg-[#9D2820] text-white px-10 py-6 rounded-full text-sm font-subace-condensed uppercase tracking-wider hover:scale-105 transition-all shadow-lg">
                                Listen Now
                            </Button>
                        </a>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Events Section */}
            <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 bg-[#0F0E0D] overflow-hidden">
                {/* Smoke Background Overlay */}
                <div className="absolute inset-0 opacity-6 pointer-events-none">
                    <Image src="/images/smoke-dec-04.jpg" alt="" fill className="object-cover mix-blend-screen" />
                </div>
                {/* Top Smooth Blend Gradient */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#0F0E0D] via-[#0F0E0D]/80 to-transparent pointer-events-none z-10"></div>

                {/* Dark Gradient Blend */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#141312] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <AnimateOnScroll animation="fadeInUp">
                        <div className="mb-12 sm:mb-16">
                            <p className="text-xs uppercase tracking-[0.3em] text-[#B5312A] mb-4 font-subace-condensed">
                                LIVE PERFORMANCES
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-subace-expanded text-[#EFE8CE] leading-tight">
                                    Catch SPlus89 Live
                                </h2>
                                <a href="#" className="text-[#B5312A] hover:text-[#9D2820] text-sm font-subace-condensed uppercase tracking-wider flex items-center gap-2 self-start sm:self-auto">
                                    <span>View All</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    <div className="space-y-6">
                        {[
                            { date: "15 Mar 2025", title: "Lagos Hip-Hop Festival", venue: "Tafawa Balewa Square", location: "Lagos Island", price: "₦5,000", image: "/images/image-17-copyright.jpg" },
                            { date: "22 Mar 2025", title: "Afrobeats meets Hip-Hop", venue: "Terra Kulture", location: "Victoria Island", price: "₦8,000", image: "/images/image-17-copyright.jpg" },
                            { date: "05 Apr 2025", title: "We No Send Dem Live", venue: "Hard Rock Cafe", location: "Victoria Island", price: "₦12,000", image: "/images/image-17-copyright.jpg" },
                            { date: "20 Apr 2025", title: "Lagos Street Vibes", venue: "Freedom Park", location: "Lagos Island", price: "Free", image: "/images/bg05-copyright.png" },
                            { date: "10 May 2025", title: "SPlus89 Album Launch", venue: "Eko Hotel", location: "Victoria Island", price: "₦15,000", image: "/images/image-17-copyright.jpg" }
                        ].map((event, index) => (
                            <AnimateOnScroll key={index} animation="fadeInUp" delay={index * 100}>
                                <div className="group grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-4 sm:gap-6 lg:gap-8 items-start lg:items-center p-4 sm:p-6 rounded-sm hover:bg-[#EFE8CE]/5 transition-colors cursor-pointer border-b border-[#EFE8CE]/5">
                                    {/* Date */}
                                    <div className="text-left lg:text-center">
                                        <div className="text-2xl sm:text-3xl lg:text-4xl font-subace-expanded text-[#EFE8CE] mb-1">
                                            {event.date.split(' ')[0]}
                                        </div>
                                        <div className="text-sm text-[#EFE8CE]/60 font-subace">
                                            {event.date.split(' ')[1]} {event.date.split(' ')[2]}
                                        </div>
                                    </div>

                                    {/* Event Details */}
                                    <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-sm overflow-hidden shrink-0">
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg sm:text-xl font-subace-expanded text-[#EFE8CE] mb-2 group-hover:text-[#B5312A] transition-colors">
                                                {event.title}
                                            </h3>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-[#EFE8CE]/60 font-subace">
                                                <span className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span className="truncate">{event.venue}</span>
                                                </span>
                                                <span className="truncate">{event.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="text-left lg:text-right">
                                        <div className={`text-xl sm:text-2xl font-subace-expanded ${event.price === 'Free' ? 'text-green-500' : 'text-[#EFE8CE]'}`}>
                                            {event.price}
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scrolling Banner */}
            <section className="py-12 sm:py-16 lg:py-20 bg-[#141312] overflow-hidden border-y border-[#EFE8CE]/10 space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="overflow-hidden whitespace-nowrap">
                    <div className="inline-block animate-marquee">
                        <span className="text-6xl sm:text-8xl lg:text-[120px] font-subace-expanded mx-4 sm:mx-6 lg:mx-8 text-[#EFE8CE]">LAGOS</span>
                        <span className="text-6xl sm:text-8xl lg:text-[120px] mx-4 sm:mx-6 lg:mx-8 text-[#EFE8CE]">✺</span>
                        <span className="text-6xl sm:text-8xl lg:text-[120px] font-subace-expanded mx-4 sm:mx-6 lg:mx-8 text-[#EFE8CE]">AFROBEATS</span>
                        <span className="text-6xl sm:text-8xl lg:text-[120px] mx-4 sm:mx-6 lg:mx-8 text-[#EFE8CE]">✺</span>
                        <span className="text-6xl sm:text-8xl lg:text-[120px] font-subace-expanded mx-4 sm:mx-6 lg:mx-8 text-[#EFE8CE]">HIP-HOP</span>
                        <span className="text-6xl sm:text-8xl lg:text-[120px] mx-4 sm:mx-6 lg:mx-8 text-[#EFE8CE]">✺</span>
                        <span className="text-6xl sm:text-8xl lg:text-[120px] font-subace-expanded mx-4 sm:mx-6 lg:mx-8 text-[#EFE8CE]">NIGERIA</span>
                        <span className="text-6xl sm:text-8xl lg:text-[120px] mx-4 sm:mx-6 lg:mx-8 text-[#EFE8CE]">✺</span>
                    </div>
                </div>
                <div className="overflow-hidden whitespace-nowrap">
                    <div className="inline-block animate-marquee-reverse">
                        <span className="text-6xl sm:text-8xl lg:text-[120px] font-subace-expanded mx-4 sm:mx-6 lg:mx-8 text-[#EFE8CE]">SPLUS89</span>
                        <span className="text-6xl sm:text-8xl lg:text-[120px] mx-4 sm:mx-6 lg:mx-8 text-[#EFE8CE]">✺</span>
                        <span className="text-6xl sm:text-8xl lg:text-[120px] font-subace-expanded mx-4 sm:mx-6 lg:mx-8 text-[#EFE8CE]">RAPPER</span>
                        <span className="text-6xl sm:text-8xl lg:text-[120px] mx-4 sm:mx-6 lg:mx-8 text-[#EFE8CE]">✺</span>
                        <span className="text-6xl sm:text-8xl lg:text-[120px] font-subace-expanded mx-4 sm:mx-6 lg:mx-8 text-[#EFE8CE]">LYRICIST</span>
                        <span className="text-6xl sm:text-8xl lg:text-[120px] mx-4 sm:mx-6 lg:mx-8 text-[#EFE8CE]">✺</span>
                        <span className="text-6xl sm:text-8xl lg:text-[120px] font-subace-expanded mx-4 sm:mx-6 lg:mx-8 text-[#EFE8CE]">SONGWRITER</span>
                        <span className="text-6xl sm:text-8xl lg:text-[120px] mx-4 sm:mx-6 lg:mx-8 text-[#EFE8CE]">✺</span>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 bg-[#0F0E0D]">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimateOnScroll animation="fadeInUp">
                        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-subace-expanded text-[#EFE8CE] leading-tight mb-6">
                            Authentic sounds from<br />
                            <span className="text-[#B5312A]">Lagos, Nigeria</span>
                        </h2>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#0F0E0D] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 border-t border-[#EFE8CE]/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
                        <AnimateOnScroll animation="fadeInUp" delay={0}>
                            <div>
                                <h4 className="font-subace-condensed text-[#EFE8CE] mb-4 sm:mb-6 uppercase text-sm tracking-wider">Location</h4>
                                <p className="text-sm text-[#EFE8CE] leading-relaxed font-subace">
                                    Lagos, Nigeria<br />
                                    West Africa<br />
                                    Afrobeats Capital
                                </p>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInUp" delay={100}>
                            <div>
                                <h4 className="font-subace-condensed text-[#EFE8CE] mb-4 sm:mb-6 uppercase text-sm tracking-wider">Listen</h4>
                                <ul className="space-y-2 sm:space-y-3 text-sm text-[#EFE8CE] font-subace">
                                    <li>
                                        <a href="https://audiomack.com/shedracksplus" target="_blank" rel="noopener noreferrer" className="hover:text-[#B5312A] transition-colors">
                                            Audiomack: S-Plus 8ight9ine
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://open.spotify.com/track/4aF5hci57nC6hGXeH6ox0M" target="_blank" rel="noopener noreferrer" className="hover:text-[#B5312A] transition-colors">
                                            Spotify: SPlus89
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://music.apple.com/us/artist/s-plus-8ight9ine/1767245123" target="_blank" rel="noopener noreferrer" className="hover:text-[#B5312A] transition-colors">
                                            Apple Music: S-Plus 8ight9ine
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.boomplay.com/artists/97714638" target="_blank" rel="noopener noreferrer" className="hover:text-[#B5312A] transition-colors">
                                            Boomplay: SPlus89
                                        </a>
                                    </li>
                                    <li>Available on streaming platforms</li>
                                </ul>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInUp" delay={200}>
                            <div>
                                <h4 className="font-subace-condensed text-[#EFE8CE] mb-4 sm:mb-6 uppercase text-sm tracking-wider">Connect</h4>
                                <ul className="space-y-2 sm:space-y-3 text-sm font-subace">
                                    <li>
                                        <a href="https://www.instagram.com/shedracksplus/" target="_blank" rel="noopener noreferrer" className="text-[#EFE8CE] hover:text-[#B5312A] transition-colors">
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/watch?v=vm_ZM5Q20OA" target="_blank" rel="noopener noreferrer" className="text-[#EFE8CE] hover:text-[#B5312A] transition-colors">
                                            YouTube
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/deking.sheddy.2025" target="_blank" rel="noopener noreferrer" className="text-[#EFE8CE] hover:text-[#B5312A] transition-colors">
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-[#EFE8CE] hover:text-[#B5312A] transition-colors">
                                            Twitter
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInUp" delay={300}>
                            <div>
                                <h4 className="font-subace-condensed text-[#EFE8CE] mb-4 sm:mb-6 uppercase text-sm tracking-wider">Stay Updated</h4>
                                <p className="text-sm text-[#EFE8CE] mb-3 sm:mb-4 font-subace">
                                    Get notified about new releases
                                </p>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        className="flex-1 bg-[#EFE8CE]/5 border border-[#EFE8CE]/10 rounded-sm px-3 sm:px-4 py-2 text-sm text-[#EFE8CE] placeholder:text-[#EFE8CE]/40 focus:outline-none focus:border-[#B5312A] font-subace"
                                    />
                                    <Button className="bg-[#B5312A] hover:bg-[#9D2820] text-white px-4 sm:px-6 rounded-sm">
                                        →
                                    </Button>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    <AnimateOnScroll animation="fadeIn" delay={400}>
                        <div className="pt-6 sm:pt-8 border-t border-[#EFE8CE]/5 text-center text-sm text-[#EFE8CE] font-subace space-y-2">
                            <p>© 2026 SPlus89. All rights reserved.</p>
                            <p>
                                Developed by{" "}
                                <a
                                    href="https://www.styner.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#B5312A] hover:text-[#9D2820] transition-colors underline"
                                >
                                    StynerDev
                                </a>
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </footer>

            <ScrollToTop />

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                @keyframes marquee-reverse {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 30s linear infinite;
                }
            `}</style>
        </div>
    )
}