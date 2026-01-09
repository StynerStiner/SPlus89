"use client"

import { Play, Volume2, Search, ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { AudioEffects } from "@/components/audio-effects"
import { AlbumCardWebGL } from "@/components/album-card-webgl"
import { BackgroundVideo } from "@/components/background-video"
import { SocialSidebar } from "@/components/social-sidebar"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#141312] text-[#EFE8CE]">
      <SocialSidebar />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#141312]/95 backdrop-blur-sm">
        <div className="mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <span className="text-lg sm:text-xl font-subace-expanded tracking-wide text-[#EFE8CE]">SPlus89</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-12">
              <a href="/" className="text-sm font-subace-condensed uppercase tracking-wider text-[#EFE8CE] hover:text-[#B5312A] transition-colors">
                Home
              </a>
              <a href="/about" className="text-sm font-subace-condensed uppercase tracking-wider text-[#EFE8CE] hover:text-[#B5312A] transition-colors">
                About
              </a>
              <a href="/releases" className="text-sm font-subace-condensed uppercase tracking-wider text-[#EFE8CE] hover:text-[#B5312A] transition-colors">
                Releases
              </a>
              <a href="https://audiomack.com/shedracksplus" target="_blank" rel="noopener noreferrer" className="text-sm font-subace-condensed uppercase tracking-wider text-[#EFE8CE] hover:text-[#B5312A] transition-colors">
                Audiomack
              </a>
              <a href="/contact" className="text-sm font-subace-condensed uppercase tracking-wider text-[#EFE8CE] hover:text-[#B5312A] transition-colors">
                Contact
              </a>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center gap-3 sm:gap-6">
              <button className="text-[#EFE8CE] hover:text-[#B5312A] transition-colors">
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="text-[#EFE8CE] hover:text-[#B5312A] transition-colors">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <AudioEffects className="text-[#EFE8CE] hidden sm:block" />
              <a href="/contact" className="hidden sm:block">
                <Button className="bg-[#B5312A] hover:bg-[#9D2820] text-[#EFE8CE] px-4 sm:px-6 py-2 rounded-none text-xs sm:text-sm font-subace-condensed uppercase tracking-wider">
                  Let's Talk
                </Button>
              </a>

              {/* Mobile menu button */}
              <button
                className="lg:hidden text-[#EFE8CE] hover:text-[#B5312A] transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-[#141312] border-t border-[#2A2927] shadow-lg">
              <nav className="flex flex-col py-4">
                <a
                  href="/"
                  className="px-4 py-3 text-sm font-subace-condensed uppercase tracking-wider text-[#EFE8CE] hover:text-[#B5312A] hover:bg-[#1A1917] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="px-4 py-3 text-sm font-subace-condensed uppercase tracking-wider text-[#EFE8CE] hover:text-[#B5312A] hover:bg-[#1A1917] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/releases"
                  className="px-4 py-3 text-sm font-subace-condensed uppercase tracking-wider text-[#EFE8CE] hover:text-[#B5312A] hover:bg-[#1A1917] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Releases
                </a>
                <a
                  href="https://audiomack.com/shedracksplus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-sm font-subace-condensed uppercase tracking-wider text-[#EFE8CE] hover:text-[#B5312A] hover:bg-[#1A1917] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Audiomack
                </a>
                <a
                  href="/contact"
                  className="px-4 py-3 text-sm font-subace-condensed uppercase tracking-wider text-[#EFE8CE] hover:text-[#B5312A] hover:bg-[#1A1917] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <div className="px-4 py-3 border-t border-[#2A2927] mt-2">
                  <a href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-[#B5312A] hover:bg-[#9D2820] text-[#EFE8CE] px-6 py-3 rounded-none text-sm font-subace-condensed uppercase tracking-wider">
                      Let's Talk
                    </Button>
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20">
        <div className="grid lg:grid-cols-2">
          {/* Left - Image */}
          <div className="relative h-[50vh] sm:h-[60vh] lg:h-screen bg-linear-to-br from-amber-400 via-orange-400 to-purple-900">
            <Image src="/images/image-17-copyright.jpg" alt="Maestro" fill className="object-cover" style={{ objectPosition: '50% 20%' }} priority />
          </div>

          {/* Right - Content */}
          <div className="relative h-[50vh] sm:h-[60vh] lg:h-screen bg-[#1A1917] flex flex-col justify-center px-6 sm:px-12 lg:px-20">
            {/* Decorative Equalizer Pattern */}
            <div className="absolute -top-40 sm:-top-80 right-0 w-32 sm:w-48 lg:w-200 h-32 sm:h-48 lg:h-200 opacity-30">
              <Image src="/images/ekvalaizer01.png" alt="" fill className="object-contain" />
            </div>

            <div className="relative z-10 space-y-6 sm:space-y-8 lg:space-y-12">
              <AnimateOnScroll animation="fadeInDown">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-subace-expanded leading-[1.1] text-[#EFE8CE]">
                  Afrosounds. Hip-Hop. Lagos Energy.
                </h1>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-[#EFE8CE]/80 mt-4 sm:mt-6 font-subace font-light">
                  Nigerian artist blending Afrobeats with Hip-Hop. Real stories from Lagos.
                </p>
              </AnimateOnScroll>

              {/* Audio Player */}
              <AnimateOnScroll animation="fadeInUp" delay={200}>
                <div className="bg-[#B5312A] p-4 sm:p-6 lg:p-8 max-w-xl space-y-4 sm:space-y-6">
                  <div>
                    <div className="inline-block bg-[#9D2820] text-white text-xs px-2 sm:px-3 py-1 mb-2 sm:mb-3 uppercase tracking-wider font-subace-condensed">
                      Now Playing — S-Plus 8ight9ine
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-subace-expanded text-white mb-1">We No Send Dem</h3>
                    <p className="text-sm sm:text-base text-[#F7F5EC]/80 font-subace">SPlus89 feat. BigBang</p>
                  </div>

                  {/* Player Controls */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 text-[#B5312A] fill-current ml-0.5" />
                    </button>

                    <div className="flex-1 space-y-1">
                      <div className="text-xs text-white/70">00:00</div>
                      <div className="w-full h-0.5 bg-white/30 rounded-full">
                        <div className="w-0 h-full bg-white rounded-full"></div>
                      </div>
                      <div className="text-xs text-white/70 text-right">00:00</div>
                    </div>

                    <button className="text-white/70 hover:text-white">
                      <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Albums Section */}
      <section className="relative py-32 px-8 lg:px-16 bg-[#141312] overflow-hidden">
        {/* Smoke Background Overlay */}
        <div className="absolute inset-0 opacity-5">
          <Image src="/images/smoke-dec-01.jpg" alt="" fill className="object-cover mix-blend-screen" />
        </div>

        {/* Vertical Shape on Right Side - Top to Bottom */}
        <div className="absolute right-8 top-20 w-48 h-[1000px] opacity-80 z-10">
          <Image src="/svg-Shapes/Asset-9.svg" alt="" fill className="object-contain" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimateOnScroll animation="fadeInUp">
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-widest text-[#B5312A] mb-3 font-subace-condensed">Latest Releases</p>
              <h2 className="text-5xl lg:text-6xl font-subace-expanded text-[#EFE8CE] mb-6">Fresh tracks from Lagos</h2>
              <p className="text-[#EFE8CE]/60 max-w-xl mx-auto font-subace">
                Afrosounds meets Hip-Hop. Nigerian artist blending cultures and creating authentic music from Lagos.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {[
              { title: "We No Send Dem (WNSD)", image: "/images/image-18-copyright.jpg" },
              { title: "Roll It Tonight", image: "/images/image-19-copyright.jpg" },
              { title: "My Baby (Mapami)", image: "/images/image-20-copyright.jpg" },
            ].map((album, i) => (
              <AnimateOnScroll key={i} animation="zoomIn" delay={i * 200}>
                <AlbumCardWebGL title={album.title} image={album.image} />
              </AnimateOnScroll>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: "Go Local (Prod By Classicmachine)", image: "/images/image-21-copyright.jpg" },
              { title: "Got No Fear (GNF)", image: "/images/e0ca7ae3b5.webp" },
              { title: "Roll It Tonight (feat. Amotex)", image: "/images/image-19-copyright.jpg" },
            ].map((album, i) => (
              <AnimateOnScroll key={i} animation="zoomIn" delay={i * 200 + 300}>
                <AlbumCardWebGL title={album.title} image={album.image} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="relative py-32 px-8 lg:px-16 bg-[#141312] overflow-hidden">
        {/* Smoke Background Overlay */}
        <div className="absolute inset-0 opacity-5">
          <Image src="/images/smoke-dec-02.jpg" alt="" fill className="object-cover mix-blend-screen" />
        </div>

        {/* Vertical Shape on Left Side */}
        <div className="absolute left-8 top-20 w-48 h-[1000px] opacity-80 z-10">
          <Image src="/svg-Shapes/Asset 48.svg" alt="" fill className="object-contain" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimateOnScroll animation="fadeInUp">
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-widest text-[#B5312A] mb-4 font-subace-condensed">Live Performances</p>
              <h2 className="text-5xl lg:text-6xl font-subace-expanded text-[#EFE8CE] mb-6">Catch SPlus89 Live</h2>
              <p className="text-[#EFE8CE]/60 max-w-2xl mx-auto leading-relaxed font-subace">
                Experience authentic Afro-Hip-Hop live. Connect with Lagos culture and witness the fusion of Afrosounds and Hip-Hop.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="space-y-6">
            {[
              {
                date: "06",
                month: "Sep",
                year: "2024",
                title: "The ultimate hip-hop showdown",
                location: "New York",
                venue: "Madison Square Garden",
                time: "7:30 PM",
                price: "$53.00",
                image: "/images/image-18-copyright.jpg",
              },
              {
                date: "08",
                month: "Aug",
                year: "2024",
                title: "Embracing hip-hop heritage",
                location: "New York",
                venue: "Brooklyn Steel",
                time: "8:30 PM",
                price: "$63.00",
                image: "/images/image-19-copyright.jpg",
              },
              {
                date: "07",
                month: "Aug",
                year: "2024",
                title: "Where hip-hop meets diversity",
                location: "New York",
                venue: "Terminal 5",
                time: "8:00 PM",
                price: "$48.00",
                image: "/images/image-20-copyright.jpg",
              },
              {
                date: "15",
                month: "Jul",
                year: "2024",
                title: "Exploring hip-hop diversity",
                location: "New York",
                venue: "Central Park",
                time: "6:00 PM",
                price: "Free",
                image: "/images/image-21-copyright.jpg",
              },
              {
                date: "14",
                month: "Jul",
                year: "2024",
                title: "Journey into hip-hop history",
                location: "New York",
                venue: "Apollo Theater",
                time: "7:00 PM",
                price: "$72.00",
                image: "/images/image-18-copyright.jpg",
              },
            ].map((event, i) => (
              <AnimateOnScroll key={i} animation="fadeInUp" delay={i * 100}>
                <div className="group relative bg-[#1A1917] rounded-2xl overflow-hidden hover:bg-[#1F1E1C] transition-all duration-300 hover:shadow-2xl hover:shadow-[#B5312A]/10">
                  <div className="flex flex-col md:flex-row items-stretch">
                    {/* Date Badge */}
                    <div className="shrink-0 bg-[#B5312A] p-6 md:p-8 flex flex-col items-center justify-center w-35">
                      <div className="text-5xl md:text-6xl font-subace-expanded text-white leading-none mb-2">{event.date}</div>
                      <div className="text-sm uppercase tracking-wider text-white/90 font-subace-condensed">{event.month}</div>
                      <div className="text-xs text-white/70 mt-1 font-subace">{event.year}</div>
                    </div>

                    {/* Event Image */}
                    <div className="relative w-full md:w-48 h-48 md:h-auto shrink-0 overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-r from-[#1A1917] via-transparent to-transparent opacity-50" />
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-subace-expanded text-[#EFE8CE] mb-3 group-hover:text-[#B5312A] transition-colors cursor-pointer">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-[#EFE8CE]/60 font-subace">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B5312A]"></span>
                          {event.venue}
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B5312A]"></span>
                          {event.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B5312A]"></span>
                          {event.time}
                        </span>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="shrink-0 p-6 md:p-8 flex flex-row md:flex-col items-center justify-between md:justify-center gap-4 border-t md:border-t-0 md:border-l border-[#2A2927] w-full md:w-45">
                      <div className="text-center">
                        <div className="text-xs uppercase tracking-wider text-[#B5312A] mb-2 font-subace-condensed">Price</div>
                        <div className="text-3xl font-subace-expanded text-[#EFE8CE]">{event.price}</div>
                      </div>
                      <button className="bg-[#B5312A] hover:bg-[#9D2820] text-white px-6 py-3 rounded-lg text-sm font-subace-condensed uppercase tracking-wider transition-all hover:scale-105">
                        Get Tickets
                      </button>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fadeInUp" delay={600}>
            <div className="text-center mt-16">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#B5312A] hover:text-[#9D2820] text-base font-subace-condensed uppercase tracking-wider transition-colors group"
              >
                View All Events
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Full Width Performance Image */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <BackgroundVideo
            videoSrc="/videos/portfolio-video02.mp4"
            imageSrc="/images/image-17-copyright.jpg"
            className="relative aspect-video rounded-2xl overflow-hidden"
            parallaxStrength={0.5}
            animation="fadeInUp"
            animationDelay={0}
            scrollPlayTrigger={true}
            triggerPercentage={10}
            autoPlay={false}
          >
          </BackgroundVideo>
        </div>
      </section>

      {/* Where Music Comes to Life */}
      <section className="py-20 px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Image */}
          <div className="relative w-full aspect-video mb-12 rounded-lg overflow-hidden bg-[#0F0E0D]">
            <Image
              src="https://pub-63d74cb366c2479aa63844b2d63e3bf7.r2.dev/splus89-images/landscape-sitting-image.png"
              alt="Where music comes to life"
              fill
              className="object-contain"
            />
          </div>

          {/* Title Below Image */}
          <AnimateOnScroll animation="fadeInUp">
            <div className="text-center">
              <h2 className="text-6xl lg:text-8xl font-subace-expanded text-[#EFE8CE] leading-tight">
                Where{" "}
                <span className="text-[#B5312A]">music</span>
                <br />
                comes to life
              </h2>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Witness Next Generation - Red Section */}
      <section className="bg-[#B5312A] py-32 px-8 lg:px-16 relative overflow-hidden">
        {/* Smoke Background Overlay */}
        <div className="absolute inset-0 opacity-8">
          <Image src="/images/smoke-dec-03.jpg" alt="" fill className="object-cover mix-blend-soft-light" />
        </div>

        <div className="absolute top-20 right-20 w-64 h-64 opacity-10 z-10">
          <Image src="/images/image-decor09.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-10 left-10 w-32 h-32 opacity-20 z-10">
          <Image src="/images/image-decor09.svg" alt="" fill className="object-contain" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="fadeInLeft">
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-[#F5E6D3]">
                <Image src="/images/liveonstream.jpeg" alt="Next Generation" fill className="object-cover" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInRight" delay={200}>
              <div className="text-white space-y-8">
                <div className="inline-block bg-[#D4AF37] text-black px-6 py-2 font-subace-expanded text-sm uppercase tracking-wide transform -rotate-2">
                  Live on Stream: Everything & Everyone
                </div>

                <h2 className="text-5xl lg:text-7xl font-subace-expanded leading-tight">
                  Witness the next
                  <br />
                  music generation
                </h2>

                <p className="text-white/80 text-lg leading-relaxed max-w-xl font-subace">
                  Experience the future of music with our exclusive live streaming events. Discover emerging artists,
                  groundbreaking performances, and the evolution of hip-hop culture in real-time.
                </p>

                <Button className="bg-[#D4AF37] hover:bg-[#C4A037] text-black px-10 py-7 rounded-full text-base font-subace-condensed uppercase tracking-wide hover-grow">
                  Join Event
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Discover World of Music */}
      <section className="py-32 px-8 lg:px-16 relative bg-linear-to-b from-[#141312] to-[#0F0E0D] overflow-hidden">
        {/* Smoke Background Overlay */}
        <div className="absolute inset-0 opacity-6">
          <Image src="/images/smoke-dec-04.jpg" alt="" fill className="object-cover mix-blend-screen" />
        </div>

        <div className="absolute top-20 left-20 w-48 h-48 opacity-5 z-10">
          <Image src="/images/image-decor09.svg" alt="" fill className="object-contain" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimateOnScroll animation="fadeInUp">
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-widest text-[#B5312A] mb-4 font-subace-condensed">Featured Playlist</p>
              <h2 className="text-5xl lg:text-7xl font-subace-expanded text-[#EFE8CE] leading-tight mb-6">
                Discover the world of
                <br />
                music with us
              </h2>
              <p className="text-[#EFE8CE]/60 max-w-2xl mx-auto font-subace">
                Immerse yourself in our curated collection of the hottest tracks and timeless classics.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="fadeInLeft">
              <div className="relative group">
                <div className="relative aspect-9/16 rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/images/Featured-Playlist.png" alt="Album Art" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#B5312A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-linear-to-br from-[#D4AF37] to-[#B5312A] shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Play className="w-10 h-10 text-white fill-current ml-1" />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInRight" delay={200}>
              <div className="bg-linear-to-br from-[#1A1917] to-[#141312] rounded-3xl p-8 lg:p-10 shadow-2xl border border-[#2A2927]">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#2A2927]">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#B5312A] mb-2 font-subace-condensed">Now Playing</p>
                    <h3 className="text-2xl lg:text-3xl font-subace-expanded text-[#EFE8CE] mb-1">We No Send Dem</h3>
                    <p className="text-[#D4AF37] text-sm font-subace">SPlus89 feat. BigBang • 2025</p>
                  </div>
                  <button className="w-14 h-14 rounded-full bg-linear-to-br from-[#B5312A] to-[#9D2820] flex items-center justify-center hover:scale-110 transition-all shadow-lg hover:shadow-[#B5312A]/50">
                    <Play className="w-5 h-5 text-white fill-current ml-0.5" />
                  </button>
                </div>

                <div className="space-y-1">
                  {[
                    { num: "01", title: "We No Send Dem (WNSD)", artist: "SPlus89 feat. BigBang", time: "3:24", active: true },
                    { num: "02", title: "Roll It Tonight", artist: "SPlus89 feat. Amotex", time: "4:12" },
                    { num: "03", title: "My Baby (Mapami)", artist: "SPlus89", time: "3:45" },
                    { num: "04", title: "Go Local", artist: "SPlus89 feat. Anogiri & Raze Dee", time: "5:03" },
                    { num: "05", title: "Got No Fear (GNF)", artist: "SPlus89 feat. Raze Dee", time: "3:56" },
                    { num: "06", title: "Lagos Vibes", artist: "SPlus89", time: "4:20" },
                  ].map((track, i) => (
                    <div
                      key={track.num}
                      className={`group flex items-center justify-between py-4 px-5 rounded-xl transition-all cursor-pointer ${track.active
                        ? 'bg-[#B5312A]/20 border border-[#B5312A]/30'
                        : 'hover:bg-[#242320] border border-transparent'
                        }`}
                    >
                      <div className="flex items-center gap-5 flex-1">
                        <span className={`font-subace-expanded text-base w-8 text-center ${track.active ? 'text-[#B5312A]' : 'text-[#D4AF37]/60 group-hover:text-[#D4AF37]'
                          } transition-colors`}>
                          {track.num}
                        </span>
                        <div className="flex-1">
                          <p className={`font-subace-expanded mb-0.5 transition-colors ${track.active ? 'text-[#B5312A]' : 'text-[#F7F5EC] group-hover:text-[#B5312A]'
                            }`}>
                            {track.title}
                          </p>
                          <p className="text-xs text-[#EFE8CE]/50 font-subace">{track.artist}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-[#EFE8CE]/40 font-subace">{track.time}</span>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-4 h-4 text-[#B5312A] fill-current" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="bg-[#0F0E0D] py-20 px-8 lg:px-16 border-t border-[#2A2927]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <AnimateOnScroll animation="fadeInUp" delay={100}>
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

            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <div>
                <h4 className="font-subace-condensed text-[#EFE8CE] mb-6 uppercase text-sm tracking-wider">Pages</h4>
                <ul className="space-y-3 text-sm text-[#EFE8CE] font-subace">
                  <li>
                    <a href="#" className="hover:text-[#B5312A] transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#B5312A] transition-colors">
                      Artists
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#B5312A] transition-colors">
                      Our Studio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#B5312A] transition-colors">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={300}>
              <div>
                <h4 className="font-subace-condensed text-[#EFE8CE] mb-6 uppercase text-sm tracking-wider">Services</h4>
                <ul className="space-y-3 text-sm text-[#EFE8CE] font-subace">
                  <li>
                    <a href="#" className="hover:text-[#B5312A] transition-colors">
                      Releases
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#B5312A] transition-colors">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#B5312A] transition-colors">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#B5312A] transition-colors">
                      Merch
                    </a>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={400}>
              <div>
                <h4 className="font-subace-condensed text-[#EFE8CE] mb-6 uppercase text-sm tracking-wider">Connect</h4>
                <ul className="space-y-3 text-sm text-[#EFE8CE] font-subace">
                  <li>
                    <a href="https://www.facebook.com/deking.sheddy.2025" target="_blank" rel="noopener noreferrer" className="hover:text-[#B5312A] transition-colors">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/shedracksplus/" target="_blank" rel="noopener noreferrer" className="hover:text-[#B5312A] transition-colors">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#B5312A] transition-colors">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/watch?v=vm_ZM5Q20OA" target="_blank" rel="noopener noreferrer" className="hover:text-[#B5312A] transition-colors">
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="fadeIn" delay={500}>
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
    </div >
  )
}

function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 px-8 lg:px-16 overflow-hidden bg-[#1F1D1C]">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

      {/* Animated Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40">
          <Image src="/svg-Shapes/Asset 15.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-32 right-32 w-48 h-48">
          <Image src="/svg-Shapes/Asset 25.svg" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <div className="text-center space-y-8">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
            <p className="text-xs uppercase tracking-widest text-white/90 font-subace-condensed">Rapper • Lyricist • Songwriter • Entertainer</p>
          </div>

          <h2 className="text-5xl lg:text-7xl font-subace-expanded text-white leading-tight">
            Lagos-based artist
            <br />
            blending{" "}
            <span className="text-[#D4AF37]">Afrosounds & Hip-Hop</span>
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed font-subace">
            Nigerian artist creating authentic music that fuses Afrobeats with Hip-Hop. From Lagos to the world.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="/contact">
              <Button className="bg-white hover:bg-white/90 text-[#B5312A] px-10 py-6 rounded-full text-base font-subace-condensed uppercase tracking-wider shadow-2xl hover:scale-105 transition-all">
                Book SPlus89
              </Button>
            </a>
            <a href="https://audiomack.com/shedracksplus" target="_blank" rel="noopener noreferrer">
              <Button className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 px-10 py-6 rounded-full text-base font-subace-condensed uppercase tracking-wider transition-all">
                Listen on Audiomack
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-subace-expanded text-white mb-2">5+</div>
              <div className="text-sm text-white/70 uppercase tracking-wider font-subace-condensed">Released Singles</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-4xl lg:text-5xl font-subace-expanded text-white mb-2">Lagos</div>
              <div className="text-sm text-white/70 uppercase tracking-wider font-subace-condensed">Based in Nigeria</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-subace-expanded text-white mb-2">2024</div>
              <div className="text-sm text-white/70 uppercase tracking-wider font-subace-condensed">Started Releasing</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
