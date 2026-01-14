import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Clock, Target, ArrowUpRight, ArrowDownRight } from 'lucide-react'

interface Metric {
    id: string
    label: string
    value: number
    unit: string
    prefix?: string
    trend: 'up' | 'down' | 'stable'
    trendValue: number
    icon: React.ReactNode
    color: string
}

interface LiveMetricsProps {
    className?: string
    variant?: 'compact' | 'expanded'
}

const baseMetrics: Omit<Metric, 'value' | 'trend' | 'trendValue'>[] = [
    {
        id: 'savings',
        label: 'Cost Savings',
        unit: 'M',
        prefix: '$',
        icon: <TrendingUp className="w-5 h-5" />,
        color: 'var(--color-gold)'
    },
    {
        id: 'accuracy',
        label: 'AI Accuracy',
        unit: '%',
        icon: <Target className="w-5 h-5" />,
        color: 'var(--color-success)'
    },
    {
        id: 'clients',
        label: 'Enterprise Clients',
        unit: '+',
        icon: <Users className="w-5 h-5" />,
        color: 'var(--color-aurora-teal)'
    },
    {
        id: 'time',
        label: 'Faster Processing',
        unit: 'x',
        icon: <Clock className="w-5 h-5" />,
        color: 'var(--color-holographic-violet)'
    }
]

// Simulated real-time data generator
function generateMetricValue(id: string): { value: number; trend: 'up' | 'down' | 'stable'; trendValue: number } {
    const baseValues: Record<string, { base: number; variance: number }> = {
        savings: { base: 12.4, variance: 0.5 },
        accuracy: { base: 95.2, variance: 0.3 },
        clients: { base: 47, variance: 2 },
        time: { base: 5.3, variance: 0.2 }
    }

    const config = baseValues[id] || { base: 0, variance: 0 }
    const value = config.base + (Math.random() - 0.5) * config.variance
    const trendRandom = Math.random()
    const trend = trendRandom > 0.6 ? 'up' : trendRandom > 0.3 ? 'stable' : 'down'
    const trendValue = Math.random() * 5

    return {
        value: Math.round(value * 10) / 10,
        trend,
        trendValue: Math.round(trendValue * 10) / 10
    }
}

function AnimatedNumber({ value, decimals = 1 }: { value: number; decimals?: number }) {
    const [displayValue, setDisplayValue] = useState(value)

    useEffect(() => {
        const steps = 20
        const increment = (value - displayValue) / steps
        let current = displayValue
        let step = 0

        const interval = setInterval(() => {
            step++
            current += increment
            setDisplayValue(current)

            if (step >= steps) {
                setDisplayValue(value)
                clearInterval(interval)
            }
        }, 30)

        return () => clearInterval(interval)
    }, [value, displayValue])

    return <>{displayValue.toFixed(decimals)}</>
}

function SparkLine({ data, color }: { data: number[]; color: string }) {
    const max = Math.max(...data)
    const min = Math.min(...data)
    const range = max - min || 1

    const points = data.map((value, index) => {
        const x = (index / (data.length - 1)) * 100
        const y = 100 - ((value - min) / range) * 100
        return `${x},${y}`
    }).join(' ')

    return (
        <svg className="w-16 h-8" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polyline
                points={points}
                fill="none"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default function LiveMetrics({ className = '', variant = 'expanded' }: LiveMetricsProps) {
    const [metrics, setMetrics] = useState<Metric[]>([])
    const [sparkData, setSparkData] = useState<Record<string, number[]>>({})

    // Initialize metrics
    useEffect(() => {
        const initialMetrics = baseMetrics.map(m => ({
            ...m,
            ...generateMetricValue(m.id)
        }))
        setMetrics(initialMetrics)

        // Initialize spark line data
        const initialSparkData: Record<string, number[]> = {}
        baseMetrics.forEach(m => {
            initialSparkData[m.id] = Array(8).fill(0).map(() => generateMetricValue(m.id).value)
        })
        setSparkData(initialSparkData)
    }, [])

    // Simulate real-time updates
    useEffect(() => {
        const interval = setInterval(() => {
            setMetrics(prev => prev.map(m => ({
                ...m,
                ...generateMetricValue(m.id)
            })))

            setSparkData(prev => {
                const updated = { ...prev }
                baseMetrics.forEach(m => {
                    const current = updated[m.id] || []
                    updated[m.id] = [...current.slice(-7), generateMetricValue(m.id).value]
                })
                return updated
            })
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    if (variant === 'compact') {
        return (
            <div className={`grid grid-cols-4 gap-4 ${className}`}>
                {metrics.map((metric, idx) => (
                    <motion.div
                        key={metric.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/5"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div style={{ color: metric.color }}>
                                {metric.icon}
                            </div>
                            <span className="text-xs text-white/40">{metric.label}</span>
                        </div>
                        <div className="text-2xl font-semibold text-white">
                            {metric.prefix}<AnimatedNumber value={metric.value} />{metric.unit}
                        </div>
                    </motion.div>
                ))}
            </div>
        )
    }

    return (
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
            {metrics.map((metric, idx) => (
                <motion.div
                    key={metric.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-colors group"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{
                                backgroundColor: `color-mix(in srgb, ${metric.color} 10%, transparent)`,
                                color: metric.color
                            }}
                        >
                            {metric.icon}
                        </div>

                        {/* Trend Badge */}
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${metric.trend === 'up' ? 'bg-[var(--color-success)]/10 text-[var(--color-success)]' :
                                metric.trend === 'down' ? 'bg-[var(--color-error)]/10 text-[var(--color-error)]' :
                                    'bg-white/5 text-white/50'
                            }`}>
                            {metric.trend === 'up' && <ArrowUpRight className="w-3 h-3" />}
                            {metric.trend === 'down' && <ArrowDownRight className="w-3 h-3" />}
                            {metric.trendValue}%
                        </div>
                    </div>

                    {/* Value */}
                    <div className="mb-2">
                        <span className="text-3xl font-semibold text-white">
                            {metric.prefix}<AnimatedNumber value={metric.value} />
                        </span>
                        <span className="text-xl text-white/50">{metric.unit}</span>
                    </div>

                    {/* Label */}
                    <p className="text-sm text-white/40 mb-3">{metric.label}</p>

                    {/* Spark Line */}
                    <div className="flex items-end justify-between">
                        {sparkData[metric.id] && (
                            <SparkLine data={sparkData[metric.id]} color={metric.color} />
                        )}
                        <span className="text-[10px] text-white/30 uppercase tracking-wider">
                            Live
                        </span>
                    </div>

                    {/* Pulse indicator */}
                    <motion.div
                        className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[var(--color-success)]"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            ))}
        </div>
    )
}
