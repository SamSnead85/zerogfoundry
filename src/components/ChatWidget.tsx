import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, Minimize2, Sparkles, Calendar, FileText, Phone } from 'lucide-react'
import { useLocation, Link } from 'react-router-dom'

interface Message {
    id: string
    content: string
    sender: 'user' | 'bot'
    timestamp: Date
    actions?: ActionButton[]
}

interface ActionButton {
    label: string
    href?: string
    action?: string
    variant?: 'primary' | 'secondary'
}

interface LeadProfile {
    score: number
    pagesVisited: string[]
    interests: string[]
    engagementLevel: 'cold' | 'warm' | 'hot'
    email?: string
    name?: string
}

// Page context configuration for smart responses
const pageContextMap: Record<string, { topic: string; quickReplies: string[]; greeting: string }> = {
    '/': {
        topic: 'general',
        greeting: "Welcome to Zero Foundry! I can help you explore our AI transformation platform. What brings you here today?",
        quickReplies: ['Mainframe modernization', 'AI Contact Center', 'Schedule a demo', 'View pricing']
    },
    '/solutions/mainframe': {
        topic: 'mainframe',
        greeting: "I see you're exploring our Mainframe Modernization solution. Would you like to learn about our assessment process or see case study results?",
        quickReplies: ['Free assessment', 'Migration timeline', 'Cost savings', 'Technical approach']
    },
    '/solutions/contact-center': {
        topic: 'contact-center',
        greeting: "Welcome to our AI Contact Center solution! I can tell you about accent neutralization, AI copilots, or help you see a demo.",
        quickReplies: ['Accent neutralization demo', 'Pricing tiers', 'Integration options', 'ROI calculator']
    },
    '/platform': {
        topic: 'platform',
        greeting: "You're viewing our unified platform. Want to dive into the Agentic Engine technology or see how it powers both solutions?",
        quickReplies: ['Agentic Engine details', 'Security features', 'API capabilities', 'Enterprise integrations']
    },
    '/platform/agentic-engine': {
        topic: 'engine',
        greeting: "The Agentic Engine is the AI brain powering our platform. What aspect interests you most—the architecture, performance guarantees, or training methodology?",
        quickReplies: ['RLHF training', '95% accuracy guarantee', 'GPU infrastructure', 'Model customization']
    },
    '/pricing': {
        topic: 'pricing',
        greeting: "Ready to discuss pricing? I can explain our tiers or connect you with a sales specialist for a custom quote.",
        quickReplies: ['Starter tier', 'Enterprise pricing', 'Custom quote', 'Compare plans']
    },
    '/case-studies': {
        topic: 'proof',
        greeting: "Our case studies show real enterprise results. Would you like to explore Healthcare, Financial Services, or Manufacturing success stories?",
        quickReplies: ['Healthcare case study', 'Financial services results', 'ROI examples', 'Request similar case']
    },
    '/contact': {
        topic: 'contact',
        greeting: "Ready to talk? I can help you schedule a call or answer quick questions before you submit the form.",
        quickReplies: ['Schedule today', 'Talk to Sales', 'Technical questions', 'Partnership inquiry']
    }
}

// Enhanced response system with context awareness
const contextualResponses: Record<string, Record<string, { content: string; actions?: ActionButton[] }>> = {
    mainframe: {
        'free assessment': {
            content: "Our **Mainframe Assessment** is a comprehensive 4-6 week analysis that identifies modernization opportunities and quantifies ROI. It's delivered as a detailed report with your finance team. Ready to get started?",
            actions: [
                { label: 'Start Assessment', href: '/assessment', variant: 'primary' },
                { label: 'Learn More', href: '/solutions/mainframe', variant: 'secondary' }
            ]
        },
        'migration timeline': {
            content: "Typical timelines:\n• **Assessment**: 4-6 weeks\n• **Pilot Module**: 8-12 weeks\n• **Full Migration**: 6-18 months (depends on codebase size)\n\nWe use AI to accelerate code conversion, achieving 95%+ accuracy.",
            actions: [
                { label: 'Get Custom Timeline', href: '/contact', variant: 'primary' }
            ]
        },
        'cost savings': {
            content: "Our clients typically see:\n• **$8-15M** annual mainframe cost reduction\n• **60-75%** reduction in MIPS consumption\n• **5x ROI** within 24 months\n\nWant to calculate your potential savings?",
            actions: [
                { label: 'ROI Calculator', href: '/roi-calculator-v2', variant: 'primary' },
                { label: 'View Case Studies', href: '/case-studies', variant: 'secondary' }
            ]
        },
        'technical approach': {
            content: "Our approach uses the **Agentic Engine** for AI-powered code analysis:\n\n1. **Semantic Parsing** - Understands COBOL/PL1 business logic\n2. **AI Translation** - Converts to modern cloud-native code\n3. **Validation Suite** - Automated testing with 95%+ accuracy guarantee\n4. **Parallel Running** - Zero-downtime migration",
            actions: [
                { label: 'Technical Deep-Dive', href: '/platform/agentic-engine', variant: 'primary' }
            ]
        }
    },
    'contact-center': {
        'accent neutralization demo': {
            content: "Our **Real-Time Accent Neutralization** transforms speech clarity instantly. The demo on this page shows before/after audio samples. Toggle the switch to hear the difference!",
            actions: [
                { label: 'Try Demo Above', action: 'scroll-to-demo', variant: 'primary' },
                { label: 'Schedule Live Demo', href: '/platform-demo', variant: 'secondary' }
            ]
        },
        'pricing tiers': {
            content: "**AI Contact Center Pricing:**\n\n• **Starter** - $49/agent/mo (AI Copilot, basic analytics)\n• **Professional** - $99/agent/mo (+ Accent Neutralization, omnichannel)\n• **Enterprise** - Custom (full suite, dedicated support, SLA)\n\nVolume discounts available for 100+ seats.",
            actions: [
                { label: 'Get Custom Quote', href: '/contact', variant: 'primary' }
            ]
        },
        'integration options': {
            content: "We integrate with all major platforms:\n\n• **CRM**: Salesforce, HubSpot, Zendesk\n• **Telephony**: Twilio, Five9, Genesys, NICE\n• **CCaaS**: AWS Connect, Talkdesk\n• **Custom**: REST API available\n\nTypical integration takes 2-4 weeks.",
            actions: [
                { label: 'API Documentation', href: '/platform', variant: 'secondary' }
            ]
        },
        'roi calculator': {
            content: "Calculate your contact center ROI based on:\n• Agent count & average handle time\n• Current turnover rate\n• Customer satisfaction targets\n\nMost clients see **30-50%** efficiency gains.",
            actions: [
                { label: 'Calculate ROI', href: '/roi-calculator-v2', variant: 'primary' }
            ]
        }
    },
    general: {
        'mainframe modernization': {
            content: "**Mainframe Modernization** transforms your legacy core systems with AI-powered code conversion, achieving 95%+ accuracy. Perfect for enterprises with DB2/COBOL systems looking to reduce costs and unlock innovation.",
            actions: [
                { label: 'Explore Mainframe', href: '/solutions/mainframe', variant: 'primary' },
                { label: 'Free Assessment', href: '/assessment', variant: 'secondary' }
            ]
        },
        'ai contact center': {
            content: "Our **AI Contact Center** solution includes real-time AI copilots, accent neutralization, and omnichannel intelligence. Turn your contact center into a revenue engine with 95%+ automation accuracy.",
            actions: [
                { label: 'Explore Contact Center', href: '/solutions/contact-center', variant: 'primary' },
                { label: 'See Pricing', href: '/solutions/contact-center#pricing', variant: 'secondary' }
            ]
        },
        'schedule a demo': {
            content: "I'd love to set up a demo for you! Our demos are typically 30-45 minutes and can focus on whichever solution interests you most. What time works best?",
            actions: [
                { label: 'Schedule Now', href: '/platform-demo', variant: 'primary' },
                { label: 'Talk to Sales', href: '/contact', variant: 'secondary' }
            ]
        },
        'view pricing': {
            content: "Our pricing varies by solution:\n\n• **Mainframe**: Project-based (typically $2-15M depending on scope)\n• **Contact Center**: Per-agent monthly ($49-$99+)\n\nBoth include our 95% accuracy guarantee.",
            actions: [
                { label: 'Contact Center Pricing', href: '/solutions/contact-center#pricing', variant: 'primary' },
                { label: 'Get Custom Quote', href: '/contact', variant: 'secondary' }
            ]
        }
    },
    default: {
        fallback: {
            content: "Great question! Let me connect you with the right specialist. Would you prefer to schedule a call or send a detailed question via our contact form?",
            actions: [
                { label: 'Schedule Call', href: '/platform-demo', variant: 'primary' },
                { label: 'Contact Form', href: '/contact', variant: 'secondary' }
            ]
        }
    }
}

// Lead scoring utility
function calculateLeadScore(profile: LeadProfile): LeadProfile {
    let score = profile.score

    // High-intent pages boost score
    const highIntentPages = ['/contact', '/platform-demo', '/pricing', '/assessment']
    profile.pagesVisited.forEach(page => {
        if (highIntentPages.some(p => page.includes(p))) score += 20
    })

    // Solution pages
    if (profile.pagesVisited.some(p => p.includes('/solutions'))) score += 10

    // Multiple page visits
    if (profile.pagesVisited.length >= 3) score += 15

    // Determine engagement level
    let engagementLevel: 'cold' | 'warm' | 'hot' = 'cold'
    if (score >= 50) engagementLevel = 'hot'
    else if (score >= 25) engagementLevel = 'warm'

    return { ...profile, score, engagementLevel }
}

function getBotResponse(message: string, context: string): { content: string; actions?: ActionButton[] } {
    const lowerMessage = message.toLowerCase()

    // Check context-specific responses first
    const contextResponses = contextualResponses[context] || contextualResponses.general

    for (const [key, response] of Object.entries(contextResponses)) {
        if (lowerMessage.includes(key.toLowerCase())) {
            return response
        }
    }

    // Check general responses
    for (const [key, response] of Object.entries(contextualResponses.general)) {
        if (lowerMessage.includes(key.toLowerCase())) {
            return response
        }
    }

    // Fallback
    return contextualResponses.default.fallback
}

export default function ChatWidget() {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [leadProfile, setLeadProfile] = useState<LeadProfile>({
        score: 0,
        pagesVisited: [],
        interests: [],
        engagementLevel: 'cold'
    })
    const [hasGreeted, setHasGreeted] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const [currentContext, setCurrentContext] = useState('general')

    // Track page visits for lead scoring
    useEffect(() => {
        const currentPath = location.pathname
        setLeadProfile(prev => {
            if (!prev.pagesVisited.includes(currentPath)) {
                const updated = { ...prev, pagesVisited: [...prev.pagesVisited, currentPath] }
                return calculateLeadScore(updated)
            }
            return prev
        })

        // Update context
        const pageContext = pageContextMap[currentPath] || pageContextMap['/']
        setCurrentContext(pageContext.topic)
    }, [location.pathname])

    // Generate initial greeting based on page context
    useEffect(() => {
        if (isOpen && !hasGreeted) {
            const pageContext = pageContextMap[location.pathname] || pageContextMap['/']
            const greeting: Message = {
                id: '1',
                content: pageContext.greeting,
                sender: 'bot',
                timestamp: new Date()
            }
            setMessages([greeting])
            setHasGreeted(true)
        }
    }, [isOpen, hasGreeted, location.pathname])

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    useEffect(() => {
        scrollToBottom()
    }, [messages, scrollToBottom])

    const handleSend = async () => {
        if (!input.trim()) return

        const userMessage: Message = {
            id: Date.now().toString(),
            content: input,
            sender: 'user',
            timestamp: new Date(),
        }

        setMessages(prev => [...prev, userMessage])
        setInput('')
        setIsTyping(true)

        // Update lead profile with interest
        setLeadProfile(prev => calculateLeadScore({
            ...prev,
            interests: [...prev.interests, input.toLowerCase()]
        }))

        // Simulate bot typing delay (faster for hot leads)
        const delay = leadProfile.engagementLevel === 'hot' ? 500 : 1000 + Math.random() * 800
        await new Promise(resolve => setTimeout(resolve, delay))

        const response = getBotResponse(input, currentContext)
        const botResponse: Message = {
            id: (Date.now() + 1).toString(),
            content: response.content,
            sender: 'bot',
            timestamp: new Date(),
            actions: response.actions
        }

        setIsTyping(false)
        setMessages(prev => [...prev, botResponse])
    }

    const handleQuickReply = (reply: string) => {
        setInput(reply)
        setTimeout(() => handleSend(), 50)
    }

    const handleAction = (action: ActionButton) => {
        if (action.action === 'scroll-to-demo') {
            // Scroll to demo section on page
            const demoSection = document.getElementById('contact-center-demo')
            demoSection?.scrollIntoView({ behavior: 'smooth' })
            setIsOpen(false)
        }
    }

    // Get context-appropriate quick replies
    const getQuickReplies = () => {
        const pageContext = pageContextMap[location.pathname] || pageContextMap['/']
        return pageContext.quickReplies
    }

    return (
        <>
            {/* Chat Button with pulse for hot leads */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-aurora-teal)] text-[#050505] shadow-lg hover:scale-110 transition-transform z-40 flex items-center justify-center"
                        aria-label="Open chat"
                    >
                        <MessageCircle className="w-6 h-6" />
                        {/* Notification dot for engaged visitors */}
                        {leadProfile.pagesVisited.length >= 2 && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--color-error)] rounded-full flex items-center justify-center">
                                <Sparkles className="w-2.5 h-2.5 text-white" />
                            </span>
                        )}
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            height: isMinimized ? 'auto' : 520
                        }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-3rem)] bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-40 overflow-hidden flex flex-col"
                    >
                        {/* Header with gradient */}
                        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-[var(--color-gold)]/5 to-[var(--color-aurora-teal)]/5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-gold)]/20 to-[var(--color-aurora-teal)]/20 flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-[var(--color-gold)]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Zero Foundry AI</p>
                                    <p className="text-xs text-[var(--color-success)] flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)]" />
                                        Online now
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                                    aria-label={isMinimized ? 'Expand' : 'Minimize'}
                                >
                                    <Minimize2 className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                                    aria-label="Close chat"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {!isMinimized && (
                            <>
                                {/* Messages */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                    {messages.map((message) => (
                                        <motion.div
                                            key={message.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className="max-w-[85%]">
                                                <div
                                                    className={`p-3 rounded-2xl ${message.sender === 'user'
                                                        ? 'bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] text-[#050505] rounded-br-md'
                                                        : 'bg-white/5 text-white/90 rounded-bl-md border border-white/5'
                                                        }`}
                                                >
                                                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                                                </div>

                                                {/* Action buttons */}
                                                {message.actions && message.actions.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        {message.actions.map((action, idx) => (
                                                            action.href ? (
                                                                <Link
                                                                    key={idx}
                                                                    to={action.href}
                                                                    onClick={() => setIsOpen(false)}
                                                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${action.variant === 'primary'
                                                                        ? 'bg-[var(--color-gold)] text-[#050505] hover:opacity-90'
                                                                        : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                                                                        }`}
                                                                >
                                                                    {action.label.includes('Schedule') && <Calendar className="w-3 h-3" />}
                                                                    {action.label.includes('Contact') && <Phone className="w-3 h-3" />}
                                                                    {action.label.includes('Learn') && <FileText className="w-3 h-3" />}
                                                                    {action.label}
                                                                </Link>
                                                            ) : (
                                                                <button
                                                                    key={idx}
                                                                    onClick={() => handleAction(action)}
                                                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${action.variant === 'primary'
                                                                        ? 'bg-[var(--color-gold)] text-[#050505] hover:opacity-90'
                                                                        : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                                                                        }`}
                                                                >
                                                                    {action.label}
                                                                </button>
                                                            )
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}

                                    {isTyping && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="flex justify-start"
                                        >
                                            <div className="bg-white/5 p-3 rounded-2xl rounded-bl-md border border-white/5">
                                                <div className="flex gap-1.5">
                                                    <span className="w-2 h-2 bg-[var(--color-gold)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                                    <span className="w-2 h-2 bg-[var(--color-gold)] rounded-full animate-bounce" style={{ animationDelay: '100ms' }} />
                                                    <span className="w-2 h-2 bg-[var(--color-gold)] rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Quick Replies */}
                                {messages.length <= 2 && (
                                    <div className="px-4 pb-3">
                                        <div className="flex flex-wrap gap-2">
                                            {getQuickReplies().map((reply) => (
                                                <button
                                                    key={reply}
                                                    onClick={() => handleQuickReply(reply)}
                                                    className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/10 hover:border-[var(--color-gold)]/30 transition-all"
                                                >
                                                    {reply}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Input */}
                                <div className="p-4 border-t border-white/10 bg-white/[0.02]">
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault()
                                            handleSend()
                                        }}
                                        className="flex gap-2"
                                    >
                                        <input
                                            type="text"
                                            placeholder="Ask about our solutions..."
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-gold)]/50 transition-colors text-sm"
                                        />
                                        <button
                                            type="submit"
                                            disabled={!input.trim()}
                                            className="w-10 h-10 rounded-xl bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] text-[#050505] flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-30"
                                            aria-label="Send message"
                                        >
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </form>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
