import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
    children: ReactNode
    variant?: ButtonVariant
    size?: ButtonSize
    href?: string
    to?: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    className?: string
    icon?: ReactNode
    iconPosition?: 'left' | 'right'
}

const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    to,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    icon,
    iconPosition = 'right',
}: ButtonProps) {
    const baseClass = `btn btn-${variant} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

    const content = (
        <>
            {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
        </>
    )

    // External link
    if (href) {
        return (
            <a
                href={href}
                className={baseClass}
                target="_blank"
                rel="noopener noreferrer"
            >
                {content}
            </a>
        )
    }

    // Internal route
    if (to) {
        return (
            <Link to={to} className={baseClass}>
                {content}
            </Link>
        )
    }

    // Regular button
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={baseClass}
        >
            {content}
        </button>
    )
}
