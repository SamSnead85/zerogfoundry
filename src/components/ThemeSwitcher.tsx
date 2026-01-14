import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Monitor, Check } from 'lucide-react'

type Theme = 'dark' | 'light' | 'system'

interface ThemeSwitcherProps {
    className?: string
    variant?: 'toggle' | 'dropdown'
}

const STORAGE_KEY = 'zerofoundry-theme'

function getSystemTheme(): 'dark' | 'light' {
    if (typeof window === 'undefined') return 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeSwitcher({ className = '', variant = 'toggle' }: ThemeSwitcherProps) {
    const [theme, setTheme] = useState<Theme>('dark')
    const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark')
    const [isOpen, setIsOpen] = useState(false)

    // Load saved theme preference
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY) as Theme | null
        if (saved) {
            setTheme(saved)
        }
    }, [])

    // Apply theme to document
    useEffect(() => {
        const applyTheme = (t: Theme) => {
            const resolved = t === 'system' ? getSystemTheme() : t
            setResolvedTheme(resolved)

            document.documentElement.setAttribute('data-theme', resolved)

            if (resolved === 'light') {
                document.documentElement.classList.remove('dark')
                document.documentElement.classList.add('light')
            } else {
                document.documentElement.classList.remove('light')
                document.documentElement.classList.add('dark')
            }
        }

        applyTheme(theme)
        localStorage.setItem(STORAGE_KEY, theme)

        // Listen for system theme changes
        if (theme === 'system') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
            const handler = () => applyTheme('system')
            mediaQuery.addEventListener('change', handler)
            return () => mediaQuery.removeEventListener('change', handler)
        }
    }, [theme])

    const cycleTheme = useCallback(() => {
        const themes: Theme[] = ['dark', 'light', 'system']
        const currentIndex = themes.indexOf(theme)
        const nextIndex = (currentIndex + 1) % themes.length
        setTheme(themes[nextIndex])
    }, [theme])

    const selectTheme = useCallback((t: Theme) => {
        setTheme(t)
        setIsOpen(false)
    }, [])

    const themeOptions = [
        { value: 'light' as Theme, label: 'Light', icon: <Sun className="w-4 h-4" /> },
        { value: 'dark' as Theme, label: 'Dark', icon: <Moon className="w-4 h-4" /> },
        { value: 'system' as Theme, label: 'System', icon: <Monitor className="w-4 h-4" /> },
    ]

    if (variant === 'toggle') {
        return (
            <motion.button
                onClick={cycleTheme}
                className={`relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 flex items-center justify-center transition-colors ${className}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Current theme: ${theme}. Click to change.`}
            >
                <AnimatePresence mode="wait">
                    {resolvedTheme === 'dark' ? (
                        <motion.div
                            key="moon"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Moon className="w-5 h-5 text-white/70" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* System indicator dot */}
                {theme === 'system' && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[var(--color-aurora-teal)] border-2 border-[#0a0a0a]" />
                )}
            </motion.button>
        )
    }

    return (
        <div className={`relative ${className}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
                {resolvedTheme === 'dark'
                    ? <Moon className="w-4 h-4 text-white/70" />
                    : <Sun className="w-4 h-4 text-[var(--color-gold)]" />
                }
                <span className="text-sm text-white/70 capitalize">{theme}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute top-full right-0 mt-2 w-40 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-xl z-50"
                    >
                        {themeOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => selectTheme(option.value)}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${theme === option.value
                                        ? 'bg-white/10 text-white'
                                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <span className={theme === option.value ? 'text-[var(--color-gold)]' : ''}>{option.icon}</span>
                                <span className="text-sm flex-1">{option.label}</span>
                                {theme === option.value && (
                                    <Check className="w-4 h-4 text-[var(--color-gold)]" />
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
