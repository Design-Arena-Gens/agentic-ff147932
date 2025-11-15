'use client'
import clsx from 'clsx'
import Link from 'next/link'

type Props = {
  as?: 'button' | 'a' | 'link'
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
}

export default function Button({ as = 'button', href, children, className, onClick, variant = 'primary' }: Props) {
  const base = 'inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand/40'
  const variants = {
    primary: 'bg-brand text-white hover:bg-brand-dark',
    secondary: 'bg-white text-black hover:bg-neutral-200',
    ghost: 'bg-transparent text-white hover:bg-white/10'
  }
  const classes = clsx(base, variants[variant], className)

  if (as === 'a' && href) return <a href={href} className={classes}>{children}</a>
  if (as === 'link' && href) return <Link href={href} className={classes}>{children}</Link>
  return <button type="button" className={classes} onClick={onClick}>{children}</button>
}
