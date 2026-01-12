import { Play, Quote } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface VideoTestimonialProps {
    name: string
    title: string
    company: string
    quote: string
    videoUrl?: string
    thumbnailUrl?: string
}

export default function VideoTestimonial({
    name,
    title,
    company,
    quote,
    videoUrl,
    thumbnailUrl = '/api/placeholder/640/360',
}: VideoTestimonialProps) {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden"
        >
            {/* Video Section */}
            <div className="relative aspect-video bg-[var(--color-background)]">
                {videoUrl && isPlaying ? (
                    <video
                        src={videoUrl}
                        autoPlay
                        controls
                        className="w-full h-full object-cover"
                        onEnded={() => setIsPlaying(false)}
                    />
                ) : (
                    <>
                        <div
                            className="w-full h-full bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-gold)]/20 flex items-center justify-center"
                            style={{
                                backgroundImage: thumbnailUrl ? `url(${thumbnailUrl})` : undefined,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {videoUrl && (
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="w-16 h-16 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                                    aria-label="Play video"
                                >
                                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                                </button>
                            )}
                        </div>
                        {!videoUrl && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Quote className="w-12 h-12 text-[var(--color-gold)]/30" />
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Content Section */}
            <div className="p-6">
                <Quote className="w-8 h-8 text-[var(--color-gold)] mb-4" />
                <p className="text-[var(--color-foreground)] text-lg leading-relaxed mb-6">
                    "{quote}"
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                        <span className="text-[var(--color-accent)] font-bold">
                            {name.split(' ').map(n => n[0]).join('')}
                        </span>
                    </div>
                    <div>
                        <p className="text-white font-semibold">{name}</p>
                        <p className="text-sm text-[var(--color-muted)]">
                            {title}, {company}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
