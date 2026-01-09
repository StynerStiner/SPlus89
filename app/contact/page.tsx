"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { SocialSidebar } from "@/components/social-sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#141312] text-[#EFE8CE]">
            <SocialSidebar />
            <MobileNavigation currentPage="contact" />

            {/* Hero Section */}
            <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
                <div className="absolute inset-0">
                    <Image
                        src="/images/bg05-copyright.png"
                        alt="Contact"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-[#141312]"></div>
                </div>

                {/* Decorative Shape - Right Side */}
                <div className="absolute right-4 sm:right-8 lg:right-16 top-1/2 -translate-y-1/2 pointer-events-none z-5">
                    <Image
                        src="/svg-Shapes/Asset 16.svg"
                        alt=""
                        width={200}
                        height={600}
                        className="h-[600px] sm:h-[700px] lg:h-[900px] w-48 sm:w-64 lg:w-80 opacity-80"
                    />
                </div>

                <div className="relative z-10 text-center px-4 sm:px-8">
                    <AnimateOnScroll animation="fadeInUp">
                        <h1 className="text-4xl sm:text-5xl lg:text-8xl font-subace-expanded text-[#EFE8CE] tracking-tight">
                            Let's Connect
                        </h1>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#0F0E0D] overflow-hidden">
                {/* Decorative Shape - Left Side */}
                <div className="absolute left-0 top-0 bottom-0 pointer-events-none z-5">
                    <Image
                        src="/svg-Shapes/Asset 30.svg"
                        alt=""
                        width={120}
                        height={800}
                        className="h-[800px] sm:h-[1000px] w-32 sm:w-48 opacity-80"
                    />
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
                        {/* Contact Form */}
                        <AnimateOnScroll animation="fadeInLeft">
                            <div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-subace-expanded text-[#EFE8CE] mb-4 sm:mb-6">
                                    Book SPlus89
                                </h2>
                                <p className="text-[#EFE8CE]/70 text-sm sm:text-base mb-6 sm:mb-8 font-subace">
                                    Ready to collaborate or book a performance? Whether it's for shows, features, or business inquiries,
                                    let's connect and create something amazing together.
                                </p>

                                <form className="space-y-4 sm:space-y-6">
                                    <div>
                                        <label className="block text-sm text-[#EFE8CE]/60 mb-2 font-subace-condensed uppercase tracking-wider">Your Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your full name"
                                            className="w-full bg-[#EFE8CE]/5 border border-[#EFE8CE]/10 rounded-sm px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-[#EFE8CE] placeholder:text-[#EFE8CE]/40 focus:outline-none focus:border-[#B5312A] transition-colors font-subace"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-[#EFE8CE]/60 mb-2 font-subace-condensed uppercase tracking-wider">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full bg-[#EFE8CE]/5 border border-[#EFE8CE]/10 rounded-sm px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-[#EFE8CE] placeholder:text-[#EFE8CE]/40 focus:outline-none focus:border-[#B5312A] transition-colors font-subace"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-[#EFE8CE]/60 mb-2 font-subace-condensed uppercase tracking-wider">Inquiry Type</label>
                                        <select className="w-full bg-[#EFE8CE]/5 border border-[#EFE8CE]/10 rounded-sm px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-[#EFE8CE] focus:outline-none focus:border-[#B5312A] transition-colors font-subace">
                                            <option value="">Select inquiry type</option>
                                            <option value="booking">Performance Booking</option>
                                            <option value="collaboration">Music Collaboration</option>
                                            <option value="feature">Feature Request</option>
                                            <option value="business">Business Inquiry</option>
                                            <option value="media">Media & Press</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm text-[#EFE8CE]/60 mb-2 font-subace-condensed uppercase tracking-wider">Message</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Tell me about your project, event, or collaboration idea..."
                                            className="w-full bg-[#EFE8CE]/5 border border-[#EFE8CE]/10 rounded-sm px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-[#EFE8CE] placeholder:text-[#EFE8CE]/40 focus:outline-none focus:border-[#B5312A] transition-colors resize-none font-subace"
                                        ></textarea>
                                    </div>

                                    <Button className="w-full sm:w-auto bg-[#B5312A] hover:bg-[#9D2820] text-white px-8 sm:px-10 py-4 sm:py-6 rounded-full text-xs sm:text-sm font-subace-condensed uppercase tracking-wider hover:scale-105 transition-all shadow-lg">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </AnimateOnScroll>

                        {/* Contact Info */}
                        <AnimateOnScroll animation="fadeInRight" delay={200}>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-3xl font-subace-expanded text-[#EFE8CE] mb-6">
                                        Connect with SPlus89
                                    </h3>
                                    <p className="text-[#EFE8CE]/70 text-base mb-8 font-subace">
                                        Based in Lagos, Nigeria, bringing authentic Afro-Hip-Hop to the world.
                                        Let's collaborate and create something that represents real culture.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {/* Streaming */}
                                    <div className="flex items-start gap-4 p-6 bg-[#1A1917] rounded-sm hover:bg-[#1F1E1C] transition-colors">
                                        <div className="w-12 h-12 rounded-full bg-[#B5312A]/20 flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5 text-[#B5312A]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-[#EFE8CE] font-subace-expanded mb-2">Stream My Music</h4>
                                            <a href="https://audiomack.com/shedracksplus" target="_blank" rel="noopener noreferrer" className="text-[#EFE8CE]/70 hover:text-[#B5312A] transition-colors font-subace">
                                                Audiomack: S-Plus 8ight9ine
                                            </a>
                                        </div>
                                    </div>

                                    {/* Business */}
                                    <div className="flex items-start gap-4 p-6 bg-[#1A1917] rounded-sm hover:bg-[#1F1E1C] transition-colors">
                                        <div className="w-12 h-12 rounded-full bg-[#B5312A]/20 flex items-center justify-center shrink-0">
                                            <Mail className="w-5 h-5 text-[#B5312A]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[#EFE8CE] font-subace-expanded mb-2">Business Inquiries</h4>
                                            <p className="text-[#EFE8CE]/70 font-subace">
                                                For bookings, collaborations, and business opportunities
                                            </p>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-start gap-4 p-6 bg-[#1A1917] rounded-sm hover:bg-[#1F1E1C] transition-colors">
                                        <div className="w-12 h-12 rounded-full bg-[#B5312A]/20 flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-[#B5312A]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[#EFE8CE] font-subace-expanded mb-2">Based In</h4>
                                            <p className="text-[#EFE8CE]/70 font-subace">
                                                Lagos, Nigeria<br />
                                                West Africa<br />
                                                Afrobeats Capital 🇳🇬
                                            </p>
                                        </div>
                                    </div>

                                    {/* Music Style */}
                                    <div className="flex items-start gap-4 p-6 bg-[#1A1917] rounded-sm hover:bg-[#1F1E1C] transition-colors">
                                        <div className="w-12 h-12 rounded-full bg-[#B5312A]/20 flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5 text-[#B5312A]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-[#EFE8CE] font-subace-expanded mb-2">Music Style</h4>
                                            <p className="text-[#EFE8CE]/70 font-subace">
                                                Afrosounds • Hip-Hop • Afrobeats<br />
                                                Rapper • Lyricist • Songwriter
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="pt-8">
                                    <h4 className="text-[#EFE8CE] font-subace-expanded mb-4">Follow SPlus89</h4>
                                    <div className="flex gap-4">
                                        <a href="https://www.instagram.com/shedracksplus/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1A1917] hover:bg-[#B5312A] flex items-center justify-center transition-colors group">
                                            <svg className="w-5 h-5 text-[#EFE8CE] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </a>
                                        <a href="https://www.youtube.com/watch?v=vm_ZM5Q20OA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1A1917] hover:bg-[#B5312A] flex items-center justify-center transition-colors group">
                                            <svg className="w-5 h-5 text-[#EFE8CE] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        </a>
                                        <a href="https://open.spotify.com/track/4aF5hci57nC6hGXeH6ox0M" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1A1917] hover:bg-[#B5312A] flex items-center justify-center transition-colors group">
                                            <svg className="w-5 h-5 text-[#EFE8CE] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-[#1A1917] hover:bg-[#B5312A] flex items-center justify-center transition-colors group">
                                            <svg className="w-5 h-5 text-[#EFE8CE] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-[#1A1917] hover:bg-[#B5312A] flex items-center justify-center transition-colors group">
                                            <svg className="w-5 h-5 text-[#EFE8CE] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                                            </svg>
                                        </a>
                                        <a href="https://www.facebook.com/deking.sheddy.2025" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1A1917] hover:bg-[#B5312A] flex items-center justify-center transition-colors group">
                                            <svg className="w-5 h-5 text-[#EFE8CE] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="relative py-32 px-8 lg:px-16 bg-[#1F1D1C] overflow-hidden">
                {/* Decorative Shape - Right Side */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                    <Image
                        src="/svg-Shapes/Asset 45.svg"
                        alt=""
                        width={256}
                        height={800}
                        className="h-[800px] w-64 opacity-80"
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <AnimateOnScroll animation="fadeInUp">
                        <h2 className="text-5xl lg:text-7xl font-subace-expanded text-[#EFE8CE] leading-tight mb-6">
                            Ready to create<br />
                            <span className="text-[#B5312A]">authentic music?</span>
                        </h2>
                        <p className="text-[#EFE8CE]/70 text-lg max-w-2xl mx-auto mb-8 font-subace">
                            From Lagos to the world. Let's bring that real Afro-Hip-Hop energy to your project.
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#0F0E0D] py-20 px-8 lg:px-16 border-t border-[#EFE8CE]/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <AnimateOnScroll animation="fadeInUp" delay={0}>
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="flex items-center gap-1">
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                    </div>
                                    <span className="text-xl font-subace-expanded text-[#EFE8CE]">SPlus89</span>
                                </div>
                                <p className="text-sm text-[#EFE8CE] leading-relaxed font-subace">
                                    Nigerian artist from Lagos blending Afrosounds and Hip-Hop since 2024. Authentic music, real stories.
                                </p>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInUp" delay={100}>
                            <div>
                                <h4 className="font-subace-condensed text-[#EFE8CE] mb-6 uppercase text-sm tracking-wider">Pages</h4>
                                <ul className="space-y-3 text-sm text-[#EFE8CE] font-subace">
                                    <li>
                                        <a href="/" className="hover:text-[#B5312A] transition-colors">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about" className="hover:text-[#B5312A] transition-colors">
                                            About SPlus89
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/releases" className="hover:text-[#B5312A] transition-colors">
                                            Releases
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/contact" className="hover:text-[#B5312A] transition-colors">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInUp" delay={200}>
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
                                    <li className="pt-2 font-subace">
                                        Lagos, Nigeria<br />
                                        West Africa 🇳🇬
                                    </li>
                                </ul>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInUp" delay={300}>
                            <div>
                                <h4 className="font-subace-condensed text-[#EFE8CE] mb-6 uppercase text-sm tracking-wider">Connect</h4>
                                <ul className="space-y-3 text-sm text-[#EFE8CE] font-subace">
                                    <li>
                                        <a href="https://www.instagram.com/shedracksplus/" target="_blank" rel="noopener noreferrer" className="hover:text-[#B5312A] transition-colors">
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/watch?v=vm_ZM5Q20OA" target="_blank" rel="noopener noreferrer" className="hover:text-[#B5312A] transition-colors">
                                            YouTube
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/deking.sheddy.2025" target="_blank" rel="noopener noreferrer" className="hover:text-[#B5312A] transition-colors">
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-[#B5312A] transition-colors">
                                            Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-[#B5312A] transition-colors">
                                            TikTok
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    <AnimateOnScroll animation="fadeIn" delay={400}>
                        <div className="pt-8 border-t border-[#2A2927] text-center text-sm text-[#EFE8CE] font-subace space-y-2">
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
