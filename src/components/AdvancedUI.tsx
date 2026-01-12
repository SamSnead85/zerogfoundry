import { useState, useRef, useEffect } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

// ==================== TOOLTIP ====================
interface TooltipProps {
    content: string
    children: ReactNode
    position?: 'top' | 'bottom' | 'left' | 'right'
}

export function Tooltip({ content, children, position = 'top' }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false)

    const positionClasses = {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    }

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute z-50 px-3 py-2 text-sm text-white bg-[#1a1a1a] border border-[var(--color-border)] rounded-lg shadow-xl whitespace-nowrap ${positionClasses[position]}`}
                        role="tooltip"
                    >
                        {content}
                        <div
                            className={`absolute w-2 h-2 bg-[#1a1a1a] border-[var(--color-border)] rotate-45 ${position === 'top' ? 'top-full -translate-y-1 left-1/2 -translate-x-1/2 border-b border-r' :
                                position === 'bottom' ? 'bottom-full translate-y-1 left-1/2 -translate-x-1/2 border-t border-l' :
                                    position === 'left' ? 'left-full -translate-x-1 top-1/2 -translate-y-1/2 border-t border-r' :
                                        'right-full translate-x-1 top-1/2 -translate-y-1/2 border-b border-l'
                                }`}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// ==================== MODAL ====================
interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    children: ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose])

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === overlayRef.current) onClose()
    }

    const sizeClasses = {
        sm: 'max-w-sm',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
    }

    if (!isOpen) return null

    return createPortal(
        <AnimatePresence>
            <motion.div
                ref={overlayRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={handleOverlayClick}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? 'modal-title' : undefined}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className={`w-full ${sizeClasses[size]} bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl shadow-2xl`}
                >
                    {title && (
                        <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
                            <h2 id="modal-title" className="text-xl font-serif text-white">{title}</h2>
                            <button
                                onClick={onClose}
                                className="p-2 text-[var(--color-muted)] hover:text-white transition-colors rounded-lg hover:bg-white/5"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                    <div className={title ? 'p-6' : 'p-6 pt-8 relative'}>
                        {!title && (
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-[var(--color-muted)] hover:text-white transition-colors rounded-lg hover:bg-white/5"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}
                        {children}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body
    )
}

// ==================== ACCORDION ====================
interface AccordionItem {
    id: string
    title: string
    content: ReactNode
}

interface AccordionProps {
    items: AccordionItem[]
    allowMultiple?: boolean
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
    const [openItems, setOpenItems] = useState<string[]>([])

    const toggleItem = (id: string) => {
        if (allowMultiple) {
            setOpenItems(prev =>
                prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
            )
        } else {
            setOpenItems(prev => prev.includes(id) ? [] : [id])
        }
    }

    return (
        <div className="space-y-2">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="border border-[var(--color-border)] rounded-xl overflow-hidden"
                >
                    <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left bg-[var(--color-card)] hover:bg-[var(--color-card-elevated)] transition-colors"
                        aria-expanded={openItems.includes(item.id)}
                    >
                        <span className="text-white font-medium">{item.title}</span>
                        <motion.span
                            animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-[var(--color-muted)]"
                        >
                            ↓
                        </motion.span>
                    </button>
                    <AnimatePresence>
                        {openItems.includes(item.id) && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="px-6 py-4 bg-[var(--color-background)] text-[var(--color-muted)]">
                                    {item.content}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}

// ==================== TABS ====================
interface Tab {
    id: string
    label: string
    content: ReactNode
}

interface TabsProps {
    tabs: Tab[]
    defaultTab?: string
}

export function Tabs({ tabs, defaultTab }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

    return (
        <div>
            <div className="flex border-b border-[var(--color-border)] mb-6 overflow-x-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors relative ${activeTab === tab.id
                            ? 'text-[var(--color-gold)]'
                            : 'text-[var(--color-muted)] hover:text-white'
                            }`}
                        role="tab"
                        aria-selected={activeTab === tab.id}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-gold)]"
                            />
                        )}
                    </button>
                ))}
            </div>
            <AnimatePresence mode="wait">
                {tabs.map((tab) =>
                    tab.id === activeTab ? (
                        <motion.div
                            key={tab.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            role="tabpanel"
                        >
                            {tab.content}
                        </motion.div>
                    ) : null
                )}
            </AnimatePresence>
        </div>
    )
}

// ==================== PROGRESS RING ====================
interface ProgressRingProps {
    progress: number
    size?: number
    strokeWidth?: number
    color?: string
    children?: ReactNode
}

export function ProgressRing({
    progress,
    size = 120,
    strokeWidth = 8,
    color = 'var(--color-gold)',
    children,
}: ProgressRingProps) {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (progress / 100) * circumference

    return (
        <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="rotate-[-90deg]">
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="var(--color-border)"
                    strokeWidth={strokeWidth}
                />
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{
                        strokeDasharray: circumference,
                    }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                {children}
            </div>
        </div>
    )
}

// ==================== STAT COUNTER ====================
interface StatCounterProps {
    value: number
    suffix?: string
    prefix?: string
    duration?: number
}

export function StatCounter({ value, suffix = '', prefix = '', duration = 2 }: StatCounterProps) {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    const startTime = Date.now()
                    const animate = () => {
                        const elapsed = Date.now() - startTime
                        const progress = Math.min(elapsed / (duration * 1000), 1)
                        const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
                        setCount(Math.floor(eased * value))
                        if (progress < 1) {
                            requestAnimationFrame(animate)
                        }
                    }
                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [value, duration, hasAnimated])

    return (
        <span ref={ref}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    )
}
