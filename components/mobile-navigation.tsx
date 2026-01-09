"use client"

import { useState } from "react"
import { Menu, X, Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AudioEffects } from "@/components/audio-effects"

interface MobileNavigationProps {
    currentPage?: string
}

export function MobileNavigation({ currentPage }: MobileNavigationProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const isCurrentPage = (page: string) => currentPage === page

    return (
        <>
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
                            <a
                                href="/"
                                className={`text-sm font-subace-condensed uppercase tracking-wider transition-colors ${isCurrentPage('home') ? 'text-[#B5312A]' : 'text-[#EFE8CE] hover:text-[#B5312A]'
                                    }`}
                            >
                                Home
                            </a>
                            <a
                                href="/about"
                                className={`text-sm font-subace-condensed uppercase tracking-wider transition-colors ${isCurrentPage('about') ? 'text-[#B5312A]' : 'text-[#EFE8CE] hover:text-[#B5312A]'
                                    }`}
                            >
                                About
                            </a>
                            <a
                                href="/releases"
                                className={`text-sm font-subace-condensed uppercase tracking-wider transition-colors ${isCurrentPage('releases') ? 'text-[#B5312A]' : 'text-[#EFE8CE] hover:text-[#B5312A]'
                                    }`}
                            >
                                Releases
                            </a>
                            <a
                                href="https://audiomack.com/shedracksplus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-subace-condensed uppercase tracking-wider text-[#EFE8CE] hover:text-[#B5312A] transition-colors"
                            >
                                Audiomack
                            </a>
                            <a
                                href="/contact"
                                className={`text-sm font-subace-condensed uppercase tracking-wider transition-colors ${isCurrentPage('contact') ? 'text-[#B5312A]' : 'text-[#EFE8CE] hover:text-[#B5312A]'
                                    }`}
                            >
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
                                    className={`px-4 py-3 text-sm font-subace-condensed uppercase tracking-wider transition-colors ${isCurrentPage('home')
                                        ? 'text-[#B5312A] bg-[#1A1917]'
                                        : 'text-[#EFE8CE] hover:text-[#B5312A] hover:bg-[#1A1917]'
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Home
                                </a>
                                <a
                                    href="/about"
                                    className={`px-4 py-3 text-sm font-subace-condensed uppercase tracking-wider transition-colors ${isCurrentPage('about')
                                        ? 'text-[#B5312A] bg-[#1A1917]'
                                        : 'text-[#EFE8CE] hover:text-[#B5312A] hover:bg-[#1A1917]'
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About
                                </a>
                                <a
                                    href="/releases"
                                    className={`px-4 py-3 text-sm font-subace-condensed uppercase tracking-wider transition-colors ${isCurrentPage('releases')
                                        ? 'text-[#B5312A] bg-[#1A1917]'
                                        : 'text-[#EFE8CE] hover:text-[#B5312A] hover:bg-[#1A1917]'
                                        }`}
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
                                    className={`px-4 py-3 text-sm font-subace-condensed uppercase tracking-wider transition-colors ${isCurrentPage('contact')
                                        ? 'text-[#B5312A] bg-[#1A1917]'
                                        : 'text-[#EFE8CE] hover:text-[#B5312A] hover:bg-[#1A1917]'
                                        }`}
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
        </>
    )
}