import { Button } from '@headlessui/react'
import Link from 'next/link'
import React from 'react'

/**
 * Footer组件
 * 包含两个主要部分:
 * 1. 预约部分 - 展示标语和预约按钮
 * 2. 底部信息部分 - 黑色背景区域
 */

const FooterLinkList = [
  {
    title: '快速链接',
    links: [
      {
        href: '/hcm',
        title: 'HCM'
      }, {
        href: '/erp',
        title: 'ERP'
      }, {
        href: '/database',
        title: 'Workmins Database'
      }, {
        href: '/workmins-os',
        title: 'Workmins OS'
      }
    ]
  }, {
    title: '关于',
    links: [
      {
        href: '/',
        title: '公司信息'
      }, {
        href: '/',
        title: '招贤纳士'
      }, {
        href: '/',
        title: '新闻'
      }
    ]
  }, {
    title: '网站信息',
    links: [
      {
        href: '/',
        title: '隐私'
      }, {
        href: '/',
        title: '使用条款'
      }, {
        href: '/',
        title: '版权'
      }, {
        href: '/',
        title: '商标'
      }, {
        href: '/',
        title: 'Cookie 说明'
      }
    ]
  }, {
    title: '联系我们',
    links: [
      {
        href: '/',
        title: 'company@workmins.com'
      }
    ]
  }
]

export default function Footer() {
  return (
    <footer className='wm-footer'>
      <section className='bg-[#3a3a3a] wm-footer-appointment'>
        <section className='max-w-[1440px] mx-auto'>
          <div className="text-center py-6 text-2xl">
            <p className="text-white">将更高的效率赋予每个组织</p>
            <Button className="text-white mt-8 w-[240px] h-[80px] bg-[#0070ac] rounded-sm ">立即预约</Button>
          </div>
        </section>
      </section>
      <section className='bg-black text-[#c6c6c6] px-8  pt-[20px] pb-[40px]'>
        <section className='max-w-[1440px] mx-auto wm-footer-link border-b border-[#efefef]'>
          <div className="flex justify-between flex-wrap">
            {FooterLinkList.map(item => (
              <section className='basis-1/2 md:basis-1/4' key={item.title}>
                <p className='text-[#aaa] text-[16px] leading-[36px] pb-[20px]'>{item.title}</p>
                <ul>
                  {item.links.map(link => (
                    <li key={link.title} className='pb-[14px] text-sm'>
                      {/* <Link href={link.href}>{link.title}</Link> */}
                      <span className='hover:text-white transition cursor-pointer' key={link.title}>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
        <section className='max-w-[1440px] mx-auto wm-footer-copyright'>
          <p className='text-white text-center mt-6'><Link href='https://beian.miit.gov.cn/#/Integrated/index'>浙ICP备2022029713号</Link> Copyright © 2024 WorkMins. All rights reserved.</p>
        </section>
      </section>
    </footer>
  )
}
