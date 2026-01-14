import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface FlowNode {
    id: string
    label: string
    value: string
    color: string
    x: number
    y: number
}

interface FlowConnection {
    from: string
    to: string
    value: number
    label?: string
}

interface ValueFlowDiagramProps {
    variant?: 'roi' | 'process' | 'savings'
    className?: string
}

const roiNodes: FlowNode[] = [
    { id: 'investment', label: 'Investment', value: '$14.5M', color: 'var(--color-muted)', x: 10, y: 50 },
    { id: 'phase1', label: 'Phase 1', value: 'Assessment', color: 'var(--color-gold)', x: 30, y: 30 },
    { id: 'phase2', label: 'Phase 2', value: 'Transform', color: 'var(--color-aurora-teal)', x: 50, y: 50 },
    { id: 'phase3', label: 'Phase 3', value: 'Optimize', color: 'var(--color-holographic-violet)', x: 70, y: 70 },
    { id: 'savings', label: 'Annual Savings', value: '$30M+', color: 'var(--color-success)', x: 90, y: 50 },
]

const roiConnections: FlowConnection[] = [
    { from: 'investment', to: 'phase1', value: 20, label: '4-6 weeks' },
    { from: 'investment', to: 'phase2', value: 60 },
    { from: 'phase1', to: 'phase2', value: 40 },
    { from: 'phase2', to: 'phase3', value: 80 },
    { from: 'phase2', to: 'savings', value: 30, label: 'Quick wins' },
    { from: 'phase3', to: 'savings', value: 70, label: '5x ROI' },
]

const processNodes: FlowNode[] = [
    { id: 'legacy', label: 'Legacy System', value: 'COBOL/DB2', color: 'var(--color-muted)', x: 10, y: 50 },
    { id: 'analyze', label: 'AI Analysis', value: '95% Coverage', color: 'var(--color-gold)', x: 35, y: 50 },
    { id: 'convert', label: 'Conversion', value: 'Auto-generated', color: 'var(--color-aurora-teal)', x: 60, y: 50 },
    { id: 'modern', label: 'Modern Stack', value: 'Cloud-native', color: 'var(--color-success)', x: 85, y: 50 },
]

const processConnections: FlowConnection[] = [
    { from: 'legacy', to: 'analyze', value: 100 },
    { from: 'analyze', to: 'convert', value: 95 },
    { from: 'convert', to: 'modern', value: 95 },
]

const savingsNodes: FlowNode[] = [
    { id: 'before', label: 'Current State', value: '$65B/yr', color: 'var(--color-error)', x: 15, y: 50 },
    { id: 'mips', label: 'MIPS Reduction', value: '-60%', color: 'var(--color-gold)', x: 40, y: 30 },
    { id: 'staff', label: 'Staff Efficiency', value: '+75%', color: 'var(--color-aurora-teal)', x: 40, y: 70 },
    { id: 'after', label: 'New State', value: '$26B/yr', color: 'var(--color-success)', x: 85, y: 50 },
]

const savingsConnections: FlowConnection[] = [
    { from: 'before', to: 'mips', value: 40 },
    { from: 'before', to: 'staff', value: 40 },
    { from: 'mips', to: 'after', value: 40, label: '$24B saved' },
    { from: 'staff', to: 'after', value: 35, label: '$15B value' },
]

const configs = {
    roi: { nodes: roiNodes, connections: roiConnections },
    process: { nodes: processNodes, connections: processConnections },
    savings: { nodes: savingsNodes, connections: savingsConnections },
}

function FlowPath({ connection, nodes, isAnimating }: { connection: FlowConnection; nodes: FlowNode[]; isAnimating: boolean }) {
    const fromNode = nodes.find(n => n.id === connection.from)
    const toNode = nodes.find(n => n.id === connection.to)

    if (!fromNode || !toNode) return null

    const controls = useAnimation()

    useEffect(() => {
        if (isAnimating) {
            controls.start({
                pathLength: 1,
                opacity: 1,
                transition: { duration: 1.5, ease: 'easeInOut' }
            })
        }
    }, [isAnimating, controls])

    // Calculate curved path
    const startX = fromNode.x
    const startY = fromNode.y
    const endX = toNode.x
    const endY = toNode.y
    const midX = (startX + endX) / 2
    const midY = (startY + endY) / 2 - 10

    const pathD = `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`
    const thickness = Math.max(2, connection.value / 15)

    return (
        <g>
            {/* Background path */}
            <path
                d={pathD}
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth={thickness + 4}
                strokeLinecap="round"
            />

            {/* Animated flow path */}
            <motion.path
                d={pathD}
                fill="none"
                stroke={`url(#gradient-${connection.from}-${connection.to})`}
                strokeWidth={thickness}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
            />

            {/* Gradient definition */}
            <defs>
                <linearGradient
                    id={`gradient-${connection.from}-${connection.to}`}
                    x1="0%" y1="0%" x2="100%" y2="0%"
                >
                    <stop offset="0%" stopColor={fromNode.color} />
                    <stop offset="100%" stopColor={toNode.color} />
                </linearGradient>
            </defs>

            {/* Flow label */}
            {connection.label && (
                <motion.text
                    x={midX}
                    y={midY - 5}
                    textAnchor="middle"
                    className="text-[8px] fill-white/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    {connection.label}
                </motion.text>
            )}
        </g>
    )
}

export default function ValueFlowDiagram({ variant = 'roi', className = '' }: ValueFlowDiagramProps) {
    const [isAnimating, setIsAnimating] = useState(false)
    const [activeNode, setActiveNode] = useState<string | null>(null)

    const { nodes, connections } = configs[variant]

    useEffect(() => {
        // Start animation after mount
        const timer = setTimeout(() => setIsAnimating(true), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={`relative ${className}`}>
            <svg
                className="w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Connections */}
                {connections.map((conn, idx) => (
                    <FlowPath
                        key={`${conn.from}-${conn.to}-${idx}`}
                        connection={conn}
                        nodes={nodes}
                        isAnimating={isAnimating}
                    />
                ))}

                {/* Nodes */}
                {nodes.map((node, idx) => (
                    <motion.g
                        key={node.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * idx, duration: 0.5 }}
                        onMouseEnter={() => setActiveNode(node.id)}
                        onMouseLeave={() => setActiveNode(null)}
                        style={{ cursor: 'pointer' }}
                    >
                        {/* Node circle */}
                        <circle
                            cx={node.x}
                            cy={node.y}
                            r={activeNode === node.id ? 8 : 6}
                            fill={`color-mix(in srgb, ${node.color} 20%, transparent)`}
                            stroke={node.color}
                            strokeWidth={activeNode === node.id ? 2 : 1}
                        />

                        {/* Glow effect */}
                        {activeNode === node.id && (
                            <circle
                                cx={node.x}
                                cy={node.y}
                                r={12}
                                fill="none"
                                stroke={node.color}
                                strokeWidth={0.5}
                                opacity={0.5}
                            />
                        )}

                        {/* Label */}
                        <text
                            x={node.x}
                            y={node.y + 14}
                            textAnchor="middle"
                            className="text-[6px] fill-white/70 font-medium"
                        >
                            {node.label}
                        </text>

                        {/* Value */}
                        <text
                            x={node.x}
                            y={node.y + 20}
                            textAnchor="middle"
                            className="text-[5px] font-medium"
                            fill={node.color}
                        >
                            {node.value}
                        </text>
                    </motion.g>
                ))}
            </svg>

            {/* Legend/Controls */}
            <div className="flex items-center justify-center gap-6 mt-6">
                <div className="flex items-center gap-2 text-sm text-white/50">
                    <div className="w-8 h-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-success)] rounded-full" />
                    <span>Value Flow</span>
                </div>
                <button
                    onClick={() => {
                        setIsAnimating(false)
                        setTimeout(() => setIsAnimating(true), 100)
                    }}
                    className="flex items-center gap-1 text-sm text-white/50 hover:text-white transition-colors"
                >
                    <ArrowRight className="w-4 h-4" />
                    Replay
                </button>
            </div>

            {/* Title */}
            <div className="absolute top-0 left-0">
                <span className="text-xs uppercase tracking-widest text-white/30">
                    {variant === 'roi' && 'ROI Journey'}
                    {variant === 'process' && 'Transformation Flow'}
                    {variant === 'savings' && 'Cost Reduction Path'}
                </span>
            </div>
        </div>
    )
}
