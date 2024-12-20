import React, { ReactNode } from 'react'

export default function PageLayout({children}: {children: ReactNode}) {
  return (
    <main className='flex-1'>{children}</main>
  )
}
