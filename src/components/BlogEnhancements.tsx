import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookmarkPlus, Bookmark, List, Share2, Twitter, Linkedin, Mail, Link2, Check, Clock, Eye, ChevronUp, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

// ============================================
// ARTICLE READING PROGRESS (Phase 211)
// ============================================
export function ArticleReadingProgress() {
    const [progress, setProgress] = useState(0)
    const [readingTime, setReadingTime] = useState(0)

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
        setProgress(Math.min(100, Math.max(0, scrollPercent)))
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        // Estimate reading time (200 words per minute)
        const articleContent = document.querySelector('article')
        if (articleContent) {
            const wordCount = articleContent.textContent?.split(/\s+/).length || 0
            setReadingTime(Math.ceil(wordCount / 200))
        }

        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return (
        <div className="fixed top-[72px] left-0 right-0 z-50 bg-[var(--color-background)]/90 backdrop-blur-sm border-b border-[var(--color-border)]">
            <div className="container flex items-center justify-between py-2">
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-[var(--color-muted)]">
                        <Clock className="w-4 h-4" />
                        <span>{readingTime} min read</span>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--color-muted)]">
                        <Eye className="w-4 h-4" />
                        <span>{Math.round(progress)}% read</span>
                    </div>
                </div>
                <div className="w-32 h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-aurora-teal)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    )
}

// ============================================
// TABLE OF CONTENTS (Phase 212)
// ============================================
interface TOCHeading {
    id: string
    text: string
    level: number
}

interface TableOfContentsProps {
    containerSelector?: string
}

export function TableOfContents({ containerSelector = 'article' }: TableOfContentsProps) {
    const [headings, setHeadings] = useState<TOCHeading[]>([])
    const [activeId, setActiveId] = useState<string>('')
    const [isExpanded, setIsExpanded] = useState(true)

    useEffect(() => {
        const container = document.querySelector(containerSelector)
        if (!container) return

        const headingElements = container.querySelectorAll('h2, h3, h4')
        const items: TOCHeading[] = []

        headingElements.forEach((heading, index) => {
            const id = heading.id || `heading-${index}`
            if (!heading.id) heading.id = id

            items.push({
                id,
                text: heading.textContent || '',
                level: parseInt(heading.tagName.charAt(1))
            })
        })

        setHeadings(items)
    }, [containerSelector])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: '-100px 0px -80% 0px' }
        )

        headings.forEach(({ id }) => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [headings])

    if (headings.length === 0) return null

    return (
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-[var(--color-background)]/50 transition-colors"
            >
                <div className="flex items-center gap-2">
                    <List className="w-5 h-5 text-[var(--color-gold)]" />
                    <span className="font-medium text-white">Table of Contents</span>
                </div>
                {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-[var(--color-muted)]" />
                ) : (
                    <ChevronDown className="w-4 h-4 text-[var(--color-muted)]" />
                )}
            </button>

            <AnimatePresence>
                {isExpanded && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-[var(--color-border)]"
                    >
                        <ul className="p-4 space-y-1">
                            {headings.map(heading => (
                                <li
                                    key={heading.id}
                                    style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
                                >
                                    <a
                                        href={`#${heading.id}`}
                                        className={`block py-1.5 text-sm transition-colors ${activeId === heading.id
                                            ? 'text-[var(--color-gold)] font-medium'
                                            : 'text-[var(--color-muted)] hover:text-white'
                                            }`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            document.getElementById(heading.id)?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start'
                                            })
                                        }}
                                    >
                                        {heading.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    )
}

// ============================================
// ARTICLE BOOKMARKING (Phase 213)
// ============================================
const BOOKMARKS_KEY = 'zerog_bookmarked_articles'

interface BookmarkButtonProps {
    articleId: string
    articleTitle: string
    articlePath: string
}

export function BookmarkButton({ articleId, articleTitle, articlePath }: BookmarkButtonProps) {
    const [isBookmarked, setIsBookmarked] = useState(false)

    useEffect(() => {
        const bookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || '[]')
        setIsBookmarked(bookmarks.some((b: { id: string }) => b.id === articleId))
    }, [articleId])

    const toggleBookmark = () => {
        const bookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || '[]')

        if (isBookmarked) {
            const updated = bookmarks.filter((b: { id: string }) => b.id !== articleId)
            localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated))
            setIsBookmarked(false)
        } else {
            bookmarks.push({
                id: articleId,
                title: articleTitle,
                path: articlePath,
                savedAt: new Date().toISOString()
            })
            localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks))
            setIsBookmarked(true)
        }
    }

    return (
        <button
            onClick={toggleBookmark}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${isBookmarked
                ? 'bg-[var(--color-gold)]/10 border-[var(--color-gold)]/30 text-[var(--color-gold)]'
                : 'bg-[var(--color-card)] border-[var(--color-border)] text-[var(--color-muted)] hover:text-white hover:border-white/30'
                }`}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark this article'}
        >
            {isBookmarked ? (
                <Bookmark className="w-4 h-4 fill-current" />
            ) : (
                <BookmarkPlus className="w-4 h-4" />
            )}
            <span className="text-sm">{isBookmarked ? 'Saved' : 'Save'}</span>
        </button>
    )
}

// ============================================
// BOOKMARKED ARTICLES LIST
// ============================================
interface SavedArticle {
    id: string
    title: string
    path: string
    savedAt: string
}

export function BookmarkedArticles() {
    const [bookmarks, setBookmarks] = useState<SavedArticle[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || '[]')
        setBookmarks(saved)
    }, [])

    const removeBookmark = (id: string) => {
        const updated = bookmarks.filter(b => b.id !== id)
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated))
        setBookmarks(updated)
    }

    if (bookmarks.length === 0) {
        return (
            <div className="text-center py-8 text-[var(--color-muted)]">
                <Bookmark className="w-8 h-8 mx-auto mb-3 opacity-50" />
                <p>No saved articles yet</p>
            </div>
        )
    }

    return (
        <div className="space-y-3">
            {bookmarks.map(article => (
                <div
                    key={article.id}
                    className="flex items-center justify-between p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl"
                >
                    <Link
                        to={article.path}
                        className="flex-1 text-white hover:text-[var(--color-gold)] transition-colors"
                    >
                        {article.title}
                    </Link>
                    <button
                        onClick={() => removeBookmark(article.id)}
                        className="ml-4 text-[var(--color-subtle)] hover:text-[var(--color-error)] transition-colors"
                        aria-label="Remove bookmark"
                    >
                        <Bookmark className="w-4 h-4 fill-current" />
                    </button>
                </div>
            ))}
        </div>
    )
}

// ============================================
// SOCIAL SHARING BUTTONS (Phase 217)
// ============================================
interface ArticleShareProps {
    url: string
    title: string
    summary?: string
}

export function ArticleShare({ url, title, summary }: ArticleShareProps) {
    const [copied, setCopied] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const shareData = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(summary || '')}%0A%0A${encodeURIComponent(url)}`
    }

    const copyLink = async () => {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg text-[var(--color-muted)] hover:text-white hover:border-white/30 transition-all"
            >
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Share</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 top-full mt-2 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl shadow-xl z-10"
                    >
                        <div className="flex gap-2">
                            <a
                                href={shareData.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-[var(--color-background)] flex items-center justify-center text-[var(--color-muted)] hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href={shareData.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-[var(--color-background)] flex items-center justify-center text-[var(--color-muted)] hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href={shareData.email}
                                className="w-10 h-10 rounded-lg bg-[var(--color-background)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                            <button
                                onClick={copyLink}
                                className="w-10 h-10 rounded-lg bg-[var(--color-background)] flex items-center justify-center text-[var(--color-muted)] hover:text-white hover:bg-white/10 transition-colors"
                            >
                                {copied ? <Check className="w-5 h-5 text-[var(--color-success)]" /> : <Link2 className="w-5 h-5" />}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// ============================================
// RELATED ARTICLES (Phase 219)
// ============================================
interface RelatedArticle {
    id: string
    title: string
    category: string
    readTime: number
    path: string
}

interface RelatedArticlesProps {
    articles: RelatedArticle[]
    title?: string
}

export function RelatedArticles({ articles, title = 'Related Articles' }: RelatedArticlesProps) {
    if (articles.length === 0) return null

    return (
        <div className="border-t border-[var(--color-border)] pt-8 mt-12">
            <h3 className="text-xl font-semibold text-white mb-6">{title}</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles.map((article, index) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link
                            to={article.path}
                            className="block p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-gold)]/30 transition-all group"
                        >
                            <span className="text-xs text-[var(--color-gold)] uppercase tracking-wider">
                                {article.category}
                            </span>
                            <h4 className="text-white font-medium mt-2 group-hover:text-[var(--color-gold)] transition-colors line-clamp-2">
                                {article.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-3 text-xs text-[var(--color-subtle)]">
                                <Clock className="w-3 h-3" />
                                <span>{article.readTime} min read</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// ============================================
// ARTICLE SERIES NAVIGATION (Phase 214)
// ============================================
interface SeriesArticle {
    id: string
    title: string
    path: string
    isCurrent: boolean
    isCompleted: boolean
}

interface ArticleSeriesProps {
    seriesTitle: string
    articles: SeriesArticle[]
    currentIndex: number
}

export function ArticleSeries({ seriesTitle, articles, currentIndex }: ArticleSeriesProps) {
    return (
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-gold)]/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-[var(--color-gold)]">{currentIndex + 1}/{articles.length}</span>
                </div>
                <div>
                    <p className="text-xs text-[var(--color-subtle)] uppercase tracking-wider">Part of Series</p>
                    <p className="text-white font-medium">{seriesTitle}</p>
                </div>
            </div>

            <div className="space-y-2">
                {articles.map((article, index) => (
                    <Link
                        key={article.id}
                        to={article.path}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all ${article.isCurrent
                            ? 'bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30'
                            : 'hover:bg-[var(--color-background)]'
                            }`}
                    >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${article.isCompleted
                            ? 'bg-[var(--color-success)] text-white'
                            : article.isCurrent
                                ? 'bg-[var(--color-gold)] text-[#050505]'
                                : 'bg-[var(--color-border)] text-[var(--color-subtle)]'
                            }`}>
                            {article.isCompleted ? <Check className="w-3 h-3" /> : index + 1}
                        </div>
                        <span className={`text-sm ${article.isCurrent ? 'text-[var(--color-gold)] font-medium' : 'text-[var(--color-muted)]'
                            }`}>
                            {article.title}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
