import { useState, useEffect } from 'react'

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
            setProgress(scrollProgress)
        }

        window.addEventListener('scroll', updateProgress, { passive: true })
        return () => window.removeEventListener('scroll', updateProgress)
    }, [])

    return (
        <div
            className="scroll-progress"
            style={{ width: `${progress}%` }}
            aria-hidden="true"
        />
    )
}
