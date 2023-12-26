import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-amber-500 font-semibold text-slate-900 hover:bg-amber-700 active:bg-amber-800 active:text-slate-100/70 dark:bg-amber-500 dark:hover:bg-amber-600 dark:active:bg-amber-800 dark:active:text-slate-100/70',
  secondary:
    'bg-slate-50 font-medium text-slate-900 hover:bg-slate-100 active:bg-slate-100 active:text-slate-900/60 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:active:bg-slate-800/50 dark:active:text-slate-50/70',
}

export function Button({ variant = 'primary', className, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
