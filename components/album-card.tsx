'use client'

import Image from 'next/image'

interface AlbumCardProps {
    title: string
    image: string
}

export function AlbumCard({ title, image }: AlbumCardProps) {
    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-square mb-4 overflow-hidden bg-[#1A1917] rounded-lg">
                <Image
                    src={image || '/placeholder.svg'}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <h3 className="text-xl font-normal text-[#F7F5EC] group-hover:text-[#B5312A] transition-colors">
                {title}
            </h3>
        </div>
    )
}
