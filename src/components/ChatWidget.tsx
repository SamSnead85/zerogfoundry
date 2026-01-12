import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, Minimize2 } from 'lucide-react'

interface Message {
    id: string
    content: string
    sender: 'user' | 'bot'
    timestamp: Date
}

const initialMessages: Message[] = [
    {
        id: '1',
        content: "Hello! I'm the Zero G Foundry AI assistant. How can I help you learn about our AI transformation services today?",
        sender: 'bot',
        timestamp: new Date(),
    },
]

const quickReplies = [
    'Tell me about your services',
    'How does AI implementation work?',
    'Request a consultation',
    'View case studies',
]

const botResponses: Record<string, string> = {
    services: "We offer enterprise AI transformation services including: **AI Strategy & Assessment**, **Production AI Implementation**, **AI Governance & Ethics**, and **Executive Training**. Would you like to learn more about any specific service?",
    implementation: "Our AI implementation follows a proven 4-phase approach: 1) **Assessment** - Understanding your needs and opportunities, 2) **Design** - Architecting the right solution, 3) **Deployment** - Production-grade implementation, 4) **Optimization** - Continuous improvement. Each phase includes checkpoints and performance guarantees.",
    consultation: "I'd be happy to help schedule a consultation! You can use our **contact form** to request a meeting, or I can provide our direct scheduling link. Would you prefer to speak with our strategy team or technical leadership?",
    'case studies': "We have several case studies across industries: **Healthcare** (95% accuracy in claims processing), **Financial Services** (60% reduction in document review time), and **Manufacturing** (40% efficiency improvement). Visit our Case Studies page for detailed results.",
    default: "Thank you for your question! For the most accurate and detailed response, I recommend speaking with one of our AI specialists. Would you like me to help schedule a consultation?",
}

function getBotResponse(message: string): string {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('do you do')) {
        return botResponses.services
    }
    if (lowerMessage.includes('implement') || lowerMessage.includes('work') || lowerMessage.includes('process')) {
        return botResponses.implementation
    }
    if (lowerMessage.includes('consult') || lowerMessage.includes('meeting') || lowerMessage.includes('talk') || lowerMessage.includes('schedule')) {
        return botResponses.consultation
    }
    if (lowerMessage.includes('case') || lowerMessage.includes('example') || lowerMessage.includes('result')) {
        return botResponses['case studies']
    }

    return botResponses.default
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)
    const [messages, setMessages] = useState<Message[]>(initialMessages)
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

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

        // Simulate bot typing delay
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))

        const botResponse: Message = {
            id: (Date.now() + 1).toString(),
            content: getBotResponse(input),
            sender: 'bot',
            timestamp: new Date(),
        }

        setIsTyping(false)
        setMessages(prev => [...prev, botResponse])
    }

    const handleQuickReply = (reply: string) => {
        setInput(reply)
        setTimeout(() => handleSend(), 100)
    }

    return (
        <>
            {/* Chat Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[var(--color-accent)] text-white shadow-lg hover:scale-110 transition-transform z-40 flex items-center justify-center"
                        aria-label="Open chat"
                    >
                        <MessageCircle className="w-6 h-6" />
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
                            height: isMinimized ? 'auto' : 500
                        }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-6 right-6 w-96 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl shadow-2xl z-40 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)] bg-[var(--color-card-elevated)]">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-[var(--color-accent)]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">AI Assistant</p>
                                    <p className="text-xs text-[var(--color-success)]">● Online</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="w-8 h-8 rounded-lg hover:bg-[var(--color-background)] flex items-center justify-center text-[var(--color-muted)] hover:text-white transition-colors"
                                    aria-label={isMinimized ? 'Expand' : 'Minimize'}
                                >
                                    <Minimize2 className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-8 h-8 rounded-lg hover:bg-[var(--color-background)] flex items-center justify-center text-[var(--color-muted)] hover:text-white transition-colors"
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
                                        <div
                                            key={message.id}
                                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-[80%] p-3 rounded-2xl ${message.sender === 'user'
                                                    ? 'bg-[var(--color-accent)] text-white rounded-br-md'
                                                    : 'bg-[var(--color-background)] text-[var(--color-foreground)] rounded-bl-md'
                                                    }`}
                                            >
                                                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                            </div>
                                        </div>
                                    ))}

                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <div className="bg-[var(--color-background)] p-3 rounded-2xl rounded-bl-md">
                                                <div className="flex gap-1">
                                                    <span className="w-2 h-2 bg-[var(--color-muted)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                                    <span className="w-2 h-2 bg-[var(--color-muted)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                                    <span className="w-2 h-2 bg-[var(--color-muted)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Quick Replies */}
                                {messages.length === 1 && (
                                    <div className="px-4 pb-2">
                                        <div className="flex flex-wrap gap-2">
                                            {quickReplies.map((reply) => (
                                                <button
                                                    key={reply}
                                                    onClick={() => handleQuickReply(reply)}
                                                    className="px-3 py-1.5 text-xs bg-[var(--color-background)] border border-[var(--color-border)] rounded-full text-[var(--color-muted)] hover:text-white hover:border-[var(--color-accent)] transition-colors"
                                                >
                                                    {reply}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Input */}
                                <div className="p-4 border-t border-[var(--color-border)]">
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault()
                                            handleSend()
                                        }}
                                        className="flex gap-2"
                                    >
                                        <input
                                            type="text"
                                            placeholder="Type your message..."
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            className="flex-1 px-4 py-2 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-accent)]"
                                        />
                                        <button
                                            type="submit"
                                            disabled={!input.trim()}
                                            className="w-10 h-10 rounded-xl bg-[var(--color-accent)] text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50"
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
