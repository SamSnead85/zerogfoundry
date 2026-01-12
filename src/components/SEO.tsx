import { useEffect } from 'react'

interface SEOProps {
    title?: string
    description?: string
    canonical?: string
    keywords?: string[]
    ogImage?: string
    ogType?: 'website' | 'article'
    article?: {
        publishedTime?: string
        modifiedTime?: string
        author?: string
        section?: string
        tags?: string[]
    }
    noindex?: boolean
}

const SITE_NAME = 'Zero G Foundry'
const DEFAULT_DESCRIPTION = 'Elite AI transformation consultancy delivering guaranteed outcomes for enterprise clients in healthcare and financial services.'
const SITE_URL = 'https://zerogfoundry.com'

export default function SEO({
    title,
    description = DEFAULT_DESCRIPTION,
    canonical,
    keywords = [],
    noindex = false,
}: SEOProps) {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined

    const defaultKeywords = [
        'AI transformation',
        'enterprise AI',
        'AI consulting',
        'healthcare AI',
        'financial services AI',
        'RLHF',
        'production AI',
        'AI implementation',
    ]

    const allKeywords = [...new Set([...defaultKeywords, ...keywords])]

    useEffect(() => {
        // Update document title
        document.title = fullTitle

        // Helper to update or create meta tag
        const setMeta = (name: string, content: string, property = false) => {
            const attr = property ? 'property' : 'name'
            let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement
            if (!meta) {
                meta = document.createElement('meta')
                meta.setAttribute(attr, name)
                document.head.appendChild(meta)
            }
            meta.content = content
        }

        // Basic meta tags
        setMeta('description', description)
        setMeta('keywords', allKeywords.join(', '))
        if (noindex) setMeta('robots', 'noindex, nofollow')

        // Open Graph
        setMeta('og:site_name', SITE_NAME, true)
        setMeta('og:title', fullTitle, true)
        setMeta('og:description', description, true)
        setMeta('og:type', 'website', true)

        // Twitter Card
        setMeta('twitter:card', 'summary_large_image')
        setMeta('twitter:title', fullTitle)
        setMeta('twitter:description', description)

        // Canonical link
        if (canonicalUrl) {
            let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
            if (!link) {
                link = document.createElement('link')
                link.rel = 'canonical'
                document.head.appendChild(link)
            }
            link.href = canonicalUrl
        }
    }, [fullTitle, description, allKeywords, noindex, canonicalUrl])

    return null
}

// JSON-LD Structured Data Components

interface OrganizationSchemaProps {
    name?: string
    url?: string
    logo?: string
    description?: string
}

export function OrganizationSchema({
    name = SITE_NAME,
    url = SITE_URL,
    logo = `${SITE_URL}/logo.png`,
    description = DEFAULT_DESCRIPTION,
}: OrganizationSchemaProps) {
    useEffect(() => {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name,
            url,
            logo,
            description,
            sameAs: [
                'https://linkedin.com/company/zerogfoundry',
                'https://twitter.com/zerogfoundry',
            ],
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-555-123-4567',
                contactType: 'sales',
                email: 'contact@zerogfoundry.com',
            },
        }

        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.text = JSON.stringify(schema)
        script.id = 'org-schema'
        document.head.appendChild(script)

        return () => {
            const existing = document.getElementById('org-schema')
            if (existing) existing.remove()
        }
    }, [name, url, logo, description])

    return null
}

interface BreadcrumbSchemaProps {
    items: { name: string; url: string }[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    useEffect(() => {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: items.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: `${SITE_URL}${item.url}`,
            })),
        }

        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.text = JSON.stringify(schema)
        script.id = 'breadcrumb-schema'
        document.head.appendChild(script)

        return () => {
            const existing = document.getElementById('breadcrumb-schema')
            if (existing) existing.remove()
        }
    }, [items])

    return null
}

interface FAQSchemaProps {
    faqs: { question: string; answer: string }[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
    useEffect(() => {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            })),
        }

        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.text = JSON.stringify(schema)
        script.id = 'faq-schema'
        document.head.appendChild(script)

        return () => {
            const existing = document.getElementById('faq-schema')
            if (existing) existing.remove()
        }
    }, [faqs])

    return null
}

