import { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

interface LeadProfile {
    score: number
    pagesVisited: string[]
    timeOnSite: number
    interests: string[]
    engagementLevel: 'cold' | 'warm' | 'hot'
    lastVisit: Date
    sessionCount: number
    actions: string[]
}

interface LeadScoringConfig {
    highIntentPages: string[]
    mediumIntentPages: string[]
    timeThresholds: {
        warm: number // seconds
        hot: number  // seconds
    }
}

const defaultConfig: LeadScoringConfig = {
    highIntentPages: ['/contact', '/platform-demo', '/assessment', '/roi-calculator-v2'],
    mediumIntentPages: ['/solutions/mainframe', '/solutions/contact-center', '/platform', '/case-studies'],
    timeThresholds: {
        warm: 120,  // 2 minutes
        hot: 300    // 5 minutes
    }
}

const STORAGE_KEY = 'zerofoundry-lead-profile'

function getStoredProfile(): LeadProfile | null {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
            const profile = JSON.parse(stored)
            return {
                ...profile,
                lastVisit: new Date(profile.lastVisit)
            }
        }
    } catch {
        // Ignore parsing errors
    }
    return null
}

function saveProfile(profile: LeadProfile): void {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
    } catch {
        // Ignore storage errors
    }
}

function calculateScore(profile: LeadProfile, config: LeadScoringConfig): number {
    let score = 0

    // Page visits scoring
    profile.pagesVisited.forEach(page => {
        if (config.highIntentPages.some(p => page.includes(p))) {
            score += 25  // High intent pages
        } else if (config.mediumIntentPages.some(p => page.includes(p))) {
            score += 15  // Medium intent pages
        } else {
            score += 5   // Any other page
        }
    })

    // Time on site scoring
    if (profile.timeOnSite >= config.timeThresholds.hot) {
        score += 30
    } else if (profile.timeOnSite >= config.timeThresholds.warm) {
        score += 15
    }

    // Session count scoring
    if (profile.sessionCount >= 3) {
        score += 20
    } else if (profile.sessionCount >= 2) {
        score += 10
    }

    // Action scoring
    profile.actions.forEach(action => {
        if (action.includes('submit') || action.includes('book')) {
            score += 30
        } else if (action.includes('demo') || action.includes('download')) {
            score += 20
        } else if (action.includes('chat') || action.includes('click')) {
            score += 5
        }
    })

    return Math.min(score, 100) // Cap at 100
}

function determineEngagementLevel(score: number): 'cold' | 'warm' | 'hot' {
    if (score >= 60) return 'hot'
    if (score >= 30) return 'warm'
    return 'cold'
}

export function useLeadScoring(config: LeadScoringConfig = defaultConfig) {
    const location = useLocation()
    const [profile, setProfile] = useState<LeadProfile>(() => {
        const stored = getStoredProfile()
        if (stored) {
            // Returning visitor
            return {
                ...stored,
                sessionCount: stored.sessionCount + 1,
                lastVisit: new Date()
            }
        }
        // New visitor
        return {
            score: 0,
            pagesVisited: [],
            timeOnSite: 0,
            interests: [],
            engagementLevel: 'cold',
            lastVisit: new Date(),
            sessionCount: 1,
            actions: []
        }
    })

    // Track page visits
    useEffect(() => {
        const currentPath = location.pathname
        setProfile(prev => {
            if (prev.pagesVisited.includes(currentPath)) {
                return prev
            }
            const updated = {
                ...prev,
                pagesVisited: [...prev.pagesVisited, currentPath]
            }
            const score = calculateScore(updated, config)
            const engagementLevel = determineEngagementLevel(score)
            return { ...updated, score, engagementLevel }
        })
    }, [location.pathname, config])

    // Track time on site
    useEffect(() => {
        const interval = setInterval(() => {
            setProfile(prev => {
                const updated = {
                    ...prev,
                    timeOnSite: prev.timeOnSite + 10
                }
                const score = calculateScore(updated, config)
                const engagementLevel = determineEngagementLevel(score)
                return { ...updated, score, engagementLevel }
            })
        }, 10000) // Update every 10 seconds

        return () => clearInterval(interval)
    }, [config])

    // Save profile on changes
    useEffect(() => {
        saveProfile(profile)
    }, [profile])

    // Track custom actions
    const trackAction = useCallback((action: string) => {
        setProfile(prev => {
            const updated = {
                ...prev,
                actions: [...prev.actions, action]
            }
            const score = calculateScore(updated, config)
            const engagementLevel = determineEngagementLevel(score)
            return { ...updated, score, engagementLevel }
        })
    }, [config])

    // Track interests
    const trackInterest = useCallback((interest: string) => {
        setProfile(prev => {
            if (prev.interests.includes(interest)) {
                return prev
            }
            return {
                ...prev,
                interests: [...prev.interests, interest]
            }
        })
    }, [])

    // Get personalized content recommendations
    const getRecommendations = useCallback(() => {
        const recommendations: string[] = []

        // Based on interests
        if (profile.interests.includes('mainframe')) {
            recommendations.push('/solutions/mainframe')
            recommendations.push('/roi-calculator-v2')
        }
        if (profile.interests.includes('contact-center')) {
            recommendations.push('/solutions/contact-center')
            recommendations.push('/platform-demo')
        }

        // Based on engagement level
        if (profile.engagementLevel === 'hot') {
            recommendations.push('/contact')
            recommendations.push('/platform-demo')
        } else if (profile.engagementLevel === 'warm') {
            recommendations.push('/case-studies')
            recommendations.push('/whitepapers')
        }

        // Filter out already visited pages
        return recommendations.filter(r => !profile.pagesVisited.includes(r))
    }, [profile])

    // Get personalized CTA
    const getPersonalizedCTA = useCallback(() => {
        if (profile.engagementLevel === 'hot') {
            return {
                text: 'Schedule Your Demo',
                href: '/platform-demo',
                variant: 'primary' as const
            }
        }
        if (profile.engagementLevel === 'warm') {
            return {
                text: 'Explore Solutions',
                href: '#solution',
                variant: 'secondary' as const
            }
        }
        return {
            text: 'Learn More',
            href: '/about',
            variant: 'ghost' as const
        }
    }, [profile.engagementLevel])

    return {
        profile,
        trackAction,
        trackInterest,
        getRecommendations,
        getPersonalizedCTA,
        isHotLead: profile.engagementLevel === 'hot',
        isWarmLead: profile.engagementLevel === 'warm'
    }
}

export default useLeadScoring
