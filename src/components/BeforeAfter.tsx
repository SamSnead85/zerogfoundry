import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface Metric {
    label: string
    before: number
    after: number
    unit?: string
    format?: 'percent' | 'currency' | 'number' | 'time'
    higherIsBetter?: boolean
}

interface BeforeAfterProps {
    title: string
    subtitle?: string
    metrics: Metric[]
}

function formatValue(value: number, format: Metric['format'] = 'number', unit?: string): string {
    switch (format) {
        case 'percent':
            return `${value}%`
        case 'currency':
            return `$${value.toLocaleString()}`
        case 'time':
            return `${value}${unit || ' hrs'}`
        default:
            return `${value.toLocaleString()}${unit || ''}`
    }
}

export default function BeforeAfter({ title, subtitle, metrics }: BeforeAfterProps) {
    const [sliderValue, setSliderValue] = useState(50)

    return (
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 lg:p-8">
            <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                {subtitle && (
                    <p className="text-[var(--color-muted)]">{subtitle}</p>
                )}
            </div>

            {/* Interactive Slider */}
            <div className="mb-8">
                <div className="flex justify-between text-sm text-[var(--color-muted)] mb-2">
                    <span>Before</span>
                    <span>After</span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    className="w-full h-2 bg-[var(--color-border)] rounded-lg appearance-none cursor-pointer slider-thumb"
                    style={{
                        background: `linear-gradient(to right, var(--color-muted) 0%, var(--color-muted) ${sliderValue}%, var(--color-accent) ${sliderValue}%, var(--color-accent) 100%)`,
                    }}
                />
            </div>

            {/* Metrics Grid */}
            <div className="grid gap-4">
                {metrics.map((metric, index) => {
                    const improvement = metric.higherIsBetter !== false
                        ? metric.after - metric.before
                        : metric.before - metric.after
                    const percentChange = Math.abs((improvement / metric.before) * 100)
                    const isPositive = improvement > 0
                    const displayValue = metric.before + ((metric.after - metric.before) * (sliderValue / 100))

                    return (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-between p-4 bg-[var(--color-background)]/50 rounded-xl"
                        >
                            <div className="flex-1">
                                <p className="text-sm text-[var(--color-muted)] mb-1">{metric.label}</p>
                                <p className="text-2xl font-bold text-white">
                                    {formatValue(Math.round(displayValue), metric.format, metric.unit)}
                                </p>
                            </div>
                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${isPositive
                                    ? 'bg-[var(--color-success)]/10 text-[var(--color-success)]'
                                    : 'bg-red-500/10 text-red-400'
                                }`}>
                                {isPositive ? (
                                    <TrendingUp className="w-4 h-4" />
                                ) : improvement < 0 ? (
                                    <TrendingDown className="w-4 h-4" />
                                ) : (
                                    <Minus className="w-4 h-4" />
                                )}
                                <span>{percentChange.toFixed(0)}%</span>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            <style>{`
                .slider-thumb::-webkit-slider-thumb {
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: var(--color-gold);
                    cursor: pointer;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                }
                .slider-thumb::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: var(--color-gold);
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                }
            `}</style>
        </div>
    )
}
