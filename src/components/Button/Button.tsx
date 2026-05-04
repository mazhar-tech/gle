import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary'
  fullWidth?: boolean
  iconEnd?: ReactNode
}

export function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  iconEnd,
  className = '',
  type = 'button',
  ...rest
}: ButtonProps) {
  const variantClass =
    variant === 'primary' ? 'button button--primary' : 'button'
  const classes = [variantClass, fullWidth && 'button--full-width', className]
    .filter(Boolean)
    .join(' ')
  return (
    <button type={type} className={classes} {...rest}>
      <span className="button__label">{children}</span>
      {iconEnd ? <span className="button__icon-end">{iconEnd}</span> : null}
    </button>
  )
}
