'use client'

import classNames from "classnames"
import Link from "next/link"
import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import styles from './index.module.css'

export const WMenu = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles['wm-menu']}>
    {children}
  </div>
}

export const WMenuItem = ({ item }: { item: { name: string, href?: string, children?: { name: string, href: string }[] } }) => {
  const [open, setOpen] = useState(false)

  return <div className={styles['wm-menu-item']}>
    <div className={styles['wm-menu-item-text']} onClick={() => setOpen(!open)}>
      {item.href ? <Link href={item.href}>{item.name}</Link> : <>{item.name}<ChevronDownIcon aria-hidden="true" className={classNames('size-4 -mr-1 transition-all duration-500', open ? 'rotate-180' : '')} /></>}
    </div>
    {
      item.children ? <div onAnimationEnd={() => console.log('end')} className={classNames(styles['wm-submenu'], open ? '' : styles['wm-submenu-close'])}>
        {
          item.children?.map((child, index) => (
            <div key={index} className={styles['wm-menu-item']}>
              <Link className={styles['wm-menu-item-text']} href={child.href}>{child.name}</Link>
            </div>
          ))
        }
      </div> : null
    }
  </div>
}
