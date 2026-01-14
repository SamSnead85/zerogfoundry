import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Command, ChevronRight, FileText, Home, Briefcase, Phone, Calendar, ArrowRight, Settings, ExternalLink } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface CommandItem {
    id: string
    label: string
    description?: string
    icon: React.ReactNode
    action: () => void
    category: string
    keywords?: string[]
}

interface CommandPaletteProps {
    isOpen: boolean
    onClose: () => void
}

export function useCommandPalette() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // ⌘K or Ctrl+K to open
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault()
                setIsOpen(prev => !prev)
            }
            // Escape to close
            if (e.key === 'Escape') {
                setIsOpen(false)
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    return { isOpen, setIsOpen, toggle: () => setIsOpen(prev => !prev) }
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
    const [query, setQuery] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(0)
    const inputRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    // Define all available commands
    const allCommands: CommandItem[] = [
        // Navigation
        { id: 'home', label: 'Go to Home', icon: <Home className="w-4 h-4" />, action: () => { navigate('/'); onClose(); }, category: 'Navigation', keywords: ['home', 'main', 'landing'] },
        { id: 'mainframe', label: 'Mainframe Modernization', icon: <Briefcase className="w-4 h-4" />, action: () => { navigate('/solutions/mainframe'); onClose(); }, category: 'Solutions', keywords: ['cobol', 'legacy', 'migration'] },
        { id: 'contact-center', label: 'AI Contact Center', icon: <Phone className="w-4 h-4" />, action: () => { navigate('/solutions/contact-center'); onClose(); }, category: 'Solutions', keywords: ['accent', 'voice', 'support'] },
        { id: 'platform', label: 'Platform Overview', icon: <Settings className="w-4 h-4" />, action: () => { navigate('/platform'); onClose(); }, category: 'Navigation', keywords: ['architecture', 'engine'] },
        { id: 'engine', label: 'Agentic Engine', icon: <Command className="w-4 h-4" />, action: () => { navigate('/platform/agentic-engine'); onClose(); }, category: 'Platform', keywords: ['ai', 'rlhf', 'gpu'] },

        // Resources
        { id: 'case-studies', label: 'Case Studies', icon: <FileText className="w-4 h-4" />, action: () => { navigate('/case-studies'); onClose(); }, category: 'Resources', keywords: ['examples', 'success', 'clients'] },
        { id: 'whitepapers', label: 'Whitepapers', icon: <FileText className="w-4 h-4" />, action: () => { navigate('/whitepapers'); onClose(); }, category: 'Resources', keywords: ['research', 'docs', 'papers'] },
        { id: 'blog', label: 'Blog', icon: <FileText className="w-4 h-4" />, action: () => { navigate('/blog'); onClose(); }, category: 'Resources', keywords: ['articles', 'news', 'updates'] },

        // Actions
        { id: 'demo', label: 'Schedule a Demo', icon: <Calendar className="w-4 h-4" />, action: () => { navigate('/platform-demo'); onClose(); }, category: 'Actions', keywords: ['meeting', 'call', 'book'] },
        { id: 'contact', label: 'Contact Sales', icon: <Phone className="w-4 h-4" />, action: () => { navigate('/contact'); onClose(); }, category: 'Actions', keywords: ['email', 'talk', 'reach'] },
        { id: 'roi', label: 'ROI Calculator', icon: <ArrowRight className="w-4 h-4" />, action: () => { navigate('/roi-calculator-v2'); onClose(); }, category: 'Tools', keywords: ['savings', 'cost', 'money'] },
        { id: 'assessment', label: 'AI Maturity Assessment', icon: <ExternalLink className="w-4 h-4" />, action: () => { navigate('/assessment'); onClose(); }, category: 'Tools', keywords: ['readiness', 'evaluate', 'score'] },
    ]

    // Filter commands based on query
    const filteredCommands = query.trim()
        ? allCommands.filter(cmd => {
            const searchText = query.toLowerCase()
            return (
                cmd.label.toLowerCase().includes(searchText) ||
                cmd.description?.toLowerCase().includes(searchText) ||
                cmd.keywords?.some(k => k.includes(searchText))
            )
        })
        : allCommands

    // Group by category
    const groupedCommands = filteredCommands.reduce((acc, cmd) => {
        if (!acc[cmd.category]) acc[cmd.category] = []
        acc[cmd.category].push(cmd)
        return acc
    }, {} as Record<string, CommandItem[]>)

    const flatList = filteredCommands

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault()
                setSelectedIndex(prev => Math.min(prev + 1, flatList.length - 1))
                break
            case 'ArrowUp':
                e.preventDefault()
                setSelectedIndex(prev => Math.max(prev - 1, 0))
                break
            case 'Enter':
                e.preventDefault()
                if (flatList[selectedIndex]) {
                    flatList[selectedIndex].action()
                }
                break
        }
    }, [flatList, selectedIndex])

    // Focus input on open
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100)
            setQuery('')
            setSelectedIndex(0)
        }
    }, [isOpen])

    // Reset selected index when query changes
    useEffect(() => {
        setSelectedIndex(0)
    }, [query])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Panel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-xl bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Search Input */}
                        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
                            <Search className="w-5 h-5 text-white/30" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search pages, actions, tools..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="flex-1 bg-transparent text-white placeholder-white/30 focus:outline-none text-lg"
                            />
                            <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white/40">
                                esc
                            </kbd>
                        </div>

                        {/* Results */}
                        <div className="max-h-[60vh] overflow-y-auto p-2">
                            {Object.entries(groupedCommands).map(([category, commands]) => (
                                <div key={category} className="mb-4">
                                    <div className="px-3 py-2 text-xs font-medium text-white/30 uppercase tracking-wider">
                                        {category}
                                    </div>
                                    {commands.map((cmd) => {
                                        const globalIndex = flatList.findIndex(c => c.id === cmd.id)
                                        const isSelected = globalIndex === selectedIndex

                                        return (
                                            <motion.button
                                                key={cmd.id}
                                                onClick={cmd.action}
                                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${isSelected
                                                        ? 'bg-[var(--color-gold)]/10 text-white'
                                                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                                                    }`}
                                                onMouseEnter={() => setSelectedIndex(globalIndex)}
                                            >
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? 'bg-[var(--color-gold)]/20 text-[var(--color-gold)]' : 'bg-white/5'
                                                    }`}>
                                                    {cmd.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium">{cmd.label}</p>
                                                    {cmd.description && (
                                                        <p className="text-xs text-white/40">{cmd.description}</p>
                                                    )}
                                                </div>
                                                <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-[var(--color-gold)]' : 'text-white/20'}`} />
                                            </motion.button>
                                        )
                                    })}
                                </div>
                            ))}

                            {filteredCommands.length === 0 && (
                                <div className="flex flex-col items-center justify-center py-12 text-white/40">
                                    <Search className="w-8 h-8 mb-3" />
                                    <p className="text-sm">No results found for "{query}"</p>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between px-4 py-3 border-t border-white/10 bg-white/[0.02]">
                            <div className="flex items-center gap-4 text-xs text-white/30">
                                <span className="flex items-center gap-1">
                                    <kbd className="px-1.5 py-0.5 bg-white/5 rounded">↑</kbd>
                                    <kbd className="px-1.5 py-0.5 bg-white/5 rounded">↓</kbd>
                                    to navigate
                                </span>
                                <span className="flex items-center gap-1">
                                    <kbd className="px-1.5 py-0.5 bg-white/5 rounded">↵</kbd>
                                    to select
                                </span>
                            </div>
                            <span className="text-xs text-white/30">
                                {filteredCommands.length} result{filteredCommands.length !== 1 ? 's' : ''}
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
