import { useState } from 'react'
import { motion } from 'framer-motion'

interface ArchitectureNode {
    id: string
    label: string
    description: string
    x: number
    y: number
    color: string
    connections?: string[]
}

interface ArchitectureDiagramProps {
    variant?: 'platform' | 'mainframe' | 'contact-center'
    className?: string
}

const platformNodes: ArchitectureNode[] = [
    {
        id: 'agentic-engine',
        label: 'Agentic Engine',
        description: 'Core AI foundation with RLHF training',
        x: 50, y: 50,
        color: 'var(--color-gold)',
        connections: ['mainframe', 'contact-center', 'analytics']
    },
    {
        id: 'mainframe',
        label: 'Mainframe Module',
        description: 'Legacy system transformation',
        x: 20, y: 75,
        color: 'var(--color-aurora-teal)',
        connections: ['output']
    },
    {
        id: 'contact-center',
        label: 'Contact Center',
        description: 'AI copilots & accent neutralization',
        x: 80, y: 75,
        color: 'var(--color-holographic-violet)',
        connections: ['output']
    },
    {
        id: 'analytics',
        label: 'Analytics',
        description: 'Real-time insights & monitoring',
        x: 50, y: 85,
        color: 'var(--color-success)',
        connections: ['output']
    },
    {
        id: 'output',
        label: 'Enterprise Output',
        description: 'Production-grade deployment',
        x: 50, y: 95,
        color: 'var(--color-foreground)'
    },
]

const mainframeNodes: ArchitectureNode[] = [
    {
        id: 'legacy',
        label: 'Legacy System',
        description: 'COBOL, DB2, PL/I',
        x: 15, y: 50,
        color: 'var(--color-muted)',
        connections: ['parser']
    },
    {
        id: 'parser',
        label: 'Semantic Parser',
        description: 'Business logic extraction',
        x: 35, y: 50,
        color: 'var(--color-gold)',
        connections: ['ai-translation']
    },
    {
        id: 'ai-translation',
        label: 'AI Translation',
        description: 'Code conversion engine',
        x: 55, y: 50,
        color: 'var(--color-aurora-teal)',
        connections: ['validation']
    },
    {
        id: 'validation',
        label: 'Validation Suite',
        description: '95%+ accuracy testing',
        x: 75, y: 50,
        color: 'var(--color-success)',
        connections: ['modern']
    },
    {
        id: 'modern',
        label: 'Modern Stack',
        description: 'Cloud-native output',
        x: 90, y: 50,
        color: 'var(--color-foreground)'
    },
]

const contactCenterNodes: ArchitectureNode[] = [
    {
        id: 'input',
        label: 'Voice Input',
        description: 'Omnichannel capture',
        x: 20, y: 30,
        color: 'var(--color-muted)',
        connections: ['stt']
    },
    {
        id: 'stt',
        label: 'Speech-to-Text',
        description: 'Real-time transcription',
        x: 40, y: 45,
        color: 'var(--color-aurora-teal)',
        connections: ['ai-copilot', 'accent']
    },
    {
        id: 'ai-copilot',
        label: 'AI Copilot',
        description: 'Agent assistance engine',
        x: 60, y: 30,
        color: 'var(--color-gold)',
        connections: ['output']
    },
    {
        id: 'accent',
        label: 'Accent Neutralization',
        description: 'Real-time speech clarity',
        x: 60, y: 60,
        color: 'var(--color-holographic-violet)',
        connections: ['output']
    },
    {
        id: 'output',
        label: 'Enhanced CX',
        description: 'Crystal-clear communication',
        x: 80, y: 45,
        color: 'var(--color-success)'
    },
]

const nodeConfigs = {
    platform: platformNodes,
    mainframe: mainframeNodes,
    'contact-center': contactCenterNodes
}

export default function ArchitectureDiagram({ variant = 'platform', className = '' }: ArchitectureDiagramProps) {
    const [activeNode, setActiveNode] = useState<string | null>(null)
    const nodes = nodeConfigs[variant]

    return (
        <div className={`relative w-full aspect-video bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden ${className}`}>
            {/* Background Grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full">
                {nodes.map(node =>
                    node.connections?.map(targetId => {
                        const target = nodes.find(n => n.id === targetId)
                        if (!target) return null

                        const isActive = activeNode === node.id || activeNode === targetId

                        return (
                            <motion.line
                                key={`${node.id}-${targetId}`}
                                x1={`${node.x}%`}
                                y1={`${node.y}%`}
                                x2={`${target.x}%`}
                                y2={`${target.y}%`}
                                stroke={isActive ? node.color : 'rgba(255,255,255,0.1)'}
                                strokeWidth={isActive ? 2 : 1}
                                strokeDasharray={isActive ? '0' : '4'}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            />
                        )
                    })
                )}
            </svg>

            {/* Nodes */}
            {nodes.map((node, idx) => (
                <motion.div
                    key={node.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                >
                    {/* Node Circle */}
                    <motion.div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-center relative z-10"
                        style={{
                            backgroundColor: `color-mix(in srgb, ${node.color} 10%, transparent)`,
                            border: `1px solid ${activeNode === node.id ? node.color : 'rgba(255,255,255,0.1)'}`,
                            boxShadow: activeNode === node.id ? `0 0 30px ${node.color}40` : 'none'
                        }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className="text-xs font-medium text-white text-center px-1 leading-tight">
                            {node.label}
                        </span>
                    </motion.div>

                    {/* Tooltip */}
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-[#0a0a0a] border border-white/10 rounded-lg whitespace-nowrap z-20"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: activeNode === node.id ? 1 : 0, y: activeNode === node.id ? 0 : -5 }}
                        transition={{ duration: 0.2 }}
                    >
                        <p className="text-xs text-white/70">{node.description}</p>
                    </motion.div>
                </motion.div>
            ))}

            {/* Title */}
            <div className="absolute top-4 left-4">
                <span className="text-xs uppercase tracking-widest text-white/30">
                    {variant === 'platform' && 'Platform Architecture'}
                    {variant === 'mainframe' && 'Modernization Flow'}
                    {variant === 'contact-center' && 'Contact Center Stack'}
                </span>
            </div>
        </div>
    )
}
