import { ReactNode } from 'react'
import clsx from 'clsx'

export default function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={clsx('container px-4', className)}>{children}</div>
}
