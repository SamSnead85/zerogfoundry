import { useState } from 'react'
import { motion } from 'framer-motion'

interface TechLayer {
    id: string
    label: string
    description: string
    technologies: string[]
    color: string
    depth: number
}

const techLayers: TechLayer[] = [
    {
        id: 'frontend',
        label: 'Client Experience',
        description: 'Enterprise interfaces & portals',
        technologies: ['React 19', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
        color: 'var(--color-aurora-teal)',
        depth: 0
    },
    {
        id: 'api',
        label: 'API Gateway',
        description: 'Secure enterprise integrations',
        technologies: ['REST API', 'GraphQL', 'OAuth 2.0', 'Rate Limiting'],
        color: 'var(--color-holographic-violet)',
        depth: 1
    },
    {
        id: 'ai',
        label: 'Agentic Engine',
        description: 'Core AI processing layer',
        technologies: ['LangGraph', 'RLHF', 'Vector DB', 'Model Serving'],
        color: 'var(--color-gold)',
        depth: 2
    },
    {
        id: 'compute',
        label: 'GPU Infrastructure',
        description: 'High-performance compute',
        technologies: ['NVIDIA DGX', 'CUDA', 'TensorRT', 'Triton'],
        color: 'var(--color-success)',
        depth: 3
    },
    {
        id: 'data',
        label: 'Data Layer',
        description: 'Enterprise data foundation',
        technologies: ['PostgreSQL', 'Redis', 'S3', 'Snowflake'],
        color: 'var(--color-foreground)',
        depth: 4
    }
]

interface TechStackVisualizationProps {
    className?: string
}

export default function TechStackVisualization({ className = '' }: TechStackVisualizationProps) {
    const [activeLayer, setActiveLayer] = useState<string | null>(null)
    const [hoveredTech, setHoveredTech] = useState<string | null>(null)

    return (
        <div className={`relative ${className}`}>
            {/* 3D Stack Container */}
            <div
                className="relative w-full max-w-2xl mx-auto"
                style={{
                    perspective: '1000px',
                    perspectiveOrigin: '50% 30%'
                }}
            >
                <div
                    className="relative"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: 'rotateX(35deg) rotateZ(-5deg)'
                    }}
                >
                    {techLayers.map((layer, idx) => {
                        const isActive = activeLayer === layer.id
                        const isHovered = activeLayer === null || isActive

                        return (
                            <motion.div
                                key={layer.id}
                                className="relative cursor-pointer"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    transform: `translateZ(${(techLayers.length - idx) * 20}px)`,
                                    marginTop: idx === 0 ? 0 : '-40px'
                                }}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: isActive ? 1.05 : 1,
                                    z: isActive ? 30 : 0
                                }}
                                transition={{ delay: idx * 0.1 }}
                                onMouseEnter={() => setActiveLayer(layer.id)}
                                onMouseLeave={() => setActiveLayer(null)}
                            >
                                {/* Layer Card */}
                                <div
                                    className={`relative p-6 rounded-2xl transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-40'}`}
                                    style={{
                                        background: `linear-gradient(135deg, color-mix(in srgb, ${layer.color} 5%, transparent), color-mix(in srgb, ${layer.color} 15%, transparent))`,
                                        border: `1px solid ${isActive ? layer.color : 'rgba(255,255,255,0.1)'}`,
                                        boxShadow: isActive
                                            ? `0 10px 40px color-mix(in srgb, ${layer.color} 30%, transparent), inset 0 1px 0 rgba(255,255,255,0.1)`
                                            : '0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
                                    }}
                                >
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h3 className="font-semibold text-white text-lg">{layer.label}</h3>
                                            <p className="text-sm text-white/50">{layer.description}</p>
                                        </div>
                                        <div
                                            className="w-3 h-3 rounded-full"
                                            style={{
                                                backgroundColor: layer.color,
                                                boxShadow: `0 0 10px ${layer.color}`
                                            }}
                                        />
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {layer.technologies.map((tech) => (
                                            <motion.span
                                                key={tech}
                                                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${hoveredTech === tech
                                                        ? 'bg-white/20 text-white'
                                                        : 'bg-white/5 text-white/60'
                                                    }`}
                                                style={{
                                                    border: hoveredTech === tech
                                                        ? `1px solid ${layer.color}`
                                                        : '1px solid transparent'
                                                }}
                                                onMouseEnter={() => setHoveredTech(tech)}
                                                onMouseLeave={() => setHoveredTech(null)}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Depth indicator line */}
                                    <div
                                        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                                        style={{ backgroundColor: layer.color }}
                                    />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* Legend */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                {techLayers.map((layer) => (
                    <button
                        key={layer.id}
                        className={`flex items-center gap-2 text-sm transition-opacity ${activeLayer === null || activeLayer === layer.id
                                ? 'opacity-100'
                                : 'opacity-40'
                            }`}
                        onMouseEnter={() => setActiveLayer(layer.id)}
                        onMouseLeave={() => setActiveLayer(null)}
                    >
                        <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: layer.color }}
                        />
                        <span className="text-white/70">{layer.label}</span>
                    </button>
                ))}
            </div>

            {/* Title */}
            <div className="absolute top-0 left-0">
                <span className="text-xs uppercase tracking-widest text-white/30">
                    Technology Stack
                </span>
            </div>
        </div>
    )
}
