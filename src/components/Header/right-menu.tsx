'use client'

import { MenuButton, Menu, MenuItem, MenuItems, Dialog, DialogPanel } from '@headlessui/react'
import { WMenu, WMenuItem } from '../Menu'
import Link from 'next/link'
import React, { useState } from 'react'

const MenuList = [
  {
    name: '产品',
    children: [
      {
        name: 'HCM',
        href: '/hcm'
      },
      {
        name: '成长型企业',
        href: '/enterprise'
      },
      {
        name: '数据服务',
        href: '/database'
      }
    ]
  },
  {
    name: '关于 WM',
    href: '/about'
  }
]

export default function RightMenu() {

  const [open, setOpen] = useState(false)

  return <>
    <section className='transition hidden md:block'>
      <Menu as="div" className="relative">
        <MenuButton className="hover:text-white">产品</MenuButton>
        <MenuItems
          transition
          className="absolute right-1/2 translate-x-1/2 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <Link className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none' href='hcm'>HCM</Link>
            </MenuItem>
            <MenuItem>
              <Link className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none' href='enterprise'>成长型企业</Link>
            </MenuItem>
            <MenuItem>
              <Link className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none' href='database'>数据服务</Link>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </section>
    <section className="transition hidden md:block hover:text-white after:content-[''] after:h-[20px] after:top-[-1px] after:bg-[#efefef] after:w-[1px] after:absolute after:right-0 relative px-4">
      <Link href='/about'>关于 WM</Link>
    </section>
    <Link target='_blank' className='px-4 hover:text-white hidden md:block' href='https://user.workmins.com/login'>登录</Link>
    <div className={`wm-header-menu-icon-wrapper md:hidden ${open ? 'open' : ''}`} onClick={() => setOpen(true)}>
      <div className='wm-header-menu-icon-item'></div>
      <div className='wm-header-menu-icon-item'></div>
      <div className='wm-header-menu-icon-item'></div>
    </div>

    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed top-[64px] bottom-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-sm shadow-[0_0_50px_rgba(0,0,0,0.2)] transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              {/* <TransitionChild>
                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
              </TransitionChild> */}
              <div className="flex h-full flex-col overflow-y-scroll bg-[#efefef] py-1 shadow-xl">
                <WMenu>
                  {
                    MenuList.map((item, index) => (
                      <WMenuItem key={item.name} item={item} />
                    ))
                  }
                </WMenu>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  </>
}