import { Youtube, Twitter, Instagram, Facebook, Music, Headphones, Play } from "lucide-react"

export function SocialSidebar() {
    return (
        <div className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 bg-[#B5312A] flex flex-col gap-1.5 sm:gap-2 lg:gap-4 py-2 sm:py-3 lg:py-4 px-1.5 sm:px-2 lg:px-3 rounded-lg shadow-lg">
            <a href="https://audiomack.com/shedracksplus" target="_blank" rel="noopener noreferrer" className="text-[#EFE8CE] hover:scale-110 transition-transform" title="Audiomack">
                <Headphones className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            </a>
            <a href="https://open.spotify.com/track/4aF5hci57nC6hGXeH6ox0M" target="_blank" rel="noopener noreferrer" className="text-[#EFE8CE] hover:scale-110 transition-transform" title="Spotify">
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            </a>
            <a href="https://music.apple.com/us/artist/s-plus-8ight9ine/1767245123" target="_blank" rel="noopener noreferrer" className="text-[#EFE8CE] hover:scale-110 transition-transform" title="Apple Music">
                <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            </a>
            <a href="https://www.boomplay.com/artists/97714638" target="_blank" rel="noopener noreferrer" className="text-[#EFE8CE] hover:scale-110 transition-transform" title="Boomplay">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
            </a>
            <a href="https://www.youtube.com/watch?v=vm_ZM5Q20OA" target="_blank" rel="noopener noreferrer" className="text-[#EFE8CE] hover:scale-110 transition-transform" title="YouTube">
                <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            </a>
            <a href="https://www.instagram.com/shedracksplus/" target="_blank" rel="noopener noreferrer" className="text-[#EFE8CE] hover:scale-110 transition-transform" title="Instagram">
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            </a>
            <a href="https://www.facebook.com/deking.sheddy.2025" target="_blank" rel="noopener noreferrer" className="text-[#EFE8CE] hover:scale-110 transition-transform" title="Facebook">
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            </a>
            <a href="#" className="text-[#EFE8CE] hover:scale-110 transition-transform" title="Twitter">
                <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            </a>
        </div>
    )
}
