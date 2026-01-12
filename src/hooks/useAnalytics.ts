import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// ==================== PAGE VIEW TRACKER ====================
export function usePageView() {
    const location = useLocation()

    useEffect(() => {
        // Google Analytics 4
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
                page_path: location.pathname + location.search,
            })
        }

        // Placeholder for other analytics services
        console.log('[Analytics] Page view:', location.pathname)
    }, [location])
}

// ==================== EVENT TRACKER ====================
interface TrackEventParams {
    action: string
    category: string
    label?: string
    value?: number
}

export function trackEvent({ action, category, label, value }: TrackEventParams) {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }

    // Debug logging
    console.log('[Analytics] Event:', { action, category, label, value })
}

// ==================== CONVERSION TRACKING ====================
export function trackConversion(conversionId: string, metadata?: Record<string, any>) {
    // Google Analytics 4 conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
            send_to: conversionId,
            ...metadata,
        })
    }

    console.log('[Analytics] Conversion:', conversionId, metadata)
}

// ==================== LEAD CAPTURE TRACKING ====================
export function trackLeadCapture(source: string, formName: string) {
    trackEvent({
        action: 'lead_capture',
        category: 'engagement',
        label: `${source}:${formName}`,
    })

    trackConversion('AW-CONVERSION_ID/CONVERSION_LABEL', {
        source,
        formName,
    })
}

// ==================== CTA CLICK TRACKING ====================
export function trackCTAClick(ctaName: string, destination: string) {
    trackEvent({
        action: 'cta_click',
        category: 'engagement',
        label: `${ctaName}:${destination}`,
    })
}

// ==================== SCROLL DEPTH TRACKING ====================
export function useScrollDepth() {
    useEffect(() => {
        const milestones = [25, 50, 75, 90]
        const reached = new Set<number>()

        const handleScroll = () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            )

            for (const milestone of milestones) {
                if (scrollPercent >= milestone && !reached.has(milestone)) {
                    reached.add(milestone)
                    trackEvent({
                        action: 'scroll_depth',
                        category: 'engagement',
                        label: `${milestone}%`,
                        value: milestone,
                    })
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
}

// ==================== TIME ON PAGE TRACKING ====================
export function useTimeOnPage() {
    const location = useLocation()

    useEffect(() => {
        const startTime = Date.now()

        return () => {
            const duration = Math.round((Date.now() - startTime) / 1000)
            if (duration > 5) {
                trackEvent({
                    action: 'time_on_page',
                    category: 'engagement',
                    label: location.pathname,
                    value: duration,
                })
            }
        }
    }, [location.pathname])
}

// ==================== FEATURE FLAGS ====================
interface FeatureFlags {
    [key: string]: boolean
}

const defaultFlags: FeatureFlags = {
    showAIChat: true,
    showExitIntent: true,
    enablePlatformDemo: true,
    enableROIExport: true,
    enableVideoTestimonials: true,
}

export function useFeatureFlag(flagName: string): boolean {
    // In production, this would fetch from a feature flag service
    // For now, return from defaults or localStorage override
    if (typeof window !== 'undefined') {
        const override = localStorage.getItem(`ff_${flagName}`)
        if (override !== null) {
            return override === 'true'
        }
    }
    return defaultFlags[flagName] ?? false
}

export function setFeatureFlag(flagName: string, value: boolean): void {
    if (typeof window !== 'undefined') {
        localStorage.setItem(`ff_${flagName}`, String(value))
    }
}

// ==================== A/B TESTING HOOKS ====================
interface ExperimentVariant {
    id: string
    weight: number
}

export function useExperiment(experimentName: string, variants: ExperimentVariant[]): string {
    // Check for stored variant
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(`exp_${experimentName}`)
        if (stored && variants.some(v => v.id === stored)) {
            return stored
        }

        // Assign variant based on weights
        const totalWeight = variants.reduce((sum, v) => sum + v.weight, 0)
        const random = Math.random() * totalWeight
        let cumulative = 0

        for (const variant of variants) {
            cumulative += variant.weight
            if (random < cumulative) {
                localStorage.setItem(`exp_${experimentName}`, variant.id)
                trackEvent({
                    action: 'experiment_assigned',
                    category: 'ab_testing',
                    label: `${experimentName}:${variant.id}`,
                })
                return variant.id
            }
        }
    }

    return variants[0]?.id || 'control'
}
