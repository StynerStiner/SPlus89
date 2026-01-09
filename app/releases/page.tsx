"use client"

import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { SocialSidebar } from "@/components/social-sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ReleasesPage() {
    return (
        <div className="min-h-screen bg-[#141312] text-[#EFE8CE]">
            <SocialSidebar />
            <MobileNavigation currentPage="releases" />

            {/* Hero Section */}
            <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
                <div className="absolute inset-0">
                    <Image
                        src="/images/image-17-copyright.jpg"
                        alt="Jam-packed clubbing"
                        fill
                        className="object-cover"
                        style={{ objectPosition: '50% 20%' }}
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-[#141312]"></div>
                </div>

                {/* Decorative Shape - Left Side */}
                <div className="absolute left-0 top-0 bottom-0 pointer-events-none z-5">
                    <Image
                        src="/svg-Shapes/Asset 12.svg"
                        alt=""
                        width={120}
                        height={800}
                        className="h-[800px] sm:h-[1000px] w-32 sm:w-48 opacity-80"
                    />
                </div>

                <div className="relative z-10 text-center px-4 sm:px-8">
                    <AnimateOnScroll animation="fadeInUp">
                        <h1 className="text-4xl sm:text-5xl lg:text-8xl font-subace-expanded text-[#EFE8CE] tracking-tight">
                            Lagos Sound Chronicles
                        </h1>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Live Music Rush Section */}
            <section className="relative py-24 px-8 lg:px-16 bg-[#0F0E0D] overflow-hidden">
                {/* Smoke Background Overlay */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <Image src="/images/smoke-dec-01.jpg" alt="" fill className="object-cover mix-blend-screen" />
                </div>

                {/* Decorative Shape - Right Side */}
                <div className="absolute right-0 top-0 bottom-0 pointer-events-none z-10">
                    <Image
                        src="/svg-Shapes/Asset 40.svg"
                        alt=""
                        width={192}
                        height={1000}
                        className="h-[1000px] w-48 opacity-80"
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Content */}
                        <AnimateOnScroll animation="fadeInLeft">
                            <div>
                                <h2 className="text-5xl lg:text-6xl font-subace-expanded text-[#EFE8CE] mb-8">
                                    Afrosounds meets Hip-Hop
                                </h2>
                                <p className="text-[#EFE8CE]/70 text-base leading-relaxed mb-6 font-subace">
                                    From the vibrant streets of Lagos, Nigeria, comes a sound that blends traditional Afrobeats with modern Hip-Hop culture.
                                    Every track tells a story of Nigerian youth, street life, and the hustle that defines our generation.
                                </p>
                                <p className="text-[#EFE8CE]/70 text-base leading-relaxed mb-8 font-subace">
                                    SPlus89 brings authentic Afro-Hip-Hop that resonates with the soul. From "We No Send Dem" to "My Baby (Mapami)",
                                    each release captures the essence of Lagos energy and Nigerian pride.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#EFE8CE]/60 font-subace">Artist:</span>
                                        <span className="text-[#EFE8CE] font-subace-expanded">SPlus89 (S-Plus 8ight9ine)</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#EFE8CE]/60 font-subace">Location:</span>
                                        <span className="text-[#EFE8CE] font-subace-expanded">Lagos, Nigeria</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#EFE8CE]/60 font-subace">Genre:</span>
                                        <span className="text-[#EFE8CE] font-subace-expanded">Afrosounds • Hip-Hop • Afrobeats</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#EFE8CE]/60 font-subace">Stream:</span>
                                        <div className="flex gap-3">
                                            <a href="https://audiomack.com/shedracksplus" target="_blank" rel="noopener noreferrer" className="text-[#EFE8CE] hover:text-[#B5312A] transition-colors font-subace-condensed uppercase tracking-wider">
                                                Audiomack
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Album Cover */}
                                <div className="mt-12">
                                    <div className="relative aspect-square max-w-md rounded-sm overflow-hidden">
                                        <Image
                                            src="/images/e0ca7ae3b5.webp"
                                            alt="Got No Fear (GNF) Cover"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute top-4 left-4 bg-[#B5312A] text-white px-4 py-2 rounded-full font-subace-condensed text-xs uppercase tracking-wider">
                                            Latest Release
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Right Content - Music Player & Track List */}
                        <AnimateOnScroll animation="fadeInRight" delay={200}>
                            <div className="space-y-8">
                                {/* Music Player Card */}
                                <div className="bg-[#B5312A] rounded-sm p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <button className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                                            <Play className="w-6 h-6 text-white fill-white" />
                                        </button>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-subace-expanded text-[#EFE8CE] mb-1">"We No Send Dem (WNSD)"</h3>
                                            <p className="text-[#EFE8CE]/70 text-sm font-subace">SPlus89 feat. BigBang</p>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="space-y-2">
                                        <div className="w-full h-1 bg-white/20 rounded-full">
                                            <div className="w-1/3 h-full bg-white rounded-full"></div>
                                        </div>
                                        <div className="flex justify-between text-xs text-[#EFE8CE]/60 font-subace">
                                            <span>1:23</span>
                                            <span>3:24</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Track List */}
                                <div className="space-y-4">
                                    {[
                                        { num: "1", title: "We No Send Dem (WNSD)", artist: "SPlus89 feat. BigBang", time: "3:24", date: "Mar 2025" },
                                        { num: "2", title: "Roll It Tonight", artist: "SPlus89 feat. Amotex", time: "4:12", date: "Mar 2025" },
                                        { num: "3", title: "My Baby (Mapami)", artist: "SPlus89", time: "3:45", date: "Sep 2024" },
                                        { num: "4", title: "Go Local", artist: "SPlus89 feat. Anogiri & Raze Dee", time: "5:03", date: "Aug 2025" },
                                        { num: "5", title: "Got No Fear (GNF)", artist: "SPlus89 feat. Raze Dee", time: "3:56", date: "Sep 2025" }
                                    ].map((track, index) => (
                                        <div key={index} className="flex items-center gap-4 p-4 rounded-sm hover:bg-[#1A1917] transition-colors cursor-pointer group">
                                            <span className="text-[#EFE8CE]/40 text-sm w-8 font-subace-expanded">{track.num}</span>
                                            <button className="text-[#EFE8CE]/60 hover:text-[#B5312A] transition-colors">
                                                <Play className="w-4 h-4" />
                                            </button>
                                            <div className="flex-1">
                                                <p className="text-[#EFE8CE] text-sm font-subace-expanded group-hover:text-[#B5312A] transition-colors">
                                                    {track.title}
                                                </p>
                                                <p className="text-[#EFE8CE]/50 text-xs font-subace">{track.artist} • {track.date}</p>
                                            </div>
                                            <span className="text-[#EFE8CE]/40 text-sm font-subace">{track.time}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Filter Buttons */}
                                <div className="flex flex-wrap gap-3">
                                    <button className="bg-[#B5312A] hover:bg-[#9D2820] text-white px-6 py-2 rounded-full text-sm font-subace-condensed uppercase tracking-wider transition-colors">
                                        All Tracks
                                    </button>
                                    <button className="bg-[#1A1917] hover:bg-[#B5312A] text-[#EFE8CE] hover:text-white px-6 py-2 rounded-full text-sm font-subace-condensed uppercase tracking-wider transition-colors">
                                        Audiomack
                                    </button>
                                    <button className="bg-[#1A1917] hover:bg-[#B5312A] text-[#EFE8CE] hover:text-white px-6 py-2 rounded-full text-sm font-subace-condensed uppercase tracking-wider transition-colors">
                                        Hip-Hop
                                    </button>
                                    <button className="bg-[#1A1917] hover:bg-[#B5312A] text-[#EFE8CE] hover:text-white px-6 py-2 rounded-full text-sm font-subace-condensed uppercase tracking-wider transition-colors">
                                        Afrobeats
                                    </button>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Image Gallery Section */}
            <section className="relative py-24 px-8 lg:px-16 bg-[#141312] overflow-hidden">
                {/* Smoke Background Overlay */}
                <div className="absolute inset-0 opacity-6 pointer-events-none">
                    <Image src="/images/smoke-dec-02.jpg" alt="" fill className="object-cover mix-blend-screen" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="relative">
                        <div className="relative aspect-video rounded-sm overflow-hidden">
                            <Image
                                src="/images/bg05-copyright.png"
                                alt="Live Performance"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Navigation Arrows */}
                        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#EFE8CE] hover:bg-[#B5312A] flex items-center justify-center transition-colors group">
                            <ChevronLeft className="w-6 h-6 text-[#141312] group-hover:text-white" />
                        </button>
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#EFE8CE] hover:bg-[#B5312A] flex items-center justify-center transition-colors group">
                            <ChevronRight className="w-6 h-6 text-[#141312] group-hover:text-white" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex justify-between items-center mt-12">
                        <a href="#" className="text-[#EFE8CE] hover:text-[#B5312A] text-sm font-subace-condensed uppercase tracking-wider flex items-center gap-2 transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                            <span>Previous Release</span>
                        </a>
                        <a href="#" className="text-[#EFE8CE] hover:text-[#B5312A] text-sm font-subace-condensed uppercase tracking-wider flex items-center gap-2 transition-colors">
                            <span>Next Release</span>
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="relative py-32 px-8 lg:px-16 bg-[#0F0E0D] overflow-hidden">
                {/* Smoke Background Overlay */}
                <div className="absolute inset-0 opacity-8 pointer-events-none">
                    <Image src="/images/smoke-dec-03.jpg" alt="" fill className="object-cover mix-blend-soft-light" />
                </div>

                {/* Decorative Shape - Left Side */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                    <Image
                        src="/svg-Shapes/Asset 20.svg"
                        alt=""
                        width={256}
                        height={800}
                        className="h-[800px] w-64 opacity-80"
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <AnimateOnScroll animation="fadeInUp">
                        <h2 className="text-5xl lg:text-7xl font-subace-expanded text-[#EFE8CE] leading-tight mb-6">
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
                                <h4 className="font-subace-condensed text-[#EFE8CE] mb-6 uppercase text-sm tracking-wider">Location</h4>
                                <p className="text-sm text-[#EFE8CE] leading-relaxed font-subace">
                                    Lagos, Nigeria<br />
                                    West Africa<br />
                                    Afrobeats Capital
                                </p>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInUp" delay={100}>
                            <div>
                                <h4 className="font-subace-condensed text-[#EFE8CE] mb-6 uppercase text-sm tracking-wider">Listen</h4>
                                <ul className="space-y-3 text-sm text-[#EFE8CE] font-subace">
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
                                <h4 className="font-subace-condensed text-[#EFE8CE] mb-6 uppercase text-sm tracking-wider">Connect</h4>
                                <ul className="space-y-3 text-sm font-subace">
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
                                <h4 className="font-subace-condensed text-[#EFE8CE] mb-6 uppercase text-sm tracking-wider">Stay Updated</h4>
                                <p className="text-sm text-[#EFE8CE] mb-4 font-subace">
                                    Get notified about new releases
                                </p>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        className="flex-1 bg-[#EFE8CE]/5 border border-[#EFE8CE]/10 rounded-sm px-4 py-2 text-sm text-[#EFE8CE] placeholder:text-[#EFE8CE]/40 focus:outline-none focus:border-[#B5312A] font-subace"
                                    />
                                    <Button className="bg-[#B5312A] hover:bg-[#9D2820] text-white px-6 rounded-sm">
                                        →
                                    </Button>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    <AnimateOnScroll animation="fadeIn" delay={400}>
                        <div className="pt-8 border-t border-[#EFE8CE]/5 text-center text-sm text-[#EFE8CE] font-subace space-y-2">
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
        </div>
    )
}
