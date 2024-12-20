import Link from 'next/link'
import React from 'react'
import RightMenu from './right-menu'
export default function Header() {

  return (
    <header className='wm-header'>
      <nav className='wm-header-nav'>
        <li className='logo text-white' title='wm'>
          <Link href='/'>Wm</Link>
        </li>
        <li className="wm-header-nav-right  flex text-[#c6c6c6]">
          <RightMenu />
        </li>
      </nav>
    </header>
  )
}
