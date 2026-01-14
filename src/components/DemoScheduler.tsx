import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Check, X, ChevronLeft, ChevronRight, Video, Users, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'

interface TimeSlot {
    time: string
    available: boolean
}

interface DemoType {
    id: string
    title: string
    description: string
    duration: string
    icon: React.ReactNode
}

const demoTypes: DemoType[] = [
    {
        id: 'platform',
        title: 'Platform Overview',
        description: 'See both solutions and the Agentic Engine in action',
        duration: '30 min',
        icon: <Building2 className="w-5 h-5" />
    },
    {
        id: 'mainframe',
        title: 'Mainframe Modernization',
        description: 'Deep-dive into legacy transformation capabilities',
        duration: '45 min',
        icon: <Video className="w-5 h-5" />
    },
    {
        id: 'contact-center',
        title: 'AI Contact Center',
        description: 'Experience accent neutralization and AI copilots live',
        duration: '30 min',
        icon: <Users className="w-5 h-5" />
    }
]

// Generate mock time slots for the next 14 days
function generateTimeSlots(): Record<string, TimeSlot[]> {
    const slots: Record<string, TimeSlot[]> = {}
    const today = new Date()

    for (let i = 1; i <= 14; i++) {
        const date = new Date(today)
        date.setDate(today.getDate() + i)
        const dateKey = date.toISOString().split('T')[0]

        // Skip weekends
        if (date.getDay() === 0 || date.getDay() === 6) continue

        slots[dateKey] = [
            { time: '9:00 AM', available: Math.random() > 0.3 },
            { time: '10:30 AM', available: Math.random() > 0.3 },
            { time: '1:00 PM', available: Math.random() > 0.3 },
            { time: '2:30 PM', available: Math.random() > 0.3 },
            { time: '4:00 PM', available: Math.random() > 0.4 },
        ]
    }

    return slots
}

interface DemoSchedulerProps {
    isOpen: boolean
    onClose: () => void
    defaultDemoType?: string
}

export default function DemoScheduler({ isOpen, onClose, defaultDemoType = 'platform' }: DemoSchedulerProps) {
    const [step, setStep] = useState<'type' | 'date' | 'time' | 'details' | 'confirmed'>('type')
    const [selectedType, setSelectedType] = useState<string>(defaultDemoType)
    const [selectedDate, setSelectedDate] = useState<string>('')
    const [selectedTime, setSelectedTime] = useState<string>('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        notes: ''
    })
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [timeSlots] = useState(generateTimeSlots)

    const handleSubmit = () => {
        // In production, this would send to your booking API
        console.log('Booking submitted:', {
            type: selectedType,
            date: selectedDate,
            time: selectedTime,
            ...formData
        })
        setStep('confirmed')
    }

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const days: Date[] = []

        // Add padding for start of week
        const startPadding = firstDay.getDay()
        for (let i = startPadding; i > 0; i--) {
            const d = new Date(year, month, 1 - i)
            days.push(d)
        }

        // Add days of month
        for (let i = 1; i <= lastDay.getDate(); i++) {
            days.push(new Date(year, month, i))
        }

        return days
    }

    const isDateAvailable = (date: Date) => {
        const dateKey = date.toISOString().split('T')[0]
        const slots = timeSlots[dateKey]
        return slots && slots.some(s => s.available)
    }

    const isToday = (date: Date) => {
        const today = new Date()
        return date.toDateString() === today.toDateString()
    }

    const isPast = (date: Date) => {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        return date < today
    }

    const isCurrentMonth = (date: Date) => {
        return date.getMonth() === currentMonth.getMonth()
    }

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        })
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-[var(--color-gold)]/5 to-[var(--color-aurora-teal)]/5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center">
                                    <Calendar className="w-5 h-5 text-[var(--color-gold)]" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-white">Schedule Your Demo</h2>
                                    <p className="text-sm text-white/50">
                                        {step === 'type' && 'Choose your demo type'}
                                        {step === 'date' && 'Select a date'}
                                        {step === 'time' && 'Pick a time slot'}
                                        {step === 'details' && 'Enter your details'}
                                        {step === 'confirmed' && 'You\'re all set!'}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Progress Steps */}
                        {step !== 'confirmed' && (
                            <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5">
                                {['type', 'date', 'time', 'details'].map((s, idx) => (
                                    <div key={s} className="flex items-center gap-2">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${step === s ? 'bg-[var(--color-gold)] text-[#050505]' :
                                                ['date', 'time', 'details'].indexOf(step) > idx ? 'bg-[var(--color-success)] text-[#050505]' :
                                                    'bg-white/10 text-white/50'
                                            }`}>
                                            {['date', 'time', 'details'].indexOf(step) > idx ? <Check className="w-3 h-3" /> : idx + 1}
                                        </div>
                                        {idx < 3 && <div className="w-8 h-px bg-white/10" />}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Content */}
                        <div className="p-6">
                            {/* Step 1: Demo Type */}
                            {step === 'type' && (
                                <div className="space-y-3">
                                    {demoTypes.map((demo) => (
                                        <button
                                            key={demo.id}
                                            onClick={() => {
                                                setSelectedType(demo.id)
                                                setStep('date')
                                            }}
                                            className={`w-full p-4 rounded-xl border text-left transition-all ${selectedType === demo.id
                                                    ? 'border-[var(--color-gold)]/50 bg-[var(--color-gold)]/5'
                                                    : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                                                }`}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${selectedType === demo.id
                                                        ? 'bg-[var(--color-gold)]/20 text-[var(--color-gold)]'
                                                        : 'bg-white/5 text-white/50'
                                                    }`}>
                                                    {demo.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="font-medium text-white">{demo.title}</h3>
                                                        <span className="text-xs text-white/40 flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {demo.duration}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-white/60 mt-1">{demo.description}</p>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Step 2: Date Selection */}
                            {step === 'date' && (
                                <div>
                                    {/* Month Navigation */}
                                    <div className="flex items-center justify-between mb-4">
                                        <button
                                            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                                            className="p-2 hover:bg-white/5 rounded-lg text-white/50 hover:text-white transition-colors"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <h3 className="font-medium text-white">
                                            {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                        </h3>
                                        <button
                                            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                                            className="p-2 hover:bg-white/5 rounded-lg text-white/50 hover:text-white transition-colors"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {/* Weekday Headers */}
                                    <div className="grid grid-cols-7 gap-1 mb-2">
                                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                            <div key={day} className="text-center text-xs text-white/40 py-2">
                                                {day}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Calendar Grid */}
                                    <div className="grid grid-cols-7 gap-1">
                                        {getDaysInMonth(currentMonth).map((date, idx) => {
                                            const dateKey = date.toISOString().split('T')[0]
                                            const available = isDateAvailable(date)
                                            const past = isPast(date)
                                            const current = isCurrentMonth(date)
                                            const today = isToday(date)
                                            const selected = selectedDate === dateKey

                                            return (
                                                <button
                                                    key={idx}
                                                    onClick={() => {
                                                        if (available && !past && current) {
                                                            setSelectedDate(dateKey)
                                                            setStep('time')
                                                        }
                                                    }}
                                                    disabled={!available || past || !current}
                                                    className={`aspect-square rounded-lg flex items-center justify-center text-sm transition-all ${selected ? 'bg-[var(--color-gold)] text-[#050505] font-medium' :
                                                            !current ? 'text-white/20' :
                                                                past ? 'text-white/20 cursor-not-allowed' :
                                                                    !available ? 'text-white/30 cursor-not-allowed' :
                                                                        today ? 'bg-white/10 text-white hover:bg-white/20' :
                                                                            'text-white hover:bg-white/10'
                                                        }`}
                                                >
                                                    {date.getDate()}
                                                </button>
                                            )
                                        })}
                                    </div>

                                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
                                        <button
                                            onClick={() => setStep('type')}
                                            className="text-sm text-white/50 hover:text-white flex items-center gap-1"
                                        >
                                            <ChevronLeft className="w-4 h-4" /> Back
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Time Selection */}
                            {step === 'time' && (
                                <div>
                                    <p className="text-sm text-white/60 mb-4">
                                        Available times for <span className="text-white">{formatDate(selectedDate)}</span>
                                    </p>

                                    <div className="grid grid-cols-2 gap-2">
                                        {timeSlots[selectedDate]?.map((slot) => (
                                            <button
                                                key={slot.time}
                                                onClick={() => {
                                                    if (slot.available) {
                                                        setSelectedTime(slot.time)
                                                        setStep('details')
                                                    }
                                                }}
                                                disabled={!slot.available}
                                                className={`p-3 rounded-xl border text-center transition-all ${selectedTime === slot.time
                                                        ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/10 text-white'
                                                        : slot.available
                                                            ? 'border-white/10 hover:border-white/20 hover:bg-white/5 text-white'
                                                            : 'border-white/5 text-white/30 cursor-not-allowed line-through'
                                                    }`}
                                            >
                                                <Clock className="w-4 h-4 mx-auto mb-1 opacity-50" />
                                                <span className="text-sm">{slot.time}</span>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
                                        <button
                                            onClick={() => setStep('date')}
                                            className="text-sm text-white/50 hover:text-white flex items-center gap-1"
                                        >
                                            <ChevronLeft className="w-4 h-4" /> Back
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Contact Details */}
                            {step === 'details' && (
                                <div>
                                    <div className="p-4 rounded-xl bg-[var(--color-gold)]/5 border border-[var(--color-gold)]/20 mb-6">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-5 h-5 text-[var(--color-gold)]" />
                                            <div>
                                                <p className="text-white font-medium">{formatDate(selectedDate)}</p>
                                                <p className="text-sm text-white/60">{selectedTime} • {demoTypes.find(d => d.id === selectedType)?.title}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                placeholder="Full Name *"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-gold)]/50"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Work Email *"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-gold)]/50"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                placeholder="Company *"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-gold)]/50"
                                            />
                                            <input
                                                type="tel"
                                                placeholder="Phone (optional)"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-gold)]/50"
                                            />
                                        </div>
                                        <textarea
                                            placeholder="Anything specific you'd like us to cover? (optional)"
                                            value={formData.notes}
                                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                            rows={3}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-gold)]/50 resize-none"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                                        <button
                                            onClick={() => setStep('time')}
                                            className="text-sm text-white/50 hover:text-white flex items-center gap-1"
                                        >
                                            <ChevronLeft className="w-4 h-4" /> Back
                                        </button>
                                        <button
                                            onClick={handleSubmit}
                                            disabled={!formData.name || !formData.email || !formData.company}
                                            className="px-6 py-2.5 bg-[var(--color-gold)] text-[#050505] font-medium rounded-xl hover:opacity-90 transition-opacity disabled:opacity-30 flex items-center gap-2"
                                        >
                                            Confirm Booking
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 5: Confirmation */}
                            {step === 'confirmed' && (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center mx-auto mb-6">
                                        <Check className="w-8 h-8 text-[var(--color-success)]" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">You're All Set!</h3>
                                    <p className="text-white/60 mb-6">
                                        Your demo is scheduled for<br />
                                        <span className="text-white font-medium">{formatDate(selectedDate)} at {selectedTime}</span>
                                    </p>
                                    <p className="text-sm text-white/40 mb-6">
                                        A calendar invite has been sent to {formData.email}
                                    </p>
                                    <div className="flex items-center justify-center gap-3">
                                        <button
                                            onClick={onClose}
                                            className="px-6 py-2.5 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors"
                                        >
                                            Close
                                        </button>
                                        <Link
                                            to="/whitepapers"
                                            onClick={onClose}
                                            className="px-6 py-2.5 bg-[var(--color-gold)] text-[#050505] font-medium rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
                                        >
                                            Explore Resources
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
