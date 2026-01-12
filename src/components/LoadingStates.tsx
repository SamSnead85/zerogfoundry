import { motion, AnimatePresence } from 'framer-motion'

// ==================== PAGE LOADER ====================
interface PageLoaderProps {
    isLoading?: boolean
}

export function PageLoader({ isLoading = true }: PageLoaderProps) {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
                >
                    <div className="flex flex-col items-center gap-6">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                            className="w-12 h-12 border-2 border-[var(--color-border)] border-t-[var(--color-gold)] rounded-full"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-[var(--color-muted)] text-sm"
                        >
                            Loading...
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

// ==================== SKELETON LOADERS ====================
interface SkeletonProps {
    className?: string
    style?: React.CSSProperties
}

export function Skeleton({ className = '', style }: SkeletonProps) {
    return (
        <div
            className={`animate-pulse bg-gradient-to-r from-[var(--color-card)] via-[var(--color-card-elevated)] to-[var(--color-card)] bg-[length:200%_100%] rounded ${className}`}
            style={{
                animation: 'shimmer 1.5s infinite',
                ...style,
            }}
        />
    )
}

export function SkeletonCard() {
    return (
        <div className="p-6 border border-[var(--color-border)] rounded-2xl">
            <Skeleton className="h-4 w-20 mb-4" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6" />
        </div>
    )
}

export function SkeletonArticle() {
    return (
        <div className="space-y-4">
            <Skeleton className="h-48 w-full rounded-xl mb-4" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
        </div>
    )
}

export function SkeletonMetric() {
    return (
        <div className="text-center">
            <Skeleton className="h-10 w-24 mx-auto mb-2" />
            <Skeleton className="h-3 w-16 mx-auto" />
        </div>
    )
}

// ==================== LOADING BUTTON ====================
interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean
    children: React.ReactNode
}

export function LoadingButton({ isLoading, children, className = '', disabled, ...props }: LoadingButtonProps) {
    return (
        <button
            className={`relative inline-flex items-center justify-center ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && (
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                </motion.div>
            )}
            <span className={isLoading ? 'opacity-0' : 'opacity-100'}>{children}</span>
        </button>
    )
}

// ==================== CONTENT PLACEHOLDER ====================
interface ContentPlaceholderProps {
    lines?: number
}

export function ContentPlaceholder({ lines = 3 }: ContentPlaceholderProps) {
    return (
        <div className="space-y-3">
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton
                    key={i}
                    className="h-4"
                    style={{ width: `${100 - (i * 10)}%` } as React.CSSProperties}
                />
            ))}
        </div>
    )
}

// ==================== PAGE TRANSITION ====================
interface PageTransitionProps {
    children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    )
}

// Add shimmer animation to global styles
const shimmerStyle = document.createElement('style')
shimmerStyle.textContent = `
    @keyframes shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
    }
`
if (typeof document !== 'undefined') {
    document.head.appendChild(shimmerStyle)
}
